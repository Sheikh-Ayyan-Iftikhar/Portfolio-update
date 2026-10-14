/**
 * Single source of truth for identity, nav and social links.
 * `placeholder: true` marks a link whose real URL is not known yet.
 * The UI renders those as inert so we never point visitors at a fake profile.
 */

export const site = {
  name: 'Sheikh Ayyan Iftikhar',
  shortName: 'Ayyan',
  monogram: 'AI',
  role: 'Product Builder at Aplinode — building Conspera (GTM Engineer)',
  title: 'Product Builder & GTM Engineer',
  location: 'Karachi, Pakistan',
  availability: 'Available remotely',
  email: 'ayaniftikhar4567@gmail.com',
  phone: '03361026803',
  phoneLabel: '0336 1026803',
  resume: '/resume/resume.pdf',
  profilePhoto: '/profile.jpg',
  intro:
    'I build products that help teams ship faster. Currently building Conspera at Aplinode — a GTM intelligence platform. Previously co-founded AperaBoost & Markaaf Studio, shipped 14+ live websites.',
  bio: `I'm a Product Builder at Aplinode, working on Conspera — a GTM intelligence platform that helps revenue teams find and close the right accounts. My role spans product strategy, GTM engineering, and building the frontend architecture.\n\nPreviously I co-founded AperaBoost (CTO) and Markaaf Studio, leading technical direction for client web products and shipping 14+ live websites — from business sites to interactive frontend tools. I'm currently studying Agentic AI and Spec-Driven Development at PIAIC.`,
  url: 'https://github.com/Sheikh-Ayyan-Iftikhar',
};

// real routes, not in-page anchors — the site is split across pages
export const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Projects', to: '/projects' },
  { label: 'Journey', to: '/journey' },
  { label: 'Contact', to: '/contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Sheikh-Ayyan-Iftikhar', icon: 'github', placeholder: false },
  { label: 'Facebook', href: 'https://www.facebook.com/Sheikh.Ayyan.fb/', icon: 'facebook', placeholder: false },
  { label: 'Instagram', href: 'https://www.instagram.com/sheikh.ayyan.iftikhar/', icon: 'instagram', placeholder: false },
  { label: 'X', href: 'https://x.com/Sheikh__Ayyan', icon: 'twitter', placeholder: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/Sheikh-Ayyan-Iftikhar', icon: 'linkedin', placeholder: false },
  { label: 'Saylani Alumni', href: 'https://alumni.saylaniit.com/sheikh_ayyan', icon: 'graduation-cap', placeholder: false },
  { label: 'Email', href: 'mailto:ayaniftikhar4567@gmail.com', icon: 'mail', placeholder: false },
];

export const stats = [{ value: 14, suffix: '+', label: 'Live websites shipped' }];
