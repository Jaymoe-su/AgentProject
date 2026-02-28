# Agent Memory — Next.js Frontend Engineer

## Next.js Version Gotchas

### devIndicators.buildActivity removed in Next.js 16
- `devIndicators: { buildActivity: false }` was deprecated in v15.2 and **removed in v16.0**.
- The valid Next.js 15/16 API is: `devIndicators: false` (hides indicator) or `devIndicators: { position: '...' }`.
- Leaving the old key in `next.config.ts` triggers config validation warnings on Vercel and can fail strict builds.
- Fix: remove the `devIndicators` block entirely, or set `devIndicators: false`.
- Ref: https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators

## CSS Module Patterns (AgentProject — personal brand page)

- Dynamic class key lookups (e.g. `styles[\`galleryThumb${index + 1}\`]`) must be audited
  by counting the data array length and confirming each generated key exists in the CSS file.
- The `as keyof typeof styles` cast suppresses TypeScript errors but does NOT guarantee the
  key exists at runtime — a missing class simply returns `undefined`, silently applying no style.

## Project Structure Notes (AgentProject)

- `app/page.tsx` — full-page personal brand, single `"use client"` file with all sections
  as local components (NavBar, HeroSection, etc.)
- `app/styles.module.css` — single CSS Module for the entire page; CSS custom properties
  scoped to `.page`; neon/HUD aesthetic (green `#4afe91`, amber `#ffb000`, dark bg `#080c08`)
- `app/layout.tsx` — minimal root layout, `metadata` exported correctly as `Metadata` type
- `app/globals.css` — imported in layout (not in page.tsx)
