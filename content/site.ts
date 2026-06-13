export type MarketStatus = "Primary market" | "Developing market" | "Strategic expansion";
export type Market = {
  slug: string; name: string; status: MarketStatus; region: string;
  summary: string; industries: string[]; roles: string[];
};
export type Industry = {
  slug: string; name: string; summary: string; roles: string[];
  categories: string[]; screening: string;
};

export const contact = {
  company: "Topway Private Limited",
  address: ["No. 31 1/1, Carmel Road", "Kollupitiya, Colombo 03", "00300, Sri Lanka"],
  licenceAddress: "No. 95 1/1, S. Mahinda Himi Mawatha, Maradana, Colombo 10",
  mobile: "+94772922228", mobileDisplay: "(+94) 77 292 2228",
  office: ["(+94) 11 49 71 191", "(+94) 11 59 31 272"],
  email: "info@topway.lk", website: "www.topway.lk",
};

export const markets: Market[] = [
  { slug:"saudi-arabia", name:"Saudi Arabia", status:"Primary market", region:"Middle East", summary:"A priority market for employer enquiries across domestic, general, technical and operational workforce categories.", industries:["Domestic households","Construction","Hospitality","Facilities management"], roles:["Domestic helpers","Drivers","Technicians","Hospitality staff"] },
  { slug:"qatar", name:"Qatar", status:"Primary market", region:"Middle East", summary:"A priority market for employer enquiries across domestic, hospitality, facilities and operational recruitment.", industries:["Domestic households","Hospitality","Facilities management","Logistics"], roles:["Caregivers","Household staff","Cleaners","Operational staff"] },
  { slug:"uae", name:"United Arab Emirates", status:"Developing market", region:"Middle East", summary:"A developing market for structured employer-led recruitment opportunities.", industries:["Hospitality","Facilities management","Retail"], roles:["Hospitality staff","Technicians","Sales professionals"] },
  { slug:"kuwait", name:"Kuwait", status:"Developing market", region:"Middle East", summary:"A developing market for employer-sponsored workforce requirements.", industries:["Domestic households","Construction","Facilities management"], roles:["Domestic workers","Technical staff","General workers"] },
  { slug:"oman", name:"Oman", status:"Developing market", region:"Middle East", summary:"A developing market supported through confirmed employer requirements.", industries:["Construction","Hospitality","Maintenance"], roles:["Technicians","Hospitality staff","Maintenance workers"] },
  { slug:"bahrain", name:"Bahrain", status:"Developing market", region:"Middle East", summary:"A developing market for selected employer-sponsored roles.", industries:["Hospitality","Retail","Facilities management"], roles:["Hospitality staff","Retail staff","Cleaners"] },
  { slug:"romania", name:"Romania", status:"Strategic expansion", region:"Europe", summary:"A strategic expansion market for future approved recruitment opportunities.", industries:["Manufacturing","Construction","Logistics"], roles:["Production workers","Construction workers","Warehouse staff"] },
  { slug:"serbia", name:"Serbia", status:"Strategic expansion", region:"Europe", summary:"A strategic expansion market subject to approved job orders and regulatory requirements.", industries:["Manufacturing","Construction","Food production"], roles:["Factory workers","Skilled trades","Food production staff"] },
  { slug:"moldova", name:"Moldova", status:"Strategic expansion", region:"Europe", summary:"A future recruitment opportunity subject to employer demand and approvals.", industries:["Manufacturing","Agriculture","Logistics"], roles:["General workers","Production workers","Warehouse staff"] },
  { slug:"turkiye", name:"Türkiye", status:"Strategic expansion", region:"Europe & Asia", summary:"A strategic expansion market for future employer-sponsored opportunities.", industries:["Hospitality","Manufacturing","Construction"], roles:["Hospitality staff","Technicians","Production workers"] },
  ...["Croatia","Poland","Hungary","Bulgaria","Cyprus","Malta","Greece"].map(name => ({
    slug:name.toLowerCase(), name, status:"Strategic expansion" as const, region:"Europe",
    summary:"A future recruitment opportunity subject to confirmed employer demand and regulatory approval.",
    industries:["Hospitality","Manufacturing","Logistics"], roles:["Skilled workers","Semi-skilled workers","Operational staff"]
  }))
];

export const industries: Industry[] = [
  ["construction","Construction","Source dependable trade, technical and site-support workers for employer-led projects.",["Electricians","Plumbers","Welders","Helpers"],["Skilled","Semi-skilled"],"Experience review, trade assessment where required, document validation and employer interviews."],
  ["hospitality","Hospitality","Recruit people for hotels, restaurants, kitchens and guest-service operations.",["Chefs","Kitchen staff","Housekeeping staff","Customer service staff"],["Skilled","Semi-skilled"],"Role-fit interviews, experience checks and practical assessment where required."],
  ["manufacturing","Manufacturing","Support production, factory and industrial workforce requirements.",["Machine operators","Production workers","Maintenance technicians","Factory workers"],["Skilled","Semi-skilled","General"],"Experience and document checks, role-fit screening and employer selection."],
  ["logistics","Logistics & Warehousing","Build operational teams for warehousing, delivery, transport and logistics.",["Warehouse staff","Drivers","Delivery workers","Supervisors"],["Skilled","Semi-skilled","General"],"Licence and experience review, document checks and employer interviews."],
  ["healthcare-support","Healthcare Support","Source caregivers and healthcare support workers for approved roles.",["Caregivers","Care assistants","Healthcare support workers"],["Skilled","Semi-skilled"],"Experience review, credential checks where applicable, interviews and medical coordination."],
  ["facilities-management","Facilities Management","Recruit technical, cleaning, security and maintenance teams.",["Cleaners","Security personnel","Maintenance workers","Supervisors"],["Skilled","Semi-skilled","General"],"Role-fit screening, experience review and structured shortlisting."],
  ["domestic-households","Domestic Households","Responsible recruitment for household and family support requirements.",["Domestic helpers","Nannies","Caregivers","Household cooks"],["General and domestic"],"Identity and document checks, experience review, interviews, orientation and medical coordination."],
  ["engineering","Engineering & Maintenance","Source technical professionals and maintenance specialists.",["Engineers","Technicians","Mechanics","Heavy-equipment operators"],["Skilled"],"Qualification and experience review, technical assessment where required and employer interviews."],
  ["retail-administration","Retail & Administration","Recruit customer-facing, sales and administrative professionals.",["Sales professionals","Customer service staff","Administrative employees","Supervisors"],["Skilled","Semi-skilled"],"Communication assessment, experience checks and employer interviews."]
].map(([slug,name,summary,roles,categories,screening]) => ({slug,name,summary,roles,categories,screening} as Industry));

export const services = [
  ["Candidate sourcing","Targeted sourcing through registered applicants, referrals, digital campaigns, local outreach and industry networks."],
  ["Screening & shortlisting","Structured initial screening aligned with the employer's roles, experience criteria and workforce plan."],
  ["Skills & experience assessment","Role-appropriate assessment and experience review before employer selection."],
  ["Background & document validation","Coordination of identity, experience and supporting document checks."],
  ["Employer interview coordination","Organised interview scheduling, candidate communication and selection support."],
  ["Medical coordination","Medical processing coordination for selected candidates where required."],
  ["Training & preparation","Candidate orientation, role preparation and pre-departure communication."],
  ["Visa, travel & mobilisation","Administrative, visa, flight and mobilisation coordination for selected candidates."]
];

export const process = ["Employer consultation","Requirement confirmation","Recruitment campaign planning","Candidate sourcing","Initial screening","Document verification","Skills or experience assessment","Candidate interviews","Employer interviews","Final selection","Job offer confirmation","Medical processing","Administrative processing","Visa coordination","Travel and mobilisation","Post-selection communication"];

export const nav = [
  ["About","/about"],["Services","/recruitment-services"],["Industries","/industries"],
  ["Global Markets","/global-markets"],["Process","/recruitment-process"],["Employers","/employers"],
  ["Candidates","/candidates"],["Compliance","/licence-compliance"],["Contact","/contact"]
];

export const availability = "Market availability, recruitment categories and employer demand may change. Contact Topway for current opportunities, active job orders and eligibility requirements.";
