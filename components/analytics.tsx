"use client";
import { useEffect } from "react";
declare global { interface Window { dataLayer?: Record<string, unknown>[] } }
export function AnalyticsEvents(){
 useEffect(()=>{
  const push=(event:string)=>window.dataLayer?.push({event});
  const click=(e:MouseEvent)=>{const link=(e.target as HTMLElement).closest("a");const href=link?.getAttribute("href")||"";if(href.startsWith("tel:"))push("phone_click");if(href.startsWith("mailto:"))push("email_click");if(href.includes("wa.me"))push("whatsapp_click")};
  const conversion=(e:Event)=>push((e as CustomEvent).detail.event);
  document.addEventListener("click",click);window.addEventListener("topway-conversion",conversion);
  return()=>{document.removeEventListener("click",click);window.removeEventListener("topway-conversion",conversion)}
 },[]);
 return null;
}
