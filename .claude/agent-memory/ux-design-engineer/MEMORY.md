# UX Design Engineer — Agent Memory

## Project: AgentProject (defense-tech personal brand page)

**File locations**
- Page component: `/Users/benjameson/projects/AgentProject/app/page.tsx`
- Styles: `/Users/benjameson/projects/AgentProject/app/styles.module.css`

**Identity defaults (confirmed production)**
- Callsign: `MORAN`
- Full display name: `J. MORAN`
- Email: `j.moran@defense.dev`
- LinkedIn handle: `jmoran`
- GitHub handle: `jmoran`

**CSS custom property naming (defined on `.page`)**
- `--hud-bg` / `--hud-surface` / `--hud-surface-alt` — dark background tiers
- `--hud-green` / `--hud-green-dim` — primary neon accent (#4afe91 / #1a5c35)
- `--hud-amber` / `--hud-amber-dim` — secondary accent / classification strips (#ffb000 / #5c3f00)
- `--hud-gray` / `--hud-gray-dim` — body text / muted chrome
- `--hud-white` — heading text (#d4dce4)
- `--hud-border` / `--hud-border-strong` — green border alpha variants
- `--hud-red` — alert/error color

**Animation inventory**
- `radarSweep` — 3s linear infinite (radar arm)
- `blipFade` — 4s ease-out infinite (radar blips, intentionally offset from sweep)
- `hudBlink` — 1s step-end infinite (terminal cursor)
- `pulse` — 2s ease-in-out infinite (active status dot)
- `glowBreath` — 4s ease-in-out infinite (identity card box-shadow)
- `onlinePulse` — 2s ease-in-out infinite (nav online dot)
- All looping decorative animations disabled under `prefers-reduced-motion: reduce`

**Layout constants**
- Nav height: 56px (fixed; `scroll-margin-top: 56px` on all sections)
- Max content width: 1280px (navInner, sectionInner, hero, footerInner)
- Hero padding: `7rem 1.5rem 5rem` (accounts for fixed nav + breathing room)
- Section padding: `5rem 1.5rem` (tablet: 3.5rem; mobile: 2.5rem)

**Responsive breakpoints**
- 1024px: hero collapses to single column
- 768px: nav center hidden, hamburger shown; grids collapse
- 480px: navSlash/navLabel hidden; single-column everything

**Accessibility patterns confirmed**
- Purely decorative elements (`radarWrapper`, corner brackets, browser content, terminal dots): `aria-hidden="true"` on the JSX element
- Scanline overlay is a CSS `::before` pseudo-element — invisible to a11y tree by default, no aria needed
- Interactive targets: hamburger uses `padding: 0.625rem 0.75rem` to meet 44px WCAG tap target
- Mobile nav links use `padding: 0.875rem 0` for 44px tap height
- Status dots carry `aria-hidden="true"`; status text is the visible label

**Amber contrast — verified passing**
- `#ffb000` on effective background ~`#131006` (amber-dim + surface blend): ~9.5:1 (AAA)
- `#ffb000` on `#5c3f00` (classificationBanner): ~6.5:1 (AA)

**Design patterns**
- Corner bracket decorators are 4 absolutely-positioned divs (TL/TR/BL/BR) using partial border-width
- Classification strips use amber color on amber-dim background — intentional, not an error
- `[OPERATOR]` / `[YOUR NAME]` bracket syntax = broken placeholder — always replace with real callsign/name
- Terminal bar title format: `CALLSIGN // SECTION LABEL` (no brackets)
- Footer left format: `CALLSIGN // ALL INFORMATION UNCLASSIFIED`
- `viewDetailsBtn` and `galleryOverlayBtn` are intentionally `disabled` with `cursor: not-allowed` — "coming soon" state
