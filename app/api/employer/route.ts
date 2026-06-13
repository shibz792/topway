import { handleForm } from "@/lib/forms";
export async function POST(request:Request){return handleForm(request,"employer")}
