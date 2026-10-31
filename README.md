# Dreamline Digital — Your one stop solution

Static Astro website for Dreamline Digital (since 2018). No CMS: edit files, push to GitHub, and Cloudflare Pages rebuilds the live site.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where to edit things

| What | File |
| --- | --- |
| Brand name, tagline, phone, email, address, form endpoint | `src/config/site.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` tokens) |
| All services and categories (pages are generated) | `src/data/services.ts` |
| Home page | `src/pages/index.astro` |
| About, Contact, Pricing, Portfolio, Careers, Blog | `src/pages/*.astro` |
| Header menu / footer | `src/components/Header.astro`, `Footer.astro` |
| Logo / favicon | `public/favicon.svg` |
| Live domain (canonical URLs + sitemap) | `astro.config.mjs` → `site`, and `public/robots.txt` |

### Adding a new service
Add an object to the `services` array in `src/data/services.ts` with a unique `slug` and an existing `category`. It appears automatically at `/services/<slug>`, in the menu, the footer, its category page and the sitemap.

### Placeholders to replace before launch
- Phone, email and address in `src/config/site.ts`
- `formAction` in `src/config/site.ts` (create a free form at Formspree or Web3Forms and paste the endpoint)
- Case studies (`portfolio.astro`), testimonials (`index.astro`), team (`about.astro`), pricing amounts (`pricing.astro`)
- Grey "Replace with an image" boxes — put images in `public/images/` and swap the `<div class="placeholder-img">` for `<img src="/images/..." alt="...">`

## Deploying on Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → choose this repo.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. Save and deploy. Every push to `main` redeploys automatically.

## Site map
- `/` Home · `/services` All services · `/about` · `/contact` · `/pricing` · `/portfolio` · `/careers` · `/blog`
- Category hubs: `/seo`, `/paid-advertising`, `/online-marketing`, `/ai`, `/web-design`, `/industries`
- 46 service pages under `/services/<slug>`
