import type { MetadataRoute } from "next";
import { industries, markets } from "@/content/site";
import { siteUrl } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{
 const pages=["","about","recruitment-services","domestic-recruitment","industries","global-markets","recruitment-process","employers","candidates","opportunities","leadership","licence-compliance","contact","privacy-policy","terms"];
 return [...pages.map(x=>({url:`${siteUrl}/${x}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:x===""?1:.7})),...industries.map(x=>({url:`${siteUrl}/industries/${x.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.6})),...markets.map(x=>({url:`${siteUrl}/global-markets/${x.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.6}))];
}
