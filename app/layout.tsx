import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, JsonLd } from "@/components/ui";
import { AnalyticsEvents } from "@/components/analytics";
import { contact } from "@/content/site";
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://www.topway.lk"),title:{default:"Topway | Overseas Recruitment Agency Sri Lanka",template:"%s | Topway"},description:"Topway connects international employers with carefully sourced skilled, semi-skilled, general and domestic workers from Sri Lanka.",icons:{icon:"/assets/favicon.png"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><JsonLd data={{"@context":"https://schema.org","@type":"EmploymentAgency",name:contact.company,url:"https://www.topway.lk",email:contact.email,telephone:contact.mobile,address:{"@type":"PostalAddress",streetAddress:contact.address[0],addressLocality:"Colombo",addressCountry:"LK"}}}/><AnalyticsEvents/><Header/><main>{children}</main><Footer/></body></html>}
