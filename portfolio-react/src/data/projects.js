/**
 * Projects — every entry was fetched and confirmed reachable (HTTP 200) before
 * being added. `tech` lists only what the live deployment actually loads:
 * a React-only claim was removed from the uploader after its shipped bundle
 * showed no React markers.
 *
 * `featured` drives the single oversized case-study panel.
 */

export const projects = [
  {
    id: 'drag-drop',
    title: 'Drag & Drop File Uploader',
    kicker: 'Interactive interface',
    description:
      'A modern drag-and-drop file uploading interface focused on usability and smooth interaction.',
    longDescription:
      'Built around a single, focused interaction: getting a file from the user onto the page without friction. Drop targets respond with immediate visual feedback, and the interface stays legible and usable across screen sizes while files are being added and managed.',
    url: 'https://drag-and-drop-file-uploader-henna.vercel.app/',
    repo: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'File APIs', 'Responsive UI'],
    accent: '#4d8dff',
    featured: true,
    metric: { label: 'Interaction focus', value: 'Drag & drop' },
  },
  {
    id: 'weather',
    title: 'Weather App',
    kicker: 'API-driven app',
    description:
      'A responsive weather application providing a clean and simple interface for checking weather information.',
    longDescription:
      'Pulls live forecast data from the OpenWeatherMap API and presents it through a deliberately calm, readable layout. The focus was on making live data easy to scan at a glance, and keeping the layout solid from small phones up to wide desktop.',
    url: 'https://wheather-app-delta-two.vercel.app/',
    repo: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API', 'Responsive Design'],
    accent: '#7cb0ff',
    featured: false,
    metric: { label: 'Data source', value: 'Live API' },
  },
  {
    id: 'saylani-welfare',
    title: 'Saylani Welfare Clone',
    kicker: 'Layout recreation',
    description:
      'A responsive recreation of the Saylani Welfare website focused on layout accuracy, responsive design and frontend implementation.',
    longDescription:
      'A front-end study in reproducing an existing, content-heavy site accurately. The work was mostly about structure: getting the section rhythm, spacing and responsive behaviour right rather than adding anything the original did not need.',
    url: 'https://saylani-welfare-clone.vercel.app/',
    repo: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    accent: '#8b5cf6',
    featured: false,
    metric: { label: 'Focus', value: 'Layout accuracy' },
  },
  {
    id: 'saylani-enrollment',
    title: 'Saylani Enrollment Tasks',
    kicker: 'Practical frontend work',
    description:
      'A collection of frontend enrollment-related tasks and interfaces demonstrating practical frontend development skills.',
    longDescription:
      'A set of small, self-contained interfaces built during practical frontend coursework. Each one is a different layout problem, which made the collection useful for working through responsive behaviour and component thinking at a small scale.',
    url: 'https://sylani-enroll-tasks.vercel.app/',
    repo: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    accent: '#a78bfa',
    featured: false,
    metric: { label: 'Type', value: 'Multi-interface' },
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const gridProjects = projects.filter((p) => p.id !== featuredProject.id);
