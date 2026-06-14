import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MessageCircle, BriefcaseBusiness } from "lucide-react";
import { availability, contact } from "@/content/site";

export function Button({href,children,variant="primary"}:{href:string;children:React.ReactNode;variant?:"primary"|"secondary"|"light"}) {
  return <Link className={`btn btn-${variant}`} href={href}>{children}<ArrowRight size={16}/></Link>
}
export function Footer(){
  return <><footer className="footer"><div className="container"><div className="footer-grid"><div><Image src="/assets/logo-white.png" width={150} height={105} alt="Topway Private Limited"/><p>Sri Lankan talent. Global workforce solutions.</p><p>{contact.address.join(", ")}</p></div><div><h4>Employer Solutions</h4><Link href="/recruitment-services">Recruitment Services</Link><Link href="/industries">Industries</Link><Link href="/global-markets">Countries</Link><Link href="/employers">Request Workers</Link></div><div><h4>Company</h4><Link href="/about">Why Topway</Link><Link href="/leadership">Leadership</Link><Link href="/licence-compliance">Licence & Compliance</Link><Link href="/contact">Contact</Link></div><div><h4>Jobs & Candidates</h4><Link href="/job-registry">Official Job Registry</Link><Link href="/opportunities">Current Opportunities</Link><Link href="/candidates">Candidate Centre</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Topway Private Limited. All rights reserved. Foreign Employment Agency Licence No. 2238.</span><span className="design-credit">Designed by <a href="https://levatahq.com" target="_blank" rel="noopener noreferrer">Levata</a></span></div></div></footer><div className="sticky-actions"><a href={`tel:${contact.mobile}`}><Phone size={18}/><span>Call</span></a><a href={`https://wa.me/${contact.mobile.replace("+","")}`}><MessageCircle size={18}/><span>WhatsApp</span></a><Link href="/employers"><BriefcaseBusiness size={18}/><span>Request Workers</span></Link></div></>
}
export function PageHero({eyebrow,title,copy}:{eyebrow:string;title:string;copy:string}){
  const candidate=eyebrow.includes("Candidate")||eyebrow.includes("Verified Jobs"), company=["About Topway","Leadership","Licence & Compliance","Contact"].includes(eyebrow);
  const primary=candidate?["Register Interest","/candidates"]:company?["Contact Topway","/contact"]:["Request Workers","/employers"];
  return <section className="page-hero"><div className="container page-hero-simple"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>{eyebrow}</div><span className="eyebrow">{eyebrow}</span><h1 className="display">{title}</h1><p className="lead">{copy}</p><div className="page-hero-actions"><Button href={primary[1]}>{primary[0]}</Button><Link href="/contact">Speak with Topway <ArrowRight size={14}/></Link></div></div></section>
}
export function SectionHead({eyebrow,title,copy,action}:{eyebrow:string;title:string;copy?:string;action?:React.ReactNode}){return <div className="section-head"><div><span className="eyebrow">{eyebrow}</span><h2 className="title">{title}</h2>{copy&&<p className="lead" style={{marginTop:18}}>{copy}</p>}</div>{action}</div>}
export function Disclaimer(){return <div className="notice">{availability}</div>}
export function TrustStrip(){return <section className="trust"><div className="container trust-grid">{["Licensed overseas recruitment company","Skilled, semi-skilled & general recruitment","Domestic recruitment specialists","Candidate screening & verification","Documentation & mobilisation support"].map(x=><div className="trust-item" key={x}><Check size={16}/>{x}</div>)}</div></section>}
export function JsonLd({data}:{data:object}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
