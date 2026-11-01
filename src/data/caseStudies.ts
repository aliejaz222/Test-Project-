import type { PhotoKey } from './images';

// SAMPLE PROJECTS ONLY.
// These clients and numbers are fictional and exist to show the page layout.
// Replace each entry with a real client (with their permission) before launch,
// then set `sample: false` to remove the "Sample project" label.

export type CaseStudy = {
  slug: string;
  sample: boolean;
  client: string;
  industry: string;
  services: string[];
  platform: string;
  image: PhotoKey;
  headline: string;
  summary: string;
  results: { value: string; label: string }[];
  challenge: string[];
  solution: string[];
  outcome: string[];
  quote?: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'harbor-pine-outfitters',
    sample: true,
    client: 'Harbor & Pine Outfitters',
    industry: 'Fashion',
    services: ['Ecommerce SEO', 'Email Marketing'],
    platform: 'Shopify',
    image: 'clothesRack',
    headline: 'Outdoor apparel brand doubles organic revenue in a year',
    summary: 'A growing outdoor clothing label was relying almost entirely on paid social. We built an SEO and email program that made organic their biggest channel.',
    results: [
      { value: '+112%', label: 'Organic revenue' },
      { value: '+64%', label: 'Email revenue' },
      { value: '3.1x', label: 'Category keywords on page one' },
    ],
    challenge: [
      'Harbor & Pine had a loyal following on Instagram, but rising ad costs were eating into margins. Organic search brought in very little, and most product pages used short, generic descriptions.',
      'Their Shopify store also had thousands of indexed filter URLs, which made it hard for Google to focus on the pages that mattered.',
    ],
    solution: [
      'We cleaned up the store’s structure, removed junk URLs from the index and rebuilt collection pages around real search demand, like “waterproof hiking jacket women’s”.',
      'Our writers rewrote 300 product descriptions with fit, fabric and use-case detail. On the email side, we launched welcome, browse-abandon and post-purchase flows.',
    ],
    outcome: [
      'Within twelve months organic search became the brand’s largest revenue channel, and email flows were driving steady repeat purchases without extra ad spend.',
    ],
    quote: { text: 'We finally have a channel that grows without us paying for every click.', name: 'Sample client', role: 'Founder' },
  },
  {
    slug: 'brightway-family-dental',
    sample: true,
    client: 'Brightway Family Dental',
    industry: 'Dental',
    services: ['Local SEO', 'Google Ads'],
    platform: 'WordPress',
    image: 'dentalChair',
    headline: 'Family dental practice triples new patient bookings',
    summary: 'A three-location practice wanted more implant and Invisalign patients. Local SEO and focused ads filled their calendar.',
    results: [
      { value: '3x', label: 'Online bookings' },
      { value: '+180', label: 'New Google reviews' },
      { value: '-38%', label: 'Cost per new patient' },
    ],
    challenge: [
      'Brightway ranked well for their own name but rarely appeared in the map pack for general searches. Their ads were spending heavily on broad terms that brought in price shoppers.',
    ],
    solution: [
      'We optimized all three Google Business Profiles, built a page for every treatment and location, and set up automated review requests after each visit.',
      'Ads were restructured around high-value treatments with dedicated landing pages and online booking.',
    ],
    outcome: [
      'All three locations now appear in the map pack for their key searches, and booking volume has tripled with a lower cost per patient.',
    ],
  },
  {
    slug: 'northfield-industrial-supply',
    sample: true,
    client: 'Northfield Industrial Supply',
    industry: 'Business / Industrial',
    services: ['Lead Gen SEO', 'LinkedIn Ads', 'CRM Integration'],
    platform: 'Custom',
    image: 'machinery',
    headline: 'Industrial supplier grows qualified quote requests by 240%',
    summary: 'A regional parts distributor needed more qualified leads from outside its home market.',
    results: [
      { value: '+240%', label: 'Quote requests' },
      { value: '+95%', label: 'Organic traffic' },
      { value: '21 days', label: 'Faster lead response' },
    ],
    challenge: [
      'Northfield’s website listed products but offered little technical detail. Quote requests came in by email and were often lost or answered days later.',
    ],
    solution: [
      'We worked with their engineers to build detailed product and application pages, launched LinkedIn campaigns aimed at plant managers and connected a new RFQ form directly to their CRM.',
    ],
    outcome: [
      'Quote volume more than tripled, and the sales team now responds to every request the same day.',
    ],
  },
  {
    slug: 'luma-skin-studio',
    sample: true,
    client: 'Luma Skin Studio',
    industry: 'Beauty',
    services: ['Meta Ads', 'Social Media Marketing'],
    platform: 'Shopify',
    image: 'skincare',
    headline: 'Skincare brand cuts acquisition cost while scaling ads',
    summary: 'A direct-to-consumer skincare line wanted to scale paid social without losing profitability.',
    results: [
      { value: '2.8x', label: 'Return on ad spend' },
      { value: '-31%', label: 'Cost per purchase' },
      { value: '+70%', label: 'Monthly ad budget' },
    ],
    challenge: [
      'Luma’s ads had been running the same few creatives for months. Performance was slipping and every budget increase made results worse.',
    ],
    solution: [
      'We set up the Conversions API, built a creative testing system and produced dozens of new ads each month, from routine tutorials to ingredient explainers with creators.',
    ],
    outcome: [
      'Fresh creative and cleaner data let Luma increase budget while lowering cost per purchase.',
    ],
  },
  {
    slug: 'copperline-coffee',
    sample: true,
    client: 'Copperline Coffee Roasters',
    industry: 'Food & Beverage',
    services: ['Shopify Web Design', 'Email Marketing'],
    platform: 'Shopify',
    image: 'coffeeBeans',
    headline: 'New website lifts coffee subscriptions by 150%',
    summary: 'A specialty roaster needed a store that made subscriptions simple and showed off their sourcing story.',
    results: [
      { value: '+150%', label: 'Active subscriptions' },
      { value: '+42%', label: 'Conversion rate' },
      { value: '1.2s', label: 'Average page load' },
    ],
    challenge: [
      'Copperline’s old site was slow, hard to use on mobile and buried their subscription option three clicks deep.',
    ],
    solution: [
      'We designed a new Shopify store with a guided coffee finder, a clear subscription offer on every product and origin stories for each roast. Email flows were rebuilt around the subscription lifecycle.',
    ],
    outcome: [
      'Subscriptions grew steadily after launch, giving the business predictable monthly revenue.',
    ],
  },
  {
    slug: 'atlas-legal-group',
    sample: true,
    client: 'Atlas Legal Group',
    industry: 'Legal',
    services: ['SEO', 'AI SEO'],
    platform: 'WordPress',
    image: 'justice',
    headline: 'Law firm becomes a go-to source in AI search results',
    summary: 'A personal injury firm wanted to rank in a crowded market and appear in AI-generated answers.',
    results: [
      { value: '+160%', label: 'Organic leads' },
      { value: '+300%', label: 'AI referral sessions' },
      { value: '14', label: 'Practice pages on page one' },
    ],
    challenge: [
      'Atlas competed against national legal directories for nearly every search. Their practice area pages were thin and their brand rarely appeared in AI tools.',
    ],
    solution: [
      'We rebuilt every practice area page with detailed, plain-English answers, added structured data and earned mentions in local news and legal publications.',
    ],
    outcome: [
      'The firm now ranks for its core practice areas and is regularly cited in AI answers for local legal questions.',
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)!;
