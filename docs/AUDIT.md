# Topway Website Audit

## Current Stack
- Next.js 16 App Router, React 19, TypeScript.
- Global CSS design system, Lucide icons, Zod, Resend.
- Server components by default; forms and analytics are client components.
- 17 page routes, dynamic market and industry templates, three form endpoints.

## What Works
- Accurate local content modules and responsible market language.
- Functional form endpoints with honeypot, rate limiting and attachment validation.
- Next Image, sitemap, robots, metadata and organisation schema foundations.
- Reusable cards, page sections, header, footer and CTA components.

## Priority Problems
- Homepage repeats benefits, industries, process and enquiry content; too many decisions compete with Request Workers.
- Desktop navigation exposes too much. Mobile navigation is a native details list without focus trapping, scroll lock or close animation.
- Employer form exposes all fields at once and lacks step-level validation/error summary.
- Google fonts are loaded through CSS instead of `next/font`.
- Global CSS contains legacy and newer systems together, raw colour values and duplicated responsive overrides.
- Several inner pages repeat the same hero/proof/decision/list/CTA structure.
- Mobile sticky bar has four equal actions and can compete with page content.
- Leadership includes a third person despite the revised content requirement.
- Homepage market selection uses array order rather than an intentional market set.
- No lint configuration; `next lint` script is invalid for Next.js 16.

## Risks
- Native details navigation and hover behavior are inconsistent.
- Mobile menu lacks dialog semantics, Escape close, focus management and body scroll lock.
- Small legacy text sizes remain in several components.
- Animated width/top properties are less performant than transform-based motion.
- Canonical helper points every page to the site root when used.

## Build Direction
Preserve routes, content, APIs and server rendering. Replace the experience layer with a simpler employer-first homepage, accessible navigation, progressive employer form, semantic design tokens and focused supporting pages.
