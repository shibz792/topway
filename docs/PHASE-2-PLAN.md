# Phase 2: Journey, Languages and Verified Jobs

## Research Findings
- The official SLBFE agency job-order page is server-rendered HTML and currently exposes 52 registered job-order rows for agency No. 2238.
- The source can be parsed server-side and cached, but must retain an external-source label, direct source link and graceful unavailable state.
- Next.js App Router supports locale-aware rendering patterns; this phase uses persistent first-party language selection without a third-party translation widget.

## Revised Journey
1. Employer-first hero.
2. Compact licence and capability proof.
3. Clear company/candidate route selection.
4. Recruitment categories.
5. Employer outcomes.
6. Five-step process.
7. Live verified-job registry proof.
8. Markets and compliance.
9. Employer conversion CTA.

## Navigation Language
- Hire Workers
- Recruitment Solutions
- Verified Jobs
- Candidate Centre
- Company
- Contact

## Job Data Boundaries
- `Official SLBFE Job Registry`: fetched and cached from SLBFE.
- `Topway Opportunities`: manually created typed local listings.
- Never merge or visually confuse the two sources.

## Localization
- Persistent English, Sinhala and Tamil selector.
- Navigation, primary journeys, homepage conversion copy and job-registry interface localized first.
- Preserve original official job-order terms and names where no verified translation exists.
