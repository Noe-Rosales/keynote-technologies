# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then build to `dist/`
- `npm run lint` — ESLint (flat config, typescript-eslint)
- `npm run preview` — serve the production build locally

There is no test suite.

## What this is

A single-page marketing website for Keynote Technologies (an IT services company), built with React 18 + TypeScript + Vite + Tailwind CSS. The entire site lives in `src/App.tsx` (~600 lines): one component containing all sections (hero, services, about, contact) with data defined as inline arrays. Navigation is smooth-scroll to section ids, not routing.

- The contact form POSTs directly to Formspree (`https://formspree.io/f/xeeplbvg`); there is no backend.
- shadcn/ui is configured (`components.json`, `src/lib/utils.ts` with `cn()`, `@/` alias to `src/`) but no ui components have been generated yet — use `npx shadcn@latest add <component>` if one is needed.
- Icons come from `lucide-react`.

## Deployment

Pushes to the `devin/1775187719-initial-site` branch (also the default branch) trigger `.github/workflows/deploy.yml`, which runs lint + build and publishes `dist/` to the `gh-pages` branch (legacy Pages build). Two constraints:

- `public/CNAME` (`keynotetechnologies.net`) must survive the build into `dist/CNAME` — the workflow fails the deploy if it's missing, because losing it would take the custom domain offline. Don't delete or rename it.
- `dist/` is gitignored and rebuilt by the workflow; a local `dist/` may exist from past builds but is never deployed directly.

Lint failures block deploys, so run `npm run lint` before pushing.
