import type { Metadata } from "next";
import { Instrument_Sans, Inter, Noto_Sans_Sinhala, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { Footer, JsonLd } from "@/components/ui";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language-provider";
import { AnalyticsEvents } from "@/components/analytics";
import { contact } from "@/content/site";
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://www.topway.lk"),title:{default:"Topway | Overseas Recruitment Agency Sri Lanka",template:"%s | Topway"},description:"Topway connects international employers with carefully sourced skilled, semi-skilled, general and domestic workers from Sri Lanka.",alternates:{canonical:"/"},openGraph:{title:"Topway | Recruit Workers from Sri Lanka",description:"Structured overseas recruitment for international employers.",url:"/",siteName:"Topway Private Limited",type:"website"},twitter:{card:"summary_large_image",title:"Topway | Recruit Workers from Sri Lanka",description:"Structured overseas recruitment for international employers."},icons:{icon:"/assets/favicon.png"}};
const display=Instrument_Sans({subsets:["latin"],variable:"--font-display",display:"swap"});
const body=Inter({subsets:["latin"],variable:"--font-body",display:"swap"});
const sinhala=Noto_Sans_Sinhala({subsets:["sinhala"],variable:"--font-sinhala",display:"swap"});
const tamil=Noto_Sans_Tamil({subsets:["tamil"],variable:"--font-tamil",display:"swap"});
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${display.variable} ${body.variable} ${sinhala.variable} ${tamil.variable}`}><body><LanguageProvider><JsonLd data={{"@context":"https://schema.org","@type":"EmploymentAgency",name:contact.company,url:"https://www.topway.lk",email:contact.email,telephone:contact.mobile,address:{"@type":"PostalAddress",streetAddress:contact.address[0],addressLocality:"Colombo",addressCountry:"LK"}}}/><AnalyticsEvents/><Header/><main>{children}</main><Footer/></LanguageProvider></body></html>}
