# Creator Hub

## Project Summary
`creator-hub` is a Next.js App Router web application with three main routes:

- `/` home page rendered with a bento-style grid
- `/work` project gallery with modal project details
- `/stack` tool and workflow stack page

[Partially inferred] Based on route content and metadata, this repository is structured as a personal portfolio site.

## Problem Solved
The application consolidates profile information, selected projects, and contact entry points into one navigable site.

[Partially inferred] The primary use case appears to be portfolio presentation and client/contact conversion.

## Features
- Home bento grid with profile, local time, social links, stack icons, tweet embed, GitHub contribution graph, featured project tile, testimonial, and CTA.
- Work page with data-driven project cards and a detail modal (hero image, description, stack tags, feature images, optional live URL).
- Stack page rendered from a static data source.
- Global floating dock navigation (`Home`, `Work`, `Stack`, `Contact`) mounted in root layout.
- Global contact modal managed through a Zustand store.
- SEO metadata and JSON-LD (`Person`, `WebSite`) in root layout.
- Generated `robots.txt` and `sitemap.xml` via App Router metadata routes.
- Custom `404` page and route transition template animation.

## Stack
- Framework: Next.js `16.1.1` (App Router)
- UI: React `19.2.3`
- Language: TypeScript `5`
- Styling: Tailwind CSS `4`, `@tailwindcss/postcss`
- Animation: Framer Motion
- Icons: Lucide React, React Icons
- State: Zustand
- Utilities: `clsx`, `tailwind-merge`
- Embedded content: `react-tweet`, `react-github-calendar`
- Linting: ESLint 9 + `eslint-config-next`

## Setup
### Prerequisites
- Node.js and npm [Partially inferred from npm scripts and lockfile]

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

## Structure
```text
src/
  app/
    layout.tsx        # root layout, metadata, JSON-LD, global modal + dock
    page.tsx          # home route
    work/page.tsx     # work route entry
    stack/page.tsx    # stack route entry
    robots.ts         # robots metadata route
    sitemap.ts        # sitemap metadata route
    template.tsx      # route transition wrapper
  components/
    BentoGrid.tsx
    WorkPageClient.tsx
    ProjectCard.tsx
    ProjectModal.tsx
    StackCard.tsx
    ContactModal.tsx
    FloatingDock.tsx
    bento/
      TweetCard.tsx
      GithubGraph.tsx
  data/
    projects.ts       # static project content
    stack.ts          # static stack content
  hooks/
    use-contact-modal.ts
  lib/
    utils.ts
public/
  images/             # avatars and project/stack assets
```

## Architecture Overview
- App Router structure with route files in `src/app`.
- Root layout applies global styles/fonts, metadata, JSON-LD, and mounts shared UI (`ContactModal`, `FloatingDock`) once.
- Core pages are mostly compositional; interactive behavior is implemented in client components (`"use client"`).
- Project and stack views are data-driven from static arrays in `src/data`.
- Modal visibility is centralized in a small global Zustand store.
- External widgets:
  - `react-tweet` for tweet rendering
  - `react-github-calendar` dynamically imported on client to avoid SSR issues
- No API routes, server actions, or backend service code are present in tracked source files.

## Deployment Notes
- Confirmed runtime scripts: `dev`, `build`, `start`, `lint`.
- A production build was run successfully with `next build`; output reported static prerendering for:
  - `/`
  - `/_not-found`
  - `/robots.txt`
  - `/sitemap.xml`
  - `/stack`
  - `/work`
- No platform-specific deployment configuration files were found (for example `vercel.json`, `Dockerfile`, or `docker-compose.yml`).
- Google fonts are loaded via `next/font/google` (`Geist`, `Geist Mono`), so build/runtime behavior depends on normal font fetching for that integration.

## Limitations
- No automated tests are configured in `package.json`.
- Content is largely static/hard-coded in source (`src/data/projects.ts`, `src/data/stack.ts`, component copy), so updates require code edits.
- No environment variables are currently referenced in tracked source.
- Some links are placeholders or generic destinations:
  - Work footer `All Projects` uses `href="#"`.
  - Contact modal social links point to root domains (`x.com`, `github.com`, `linkedin.com`) rather than profile URLs.
- [Partially inferred] Some files appear unused in the current app graph:
  - `src/components/Hero.tsx` (no imports found in `src/`)
  - helper exports in `src/data/projects.ts` not referenced elsewhere
  - several public assets have no direct references in `src/` (for example `/next.svg`, `/vercel.svg`, `/window.svg`)
