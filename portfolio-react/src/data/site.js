/**
 * Single source of truth for identity, nav and social links.
 * `placeholder: true` marks a link whose real URL is not known yet.
 * The UI renders those as inert so we never point visitors at a fake profile.
 */

export const site = {
  name: 'Sheikh Ayyan Iftikhar',
  shortName: 'Ayyan',
  monogram: 'AI',
  role: 'Frontend Developer & Creative Web Developer',
  title: 'Python & Full-Stack Developer',
  location: 'Karachi, Pakistan',
  availability: 'Available remotely',
  email: 'ayaniftikhar4567@gmail.com',
  phone: '03361026803',
  phoneLabel: '0336 1026803',
  resume: '/resume/resume.pdf',
  profilePhoto: '/profile.jpg',
  intro:
    'I build modern, interactive and visually engaging web experiences that combine clean development with thoughtful design.',
  bio: `I'm a Python and Full-Stack Developer with a strong frontend foundation, focused on building responsive, modern web interfaces with clean, maintainable code. I'm comfortable shipping end-to-end — from UI implementation to Python-based backend and scripting work.\n\nI co-founded two ventures, leading technical direction for client web products at both, and I've shipped 14+ live websites for clients. I'm currently studying Agentic AI and Spec-Driven Development at PIAIC.`,
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
  { label: 'Facebook', href: 'https://www.facebook.com/AyanIftikhar.dev/', icon: 'facebook', placeholder: false },
  // x.com/AYAN__Iftikhar returns HTTP 404 (verified against a known-good
  // control profile), so it is shown inert rather than as a dead link.
  { label: 'X', href: null, icon: 'twitter', placeholder: true },
  // no verified LinkedIn URL - rendered inert until one is provided
  { label: 'LinkedIn', href: null, icon: 'linkedin', placeholder: true },
  { label: 'Email', href: 'mailto:ayaniftikhar4567@gmail.com', icon: 'mail', placeholder: false },
];

export const stats = [{ value: 14, suffix: '+', label: 'Live websites shipped' }];
