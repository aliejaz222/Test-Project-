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
| Category pages (hubs, stats, FAQs) | `src/data/svc/categories.ts` |
| Service pages, one file per group | `src/data/svc/seo.ts`, `paid.ts`, `marketing.ts`, `ai.ts`, `web.ts`, `industries.ts` |
| Case studies (**samples, replace before launch**) | `src/data/caseStudies.ts` |
| Blog posts | `src/data/posts.ts` |
| Stock photos (Unsplash) | `src/data/images.ts` |
| Review profiles, service cities | `src/config/site.ts` |
| Home page | `src/pages/index.astro` |
| About, Contact, Pricing, Portfolio, Careers, Blog | `src/pages/*.astro` |
| Header menu / footer | `src/components/Header.astro`, `Footer.astro` |
| Logo / favicon | `public/favicon.svg` |
| Live domain (canonical URLs + sitemap) | `astro.config.mjs` → `site`, and `public/robots.txt` |

### Adding a new service
Add an object to the right file in `src/data/svc/` with a unique `slug` and an existing `category`. It appears automatically at `/services/<slug>`, in the menu, the footer, its category page and the sitemap.

### Placeholders to replace before launch
- Phone, email and address in `src/config/site.ts`
- `formAction` in `src/config/site.ts` (create a free form at Formspree or Web3Forms and paste the endpoint)
- Sample case studies (`src/data/caseStudies.ts`), sample testimonials (`src/components/Testimonials.astro`), team (`about.astro`), pricing amounts (`pricing.astro`), partner badges (`index.astro`)
- Review ratings in `src/config/site.ts` (leave empty until real)
- Grey "Replace with an image" boxes — put images in `public/images/` and swap the `<div class="placeholder-img">` for `<img src="/images/..." alt="...">`

## Deploying on Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → choose this repo.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. Save and deploy. Every push to `main` redeploys automatically.

## Site map
- `/` Home · `/services` · `/digital-marketing` · `/about` · `/contact` · `/pricing` · `/reviews` · `/partners` · `/client-locations` · `/careers` · `/blog` · `/ai-policy`
- Category hubs: `/seo`, `/paid-advertising`, `/online-marketing`, `/ai`, `/web-design`, `/industries`
- 46 service pages under `/services/<slug>`
- Case studies under `/portfolio/<slug>`, blog posts under `/blog/<slug>`
