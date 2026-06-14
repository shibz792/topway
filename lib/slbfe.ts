import * as cheerio from "cheerio";

export const slbfeSource="https://applications.slbfe.lk/jobbank/jsearchdisplay_an_m.asp?an=2238";
export type OfficialJob={id:string;country:string;title:string;approved:number;registered:number;available:number;salary:string;food:string;accommodation:string;medical:string;ticket:string;fee:string;approvedDate:string;validUntil:string;detailsUrl:string};
const clean=(value:string)=>value.replace(/\s+/g," ").replace(/\u00a0/g," ").trim();
export async function getOfficialJobs():Promise<{jobs:OfficialJob[];updatedAt:string;source:string;error?:string}>{
 try{
  const response=await fetch(slbfeSource,{headers:{"user-agent":"Topway Website Job Registry/1.0"},next:{revalidate:21600}});
  if(!response.ok)throw new Error(`SLBFE returned ${response.status}`);
  const $=cheerio.load(await response.text());let country="";const jobs:OfficialJob[]=[];
  $("#jobTable tr").each((index,row)=>{const item=$(row);if(item.hasClass("country-row")){country=clean(item.text());return}if(!item.hasClass("job-row"))return;const cells=item.find("td").map((_,cell)=>clean($(cell).text())).get();const link=item.find("a[href]").attr("href")||"";if(cells.length<13)return;jobs.push({id:`${country}-${index}-${cells[0]}`.toLowerCase().replace(/[^a-z0-9]+/g,"-"),country,title:cells[0],approved:Number(cells[1])||0,registered:Number(cells[2])||0,available:Number(cells[3])||0,salary:cells[4],food:cells[5],accommodation:cells[6],medical:cells[7],ticket:cells[8],fee:cells[10].split("(")[0].trim(),approvedDate:cells[11],validUntil:cells[12],detailsUrl:link})});
  return {jobs,updatedAt:new Date().toISOString(),source:slbfeSource};
 }catch(error){return {jobs:[],updatedAt:new Date().toISOString(),source:slbfeSource,error:error instanceof Error?error.message:"Unable to load official jobs"}}
}
