# Creator Hub

Next.js portfolio site for showcasing selected projects, technical stack, and contact availability.

## Live URL
https://www.timothychinecherem.com

## Problem It Solves
Gives recruiters and potential clients one place to assess project quality, stack depth, and fit.

## Who It Is For
- Recruiters and hiring managers
- Potential clients
- Technical collaborators

## Main Features
- Bento-style home with profile, social links, live time, embedded tweet, GitHub graph, featured project, and CTA
- Work gallery with data-driven project cards and modal case-study details
- Stack page rendered from structured stack data
- Global floating dock (`Home`, `Work`, `Stack`, `Contact`) and contact modal (Zustand)
- SEO metadata + JSON-LD (`Person`, `WebSite`)
- Generated `robots.txt` and `sitemap.xml`
- Custom `404` page and route transition animation

## Tech Stack
- Next.js 16.1.1 (App Router), React 19.2.3, TypeScript 5
- Tailwind CSS 4, Framer Motion
- Zustand
- Lucide React, React Icons
- `react-tweet`, `react-github-calendar`
- ESLint 9 (`eslint-config-next`)

## Project Structure
```text
src/
  app/
    layout.tsx            # shared layout + metadata + JSON-LD
    page.tsx              # home
    work/page.tsx         # work gallery route
    stack/page.tsx        # stack route
    robots.ts             # robots metadata route
    sitemap.ts            # sitemap metadata route
  components/
    BentoGrid.tsx
    WorkPageClient.tsx
    ProjectModal.tsx
    ContactModal.tsx
    FloatingDock.tsx
    bento/
      TweetCard.tsx
      GithubGraph.tsx
  data/
    projects.ts
    stack.ts
  hooks/
    use-contact-modal.ts
  lib/
    utils.ts
public/
  images/
```

## Local Setup
### Prerequisites
- Node.js
- npm

### Install and run
```bash
npm install
npm run dev
```

### Other scripts
```bash
npm run lint
npm run build
npm run start
```

## Environment Variables
No environment variables are currently referenced in tracked source files.

## Deployment Notes
- Production runtime scripts: `npm run build` and `npm run start`
- `robots.txt` and `sitemap.xml` are generated via App Router metadata routes
- Uses `next/font/google` (`Geist`, `Geist Mono`)

## Current Status
Active portfolio project with static content-driven pages and interactive project previews.

## Notes
Content is managed in code via local data files (`src/data`).
