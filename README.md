# lci-marketing

Temporary "coming soon" marketing site for **Lowcountry Investing, LLC** and the **Lowcountry Grid** product. Single-page Angular 18 SPA + three legal routes (`/terms`, `/privacy`, `/risk-disclosure`) deployed as a static bundle to GitHub Pages.

Primary purpose: satisfy Stripe's account-verification requirement (live website describing the business, products, pricing, and policies). Secondary purpose: let interested visitors know the product is coming. **No email capture, no waitlist, no forms.** This site will be replaced before launch.

> Visual identity, tokens, and component patterns mirror the authenticated app at [`../finwatch-ui/`](../finwatch-ui/). See [`THEME_AUDIT.md`](./THEME_AUDIT.md) for the full audit and the few intentional deviations.

---

## Stack

- Angular 18 (standalone components, no NgModules)
- TypeScript 5.5, SCSS, CSS custom properties
- No Angular Material, no charts, no third-party UI libs
- Lazy routes for legal pages; eager home for fast first paint

## Local development

```bash
npm install
npm start              # → http://localhost:4200
```

## Production build

```bash
npm run build          # builds + writes 404.html (SPA fallback for Pages)
npm run preview        # serves dist/ locally on http://localhost:4173
```

The build output lives at `dist/lci-marketing/browser/` and includes:

- `index.html`, `404.html` (identical copy — required for SPA deep-link refresh on Pages)
- `CNAME` (custom-domain marker for Pages)
- `.nojekyll` (tells Pages to skip Jekyll processing)
- `robots.txt`, `sitemap.xml`, `og-image.svg`, `favicon.ico`

## Lighthouse (local prod build, mobile profile, headless Chrome)

| Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- |
| 100 | 100 | 100 | 100 |

To re-run yourself, with the preview server running on `:4173`:

```bash
npx lighthouse http://127.0.0.1:4173/ --only-categories=performance,accessibility,best-practices,seo
```

> Run Lighthouse against a server that compresses (e.g. `npx serve`), not plain `http-server` — uncompressed transfer skews Performance and `uses-text-compression` audits. GitHub Pages compresses by default.

## Deployment to GitHub Pages

The repo includes [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds on every push to `main` and deploys via the official `actions/deploy-pages@v4` flow.

### One-time setup

1. **Create the GitHub repo** (the project root, `lci-marketing/`, is the repo root):

   ```bash
   # from inside lci-marketing/
   gh repo create lci-marketing --public --source=. --remote=origin
   git push -u origin main
   ```

   …or create the repo on github.com, then:

   ```bash
   git remote add origin git@github.com:<your-user>/lci-marketing.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow will run on the next push.

3. **Point DNS at GitHub Pages**. The `public/CNAME` file declares `lowcountryinvesting.com`, so configure DNS at your registrar:

   | Record | Host | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<your-user>.github.io` |

   These four A records and the `www` CNAME are documented in [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

4. **Custom domain in Pages settings**. Settings → Pages → Custom domain → enter `lowcountryinvesting.com`. Tick "Enforce HTTPS" once the certificate provisions.

5. **SSL certificate.** GitHub provisions a Let's Encrypt certificate automatically once DNS resolves. Expect a **10–30 minute delay** before "Enforce HTTPS" can be enabled. If it stays unavailable longer than 24h, remove and re-add the custom domain in the Pages settings to retrigger provisioning.

### If you skip the custom domain

Edit `package.json` `build:pages` script to set `--base-href=/lci-marketing/` (or whatever the repo path is) and remove `public/CNAME`. The site will live at `https://<your-user>.github.io/lci-marketing/`.

## Project layout

```
lci-marketing/
├── src/
│   ├── app/
│   │   ├── components/                # site-header, site-footer, brand-mark
│   │   ├── config/brand.ts            # one-line product/legal-name change point
│   │   ├── pages/
│   │   │   ├── home/                  # hero, how-it-works, features, pricing, faq
│   │   │   ├── terms/                 # /terms — DRAFT
│   │   │   ├── privacy/               # /privacy — DRAFT
│   │   │   ├── risk-disclosure/       # /risk-disclosure — DRAFT
│   │   │   └── legal/                 # shared layout for the three legal pages
│   │   ├── app.component.ts
│   │   ├── app.config.ts              # router + per-route meta-description updater
│   │   └── app.routes.ts
│   ├── styles.scss                    # design tokens copied from finwatch-ui
│   └── index.html                     # title, OG tags, twitter card
├── public/                            # static assets passed through to dist root
│   ├── CNAME, .nojekyll
│   ├── robots.txt, sitemap.xml, og-image.svg, favicon.ico
├── scripts/copy-404.mjs               # post-build: index.html → 404.html
├── .github/workflows/deploy.yml       # Pages CI
├── BACKLOG.md                         # placeholders to fill before publishing
├── THEME_AUDIT.md                     # what was extracted from finwatch-ui
└── package.json
```

## Renaming the product or legal entity

All brand strings (legal name, product name, contact email, mailing address, launch quarter, fee percentage, copyright year) are centralised in [`src/app/config/brand.ts`](src/app/config/brand.ts). Edit there, rebuild, redeploy.

## Replacing this site

When the real product app ships, archive this repo and switch the `lowcountryinvesting.com` DNS / Pages domain to the new host.
