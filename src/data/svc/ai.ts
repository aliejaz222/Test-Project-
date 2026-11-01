import type { Service } from './types';

export const aiServices: Service[] = [
  {
    slug: 'ai-seo',
    name: 'AI SEO',
    category: 'ai',
    image: 'aiSphere',
    headline: 'AI SEO: Become the Brand AI Assistants Recommend',
    subhead: 'Show up in ChatGPT, Gemini, Perplexity and AI Overviews',
    intro: 'When someone asks an AI assistant for the best option in your category, does your name come up? AI SEO makes sure it does. We strengthen the signals these tools rely on, and your Google rankings benefit along the way.',
    highlights: [
      { title: 'We measure AI visibility', text: 'We regularly test the prompts your buyers use and track whether you’re mentioned, linked or ignored.' },
      { title: 'One effort, two wins', text: 'Clear, trustworthy content helps you in classic search and in AI answers at the same time.' },
    ],
    included: [
      { title: 'AI visibility audit', text: 'How AI tools describe you and your competitors today.' },
      { title: 'Answer-ready content', text: 'Clear, well-organized pages AI tools can quote.' },
      { title: 'Entity optimization', text: 'Consistent brand facts across the web.' },
      { title: 'Structured data', text: 'Schema that spells out who you are and what you offer.' },
      { title: 'Citation building', text: 'Mentions on sources AI models trust.' },
      { title: 'AI traffic tracking', text: 'Referral visits and leads from AI platforms.' },
    ],
    deepDive: {
      title: 'How AI tools decide who to mention',
      paragraphs: [
        'AI assistants build answers from what they’ve learned and what they can find. Brands that are described consistently, cited by trusted sources and explained clearly on their own site are far more likely to be recommended.',
        'Our work focuses on those three areas. We tighten the facts about your business, earn mentions in the places AI tools read, and restructure your key pages so the answers are easy to find and quote.',
      ],
    },
  },
  {
    slug: 'ai-development',
    name: 'AI Development',
    category: 'ai',
    image: 'aiBrain',
    headline: 'Custom AI Development That Saves Real Time',
    subhead: 'Chat assistants, automations and AI-powered tools',
    intro: 'AI is most useful when it solves a specific, boring problem. Answering the same customer questions. Sorting leads. Drafting product descriptions. We build practical AI tools that plug into the systems you already use.',
    highlights: [
      { title: 'Problem first', text: 'We start with the task that’s costing you time, then decide whether AI is the right fix.' },
      { title: 'Safe and secure', text: 'Your data stays protected, and humans review anything customer-facing.' },
    ],
    included: [
      { title: 'Website chat assistants', text: 'Trained on your products, policies and FAQs.' },
      { title: 'Lead qualification', text: 'Automatically sort and route incoming leads.' },
      { title: 'Content workflows', text: 'AI-assisted drafting with human editing built in.' },
      { title: 'Internal tools', text: 'Search and summarize your own documents.' },
      { title: 'Integrations', text: 'Connect to your CRM, store or help desk.' },
      { title: 'Training and support', text: 'Your team learns to use and maintain it.' },
    ],
    deepDive: {
      title: 'Building AI that people actually use',
      paragraphs: [
        'Plenty of AI projects end up as demos that nobody touches. We avoid that by starting small, solving one clear problem and measuring the time or money saved.',
        'Once the first tool proves its worth, we expand. Each build is documented and tested so it keeps working as your business changes.',
      ],
    },
  },
  {
    slug: 'google-ai-overviews-seo',
    name: 'Google AI Overviews SEO',
    category: 'ai',
    image: 'laptop',
    headline: 'Get Cited in Google AI Overviews',
    subhead: 'Be the source Google’s AI summary links to',
    intro: 'AI Overviews now sit above the regular results for many searches. Being cited there puts your brand at the very top of the page. We optimize your content and authority to earn those citations.',
    highlights: [
      { title: 'Know which searches matter', text: 'We find the queries in your space that trigger AI Overviews and who’s being cited today.' },
      { title: 'Content shaped for citation', text: 'Short, direct answers backed by detail and proof.' },
    ],
    included: [
      { title: 'Query mapping', text: 'Which target searches show AI Overviews.' },
      { title: 'Citation analysis', text: 'Who Google is citing and why.' },
      { title: 'Content restructuring', text: 'Clear answers, headings and supporting detail.' },
      { title: 'Schema markup', text: 'Structured data that clarifies your content.' },
      { title: 'Authority building', text: 'Mentions that make your pages more trustworthy.' },
      { title: 'Citation tracking', text: 'Monitor when your pages are referenced.' },
    ],
    deepDive: {
      title: 'What Google looks for in AI Overviews',
      paragraphs: [
        'AI Overviews tend to cite pages that already rank well, answer the question directly and come from sites Google trusts on that topic.',
        'So we combine solid SEO with careful content structure. Your key answer goes near the top, supported by detail, examples and sources. That makes your page easy for Google’s AI to pick up.',
      ],
    },
  },
  {
    slug: 'chatgpt-seo',
    name: 'ChatGPT SEO',
    category: 'ai',
    image: 'aiChip',
    headline: 'ChatGPT SEO: Get Recommended in AI Conversations',
    subhead: 'Influence how ChatGPT finds and describes your brand',
    intro: 'Millions of people ask ChatGPT for product and service recommendations every day. We work on the signals that shape those answers so your brand gets mentioned, described accurately and linked.',
    highlights: [
      { title: 'Prompt testing', text: 'We track a set of buyer questions over time and report how often you appear.' },
      { title: 'Accurate descriptions', text: 'We fix outdated or wrong information that AI tools repeat about you.' },
    ],
    included: [
      { title: 'Prompt tracking', text: 'Regular tests of the questions buyers ask.' },
      { title: 'Crawler access', text: 'Make sure AI crawlers can read your site.' },
      { title: 'Third-party presence', text: 'Reviews, lists and articles AI tools reference.' },
      { title: 'Product data', text: 'Structured product info for AI shopping features.' },
      { title: 'Brand fact sheet', text: 'Clear, consistent facts about your company.' },
      { title: 'Monthly reporting', text: 'Mention rate and referral traffic.' },
    ],
    deepDive: {
      title: 'How we approach ChatGPT visibility',
      paragraphs: [
        'ChatGPT draws on what it learned in training and on what it finds when it searches the web. We work on both: building a strong, consistent presence across trusted sites, and making your own site easy for its search tools to read.',
        'Results build gradually, so we track mentions over time rather than chasing a single answer.',
      ],
    },
  },
  {
    slug: 'perplexity-seo',
    name: 'Perplexity SEO',
    category: 'ai',
    image: 'aiBrain',
    headline: 'Perplexity SEO: Be the Source Behind the Answer',
    subhead: 'Earn citations in a research-focused answer engine',
    intro: 'Perplexity shows its sources with every answer, and its users click them. We help your pages become those sources with fresh, factual and well-organized content.',
    highlights: [
      { title: 'Fresh beats stale', text: 'Perplexity favors up-to-date information. We keep your key pages current.' },
      { title: 'Facts and figures', text: 'Pages with clear data, examples and references get cited more often.' },
    ],
    included: [
      { title: 'Source analysis', text: 'Which sites Perplexity cites for your topics.' },
      { title: 'Content updates', text: 'Refreshing key pages with current facts.' },
      { title: 'Data-rich pages', text: 'Original stats, tables and clear explanations.' },
      { title: 'Technical access', text: 'Fast, crawlable pages answer engines can read.' },
      { title: 'Topic coverage', text: 'Fill gaps where competitors get cited.' },
      { title: 'Referral tracking', text: 'Measure visits from answer engines.' },
    ],
    deepDive: {
      title: 'Winning citations in answer engines',
      paragraphs: [
        'Answer engines reward pages that are easy to verify. Clear claims, supporting data and a trustworthy site make your content a safe choice to cite.',
        'We build that kind of content around the topics your buyers research, then track citations and referral traffic so you can see the impact.',
      ],
    },
  },
];
