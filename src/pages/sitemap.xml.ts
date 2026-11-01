import type { APIRoute } from 'astro';
import { categories, services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import { posts } from '../data/posts';

const staticPaths = [
  '', 'services', 'digital-marketing', 'about', 'contact', 'pricing', 'portfolio', 'reviews',
  'partners', 'client-locations', 'careers', 'blog', 'ai-policy',
];

export const GET: APIRoute = ({ site }) => {
  const paths = [
    ...staticPaths,
    ...categories.map((c) => c.slug),
    ...services.map((s) => `services/${s.slug}`),
    ...caseStudies.map((c) => `portfolio/${c.slug}`),
    ...posts.map((p) => `blog/${p.slug}`),
  ];
  const urls = paths.map((p) => `<url><loc>${new URL(p, site)}</loc></url>`).join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
