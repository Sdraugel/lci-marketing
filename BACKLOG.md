# BACKLOG

Things you (the human) need to confirm, fill in, or get reviewed before the site goes live for Stripe verification or for public consumption. Each item is keyed to where it appears in the code.

## ☐ Hard blockers — must resolve before publishing

### Mailing address (Stripe requires a real one)
- **File:** [`src/app/config/brand.ts`](src/app/config/brand.ts) → `mailingAddress`
- **Current:** `[ADDRESS_PLACEHOLDER]`
- **Action:** Set to your registered Charleston, SC business address (or PO box). Stripe will use this when verifying the account, and the footer renders it publicly.

### Contact email
- **File:** [`src/app/config/brand.ts`](src/app/config/brand.ts) → `contactEmail`
- **Current:** `sdraugel@gmail.com` (your personal address — used until a company email is set up).
- **Action:** Once a real company inbox exists (e.g. via Google Workspace or Fastmail on the company domain), update this constant. Header, footer, terms, and privacy all read from it.

### Custom domain (Stripe may want one)
- **Current:** Site lives at `https://sdraugel.github.io/lci-marketing/` — the free Pages URL. No domain purchased yet, no `public/CNAME`.
- **Action:** Stripe's account-verification reviewers generally accept any live URL, but a custom domain on the legal entity name (e.g. `lowcountryinvesting.com`) reads as more legitimate and is worth the ~$10–15/year. When you're ready, follow the "Switching to a custom domain later" section in [`README.md`](README.md). Five files change: `public/CNAME`, `package.json` (base-href), `src/index.html` (canonical / og / twitter), `public/sitemap.xml`, `public/robots.txt`, and `src/app/config/brand.ts`.

### Legal review of all three legal pages
- **Files:**
  - [`src/app/pages/terms/terms.component.ts`](src/app/pages/terms/terms.component.ts)
  - [`src/app/pages/privacy/privacy.component.ts`](src/app/pages/privacy/privacy.component.ts)
  - [`src/app/pages/risk-disclosure/risk-disclosure.component.ts`](src/app/pages/risk-disclosure/risk-disclosure.component.ts)
- **Current:** Each page renders a yellow `DRAFT — review with attorney before publishing` banner at the top, and effective date is `Draft — pending publication`.
- **Action:** Have a lawyer in **South Carolina** (governing law set in §10 of Terms) review all three. Pay particular attention to:
  - Eligibility (we limit to US residents 18+ at launch).
  - Limitation-of-liability cap at trailing 12 months of fees.
  - Whether the "no withdraw permission, ever" wording in §3 is enforceable as a representation.
  - Privacy: California (CCPA) and EU/EEA (GDPR) provisions are mentioned but not exhaustive — confirm what you actually need.
  - Risk Disclosure tone: confirm with counsel whether the "you can lose some or all of the funds" language is sufficient.
- **After review:** Remove the `<!-- DRAFT — REVIEW WITH ATTORNEY BEFORE PUBLISHING -->` comment at the top of each file, change the `effectiveDate` field to a real ISO-style date (e.g. `'2026-05-15'`), and remove the `.draft-banner` from [`src/app/pages/legal/legal-page.component.ts`](src/app/pages/legal/legal-page.component.ts) — or hide it conditionally based on `effectiveDate`.

### Launch window copy
- **File:** [`src/app/config/brand.ts`](src/app/config/brand.ts) → `launchWindow`
- **Current:** `'Private beta in 2026'`
- **Action:** Update to a concrete quarter once you have one (e.g. `'Private beta in Q3 2026'`). Read in the FAQ section of the home page.

## ☐ Soft blockers — review before publishing

### Open Graph image
- **File:** [`public/og-image.svg`](public/og-image.svg)
- **Current:** Hand-rolled SVG with the brand glyph + product name + tagline.
- **Action:** Some social platforms (older versions of Facebook, LinkedIn previews) prefer a rasterised PNG/JPG over SVG for OG cards. If link-sharing previews matter, export this SVG to a 1200×630 PNG and swap the OG / Twitter URLs in `src/index.html`. Otherwise leave as is.

### `www` redirect
- The `public/CNAME` declares the bare domain. GitHub Pages will auto-redirect `www.lowcountryinvesting.com` → `lowcountryinvesting.com` once you set the `www` CNAME at your registrar (see README). Confirm both resolve once DNS propagates.

### Light-mode variant
- **Files:** [`src/styles.scss`](src/styles.scss), the `<meta name="color-scheme" content="dark">` in [`src/index.html`](src/index.html).
- **Current:** Dark-only, matching finwatch-ui.
- **Action:** Optional. The audit notes finwatch-ui has no light tokens. If you want a light variant for this marketing site, add a media-query block under `:root` using `@media (prefers-color-scheme: light)` and override the `--bg-*`, `--text-*`, and `--border-*` tokens.

### Self-hosted Inter (if exact font match becomes important)
- **Why:** The auth'd app uses Inter from Google Fonts. This marketing site uses the system stack to keep CLS at 0 and Lighthouse Performance at 100 — see `THEME_AUDIT.md` for the rationale.
- **If you want exact-match Inter back:** download Inter woff2, host it at `public/fonts/`, declare an `@font-face` with `font-display: swap`, and add a paired fallback `@font-face` (`Inter Fallback` family) with `ascent-override`, `descent-override`, and `size-adjust` tuned to match Inter's metrics — that keeps CLS near zero. Reference: <https://web.dev/articles/font-fallbacks>.

### Manual social cards / post-launch SEO sweep
- After publishing, validate OG/Twitter previews with:
  - <https://www.opengraph.xyz/url/https%3A%2F%2Flowcountryinvesting.com%2F>
  - <https://cards-dev.twitter.com/validator>
  - LinkedIn Post Inspector

### Repo visibility & licence
- The deploy workflow uses `actions/deploy-pages@v4` which works on public repos by default. **Private repos require GitHub Pro / Team for Pages.** Decide whether the marketing site repo should be public.
- No `LICENSE` file is included. For a marketing site you typically don't want one (all rights reserved). Skip unless you have a reason.

## ☐ Tracking — known parity issues with finwatch-ui (informational, not blocking)

These came up during the theme audit and are documented here so the next person doesn't re-discover them.

- **finwatch-ui's `.btn` has the same WCAG contrast issue** — primary indigo `#6366f1` on white text is 4.26:1, below AA 4.5:1. This marketing site uses indigo-700 (`#4338ca`) for buttons. Consider applying the same fix to finwatch-ui.
- **finwatch-ui's `--text-muted` (`#64748b`)** also fails AA against `--bg-card` (`#1e293b`) at small sizes. Same suggestion: bump usages to `--text-secondary` where they sit on `--bg-card` or `--bg-secondary`.

## ☐ Once Stripe approves and the real app launches

Replace this site:

1. Archive the GitHub repo (or just stop pushing to `main`).
2. Update `lowcountryinvesting.com` DNS / Pages settings to point to the production app.
3. The static `dist/` from this build is now obsolete; you can delete it.
