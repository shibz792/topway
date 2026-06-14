"use client";
import { useMemo,useState } from "react";
import { Calculator,ExternalLink,Search,ShieldCheck } from "lucide-react";
import type { OfficialJob } from "@/lib/slbfe";
import { parseSalary,type ExchangeRates } from "@/lib/exchange-rates";

const lkr=new Intl.NumberFormat("en-LK",{style:"currency",currency:"LKR",maximumFractionDigits:0});

export function JobRegistry({jobs,exchange}:{jobs:OfficialJob[];exchange:ExchangeRates}){
 const [query,setQuery]=useState(""),[country,setCountry]=useState("All");
 const countries=[...new Set(jobs.map(x=>x.country))];
 const filtered=useMemo(()=>jobs.filter(x=>(country==="All"||x.country===country)&&`${x.title} ${x.country}`.toLowerCase().includes(query.toLowerCase())),[jobs,query,country]);
 return <>{!exchange.error&&<div className="exchange-strip"><Calculator/><div><strong>Approximate Sri Lankan rupee conversions</strong><span>{Object.entries(exchange.rates).map(([code,rate])=>`1 ${code} = ${lkr.format(rate)}`).join(" · ")}</span></div><small>Rate updated {new Date(exchange.updatedAt).toLocaleString("en-LK",{dateStyle:"medium",timeStyle:"short"})} · <a href={exchange.source} target="_blank" rel="noreferrer">Rate source <ExternalLink/></a></small></div>}
 <div className="job-filters"><label><Search/><span className="sr-only">Search jobs</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search job title or country"/></label><select value={country} onChange={e=>setCountry(e.target.value)} aria-label="Filter by country"><option>All</option>{countries.map(x=><option key={x}>{x}</option>)}</select><span>{filtered.length} official job orders</span></div>
 <div className="job-grid">{filtered.map(job=>{const parsed=parseSalary(job.salary);const rate=parsed&&exchange.rates[parsed.code];const converted=parsed&&rate?parsed.amount*rate:null;return <article className="job-card" key={job.id}><div className="job-card-top"><span><ShieldCheck/>SLBFE registered</span><strong>{job.country}</strong></div><h3>{job.title}</h3><div className="job-metrics"><span><small>Available</small><strong>{job.available}</strong></span><span className="salary-metric"><small>Salary</small><strong>{job.salary||"See terms"}</strong>{converted&&<em>≈ {lkr.format(converted)} / month</em>}</span><span><small>Valid until</small><strong>{job.validUntil}</strong></span></div><div className="job-benefits"><span>Food: {job.food}</span><span>Accommodation: {job.accommodation}</span><span>Medical: {job.medical}</span><span>Ticket: {job.ticket}</span></div><a href={job.detailsUrl} target="_blank" rel="noreferrer">View official terms <ExternalLink size={14}/></a></article>})}</div>
 {!filtered.length&&<div className="empty"><h2>No matching official job orders.</h2><p>Try another title or country, or check the official SLBFE source.</p></div>}</>
}
