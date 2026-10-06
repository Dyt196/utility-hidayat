# CLAUDE.md

This project is about to be used to collect revenue from ads. It will be deployed into https://utility.hidayat.my

The website will have a main page that gave option to go to multiple tools and utility. Each page have their own SEO, add where it will helps.

Design it in professional manners with Light Mode and Dark Mode available with toggle.

Ensure Accessibility and Multiple language usage.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` / `npm run preview` — production build / serve it locally
- `npm run generate` — static site generation
- `npm install` runs `nuxt prepare` (postinstall), which generates `.nuxt/` and the tsconfig references the root `tsconfig.json` depends on.

You are building a production-ready utility website called Utility Hidayat.

## Project

Domain: https://utility.hidayat.my

Purpose:
Build a fast, SEO-focused collection of genuinely useful online utilities and calculators. The site should eventually generate revenue through advertising, but do not add ads yet. First focus on architecture, performance, SEO, UX, and content quality.

This is a real production project, not a demo.

## Tech Stack

Use:
1. Nuxt 4
2. Vue 3
3. TypeScript
4. Tailwind CSS
5. Nuxt UI if appropriate
6. Nitro
7. Static generation
8. No database
9. No backend
10. No authentication
11. No external API
12. The site should be deployable as a static site/CDN-hosted application.

## Development Principles

1. Keep the architecture simple.
2. Do not over-engineer.
3. Prefer reusable components and composables.
4. Keep calculations client-side whenever possible.
5. Avoid unnecessary dependencies.
6. Do not create fake functionality.
7. Do not generate hundreds of placeholder pages.
8. Do not use lorem ipsum.
9. Do not add features merely because they are technically interesting.
10. Prioritize performance and SEO.
11. The UI should feel like a polished consumer utility website, not a developer dashboard.
12. Mobile-first design.
13. Accessibility matters.
14. Use semantic HTML.
15. Keep the code clean and maintainable.

## Initial Site Structure

Create this initial structure:
1. /
2. /tools
3. /tools/age-calculator
4. /tools/percentage-calculator
5. /tools/unit-converter
6. /tools/bmi-calculator
7. /tools/date-calculator
8. /about
9. /contact
10. /privacy-policy
11. /terms

The homepage should introduce the site and provide categories and links to available tools.

Do not create the tools as empty placeholders. Implement the first tools properly.

## Initial Tools (To be add progressing forward)

1. Age Calculator

Allow users to enter their date of birth.

Calculate:
- Years
- Months
- Days
- Total days where practical

Handle future dates gracefully.

Provide useful explanatory content below the calculator.

2. Percentage Calculator

Support common operations:

- What is X% of Y?
- X is what percentage of Y?
- Percentage increase
- Percentage decrease
- Percentage difference

Make the interface extremely easy to understand.

3. Unit Converter

Initially support:

- Length
- Weight
- Temperature
- Use client-side calculations.

Design the converter so additional unit categories can be added later without rewriting the entire component.

4. BMI Calculator

Allow:

- Metric
- Imperial

Calculate BMI and show the corresponding category.

Include a clear disclaimer that BMI is only a general screening measure and is not medical advice.

5. Date Calculator

Support useful date calculations such as:

- Days between two dates
- Add days to a date
- Subtract days from a date

Design this so additional date utilities can be added later.

## Component Architecture

Create reusable components where appropriate, for example:
1. ToolCard
2. ToolLayout
3. CalculatorCard
4. InputField
5. NumberInput
6. DateInput
7. SelectInput
8. ResultCard
9. CategoryCard
10. Breadcrumbs
11. Header
12. Footer

Do not create components just for the sake of abstraction.

Use composables for reusable calculation logic where it improves maintainability.

Keep calculation logic separate from presentation.

## SEO

SEO is one of the primary goals.

Every tool page must have unique:
- <title>
- meta description
- canonical URL
- Open Graph metadata

Use Nuxt SEO capabilities appropriately.

Create:
- sitemap.xml
- robots.txt

Ensure pages can be fully indexed without requiring JavaScript execution to discover their primary content.

## Important:

The calculator can be interactive/client-side, but the page itself must contain meaningful server-rendered/static HTML content explaining what the tool does.

Do NOT create thin pages consisting only of a calculator.

Each tool page should contain:
1. H1
2. Short introduction
3. Calculator/tool
4. Result area
5. Explanation of how it works
6. Examples where appropriate
7. Frequently asked questions
8. Related tools

Use semantic heading hierarchy.

## Structured Data

Where appropriate, implement JSON-LD structured data.

Do not add structured data that does not accurately represent the page.

Use appropriate schemas such as:
1. WebSite
2. WebApplication where appropriate
3. BreadcrumbList

Do not abuse FAQ structured data or create markup merely for SEO.

## Internal Linking

Every tool should link to related tools.

For example:

1. Age Calculator:
- Date Calculator
- Days Between Dates
- Percentage Calculator:
- Loan Calculator eventually
- Percentage Difference

2. Unit Converter:
- Length
- Weight
- Temperature
- Create a reusable related-tools component.

## Design

The design should be:

- Clean
- Modern
- Minimal
- Fast
- Professional
- Trustworthy
- Mobile-first

Avoid:

- Excessive gradients
- Huge hero sections
- Excessive animations
- Clutter
- Dashboard-style layouts
- Dark-pattern UX

The primary purpose of every page should be immediately obvious.

A visitor should understand what the tool does within 2–3 seconds.

## Performance

Optimize aggressively for:

- Low JavaScript payload
- Fast first render
- Minimal dependencies
- Static generation
- Image optimization
- Core Web Vitals

Avoid shipping unnecessary JavaScript to pages that don't need it.

Do not introduce a large UI library if simple components can accomplish the same thing.

## Accessibility

Ensure:
- Proper labels
- Keyboard navigation
- Focus states
- Sufficient contrast
- Semantic HTML
- Accessible error messages
- Buttons have meaningful labels
- Form inputs have associated labels

## Error Handling

Handle:
- Empty input
- Invalid dates
- Negative values where inappropriate
- Division by zero
- Impossible date ranges
- Invalid unit selections

Do not allow NaN or confusing output to appear to users.

## Content

Write concise, useful, human-readable content for each tool.

Do NOT keyword-stuff.

Do NOT generate fake statistics.

Do NOT make unsupported claims.

The content should be genuinely useful to someone searching for the tool.

Target international English initially, but keep the architecture flexible enough to support localization later.

## Analytics

Do not add analytics yet.

Create a clean place in the architecture where analytics can be added later without modifying every page.

## Monetization

Do not implement advertisements yet.

However, structure the layout so an advertising component can later be inserted between appropriate content sections without redesigning every page.

Do not make the initial UI look like an ad-supported site.

## Configuration

Use environment variables where appropriate.
Create a .env.example.
Do not hardcode secrets.

## Documentation

Create a concise README.md explaining:
1. Project purpose
2. Tech stack
3. Development setup
4. Available scripts
5. How to add a new utility
6. How to add SEO metadata
7. How to build/prerender
8. How to deploy

Also create a short architecture document if useful.

## Git

Before making changes:
1. Inspect the existing repository.
2. Determine whether a Nuxt project already exists.
3. Do not overwrite existing work without understanding it.
4. Check the current git status.
5. Preserve useful existing configuration.

## After implementation:

- Run linting/type checks.
- Run the production build.
- Fix all errors.
- Check generated routes.
- Verify that the important pages are statically generated/prerendered where intended.

Do not stop after writing code. Actually validate the project.

## Important Constraint

1. Do NOT build additional tools beyond the five initial tools unless necessary for architecture.
2. The goal of this first phase is to establish a high-quality foundation, not to maximize the number of pages.

## After completing the implementation, provide:

1. Summary of what was built
2. Project structure
3. Commands to run locally
4. Build/prerender result
5. SEO implementation summary
6. Any issues encountered
7. Recommended next 5 tools based on the existing architecture

Start by inspecting the repository and existing files before changing anything.

## Architecture (as built)

See README.md for the full structure. Key points:

- All copy (UI, tool prose, FAQs, legal pages) lives in `app/content/<locale>.ts`, read through `useContent()`. `en.ts` defines the type; `ms.ts` must satisfy it. `@nuxtjs/i18n` is only used for routing, canonical and hreflang.
- Calculation logic is pure TypeScript in `app/utils/`, covered by `npm test`. Tool components in `app/components/tools/` contain UI only.
- `app/utils/tools.ts` is the tool registry; `ToolLayout` renders every tool page (SEO, JSON-LD, H1, intro, tool slot, how it works, examples, FAQ, related).
- Verify changes with `npm run typecheck && npm test && npm run generate`.
