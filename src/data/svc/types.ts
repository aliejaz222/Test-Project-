import type { PhotoKey } from '../images';

export type Item = { title: string; text: string };
export type Faq = { q: string; a: string };
export type Stat = { value: string; label: string };

export type Category = {
  slug: string;
  name: string;
  /** Short label used in the menu column heading */
  menuLabel: string;
  headline: string;
  subhead: string;
  intro: string;
  image: PhotoKey;
  stats: Stat[];
  why: Item[];
  process: Item[];
  faqs: Faq[];
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  /** Optional sub-group inside a category menu (e.g. "By Platform") */
  group?: string;
  image: PhotoKey;
  headline: string;
  subhead: string;
  intro: string;
  /** Two short side-by-side blocks under the hero */
  highlights: [Item, Item];
  /** "What's included" cards */
  included: Item[];
  /** Long-form section: heading + paragraphs */
  deepDive: { title: string; paragraphs: string[] };
  faqs?: Faq[];
};
