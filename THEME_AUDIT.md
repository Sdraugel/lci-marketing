# THEME_AUDIT.md

Audit of `finwatch-ui` (sibling app at `c:\Users\sdrau\code\finwatchv2\finwatch-ui\`) — what to copy so this temp marketing site feels like the same product family.

## Source files inspected

- `finwatch-ui/package.json`
- `finwatch-ui/angular.json`
- `finwatch-ui/src/index.html`
- `finwatch-ui/src/styles.scss` (the canonical token + base-style sheet)
- `finwatch-ui/src/app/app.component.ts` (header / nav / layout patterns)

## Framework stack

| Aspect | Value |
|---|---|
| Angular | 18.2.x |
| Components | Standalone (no NgModules) — confirmed in `app.component.ts` |
| Styling | SCSS + CSS custom properties (CSS variables) on `:root` |
| Component primitives | Angular Material 18 + Angular CDK 18 (used by feature pages; **not** required for the marketing site, which uses raw HTML + the design tokens) |
| Style language in CLI schematics | `scss` (`angular.json` `inlineStyleLanguage: scss`) |
| Build budgets (production) | initial warning 500kB / error 1MB; per-component style warn 2kB / error 4kB |
| Output path | `dist/finwatch-ui` |
| Source root | `src` |
| App selector prefix | `app` |
| Tailwind | None |
| CSS-in-JS | None |
| Animation library | None |
| Charts | Chart.js + chartjs-adapter-date-fns (irrelevant for marketing site) |

## Color palette (from `:root` in `styles.scss`)

Theme is a **dark-first slate-and-indigo palette**. No light-mode tokens defined; the site is dark by default.

### Brand / accent

| Token | Hex | Usage |
|---|---|---|
| `--primary-color` | `#6366f1` | Primary actions, focus, brand gradient start |
| `--primary-hover` | `#4f46e5` | Primary hover |
| `--secondary-color` | `#8b5cf6` | Brand gradient end, secondary accent |
| `--accent-color` | `#06b6d4` | Cyan accent (sparingly used) |

The wordmark in `app.component.ts` is rendered as a **linear gradient `135deg, var(--primary-color) → var(--secondary-color)`** clipped to text. Logo SVG uses the same gradient.

### Backgrounds (slate scale)

| Token | Hex |
|---|---|
| `--bg-primary` | `#0f172a` (slate-900) |
| `--bg-secondary` | `#1e293b` (slate-800) |
| `--bg-tertiary` | `#334155` (slate-700) |
| `--bg-card` | `#1e293b` |
| `--bg-overlay` | `rgba(15, 23, 42, 0.8)` |

App background is a subtle gradient `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)` (per `app.component.ts` `.app-container`).

Header uses `rgba(30, 41, 59, 0.8)` with `backdrop-filter: blur(10px)` — glass effect over the gradient.

### Text

| Token | Hex |
|---|---|
| `--text-primary` | `#f8fafc` (slate-50) |
| `--text-secondary` | `#cbd5e1` (slate-300) |
| `--text-muted` | `#64748b` (slate-500) |
| `--text-inverse` | `#0f172a` |

### Status

| Token | Hex |
|---|---|
| `--success` | `#10b981` (emerald-500) |
| `--warning` | `#f59e0b` (amber-500) |
| `--error` | `#ef4444` (red-500) |
| `--info` | `#3b82f6` (blue-500) |

### Borders

| Token | Hex |
|---|---|
| `--border-primary` | `#334155` |
| `--border-secondary` | `#475569` |
| `--border-focus` | `#6366f1` |

## Typography

- **Body font (finwatch-ui)**: `Inter` from Google Fonts, weights 300/400/500/600/700, with system-font fallback `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`. Loaded via `<link>` in `index.html` with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`.
- **Body font (this marketing site — intentional deviation)**: system stack only — `-apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', Arial, sans-serif`. Switching from Inter to the system stack eliminated all font-swap layout shift (CLS 1.12 → 0) and took Lighthouse Performance from 69 → 100. On macOS / iOS / modern Windows the system font is visually close enough to Inter that the brand still reads as the same family. If exact-match Inter becomes important later, self-host the woff2 with an `ascent-override` / `size-adjust` fallback `@font-face` to keep CLS at 0 — see `BACKLOG.md`.
- **Body line-height**: 1.6
- **Heading line-height**: 1.25
- **Font smoothing**: `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`
- **No display or mono font** — Inter for everything.

### Type scale (from `styles.scss`)

| Element | Size | Weight | Letter-spacing |
|---|---|---|---|
| `h1` | `2.5rem` | 700 | `-0.025em` |
| `h2` | `2rem` | 600 | — |
| `h3` | `1.5rem` | 600 | — |
| Body / `p` | (browser default 1rem, line-height 1.6) | 400 | — |
| Logo wordmark | `2.5rem` | 700 | `-0.025em` (gradient-clipped) |
| Buttons / nav links | `0.875rem` | 500 | — |

### Mobile overrides (≤ 768px)

- `h1`: `2rem`
- `h2`: `1.5rem`

## Spacing scale

| Token | Value |
|---|---|
| `--spacing-xs` | `0.25rem` |
| `--spacing-sm` | `0.5rem` |
| `--spacing-md` | `1rem` |
| `--spacing-lg` | `1.5rem` |
| `--spacing-xl` | `2rem` |
| `--spacing-2xl` | `3rem` |

## Radii

| Token | Value |
|---|---|
| `--radius-sm` | `0.375rem` |
| `--radius-md` | `0.5rem` |
| `--radius-lg` | `0.75rem` |
| `--radius-xl` | `1rem` |

## Shadows (elevation)

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px 0 rgba(0,0,0,0.05)` |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)` |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)` |

## Transitions

| Token | Value |
|---|---|
| `--transition-fast` | `150ms ease-in-out` |
| `--transition-normal` | `250ms ease-in-out` |
| `--transition-slow` | `350ms ease-in-out` |

## Breakpoints (observed in app.component.ts)

| Breakpoint | Behavior |
|---|---|
| `≤ 1200px` | Header stacks vertically |
| `≤ 768px` | h1/h2 shrink, header padding smaller, nav full-width |
| `≤ 480px` | Tighter mobile padding, smaller logo |

The marketing site will use the same three breakpoints.

## Component patterns to mirror

### Buttons (`.btn`, `.btn-secondary`)

```css
display: inline-flex; align-items: center; justify-content: center;
padding: var(--spacing-sm) var(--spacing-lg);
border-radius: var(--radius-md);
font-size: 0.875rem; font-weight: 500;
background: var(--primary-color); color: var(--text-primary);
transition: all var(--transition-fast);
```

Hover: `background: var(--primary-hover); transform: translateY(-1px); box-shadow: var(--shadow-md);`
Secondary: `background: var(--bg-tertiary)` → hover `var(--border-secondary)`.

### Cards (`.card`)

```css
background: var(--bg-card);
border: 1px solid var(--border-primary);
border-radius: var(--radius-lg);
padding: var(--spacing-xl);
box-shadow: var(--shadow-lg);
transition: all var(--transition-normal);
```

Hover: `box-shadow: var(--shadow-xl); transform: translateY(-2px);`

### Header / nav (from `app.component.ts`)

- Sticky top, `z-index: 100`
- `background: rgba(30, 41, 59, 0.8)` + `backdrop-filter: blur(10px)`
- Bottom border `1px solid var(--border-primary)`
- Inner content: `max-width: 1400px`, centered, `padding: 0 var(--spacing-xl)`
- Logo = SVG hexagon-stack icon with gradient stroke + wordmark with gradient-clipped text

The marketing site will reuse the **same SVG mark and gradient** so the brand glyph is consistent.

### Nav pill group

- `background: var(--bg-card)`, `border: 1px solid var(--border-primary)`, `border-radius: var(--radius-lg)`, padding `var(--spacing-sm)`
- Each link: `padding: var(--spacing-md) var(--spacing-lg)`, `border-radius: var(--radius-md)`, color `var(--text-secondary)`
- Active: `background: var(--primary-color)`, color white, `box-shadow: var(--shadow-md)`
- Hover: `background: var(--bg-secondary)`, `transform: translateY(-1px)`

### Form inputs (`.form-input`) — referenced for parity even though the temp site has no forms

Border-focus glow: `box-shadow: 0 0 0 3px rgba(99,102,241,0.1);`

### Scrollbar

Custom 8px scrollbar with `--bg-secondary` track and `--border-secondary` thumb.

## Layout primitives

- App max width: **1400px**, horizontally centered, `padding: 0 var(--spacing-xl)` for header / `var(--spacing-2xl) var(--spacing-xl)` for main.
- Layout system: **CSS flex / grid**. No grid-system library.
- No bento grid, no glassmorphism beyond the header blur.

## Dark / light mode

Dark only. No `prefers-color-scheme` switching. The marketing site will follow suit (dark only) — flagging in `BACKLOG.md` so you can decide whether to add a light variant later.

## What this means for the marketing site

The temp site will:

1. **Inline these exact CSS variables** into its own `styles.scss` so token names match — same `--primary-color`, same scale.
2. **Reuse the Inter font** via the same Google Fonts link.
3. **Reuse the SVG hex-stack logo** with the same gradient.
4. **Reuse the gradient app background** (`linear-gradient(135deg, --bg-primary, --bg-secondary)`).
5. **Reuse the sticky-blur header pattern** for nav.
6. **Reuse `.btn`, `.card`, link, and form-input class names and styles** so the visual language is identical.
7. Use the same 1400px content max-width and `--spacing-*` scale.
8. Use the same three breakpoints (1200 / 768 / 480).

It will **not** import `@angular/material` or `@angular/cdk` — those only ship in finwatch-ui's authenticated feature pages, and the marketing site has no Material widgets. Skipping them keeps the temp bundle small for Lighthouse.

It will **not** import Chart.js — no charts on this site.

## Intentional deviations from finwatch-ui

| Token / pattern | finwatch-ui | This marketing site | Why |
|---|---|---|---|
| Primary button background | `var(--primary-color)` (`#6366f1`) | `#4338ca` (indigo-700), bold weight | `#6366f1` on white text only hits 4.26:1 contrast — fails WCAG AA. Indigo-700 clears AA at body size. |
| Body font | `'Inter'` (Google Fonts) → system | System stack only | Eliminates font-swap CLS and removes a third-party network request. |
| Footer accent text | `var(--text-muted)` (`#64748b`) | `var(--text-secondary)` (`#cbd5e1`) | Muted slate fails AA against the footer background. |

The `--text-muted` color is still defined in tokens (matching finwatch-ui) but is now reserved for backgrounds where it clears 4.5:1 — primarily larger panels with `var(--bg-tertiary)` (`#334155`).

## Brand recap (for the new site only — not from finwatch-ui)

These are not in finwatch-ui (it's product UI for a different working name). The marketing site introduces:

- **Legal entity**: Lowcountry Investing, LLC
- **Product working name**: Lowcountry Grid (stored as a single config constant — see `src/app/config/brand.ts` once scaffolded)
- The dark slate + indigo/violet visual identity carries over from finwatch-ui to keep the family resemblance.
