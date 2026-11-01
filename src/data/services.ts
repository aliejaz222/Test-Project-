// All service and category pages are generated from the files in ./svc.
// Edit a service there and its page, menu link and sitemap entry update automatically.

import { categories } from './svc/categories';
import { seoServices } from './svc/seo';
import { paidServices } from './svc/paid';
import { marketingServices } from './svc/marketing';
import { aiServices } from './svc/ai';
import { webServices } from './svc/web';
import { industryServices } from './svc/industries';

export type { Category, Service, Item, Faq, Stat } from './svc/types';
export { categories };

export const services = [
  ...seoServices,
  ...paidServices,
  ...marketingServices,
  ...aiServices,
  ...webServices,
  ...industryServices,
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)!;
export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
export const servicesIn = (slug: string, group?: string) =>
  services.filter((s) => s.category === slug && (!group || s.group === group));
