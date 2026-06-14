# Site Flow Audit

## Corrected Regression
- `/job-registry` was never deleted, but its direct navigation entry was incorrectly removed.
- Verified Jobs now links directly to `/job-registry` from desktop navigation, mobile navigation and the footer.
- Candidate Centre remains a separate destination.

## Route Purposes
- `/`: employer overview and fastest route to a workforce enquiry.
- `/about`: employer decision hub covering capability, countries, licence and leadership.
- `/employers`: workforce enquiry journey and form.
- `/recruitment-services`: service scope and operating model.
- `/recruitment-process`: employer-controlled decisions, detailed workflow and dependencies.
- `/global-markets`: market discovery with honest status labels.
- `/global-markets/[slug]`: one combined market capability view, not repeated industry and role sections.
- `/industries`: industry discovery.
- `/industries/[slug]`: role scope, screening approach and campaign terms.
- `/job-registry`: live official SLBFE job-order registry.
- `/opportunities`: separation between official registry and Topway-published listings.
- `/candidates`: verification, candidate process, safety rules and registration.
- `/licence-compliance`: licence verification and document details.
- `/leadership`: detailed leadership profiles.
- `/contact`: direct contact and general enquiry.

## Removed Repetition
- Removed the shared FAQ component and all FAQ-style sections.
- Replaced employer FAQs with a working-agreement section.
- Replaced candidate FAQs with safety rules.
- Replaced process FAQs with decision points and dependencies.
- Replaced industry FAQs with campaign scope.
- Combined duplicate country industry and worker lists into one capability matrix.

## Responsive Rules Checked
- Shared structures collapse to one column below tablet widths.
- Country capability columns stack on mobile.
- Operating-term rows retain readable icons, labels and copy at 320–430px.
- Job Registry remains a first-class route at every navigation mode.
- Sticky mobile actions remain limited to Call, WhatsApp and Request Workers.

## Language Discoverability
- Desktop navigation uses a labelled globe control and displays the selected language by name.
- Mobile pages show an always-visible English, Sinhala and Tamil switch directly beneath the header.
- The mobile menu repeats a larger labelled chooser with clear active states and touch-friendly controls.

## Final Verification
- Confirmed no `FAQSection`, `<details>`, `<summary>` or FAQ CSS remains in application code.
- Confirmed Verified Jobs links directly to `/job-registry` in desktop navigation, mobile navigation and footer.
- Visually reviewed mobile employer, candidate, countries, country-detail, industries and registry layouts.
- Critical routes returned HTTP 200.
- ESLint, TypeScript and production build passed.
- Production build generated all 50 pages, including 17 market routes and 9 industry routes.

## Job Salary Conversion
- Official SLBFE salaries remain the primary displayed salary terms.
- Recognized `KD`, `QR`, `SR` and `OR` salaries receive an approximate monthly LKR conversion.
- The registry displays every exchange rate used, the rate update timestamp and the external rate source.
- Exchange rates refresh through a six-hour cache and disappear gracefully if the source is unavailable.
