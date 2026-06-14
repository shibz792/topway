const source="https://open.er-api.com/v6/latest";
const salaryCurrencies={KD:"KWD",QR:"QAR",SR:"SAR",OR:"OMR"} as const;
export type SalaryCurrency=keyof typeof salaryCurrencies;
export type ExchangeRates={rates:Partial<Record<SalaryCurrency,number>>;updatedAt:string;source:string;error?:string};

export function parseSalary(value:string){
 const match=value.trim().match(/^([\d,.]+)\s+(KD|QR|SR|OR)$/i);
 if(!match)return null;
 const amount=Number(match[1].replace(/,/g,""));
 const code=match[2].toUpperCase() as SalaryCurrency;
 return Number.isFinite(amount)?{amount,code,iso:salaryCurrencies[code]}:null;
}

export async function getLkrExchangeRates():Promise<ExchangeRates>{
 try{
  const entries=await Promise.all(Object.entries(salaryCurrencies).map(async([short,iso])=>{
   const response=await fetch(`${source}/${iso}`,{next:{revalidate:21600}});
   if(!response.ok)throw new Error(`Exchange-rate source returned ${response.status}`);
   const data=await response.json() as {result?:string;rates?:{LKR?:number};time_last_update_utc?:string};
   if(data.result!=="success"||!data.rates?.LKR)throw new Error(`No LKR rate for ${iso}`);
   return [short,data.rates.LKR,data.time_last_update_utc] as const;
  }));
  return {rates:Object.fromEntries(entries.map(([short,rate])=>[short,rate])),updatedAt:entries[0]?.[2]||new Date().toISOString(),source};
 }catch(error){return {rates:{},updatedAt:new Date().toISOString(),source,error:error instanceof Error?error.message:"Unable to load exchange rates"}}
}
