// All service pages are generated from this file.
// Add, remove or edit a service here and its page updates automatically.

export type Feature = { title: string; text: string };
export type Faq = { q: string; a: string };

export type Category = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  process: Feature[];
  faqs: Faq[];
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  intro: string;
  features: Feature[];
  faqs?: Faq[];
};

export const categories: Category[] = [
  {
    slug: 'seo',
    name: 'SEO',
    headline: 'Search engine optimization that turns rankings into revenue',
    intro:
      'We build organic visibility the durable way: a technically sound site, content people actually want, and authority earned from relevant sources. Every recommendation is tied to traffic, leads or sales you can measure.',
    process: [
      { title: 'Audit', text: 'A full crawl, keyword gap review and competitor benchmark to find where growth is hiding.' },
      { title: 'Roadmap', text: 'A prioritized plan ranked by impact and effort, so the biggest wins ship first.' },
      { title: 'Execute', text: 'Technical fixes, on-page optimization, content production and outreach, every month.' },
      { title: 'Report', text: 'Clear monthly reporting on rankings, traffic, conversions and next steps.' },
    ],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Most clients see early movement in 60–90 days, with compounding gains over 6–12 months. Timing depends on your site’s starting point and how competitive your market is.' },
      { q: 'Do you require long-term contracts?', a: 'No. We work month to month because we would rather earn your business with results than lock you in.' },
      { q: 'Will I own the content you create?', a: 'Yes. Everything we write and build for your site belongs to you.' },
    ],
  },
  {
    slug: 'paid-advertising',
    name: 'Paid Advertising',
    headline: 'Paid media managed for profit, not just clicks',
    intro:
      'From search to social to AI chat platforms, we plan, launch and optimize campaigns around your real business goals — cost per lead, return on ad spend and customer lifetime value.',
    process: [
      { title: 'Account review', text: 'We audit existing campaigns, tracking and spend to find waste and missed opportunity.' },
      { title: 'Strategy', text: 'Audience, offer, budget and channel mix planned around your margin and goals.' },
      { title: 'Launch & test', text: 'Structured campaigns with creative and landing page tests running from day one.' },
      { title: 'Optimize', text: 'Weekly bid, budget and audience adjustments backed by transparent reporting.' },
    ],
    faqs: [
      { q: 'What ad budget do I need?', a: 'We recommend a budget that allows enough data to learn quickly — we’ll suggest a starting range during your free proposal based on your industry.' },
      { q: 'Do I keep ownership of my ad accounts?', a: 'Always. Campaigns run in accounts you own, and you keep full access.' },
      { q: 'How quickly can campaigns go live?', a: 'Most campaigns launch within 1–2 weeks once tracking and creative are approved.' },
    ],
  },
  {
    slug: 'online-marketing',
    name: 'Online Marketing',
    headline: 'Full-funnel online marketing under one roof',
    intro:
      'Social, email, reputation, conversion optimization and strategy — coordinated by one team so every channel pushes in the same direction.',
    process: [
      { title: 'Discover', text: 'We learn your customers, offer and current funnel performance.' },
      { title: 'Plan', text: 'A channel plan with goals, budgets and a content calendar.' },
      { title: 'Build', text: 'Campaigns, automations, creative and landing pages produced in-house.' },
      { title: 'Improve', text: 'Ongoing testing and reporting so results improve month after month.' },
    ],
    faqs: [
      { q: 'Can you work alongside my in-house team?', a: 'Yes. We regularly plug into existing marketing teams to add capacity or specialist skills.' },
      { q: 'Do you handle creative?', a: 'Yes — copywriting, graphics and short-form video are all produced by our team.' },
      { q: 'Which tools do you work with?', a: 'We work with the major email, social, CRM and analytics platforms, and we’ll adapt to what you already use.' },
    ],
  },
  {
    slug: 'ai',
    name: 'AI Services',
    headline: 'Get found — and get ahead — in the age of AI',
    intro:
      'Search is shifting to AI assistants and answer engines. We help your brand appear in AI-generated answers and put practical AI to work inside your business.',
    process: [
      { title: 'Visibility check', text: 'We test how AI assistants currently describe and recommend your brand.' },
      { title: 'Gap analysis', text: 'We identify the content, data and authority signals AI systems rely on.' },
      { title: 'Optimize', text: 'Structured content, entity signals and citations built to earn AI mentions.' },
      { title: 'Track', text: 'Ongoing monitoring of brand mentions and referral traffic from AI platforms.' },
    ],
    faqs: [
      { q: 'Is AI SEO different from traditional SEO?', a: 'It builds on the same foundations, but adds a focus on clear answers, structured data, and being cited by trusted sources that AI models draw from.' },
      { q: 'Can you track traffic from AI tools?', a: 'Yes. We set up analytics to segment referral traffic from AI assistants and monitor brand mentions over time.' },
      { q: 'Do you build custom AI tools?', a: 'Yes — from chat assistants trained on your content to workflow automations that save your team hours each week.' },
    ],
  },
  {
    slug: 'web-design',
    name: 'Web Design',
    headline: 'Websites designed to load fast, rank well and convert',
    intro:
      'We design and develop websites that look great and work hard — on every device, on every major platform, with SEO and conversion built in from the first wireframe.',
    process: [
      { title: 'Discovery', text: 'Goals, audience, sitemap and functional requirements defined up front.' },
      { title: 'Design', text: 'Wireframes and custom visual design reviewed with you at each step.' },
      { title: 'Develop', text: 'Clean, fast, accessible code on the platform that fits your business.' },
      { title: 'Launch & support', text: 'QA, SEO-safe migration, training and ongoing maintenance.' },
    ],
    faqs: [
      { q: 'How long does a new website take?', a: 'Most projects take 8–16 weeks depending on size, integrations and content readiness.' },
      { q: 'Will my rankings drop after a redesign?', a: 'Not if migration is handled properly. We map redirects, preserve key content and monitor rankings closely after launch.' },
      { q: 'Can I update the site myself?', a: 'Yes. We build on platforms your team can manage and provide training at handoff.' },
    ],
  },
  {
    slug: 'industries',
    name: 'Industries',
    headline: 'Marketing built for the realities of your industry',
    intro:
      'Every industry has its own rules, regulations and buying patterns. Our industry programs combine proven playbooks with specialists who understand your market.',
    process: [
      { title: 'Market research', text: 'Competitors, search demand and customer behavior specific to your niche.' },
      { title: 'Compliance check', text: 'Advertising and content guidelines reviewed for regulated industries.' },
      { title: 'Tailored plan', text: 'A channel and content strategy designed for how your customers buy.' },
      { title: 'Grow', text: 'Execution, testing and reporting focused on your key metrics.' },
    ],
    faqs: [
      { q: 'Have you worked in my industry before?', a: 'We’ve served a wide range of industries since 2018. Ask us for relevant examples during your free consultation.' },
      { q: 'Can you market regulated products?', a: 'Yes. We work within platform and legal guidelines and use channels that allow your category.' },
      { q: 'Is pricing different by industry?', a: 'Pricing is based on scope and competition rather than industry alone. Every proposal is custom.' },
    ],
  },
];

export const services: Service[] = [
  // ---------- SEO ----------
  {
    slug: 'seo-services',
    name: 'Search Engine Optimization',
    category: 'seo',
    headline: 'SEO services that grow qualified traffic month after month',
    intro: 'Our core SEO program covers everything needed to rank: technical health, on-page optimization, content and authority building — managed by a dedicated strategist.',
    features: [
      { title: 'Technical SEO', text: 'Site speed, crawlability, indexation, structured data and Core Web Vitals.' },
      { title: 'Keyword strategy', text: 'Targets chosen by intent and revenue potential, not just volume.' },
      { title: 'Content production', text: 'Expert-written pages and articles that answer real customer questions.' },
      { title: 'Authority building', text: 'Relevant, editorial links and mentions from trusted sites in your space.' },
    ],
  },
  {
    slug: 'ecommerce-seo',
    name: 'Ecommerce SEO',
    category: 'seo',
    headline: 'Ecommerce SEO that puts your products in front of buyers',
    intro: 'We optimize category pages, product pages and site architecture so online stores capture high-intent shopping searches and turn them into orders.',
    features: [
      { title: 'Category optimization', text: 'Collection pages structured to rank for valuable commercial terms.' },
      { title: 'Product page SEO', text: 'Unique descriptions, product schema and review markup that win rich results.' },
      { title: 'Faceted navigation', text: 'Filters and variants handled so search engines don’t waste crawl budget.' },
      { title: 'Shopping feeds', text: 'Merchant Center feeds optimized for free and paid product listings.' },
    ],
  },
  {
    slug: 'lead-generation-seo',
    name: 'Lead Gen SEO',
    category: 'seo',
    headline: 'SEO built to fill your pipeline with qualified leads',
    intro: 'For service and B2B businesses, rankings only matter if the phone rings. We target buyer-intent searches and optimize pages to convert visitors into enquiries.',
    features: [
      { title: 'Service page strategy', text: 'Dedicated pages for each service and location you want to win.' },
      { title: 'Conversion-focused copy', text: 'Clear offers, trust signals and calls to action on every page.' },
      { title: 'Lead tracking', text: 'Calls, forms and chats attributed back to the keywords that drove them.' },
      { title: 'Thought leadership', text: 'Content that builds trust with buyers during longer sales cycles.' },
    ],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    category: 'seo',
    headline: 'Local SEO that makes you the obvious choice nearby',
    intro: 'Win the map pack and local searches in the areas you serve with an optimized Google Business Profile, consistent citations and location-focused content.',
    features: [
      { title: 'Google Business Profile', text: 'Complete, optimized profiles with regular posts, photos and Q&A.' },
      { title: 'Citation management', text: 'Accurate name, address and phone details across key directories.' },
      { title: 'Review generation', text: 'Simple systems to earn more genuine reviews from happy customers.' },
      { title: 'Location pages', text: 'Unique, useful pages for each city or neighborhood you serve.' },
    ],
  },
  {
    slug: 'enterprise-seo',
    name: 'Enterprise SEO',
    category: 'seo',
    headline: 'Enterprise SEO for large, complex websites',
    intro: 'Sites with thousands of pages, multiple brands or international audiences need SEO that scales. We bring process, tooling and senior expertise to match.',
    features: [
      { title: 'Scalable technical SEO', text: 'Templates, internal linking and crawl management across large sites.' },
      { title: 'International SEO', text: 'Hreflang, localization and market-specific keyword strategy.' },
      { title: 'Stakeholder alignment', text: 'Clear documentation and reporting for product, dev and leadership teams.' },
      { title: 'Programmatic content', text: 'Quality-controlled page generation for large keyword sets.' },
    ],
  },
  {
    slug: 'amazon-seo',
    name: 'Amazon SEO',
    category: 'seo',
    headline: 'Amazon SEO that lifts your listings and your sales',
    intro: 'Rank higher in Amazon search with optimized listings, stronger content and a strategy that balances organic visibility with sponsored ads.',
    features: [
      { title: 'Listing optimization', text: 'Titles, bullets, descriptions and back-end keywords tuned for search.' },
      { title: 'A+ content', text: 'Rich brand content and images that boost conversion rate.' },
      { title: 'Storefront design', text: 'A branded Amazon store that showcases your full catalog.' },
      { title: 'Sponsored ads support', text: 'Ad campaigns that accelerate ranking for priority keywords.' },
    ],
  },

  // ---------- Paid Advertising ----------
  {
    slug: 'ppc-management',
    name: 'PPC Management',
    category: 'paid-advertising',
    headline: 'Pay-per-click management focused on return, not spend',
    intro: 'We manage paid campaigns across every major platform with tight tracking, disciplined testing and transparent reporting on what each dollar returns.',
    features: [
      { title: 'Conversion tracking', text: 'Accurate tracking of sales, leads and calls before we scale spend.' },
      { title: 'Campaign structure', text: 'Clean account architecture that makes optimization fast and clear.' },
      { title: 'Creative testing', text: 'Ongoing ad copy and creative tests to lift click-through and conversion.' },
      { title: 'Landing pages', text: 'Dedicated landing pages designed to convert paid traffic.' },
    ],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    category: 'paid-advertising',
    headline: 'Google Ads management that captures demand at the right moment',
    intro: 'Search, Shopping, Performance Max, Display and YouTube — we build and manage Google Ads campaigns that reach customers when they are ready to act.',
    features: [
      { title: 'Search campaigns', text: 'Tightly themed ad groups and keywords matched to buyer intent.' },
      { title: 'Shopping & PMax', text: 'Feed-driven campaigns that put your products in front of shoppers.' },
      { title: 'YouTube ads', text: 'Video campaigns for awareness and remarketing.' },
      { title: 'Negative keyword control', text: 'Constant search term reviews to cut wasted spend.' },
    ],
  },
  {
    slug: 'meta-ads',
    name: 'Meta / Facebook Ads',
    category: 'paid-advertising',
    headline: 'Facebook and Instagram ads that stop the scroll',
    intro: 'We combine strong creative, smart audience strategy and reliable tracking to make Meta advertising a profitable growth channel.',
    features: [
      { title: 'Creative production', text: 'Static, carousel and video ads designed for each placement.' },
      { title: 'Audience strategy', text: 'Prospecting, lookalike and retargeting audiences that work together.' },
      { title: 'Conversions API', text: 'Server-side tracking for more reliable measurement.' },
      { title: 'Catalog ads', text: 'Dynamic product ads for ecommerce brands.' },
    ],
  },
  {
    slug: 'chatgpt-ads',
    name: 'ChatGPT Ads',
    category: 'paid-advertising',
    headline: 'Advertise where conversations happen: ChatGPT ads',
    intro: 'AI chat platforms are becoming a new place for people to research and buy. We help you test and scale ads in conversational environments early.',
    features: [
      { title: 'Early-adopter strategy', text: 'Structured tests to learn what works before competitors arrive.' },
      { title: 'Conversational creative', text: 'Ad messaging written for question-driven, intent-rich contexts.' },
      { title: 'Measurement setup', text: 'Tracking that connects AI ad exposure to real outcomes.' },
      { title: 'Cross-channel insight', text: 'Learnings shared back to your search and social campaigns.' },
    ],
  },
  {
    slug: 'microsoft-ads',
    name: 'Microsoft Ads',
    category: 'paid-advertising',
    headline: 'Microsoft Ads: reach valuable audiences at lower cost',
    intro: 'Bing, Copilot and partner networks reach audiences that often convert well at lower cost per click. We set up and manage campaigns that complement Google Ads.',
    features: [
      { title: 'Campaign import & tuning', text: 'Google campaigns adapted properly for Microsoft’s network.' },
      { title: 'LinkedIn profile targeting', text: 'Target by company, industry and job function on search.' },
      { title: 'Shopping campaigns', text: 'Product ads across Microsoft’s shopping surfaces.' },
      { title: 'Budget efficiency', text: 'Bid strategies that take advantage of lower competition.' },
    ],
  },
  {
    slug: 'linkedin-ads',
    name: 'LinkedIn Ads',
    category: 'paid-advertising',
    headline: 'LinkedIn advertising for B2B pipeline growth',
    intro: 'Reach decision-makers by job title, company and industry with LinkedIn campaigns built to generate meetings, not just impressions.',
    features: [
      { title: 'Account-based targeting', text: 'Campaigns aimed at your list of target companies.' },
      { title: 'Lead gen forms', text: 'Native forms that capture leads without leaving LinkedIn.' },
      { title: 'Thought leadership ads', text: 'Promote executive content to build trust with buyers.' },
      { title: 'CRM integration', text: 'Leads synced directly to your sales team’s tools.' },
    ],
  },
  {
    slug: 'tiktok-ads',
    name: 'TikTok Ads',
    category: 'paid-advertising',
    headline: 'TikTok ads that feel native and drive action',
    intro: 'We create platform-native video ads and manage TikTok campaigns that build awareness and drive sales with younger, highly engaged audiences.',
    features: [
      { title: 'Native video creative', text: 'Short-form videos built around trends and real customer stories.' },
      { title: 'Creator partnerships', text: 'Spark Ads and creator collaborations for authentic reach.' },
      { title: 'TikTok Shop support', text: 'Campaigns that drive in-app shopping.' },
      { title: 'Rapid testing', text: 'High-volume creative testing to find winners fast.' },
    ],
  },
  {
    slug: 'enterprise-ppc',
    name: 'Enterprise PPC',
    category: 'paid-advertising',
    headline: 'Enterprise paid media management at scale',
    intro: 'For large budgets and multi-market programs, we provide senior strategy, advanced measurement and the process discipline enterprise teams expect.',
    features: [
      { title: 'Multi-market management', text: 'Campaigns across regions, languages and brands.' },
      { title: 'Advanced attribution', text: 'Incrementality testing and multi-touch reporting.' },
      { title: 'Automation & scripts', text: 'Custom tooling that keeps large accounts efficient.' },
      { title: 'Executive reporting', text: 'Dashboards that connect spend to business outcomes.' },
    ],
  },

  // ---------- Online Marketing ----------
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'online-marketing',
    headline: 'Integrated digital marketing that compounds growth',
    intro: 'One partner for search, paid media, social, email and web — coordinated around a single growth plan with shared goals and reporting.',
    features: [
      { title: 'Unified strategy', text: 'All channels planned together so budget goes where it works best.' },
      { title: 'Dedicated team', text: 'A strategist backed by specialists in every discipline.' },
      { title: 'Shared reporting', text: 'One dashboard showing how every channel contributes.' },
      { title: 'Flexible scope', text: 'Scale channels up or down as your goals change.' },
    ],
  },
  {
    slug: 'conversion-rate-optimization',
    name: 'Conversion Rate Optimization',
    category: 'online-marketing',
    headline: 'Conversion rate optimization: more customers from the traffic you have',
    intro: 'We use analytics, user research and structured A/B testing to find and fix what stops visitors from buying or enquiring.',
    features: [
      { title: 'Funnel analysis', text: 'Identify exactly where visitors drop off.' },
      { title: 'User research', text: 'Heatmaps, session recordings and surveys that reveal friction.' },
      { title: 'A/B testing', text: 'Statistically sound experiments on pages, offers and checkout.' },
      { title: 'UX improvements', text: 'Design and copy changes shipped based on evidence.' },
    ],
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    category: 'online-marketing',
    headline: 'Social media marketing that builds community and sales',
    intro: 'Strategy, content creation, community management and paid amplification across the platforms your customers use most.',
    features: [
      { title: 'Content calendar', text: 'Planned posts aligned with campaigns and seasonality.' },
      { title: 'Creative production', text: 'Graphics, reels and short-form video made in-house.' },
      { title: 'Community management', text: 'Timely, on-brand replies to comments and messages.' },
      { title: 'Influencer outreach', text: 'Partnerships with creators who fit your brand.' },
    ],
  },
  {
    slug: 'forum-marketing',
    name: 'Forum Marketing',
    category: 'online-marketing',
    headline: 'Forum and community marketing done the right way',
    intro: 'Communities like Reddit and niche forums shape buying decisions and AI answers. We help you participate genuinely and build a positive presence.',
    features: [
      { title: 'Community research', text: 'Find where your customers ask questions and compare options.' },
      { title: 'Brand monitoring', text: 'Track mentions and sentiment across forums.' },
      { title: 'Helpful participation', text: 'Transparent, expert contributions that follow community rules.' },
      { title: 'Content insights', text: 'Real customer questions turned into content ideas.' },
    ],
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    category: 'online-marketing',
    headline: 'Email marketing that drives repeat revenue',
    intro: 'Automated flows, engaging campaigns and smart segmentation that turn subscribers into loyal customers.',
    features: [
      { title: 'Automated flows', text: 'Welcome, abandoned cart, post-purchase and win-back sequences.' },
      { title: 'Campaign design', text: 'On-brand, mobile-friendly emails that get clicked.' },
      { title: 'Segmentation', text: 'Messages tailored by behavior, value and interest.' },
      { title: 'Deliverability', text: 'Authentication and list hygiene that keep you out of spam.' },
    ],
  },
  {
    slug: 'reputation-management',
    name: 'Reputation Management',
    category: 'online-marketing',
    headline: 'Online reputation management that protects your brand',
    intro: 'What people find when they search your name matters. We help you earn more positive reviews, respond well and strengthen your search presence.',
    features: [
      { title: 'Review strategy', text: 'Ethical systems to collect more reviews from real customers.' },
      { title: 'Response management', text: 'Professional replies to reviews on every major platform.' },
      { title: 'Branded search', text: 'Owned and earned content that shapes your search results.' },
      { title: 'Monitoring', text: 'Alerts for new reviews and brand mentions.' },
    ],
  },
  {
    slug: 'digital-marketing-consulting',
    name: 'Digital Marketing Consulting',
    category: 'online-marketing',
    headline: 'Digital marketing consulting for clear, confident decisions',
    intro: 'Senior strategists review your marketing, team and tools, then give you a practical plan — whether you execute in-house or with us.',
    features: [
      { title: 'Marketing audit', text: 'An honest assessment of every channel and its performance.' },
      { title: 'Growth roadmap', text: 'A prioritized 90-day and 12-month plan.' },
      { title: 'Team coaching', text: 'Workshops and training for your in-house marketers.' },
      { title: 'Vendor review', text: 'Independent evaluation of agencies and tools you use.' },
    ],
  },

  // ---------- AI ----------
  {
    slug: 'ai-seo',
    name: 'AI SEO',
    category: 'ai',
    headline: 'AI SEO: be the answer AI assistants recommend',
    intro: 'We optimize your brand to be understood, trusted and cited by AI search experiences — while strengthening your traditional rankings at the same time.',
    features: [
      { title: 'AI visibility audit', text: 'See how AI assistants describe your brand today.' },
      { title: 'Answer-ready content', text: 'Clear, well-structured content that AI systems can quote.' },
      { title: 'Entity optimization', text: 'Consistent brand facts across the web and your site.' },
      { title: 'Citation building', text: 'Mentions on the trusted sources AI models rely on.' },
    ],
  },
  {
    slug: 'ai-development',
    name: 'AI Development',
    category: 'ai',
    headline: 'Custom AI development that saves time and drives growth',
    intro: 'From customer-facing chat assistants to internal automations, we design and build practical AI tools that fit into your existing systems.',
    features: [
      { title: 'AI chat assistants', text: 'Assistants trained on your products, policies and content.' },
      { title: 'Workflow automation', text: 'Automate repetitive tasks across marketing, sales and support.' },
      { title: 'Content tooling', text: 'AI-assisted workflows with human review built in.' },
      { title: 'Secure integration', text: 'Connected to your CRM, store or database safely.' },
    ],
  },
  {
    slug: 'google-ai-overviews-seo',
    name: 'Google AI Overviews SEO',
    category: 'ai',
    headline: 'Get featured in Google AI Overviews',
    intro: 'AI Overviews appear above traditional results for many searches. We optimize your content and authority so Google cites you as a source.',
    features: [
      { title: 'Query research', text: 'Find which of your target searches trigger AI Overviews.' },
      { title: 'Content structuring', text: 'Concise answers, clear headings and supporting detail.' },
      { title: 'Structured data', text: 'Schema markup that clarifies what your pages are about.' },
      { title: 'Citation tracking', text: 'Monitor when and where your pages are referenced.' },
    ],
  },
  {
    slug: 'chatgpt-seo',
    name: 'ChatGPT SEO',
    category: 'ai',
    headline: 'ChatGPT SEO: get recommended in AI conversations',
    intro: 'When people ask ChatGPT for recommendations, we want your brand in the answer. We improve the signals that influence how it finds and describes you.',
    features: [
      { title: 'Brand prompt testing', text: 'Regular testing of prompts your customers would ask.' },
      { title: 'Crawlable content', text: 'Ensure AI crawlers can access and understand your site.' },
      { title: 'Third-party mentions', text: 'Presence on reviews, lists and publications that AI cites.' },
      { title: 'Product visibility', text: 'Product data structured for AI shopping features.' },
    ],
  },
  {
    slug: 'perplexity-seo',
    name: 'Perplexity SEO',
    category: 'ai',
    headline: 'Perplexity SEO: earn citations in answer engines',
    intro: 'Perplexity shows its sources with every answer. We help your pages become those sources through authoritative, well-organized content.',
    features: [
      { title: 'Source analysis', text: 'See which sites Perplexity cites for your topics.' },
      { title: 'Fresh, factual content', text: 'Up-to-date pages with clear data and references.' },
      { title: 'Technical access', text: 'Fast, crawlable pages that answer engines can read.' },
      { title: 'Referral tracking', text: 'Measure traffic arriving from answer engines.' },
    ],
  },

  // ---------- Web Design ----------
  {
    slug: 'web-design-services',
    name: 'Web Design',
    category: 'web-design',
    headline: 'Custom web design that represents your brand at its best',
    intro: 'Strategic, beautiful websites built around your customers and your goals — responsive, accessible and optimized for search from day one.',
    features: [
      { title: 'Custom design', text: 'No cookie-cutter templates — a site designed for your brand.' },
      { title: 'Mobile first', text: 'Layouts that work flawlessly on every screen size.' },
      { title: 'SEO built in', text: 'Clean structure, fast load times and schema markup.' },
      { title: 'Accessibility', text: 'Designed with WCAG guidelines in mind.' },
    ],
  },
  {
    slug: 'ecommerce-web-design',
    name: 'Ecommerce Web Design',
    category: 'web-design',
    headline: 'Ecommerce web design that makes buying effortless',
    intro: 'Online stores designed to showcase products, build trust and remove friction from browse to checkout.',
    features: [
      { title: 'Product discovery', text: 'Intuitive navigation, search and filtering.' },
      { title: 'High-converting PDPs', text: 'Product pages with the info shoppers need to buy.' },
      { title: 'Streamlined checkout', text: 'Fewer steps, more payment options, fewer abandoned carts.' },
      { title: 'Integrations', text: 'ERP, inventory, shipping and marketing tools connected.' },
    ],
  },
  {
    slug: 'lead-generation-web-design',
    name: 'Lead Gen Web Design',
    category: 'web-design',
    headline: 'Lead generation websites that turn visitors into enquiries',
    intro: 'Websites for service and B2B companies designed around one goal: getting the right prospects to call, book or fill out a form.',
    features: [
      { title: 'Clear value proposition', text: 'Messaging that tells visitors why to choose you, fast.' },
      { title: 'Smart forms', text: 'Short, well-placed forms and booking tools.' },
      { title: 'Trust signals', text: 'Reviews, credentials and case studies where they matter.' },
      { title: 'Lead routing', text: 'Enquiries delivered straight to your CRM or inbox.' },
    ],
  },
  {
    slug: 'headless-web-design',
    name: 'Headless Web Design',
    category: 'web-design',
    headline: 'Headless websites for speed, flexibility and scale',
    intro: 'Decoupling your front end from your back end delivers lightning-fast pages and the freedom to build exactly the experience you want.',
    features: [
      { title: 'Modern frameworks', text: 'Built with Astro, Next.js and other modern tools.' },
      { title: 'Headless commerce', text: 'Custom storefronts on Shopify, BigCommerce and more.' },
      { title: 'Edge hosting', text: 'Deployed globally on platforms like Cloudflare.' },
      { title: 'Future-proof', text: 'Swap back-end systems without redesigning your site.' },
    ],
  },
  {
    slug: 'crm-integration',
    name: 'CRM Integration',
    category: 'web-design',
    headline: 'CRM integration that connects marketing and sales',
    intro: 'We connect your website, forms, ads and email to your CRM so every lead is captured, tracked and followed up.',
    features: [
      { title: 'Form & lead sync', text: 'Website leads flow into your CRM automatically.' },
      { title: 'Marketing automation', text: 'Nurture sequences triggered by lead behavior.' },
      { title: 'Attribution', text: 'See which campaigns produce revenue, not just leads.' },
      { title: 'Platform expertise', text: 'Experience with the leading CRM platforms.' },
    ],
  },
  {
    slug: 'shopify-web-design',
    name: 'Shopify Web Design',
    category: 'web-design',
    headline: 'Shopify design and development for growing brands',
    intro: 'Custom Shopify themes, apps and integrations that help your store stand out and scale smoothly.',
    features: [
      { title: 'Custom themes', text: 'Unique designs built on Shopify’s latest theme architecture.' },
      { title: 'Shopify Plus', text: 'Checkout extensibility, B2B and multi-store setups.' },
      { title: 'App integration', text: 'The right apps configured — without slowing your site.' },
      { title: 'Store migration', text: 'Smooth moves from other platforms with SEO protected.' },
    ],
  },
  {
    slug: 'wordpress-web-design',
    name: 'WordPress Web Design',
    category: 'web-design',
    headline: 'WordPress websites that are fast, secure and easy to manage',
    intro: 'Custom WordPress builds with clean code, flexible content editing and the performance and security your business needs.',
    features: [
      { title: 'Custom themes', text: 'Lightweight themes built for your design — no bloat.' },
      { title: 'Easy editing', text: 'Block-based layouts your team can update confidently.' },
      { title: 'Security & updates', text: 'Hardened setup and ongoing maintenance plans.' },
      { title: 'Performance', text: 'Caching, image optimization and fast hosting.' },
    ],
  },
  {
    slug: 'woocommerce-web-design',
    name: 'WooCommerce Design',
    category: 'web-design',
    headline: 'WooCommerce stores with the flexibility of WordPress',
    intro: 'Feature-rich WooCommerce stores designed to sell, with custom functionality where off-the-shelf plugins fall short.',
    features: [
      { title: 'Store design', text: 'Custom product, cart and checkout experiences.' },
      { title: 'Custom functionality', text: 'Bespoke features for subscriptions, bundles and more.' },
      { title: 'Payment & shipping', text: 'Gateways and carriers configured for your markets.' },
      { title: 'Speed optimization', text: 'Fast stores even with large catalogs.' },
    ],
  },
  {
    slug: 'bigcommerce-web-design',
    name: 'BigCommerce Web Design',
    category: 'web-design',
    headline: 'BigCommerce design and development for scaling stores',
    intro: 'Custom BigCommerce storefronts and integrations for brands that need enterprise features without enterprise complexity.',
    features: [
      { title: 'Custom storefronts', text: 'Stencil themes or headless builds tailored to you.' },
      { title: 'B2B features', text: 'Price lists, quotes and customer groups configured.' },
      { title: 'Multi-storefront', text: 'Multiple brands or regions from one back end.' },
      { title: 'Integrations', text: 'ERP, PIM and fulfillment systems connected.' },
    ],
  },
  {
    slug: 'custom-web-development',
    name: 'Custom Design and Development',
    category: 'web-design',
    headline: 'Custom web development for unique requirements',
    intro: 'When templates won’t do, our developers build custom web applications, portals and integrations around your exact needs.',
    features: [
      { title: 'Web applications', text: 'Customer portals, dashboards and booking systems.' },
      { title: 'API integrations', text: 'Connect any third-party service to your website.' },
      { title: 'Scalable architecture', text: 'Code built to grow with your business.' },
      { title: 'Ongoing support', text: 'Maintenance, monitoring and feature development.' },
    ],
  },
  {
    slug: 'magento-web-design',
    name: 'Magento Design',
    category: 'web-design',
    headline: 'Magento (Adobe Commerce) design that sells',
    intro: 'Custom Magento storefronts designed for complex catalogs, B2B buyers and high-volume ecommerce.',
    features: [
      { title: 'Storefront design', text: 'Custom themes and modern front ends like Hyvä.' },
      { title: 'Complex catalogs', text: 'Configurable products and large SKU counts handled well.' },
      { title: 'B2B experiences', text: 'Quick order, company accounts and custom pricing.' },
      { title: 'UX improvements', text: 'Navigation and checkout tuned for conversion.' },
    ],
  },
  {
    slug: 'magento-development',
    name: 'Magento Development',
    category: 'web-design',
    headline: 'Magento development, upgrades and support',
    intro: 'Experienced Magento developers for extensions, upgrades, performance tuning and integrations.',
    features: [
      { title: 'Custom extensions', text: 'Modules built to Magento coding standards.' },
      { title: 'Upgrades & patches', text: 'Version upgrades and security patches applied safely.' },
      { title: 'Performance tuning', text: 'Faster page loads and a more stable store.' },
      { title: 'Platform migration', text: 'Moves to or from Magento with data preserved.' },
    ],
  },

  // ---------- Industries ----------
  {
    slug: 'fashion-marketing',
    name: 'Fashion Marketing',
    category: 'industries',
    headline: 'Digital marketing for fashion and apparel brands',
    intro: 'SEO, paid social, influencer and email programs built for fast-moving fashion calendars and visually driven shoppers.',
    features: [
      { title: 'Seasonal planning', text: 'Campaigns aligned with drops, collections and sales.' },
      { title: 'Visual search', text: 'Image optimization for Google Images and Pinterest.' },
      { title: 'Paid social', text: 'Thumb-stopping creative for Instagram and TikTok.' },
      { title: 'Retention', text: 'Email and SMS that keep customers coming back.' },
    ],
  },
  {
    slug: 'beauty-marketing',
    name: 'Beauty Marketing',
    category: 'industries',
    headline: 'Marketing for beauty, skincare and cosmetics brands',
    intro: 'Educational content, creator partnerships and performance ads that help beauty brands build trust and grow sales.',
    features: [
      { title: 'Ingredient-led content', text: 'Content that answers what shoppers research.' },
      { title: 'Creator programs', text: 'Reviews and tutorials from relevant creators.' },
      { title: 'Ecommerce SEO', text: 'Product and category pages that rank.' },
      { title: 'Subscription growth', text: 'Replenishment flows and loyalty programs.' },
    ],
  },
  {
    slug: 'jewelry-marketing',
    name: 'Jewelry Marketing',
    category: 'industries',
    headline: 'SEO and marketing for jewelry brands and retailers',
    intro: 'High-value purchases need trust and great presentation. We help jewelers rank, advertise and convert online and in-store.',
    features: [
      { title: 'Product photography SEO', text: 'Images optimized for search and shopping.' },
      { title: 'Gift-season campaigns', text: 'Holiday, Valentine’s and wedding season planning.' },
      { title: 'Local visibility', text: 'Drive foot traffic to showrooms and stores.' },
      { title: 'Trust building', text: 'Reviews, certifications and guarantees front and center.' },
    ],
  },
  {
    slug: 'cannabis-marketing',
    name: 'Cannabis Marketing',
    category: 'industries',
    headline: 'Compliant marketing for cannabis businesses',
    intro: 'Advertising restrictions make organic growth essential. We focus on compliant SEO, local search, email and content for dispensaries and brands.',
    features: [
      { title: 'Compliance-first approach', text: 'Strategies that respect state and platform rules.' },
      { title: 'Dispensary local SEO', text: 'Rank in maps and local searches.' },
      { title: 'Menu & product SEO', text: 'Optimized product listings and menus.' },
      { title: 'Owned channels', text: 'Email and SMS programs you fully control.' },
    ],
  },
  {
    slug: 'cbd-marketing',
    name: 'Delta-8 & CBD Marketing',
    category: 'industries',
    headline: 'Growth marketing for CBD and hemp brands',
    intro: 'We help hemp-derived product brands grow through compliant SEO, content, affiliate and email marketing.',
    features: [
      { title: 'Educational content', text: 'Trustworthy content that answers customer questions.' },
      { title: 'Ecommerce SEO', text: 'Rank product and category pages in a competitive space.' },
      { title: 'Affiliate programs', text: 'Partnerships that drive sales without ad restrictions.' },
      { title: 'Retention marketing', text: 'Email flows that increase repeat purchases.' },
    ],
  },
  {
    slug: 'b2b-industrial-marketing',
    name: 'Business / Industrial Marketing',
    category: 'industries',
    headline: 'Lead generation for B2B and industrial companies',
    intro: 'Technical products and long sales cycles need marketing that educates buyers and gets your team in front of decision-makers.',
    features: [
      { title: 'Technical content', text: 'Spec-rich pages and resources engineers trust.' },
      { title: 'RFQ optimization', text: 'Quote request flows that capture more leads.' },
      { title: 'LinkedIn & search ads', text: 'Reach buyers by role and intent.' },
      { title: 'Sales enablement', text: 'Content and CRM data that help close deals.' },
    ],
  },
  {
    slug: 'marketing-for-artists',
    name: 'Marketing for Artists',
    category: 'industries',
    headline: 'SEO and marketing for artists and creatives',
    intro: 'Get your work seen by collectors, galleries and fans with portfolio SEO, social strategy and simple online sales.',
    features: [
      { title: 'Portfolio SEO', text: 'Make your work discoverable in search and images.' },
      { title: 'Online sales', text: 'Sell prints, originals and commissions online.' },
      { title: 'Social growth', text: 'Build an engaged audience for your art.' },
      { title: 'Press & features', text: 'Outreach to blogs, galleries and publications.' },
    ],
  },
  {
    slug: 'law-firm-marketing',
    name: 'Law Firm Marketing',
    category: 'industries',
    headline: 'SEO and marketing for law firms',
    intro: 'Win more cases with practice area pages that rank, local visibility and intake tracking — all within bar advertising guidelines.',
    features: [
      { title: 'Practice area SEO', text: 'Dedicated pages for each type of case you take.' },
      { title: 'Local search', text: 'Rank in maps for every office location.' },
      { title: 'Legal PPC', text: 'Carefully managed ads in high-cost legal keywords.' },
      { title: 'Intake tracking', text: 'Calls and forms tracked to signed cases.' },
    ],
  },
  {
    slug: 'dental-marketing',
    name: 'Dental Marketing',
    category: 'industries',
    headline: 'Dental SEO and marketing that fills your schedule',
    intro: 'Attract new patients for the treatments you want to grow with local SEO, reviews, ads and a modern practice website.',
    features: [
      { title: 'Local SEO', text: 'Appear first when nearby patients search.' },
      { title: 'Treatment pages', text: 'Pages for implants, orthodontics, cosmetic and more.' },
      { title: 'Patient reviews', text: 'More genuine reviews with simple follow-up systems.' },
      { title: 'Online booking', text: 'Booking integrations that reduce phone tag.' },
    ],
  },
  {
    slug: 'fashion-web-design',
    name: 'Fashion & Beauty Web Design',
    category: 'industries',
    headline: 'Web design for fashion and beauty brands',
    intro: 'Editorial, image-rich storefronts that capture your brand’s style while staying fast and easy to shop.',
    features: [
      { title: 'Editorial layouts', text: 'Lookbooks and campaigns woven into the shopping experience.' },
      { title: 'Shade & size tools', text: 'Finders and guides that reduce returns.' },
      { title: 'Fast imagery', text: 'Optimized images and video without slow loads.' },
      { title: 'Shoppable content', text: 'Turn social content into product links.' },
    ],
  },
  {
    slug: 'web-design-for-artists',
    name: 'Web Design for Artists',
    category: 'industries',
    headline: 'Portfolio websites for artists and makers',
    intro: 'Clean, gallery-style websites that put your work first and make it easy for buyers to enquire or purchase.',
    features: [
      { title: 'Gallery design', text: 'Layouts that showcase your work beautifully.' },
      { title: 'Easy updates', text: 'Add new pieces without technical help.' },
      { title: 'Shop integration', text: 'Sell originals and prints directly.' },
      { title: 'Commission requests', text: 'Simple forms for custom work enquiries.' },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)!;
export const servicesIn = (slug: string) => services.filter((s) => s.category === slug);
