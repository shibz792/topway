import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Check, ClipboardCheck, FileCheck2, HeartHandshake, Plane, Search, SearchCheck, ShieldCheck, UserCheck, UsersRound } from "lucide-react";
import { Button, Disclaimer, SectionHead } from "@/components/ui";
import { IndustryCard, MarketCard } from "@/components/cards";
import { EnquiryForm } from "@/components/forms";
import { industries, markets, services } from "@/content/site";

export default function Home(){
 return <>
  <section className="home-hero">
   <div className="container home-hero-grid">
    <div className="home-hero-copy">
     <span className="hero-label"><BadgeCheck size={15}/> Sri Lanka Foreign Employment Agency Licence No. 2238</span>
     <h1>Recruit dependable people from Sri Lanka.</h1>
     <p>Topway helps international employers source, assess and mobilise skilled, semi-skilled, general and domestic workers through one structured recruitment process.</p>
     <div className="actions"><Button href="/employers">Request Workers</Button><Button href="/recruitment-process" variant="secondary">See How It Works</Button></div>
     <div className="hero-assurance"><span><Check/>Employer-led requirements</span><span><Check/>Responsible candidate care</span><span><Check/>Mobilisation coordination</span></div>
    </div>
    <div className="recruitment-board" aria-label="Animated recruitment workflow">
     <div className="board-head"><div><span>Workforce requirement</span><strong>Technical & operational team</strong></div><span className="board-status">In progress</span></div>
     <div className="board-metric"><strong>40</strong><span>Workers requested</span><div className="metric-bars"><i/><i/><i/><i/><i/></div></div>
     <div className="candidate-flow">
      <div className="source-pool"><span>Candidate sources</span>{["Database","Referrals","Outreach"].map(x=><i key={x}>{x}</i>)}</div>
      <div className="flow-arrow"><span/><ArrowRight/></div>
      <div className="shortlist"><span>Screened shortlist</span>{[1,2,3].map(x=><i key={x}><UserCheck size={15}/><b/><Check size={13}/></i>)}</div>
     </div>
     <div className="board-stages">{[["Sourced","124"],["Screened","68"],["Shortlisted","40"],["Selected","—"]].map(([a,b],i)=><div className={i<3?"done":""} key={a}><span>{a}</span><strong>{b}</strong><i/></div>)}</div>
    </div>
   </div>
  </section>

  <section className="assurance-strip"><div className="container">{[["Licensed operation",ShieldCheck],["Skilled to domestic recruitment",UsersRound],["Screening and verification",ClipboardCheck],["Documentation and mobilisation",Plane]].map(([t,I]:any)=><div key={t}><I/><span>{t}</span></div>)}</div></section>

  <section className="section intro-section"><div className="container intro-grid"><div><span className="eyebrow">Built for clear decisions</span><h2 className="title">One recruitment partner for the full journey.</h2></div><div><p className="lead">Employers need reliable people and a process they can follow. Candidates need legitimate opportunities and clear communication. Topway brings both sides together without losing sight of either.</p><div className="journey-links"><Link href="/employers"><BriefcaseBusiness/><span><strong>For employers</strong>Submit a workforce requirement</span><ArrowRight/></Link><Link href="/candidates"><UsersRound/><span><strong>For candidates</strong>Register your interest safely</span><ArrowRight/></Link></div></div></div></section>

  <section className="section soft-section"><div className="container"><SectionHead eyebrow="Workforce coverage" title="Recruitment for every level of your operation." copy="Each category is sourced and assessed against the employer’s actual role requirements."/><div className="workforce-grid">{[["Skilled professionals","Engineers, technicians, tradespeople, hospitality professionals and supervisors.",SearchCheck,"01"],["Semi-skilled teams","Production, warehouse, hotel, cleaning, security and operational support staff.",UsersRound,"02"],["General & domestic","Domestic helpers, caregivers, cooks, drivers and household support workers.",HeartHandshake,"03"]].map(([t,c,I,n]:any)=><article key={t}><span>{n}</span><I/><h3>{t}</h3><p>{c}</p><Link href="/recruitment-services">Explore roles <ArrowRight/></Link></article>)}</div></div></section>

  <section className="section process-section"><div className="container"><div className="process-heading"><div><span className="eyebrow">How Topway recruits</span><h2 className="title">A visible process from requirement to deployment.</h2></div><p className="lead">The animation follows the real recruitment workflow: source broadly, screen carefully, let the employer select, then coordinate mobilisation.</p></div><div className="recruitment-line">{[["01","Define",BriefcaseBusiness,"Confirm roles, criteria and numbers"],["02","Source",Search,"Reach suitable Sri Lankan candidates"],["03","Screen",ClipboardCheck,"Review experience and documents"],["04","Select",UserCheck,"Coordinate employer interviews"],["05","Mobilise",Plane,"Support administration and travel"]].map(([n,t,I,c]:any)=><article key={n}><div className="step-node"><I/></div><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div><div className="process-action"><Button href="/recruitment-process" variant="secondary">View the Complete Process</Button></div></div></section>

  <section className="section markets-section"><div className="container"><SectionHead eyebrow="Global markets" title="International recruitment, presented responsibly." copy="Saudi Arabia and Qatar are priority markets. Other countries are clearly identified as developing or strategic expansion markets." action={<Button href="/global-markets" variant="secondary">View All Markets</Button>}/><div className="market-feature-grid">{markets.slice(0,4).map(x=><MarketCard key={x.slug} market={x}/>)}</div><Disclaimer/></div></section>

  <section className="section industry-section"><div className="container"><SectionHead eyebrow="Industries served" title="Recruitment shaped around the work." copy="We translate the practical demands of each industry into focused sourcing and screening." action={<Button href="/industries" variant="secondary">Explore Industries</Button>}/><div className="grid grid-3 industry-grid-v2">{industries.slice(0,6).map(x=><IndustryCard key={x.slug} industry={x}/>)}</div></div></section>

  <section className="section compliance-section"><div className="container compliance-grid"><div className="compliance-document"><Image src="/assets/license.jpeg" width={1600} height={1137} alt="Topway Foreign Employment Agency Licence No. 2238"/><div className="document-scan"/><span><FileCheck2/> Licence document</span></div><div><span className="eyebrow">Licence & compliance</span><h2 className="title">Trust that employers and candidates can verify.</h2><p className="lead">Topway operates under Sri Lanka Foreign Employment Agency Licence No. 2238. The supplied licence is displayed clearly and remains available for verification.</p><div className="compliance-facts"><span><strong>2238</strong>Licence number</span><span><strong>11 February 2026</strong>Issue date</span></div><div className="actions"><Button href="/licence-compliance">View Licence & Compliance</Button></div></div></div></section>

  <section className="section enquiry-v2"><div className="container enquiry-v2-grid"><div><span className="eyebrow">Start a recruitment project</span><h2 className="title">Tell us who you need.</h2><p className="lead">Share your positions, worker numbers and target date. Topway will contact you to confirm the scope and next steps.</p><div className="service-mini-list">{services.slice(0,4).map(([t])=><span key={t}><Check size={15}/>{t}</span>)}</div></div><div className="form-shell"><EnquiryForm kind="employer"/></div></div></section>
 </>;
}
