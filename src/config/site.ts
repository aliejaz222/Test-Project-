// Central brand settings. Change these to rebrand the whole site.
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
  // Your real review profiles. Fill in rating and count only once they’re live and accurate.
  reviews: {
    google: { url: '#', rating: '', count: '' },
    facebook: { url: '#', rating: '', count: '' },
    clutch: { url: '#', rating: '', count: '' },
  },
  // Cities and regions you serve (Client Locations page).
  locations: [
    { region: 'West', cities: ['Los Angeles', 'San Diego', 'San Francisco', 'Seattle', 'Phoenix', 'Denver'] },
    { region: 'Central', cities: ['Dallas', 'Houston', 'Austin', 'Chicago', 'Minneapolis', 'Kansas City'] },
    { region: 'East', cities: ['New York', 'Boston', 'Miami', 'Atlanta', 'Philadelphia', 'Washington, DC'] },
    { region: 'International', cities: ['Toronto', 'London', 'Sydney', 'Dubai'] },
  ],
};

export const yearsInBusiness = new Date().getFullYear() - site.founded;
