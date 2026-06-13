import { Resend } from "resend";

const requests = new Map<string, { count: number; reset: number }>();
export async function handleForm(request: Request, kind: string) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  const item = requests.get(ip);
  if (item && item.reset > now && item.count >= 5) return Response.json({ error: "Too many requests" }, { status: 429 });
  requests.set(ip, item && item.reset > now ? { ...item, count: item.count + 1 } : { count: 1, reset: now + 60_000 });
  const form = await request.formData();
  if (form.get("website")) return Response.json({ ok: true });
  const entries = [...form.entries()].filter(([, value]) => typeof value === "string" && value.toString().trim());
  const files = [...form.entries()].filter(([, value]) => value instanceof File && value.size > 0) as [string, File][];
  const allowed = new Set(["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","image/jpeg","image/png"]);
  if (files.some(([,file])=>file.size>5_000_000||!allowed.has(file.type))) return Response.json({error:"Unsupported attachment"}, {status:400});
  const email = String(form.get("email") || "");
  if (!email.includes("@")) return Response.json({ error: "Valid email required" }, { status: 400 });
  const clean = (value:string) => value.replace(/[<>&]/g, "");
  const html = `<h2>New ${kind} website enquiry</h2>${entries.map(([key,value])=>`<p><strong>${clean(key)}:</strong> ${clean(String(value))}</p>`).join("")}`;
  if (!process.env.RESEND_API_KEY) {
    console.info(`[Topway form: ${kind}]`, Object.fromEntries(entries));
    return Response.json({ ok: true, delivery: "development" });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const attachments = await Promise.all(files.map(async ([,file])=>({filename:file.name,content:Buffer.from(await file.arrayBuffer())})));
  await resend.emails.send({from:process.env.FORM_FROM_EMAIL||"Topway Website <onboarding@resend.dev>",to:process.env.FORM_TO_EMAIL||"info@topway.lk",replyTo:email,subject:`Topway website: ${kind} enquiry`,html,attachments});
  return Response.json({ ok: true });
}
