// Central brand settings — change these to rebrand the whole site.
export const site = {
  name: 'Dreamline Digital',
  tagline: 'Your one stop solution',
  founded: 2018,
  url: 'https://dreamlinedigital.com',
  phone: '(000) 000-0000',
  phoneHref: '+10000000000',
  email: 'hello@dreamlinedigital.com',
  address: 'Your Street Address, City, State ZIP',
  hours: 'Mon–Fri, 9am–6pm',
  // Contact form endpoint (e.g. Formspree, Web3Forms, or a Cloudflare Pages Function).
  formAction: 'https://formspree.io/f/your-form-id',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    x: '#',
  },
};

export const yearsInBusiness = new Date().getFullYear() - site.founded;
