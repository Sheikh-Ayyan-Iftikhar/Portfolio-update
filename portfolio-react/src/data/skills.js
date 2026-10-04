/**
 * Skills grouped for display. No proficiency percentages — levels imply
 * certification or measured experience that isn't backed by anything.
 * Grouped to match the resume's SKILLS section.
 */

export const skillGroups = [
  {
    group: 'Frontend Development',
    items: [
      { name: 'HTML5', mark: 'H5' },
      { name: 'CSS3', mark: 'C3' },
      { name: 'JavaScript (ES6)', mark: 'JS' },
      { name: 'TypeScript', mark: 'TS' },
      { name: 'React', mark: 'R' },
      { name: 'Next.js', mark: 'N' },
      { name: 'Tailwind CSS', mark: 'TW' },
      { name: 'Bootstrap', mark: 'BS' },
    ],
  },
  {
    group: 'Full-Stack & Programming',
    items: [
      { name: 'Full-Stack Web Development', mark: 'FS' },
      { name: 'Python', mark: 'Py' },
    ],
  },
  {
    group: 'Tools & Technologies',
    items: [
      { name: 'Git', mark: 'Git' },
      { name: 'GitHub', mark: 'Gh' },
      { name: 'Vite', mark: 'V' },
      { name: 'Three.js', mark: '3D' },
      { name: 'React Three Fiber', mark: 'R3F' },
    ],
  },
  {
    group: 'Currently Learning',
    items: [
      { name: 'Agentic AI · PIAIC', mark: 'AI' },
      { name: 'Spec-Driven Development', mark: 'SDD' },
    ],
  },
];

export const focusAreas = [
  { label: 'Frontend Development', note: 'Modern, responsive, scalable interfaces.' },
  { label: 'Full-Stack Delivery', note: 'End-to-end, from UI implementation to deployment.' },
  { label: 'Responsive Design', note: 'Layouts that hold up from small phones to wide desktop.' },
  { label: 'Interactive Experiences', note: 'Motion and 3D used to support the idea, not for decoration.' },
  { label: 'Clean Code', note: 'Readable, componentised and easy to maintain.' },
  { label: 'Performance', note: 'Fast loads, lazy work, restrained animation loops.' },
];

export const services = [
  {
    title: 'Frontend Development',
    note: 'Modern, responsive and scalable interfaces.',
    detail: 'Component-driven frontends built to stay maintainable as they grow.',
  },
  {
    title: 'Full-Stack Web Development',
    note: 'End-to-end, from UI to backend.',
    detail: 'Responsive interfaces wired to Python-based backends and scripting work.',
  },
  {
    title: 'Interactive Websites',
    note: 'Smooth animations and immersive user experiences.',
    detail: 'Scroll, hover and 3D interaction tuned to feel natural rather than busy.',
  },
  {
    title: 'UI Implementation',
    note: 'Converting designs into responsive, polished interfaces.',
    detail: 'Pixel-accurate builds that hold their intent across every breakpoint.',
  },
];
