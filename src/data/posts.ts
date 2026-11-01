import type { PhotoKey } from './images';

// Blog posts. Add a new object to publish a post at /blog/<slug>.
export type Post = { slug: string; title: string; date: string; category: string; image: PhotoKey; excerpt: string; body: { h?: string; p: string }[] };

export const posts: Post[] = [
  {
    slug: 'how-to-show-up-in-ai-search',
    title: 'How to Show Up When Customers Ask AI for Recommendations',
    date: '2026-10-20',
    category: 'AI',
    image: 'aiSphere',
    excerpt: 'AI assistants are becoming the first stop for research. Here are the practical steps that make your brand more likely to be mentioned.',
    body: [
      { p: 'A growing number of buyers start their search by asking an AI assistant. “What’s the best accounting software for a small team?” “Which dentists near me do Invisalign?” If your brand isn’t part of the answer, you never get a chance to compete.' },
      { h: 'Make your facts consistent', p: 'AI tools piece together what they know about you from many sources. If your website, directory listings and social profiles describe you differently, the picture gets fuzzy. Pick one clear description of what you do and who you serve, and use it everywhere.' },
      { h: 'Answer questions directly', p: 'Pages that state a clear answer near the top, then back it up with detail, are easier for AI tools to quote. Look at the questions customers ask your sales team and turn each one into a section on your site.' },
      { h: 'Get mentioned on trusted sites', p: 'Reviews, industry publications, comparison articles and community threads all feed AI answers. Earning honest mentions in those places matters as much as your own content.' },
      { h: 'Track it', p: 'Make a list of ten questions your buyers would ask. Test them every month in the main AI tools and note whether you appear. It’s a simple habit that shows whether your work is paying off.' },
    ],
  },
  {
    slug: 'local-seo-checklist',
    title: 'A Plain-English Local SEO Checklist for Small Businesses',
    date: '2026-09-28',
    category: 'SEO',
    image: 'smallBiz',
    excerpt: 'Want to appear in the map results? Start with these basics. Most businesses skip at least half of them.',
    body: [
      { p: 'Local SEO doesn’t have to be complicated. A handful of basics, done well and kept up to date, will put you ahead of most competitors in your area.' },
      { h: 'Complete your Google Business Profile', p: 'Fill in every field: categories, services, hours, photos, description and attributes. Add new photos and posts regularly so the profile looks active.' },
      { h: 'Keep your details consistent', p: 'Your business name, address and phone number should match exactly across your website, Google, Yelp, Facebook and industry directories.' },
      { h: 'Ask for reviews', p: 'The best time to ask is right after a job well done. Send a short message with a direct link. Reply to every review, good or bad.' },
      { h: 'Build pages for the areas you serve', p: 'If you work across several towns, create a page for each with real local detail. Avoid copying the same text with the city name swapped. Search engines and customers both notice.' },
    ],
  },
  {
    slug: 'website-redesign-without-losing-rankings',
    title: 'How to Redesign Your Website Without Losing Your Rankings',
    date: '2026-09-05',
    category: 'Web Design',
    image: 'designScreen',
    excerpt: 'A new website should grow your traffic, not wipe it out. Here’s how to plan a redesign that protects your SEO.',
    body: [
      { p: 'A redesign is one of the most common reasons businesses lose search traffic overnight. The good news is that it’s almost always avoidable with a bit of planning.' },
      { h: 'Inventory what’s working', p: 'Before anything changes, export a list of every page that gets traffic or has links pointing to it. These are the pages you must protect.' },
      { h: 'Map every redirect', p: 'If a URL changes, set up a permanent redirect from the old address to the new one. Missing redirects are the number one cause of post-launch drops.' },
      { h: 'Keep your best content', p: 'A fresh design is a great time to improve copy, but don’t cut the content that ranks. Update it, don’t delete it.' },
      { h: 'Test before and after launch', p: 'Check speed, mobile layout, titles and structured data on a staging site. After launch, watch rankings and fix any problems quickly.' },
    ],
  },
];
