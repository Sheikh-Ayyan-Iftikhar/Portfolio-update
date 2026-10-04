/* ==========================================================================
   AYAN IFTIKHAR — PORTFOLIO SHARED SCRIPT
   ========================================================================== */

/* ---------- icon library ---------- */
const IC = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="1.5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>`,
  device: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="14" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>`,
  layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="1.5"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="20"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>`,
  seo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  pixel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>`,
  grad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.5 8.5 0 0 1-4-1L3 20l1.1-5A8.5 8.5 0 1 1 21 11.5Z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  msg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12c0-5.5-4.5-10-10-10Z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.5-3.5h-3V7.8c0-1 .3-1.8 1.8-1.8H16.6V2.8C16.3 2.8 15.2 2.7 14 2.7c-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3.5H9.8V21h3.7Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2h3.4l-7.5 8.6L23 22h-6.8l-5.3-7.7L5.2 22H1.8l8.1-9.3L1 2h7l4.8 7.1L18.9 2Zm-1.2 18h1.9L7.2 3.9H5.2L17.7 20Z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  expand: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};

const EMAIL = 'ayaniftikhar4567@gmail.com';
const SOCIALS = {
  gh: 'https://github.com/ayaniftikhar8',
  fb: 'https://www.facebook.com/AyanIftikhar.dev/',
  x:  'https://x.com/AYAN__Iftikhar',
};

/* ---------- projects ----------
   tags describe project type / verified stack only.
   cat drives the projects-page filter buckets. */
const PROJECTS = [
  { name:'AYAN HARDWARE', url:'https://ayan-hardware.netlify.app', cat:'business',
    desc:'Premium business website for a UPVC hardware supplier — built for a client, featuring a live product catalog, customer reviews and an admin dashboard.',
    tags:['HTML','CSS','JavaScript','Business Site'], ic:IC.briefcase },
  { name:'Multiple Step Form', url:'https://multiple-step-form-task.netlify.app', cat:'frontend',
    desc:'A multi-step form experience optimized for clear conversion flow and responsive validation.',
    tags:['HTML','CSS','JavaScript','Forms'], ic:IC.msg },
  { name:'LetMeServe', url:null, cat:'frontend',
    desc:'',
    tags:[], ic:IC.layers },
  { name:'Weather App', url:'https://wheather-app-delta-two.vercel.app/', cat:'frontend',
    desc:'Responsive weather application displaying live weather data through a clean, user-friendly interface.',
    tags:['HTML','CSS','JavaScript','App'], ic:IC.globe },
  { name:'Drag & Drop File Uploader', url:'https://drag-and-drop-file-uploader-henna.vercel.app/', cat:'frontend',
    desc:'A polished file upload UI with drag-and-drop interaction and intuitive usability.',
    tags:['HTML','CSS','JavaScript','UI Task'], ic:IC.layout },
  { name:'Saylani Welfare Clone', url:'https://saylani-welfare-clone.vercel.app/', cat:'clone',
    desc:'Frontend recreation of the Saylani Welfare website, built to practice responsive layouts and modern frontend development.',
    tags:['HTML','CSS','JavaScript','Clone'], ic:IC.layout },
  { name:'Saylani Enrollment Tasks', url:'https://sylani-enroll-tasks.vercel.app/', cat:'frontend',
    desc:'Frontend project demonstrating practical implementation of forms, layouts, and interactive UI components.',
    tags:['HTML','CSS','JavaScript','Forms'], ic:IC.msg },
  { name:'Chat App', url:'https://ayan-ki-chat-app.netlify.app', cat:'frontend',
    desc:'Real-time chat application with a modern messaging interface.',
    tags:['HTML','CSS','JavaScript','App'], ic:IC.layers },
  { name:'Frontend Task Calculator', url:'https://frontend-task-calculator.netlify.app', cat:'frontend',
    desc:'Beautiful responsive calculator with a modern UI and clean JavaScript logic.',
    tags:['HTML','CSS','JavaScript','App'], ic:IC.cpu },
  { name:'Movenpick Homepage Clone', url:'https://movenpick-homepage-clone.netlify.app', cat:'clone',
    desc:'Pixel-perfect responsive clone of the Movenpick homepage with a professional layout and animations.',
    tags:['HTML','CSS','JavaScript','Clone'], ic:IC.layout },
  { name:'Periodic Table', url:'https://smit-assignments-periodic-table.netlify.app', cat:'frontend',
    desc:'Interactive periodic table assignment with responsive design and element details.',
    tags:['HTML','CSS','JavaScript','Assignment'], ic:IC.globe },
  { name:'Chessboard', url:'https://smit-assignment-chessboard.netlify.app', cat:'frontend',
    desc:'A visually appealing chessboard assignment built with modern CSS and a responsive layout.',
    tags:['HTML','CSS','JavaScript','Assignment'], ic:IC.briefcase },
  { name:'AI Chat App Task', url:'https://ai-chat-app-task.netlify.app', cat:'frontend',
    desc:'AI-style chat interface task built for a client challenge, focusing on modern UX and interactive messaging.',
    tags:['HTML','CSS','JavaScript','App'], ic:IC.chat },
  { name:'Areesh Islamic Academy', url:'https://areesh-islamic-academy.netlify.app', cat:'business',
    desc:'Professional educational website for an Islamic academy with structured content and a clean academic feel.',
    tags:['HTML','CSS','JavaScript','Business Site'], ic:IC.pin },
  { name:'A D Enterprises', url:'https://a-d-enterprises.netlify.app', cat:'business',
    desc:'Business website for a trading enterprise, designed with a strong professional identity and clear service presentation.',
    tags:['HTML','CSS','JavaScript','Business Site'], ic:IC.briefcase },
  { name:'Naseeb Biryani', url:'https://naseeb-biryani-aperaboost.netlify.app', cat:'business',
    desc:'Restaurant landing page focused on food branding, smooth browsing and a strong visual identity.',
    tags:['HTML','CSS','JavaScript','Landing Page'], ic:IC.globe },
  { name:'Al Jeddah Foods', url:'https://al-jeddah-foods-aperaboost.netlify.app', cat:'business',
    desc:'Food brand website with a premium presentation, menu structure and responsive marketing-focused layout.',
    tags:['HTML','CSS','JavaScript','Business Site'], ic:IC.layers },
];

const SKILLS = {
  'Frontend Development': [
    { n:'HTML5', b:'H5', c:'#e34f26' }, { n:'CSS3', b:'C3', c:'#2965f1' },
    { n:'JavaScript (ES6)', b:'JS', c:'#8a7a1f' }, { n:'TypeScript', b:'TS', c:'#3178c6' },
    { n:'React.js', b:'R', c:'#146ab5' }, { n:'Next.js', b:'N', c:'#2a2a2a' },
    { n:'Tailwind CSS', b:'TW', c:'#0ea5e9' }, { n:'Bootstrap', b:'BS', c:'#7952b3' },
  ],
  'Programming Languages': [
    { n:'Python (Learning)', b:'Py', c:'#3776ab' },
  ],
  'UI / UX': [
    { n:'Figma', b:'Fg', c:'#a259ff' }, { n:'Responsive Design', b:'RD', c:'#3b82f6' },
    { n:'UI/UX Design', b:'UX', c:'#8b5cf6' },
  ],
  'Tools & Deployment': [
    { n:'Git', b:'Git', c:'#f05032' }, { n:'GitHub', b:'Gh', c:'#2a2a2a' },
    { n:'VS Code', b:'VS', c:'#007acc' }, { n:'Netlify', b:'Nt', c:'#00a99a' },
    { n:'Vercel', b:'▲', c:'#2a2a2a' },
  ],
  'AI-Assisted Workflow': [
    { n:'Agentic AI (Learning)', b:'AI', c:'#0ea5e9' },
    { n:'ChatGPT', b:'GPT', c:'#10a37f' }, { n:'AI Automation', b:'⚙', c:'#8b5cf6' },
    { n:'AI Content Tools', b:'✎', c:'#c2469b' },
  ],
  'Soft Skills': [
    { n:'Problem Solving', b:'◆', c:'#3b82f6' }, { n:'Communication', b:'◆', c:'#60a5fa' },
    { n:'Fast Learner', b:'◆', c:'#8b5cf6' }, { n:'Teamwork', b:'◆', c:'#a78bfa' },
  ],
};

/* ---------- experience & education ---------- */
const EXPERIENCE = [
  { tag:'Venture', role:'Former Co-Founder & CTO', org:'AperaBoost', period:'Past role',
    desc:'Led the technical direction of AperaBoost, shaping how the team builds and ships web products for clients — from UI implementation through to deployment.',
    ic:IC.bolt },
  { tag:'Venture', role:'Former Co-Founder', org:'Markaaf Studio', period:'Past role',
    desc:'Co-founded Markaaf Studio and helped build with a strong product mindset alongside a growing team, before shifting full-time focus to AperaBoost.',
    ic:IC.sparkle },
  { tag:'Freelance', role:'Freelance Frontend Developer', org:'Client Projects', period:'Ongoing',
    desc:'Built and shipped 14+ live websites for clients — business sites, restaurant and food-brand pages, an educational academy site, and interactive front-end tools.',
    ic:IC.code },
  { tag:'Internship', role:'Frontend Development Intern', org:'Internee.pk', period:'2-Month Virtual Internship',
    desc:'Completed a structured virtual internship applying HTML, CSS and JavaScript fundamentals to real front-end tasks under mentorship.',
    ic:IC.briefcase },
];

const EDUCATION = [
  { tag:'Currently Learning', role:'Agentic AI', org:'PIAIC', period:'In progress',
    desc:'Currently studying Agentic AI at PIAIC — building on my frontend foundation with AI engineering and intelligent systems.',
    ic:IC.ai },
  { tag:'Education', role:'Student', org:'SMIT (Saylani Mass IT Training)', period:'Current',
    desc:'Foundation in IT and web development, alongside hands-on project work.',
    ic:IC.grad },
];

const CERTIFICATES = [
  {
    title: 'HTML, CSS &amp; JavaScript — Internship',
    issuer: 'Internee.pk — Virtual Internship Platform',
    duration: '2-Month Virtual Internship',
    credentialName: 'Ayan Ahmed',
    desc: 'Completed a 2-month virtual internship as an HTML, CSS &amp; JS Internship Intern — applying core frontend fundamentals to real, structured tasks under mentorship.',
    img: 'assets/certificates/internee-pk-html-css-js.png',
    imgAlt: 'Certificate of Participation — Internee.pk HTML CSS JS Internship — Ayan Ahmed',
  },
];

const SERVICES = [
  { t:'Frontend Development', d:'Interactive interfaces built with React and modern JavaScript.', ic:IC.code },
  { t:'Responsive Website Design', d:'Layouts that adapt beautifully to every screen size.', ic:IC.device },
  { t:'Landing Page Design', d:'High-converting pages built for impact and speed.', ic:IC.layout },
  { t:'Portfolio Websites', d:'Personal brands presented with polish and clarity.', ic:IC.briefcase },
  { t:'Business Websites', d:'Professional sites that represent your brand well.', ic:IC.globe },
  { t:'Website Redesign', d:'Modernizing outdated sites with a fresh, premium UI.', ic:IC.refresh },
  { t:'AI-Assisted Workflows', d:'Using AI tooling to move faster without cutting corners.', ic:IC.ai },
  { t:'Website Optimization', d:'Faster load times and smoother, cleaner performance.', ic:IC.bolt },
];

const WHY = [
  { t:'Clean Code', d:'Readable & maintainable', ic:IC.code },
  { t:'Fast Performance', d:'Optimized load times', ic:IC.bolt },
  { t:'Responsive Design', d:'Looks great everywhere', ic:IC.device },
  { t:'SEO Friendly', d:'Built to be found', ic:IC.seo },
  { t:'Pixel-Perfect UI', d:'Detail-obsessed builds', ic:IC.pixel },
  { t:'Modern Design', d:'Current, on-trend interfaces', ic:IC.sparkle },
  { t:'AI-Assisted Speed', d:'Smart, efficient workflows', ic:IC.ai },
  { t:'On-Time Delivery', d:'Reliable turnaround', ic:IC.clock },
];

const PRINCIPLES = [
  { ic:IC.code, t:'Clean Code', d:'Readable, maintainable' },
  { ic:IC.bolt, t:'Performance', d:'Fast, optimized builds' },
  { ic:IC.sparkle, t:'Creativity', d:'Thoughtful UI details' },
  { ic:IC.device, t:'User-Friendly', d:'Design that just works' },
];

/* ---------- utilities ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hostOf = (url) => (url || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
/* escape data text before it is interpolated into markup */
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/* ---------- header / nav ---------- */
function initNav(){
  const header = document.getElementById('siteHeader');
  if (header){
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { header.classList.toggle('scrolled', window.scrollY > 20); ticking = false; });
    }, { passive:true });
  }
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const scrim = document.getElementById('menuScrim');
  if (burger && mobileMenu){
    const closeMenu = () => { mobileMenu.classList.remove('open'); burger.classList.remove('open'); scrim && scrim.classList.remove('open'); };
    burger.addEventListener('click', () => {
      const willOpen = !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', willOpen);
      burger.classList.toggle('open', willOpen);
      scrim && scrim.classList.toggle('open', willOpen);
    });
    $$('a', mobileMenu).forEach(a => a.addEventListener('click', closeMenu));
    scrim && scrim.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  /* active link highlight (also lights a dropdown trigger when a child page is active) */
  const current = (location.pathname.split('/').pop() || 'index.html');
  $$('.nav-links a, .mobile-menu a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0];
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
      const parentDropdown = a.closest('.nav-dropdown');
      if (parentDropdown) parentDropdown.querySelector('.dropdown-trigger')?.classList.add('active');
    }
  });

  /* dropdown menus: hover on desktop (CSS), tap-to-toggle on touch devices */
  $$('.nav-dropdown').forEach(dd => {
    const trigger = dd.querySelector('.dropdown-trigger');
    trigger?.addEventListener('click', (e) => {
      if (window.matchMedia('(hover: none)').matches) {
        e.preventDefault();
        const willOpen = !dd.classList.contains('open');
        $$('.nav-dropdown.open').forEach(o => o.classList.remove('open'));
        dd.classList.toggle('open', willOpen);
      }
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) $$('.nav-dropdown.open').forEach(o => o.classList.remove('open'));
  });

  /* terminal-style breadcrumb in brand */
  const pathLine = document.getElementById('pathLine');
  if (pathLine){
    const name = current.replace('.html','') || 'home';
    pathLine.textContent = `~/ayyan/${name === 'index' ? '' : name}`;
  }
}

/* ---------- scroll progress ---------- */
function initScrollProgress(){
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1) * 100) + '%';
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive:true });
  update();
}

/* ---------- reveal on scroll ---------- */
function initReveal(){
  const reduced = prefersReduced();
  if (reduced || !('IntersectionObserver' in window)){
    $$('.reveal').forEach(el => el.classList.add('in-view'));
    window._revealIO = null;
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));
  window._revealIO = io;
}
function stagger(selector, step = 70){
  const io = window._revealIO;
  $$(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * step) + 'ms';
    io ? io.observe(el) : el.classList.add('in-view');
  });
}

/* ---------- footer year ---------- */
function initFooterYear(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

/* ---------- ambient particle canvas (lightweight, no WebGL) ---------- */
function initParticles(){
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0, particles = [], rafId = null;

  function resize(){
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function setup(){
    resize();
    const count = Math.min(50, Math.floor((w * h) / 38000));
    particles = Array.from({ length:count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.16, vy: (Math.random() - 0.5) * 0.16,
      hue: Math.random() > 0.5 ? '59,130,246' : '139,92,246',
      a: Math.random() * 0.45 + 0.15,
    }));
  }
  function frame(){
    ctx.clearRect(0, 0, w, h);
    for (const p of particles){
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},${p.a})`;
      ctx.fill();
    }
    rafId = requestAnimationFrame(frame);
  }
  function start(){ if (rafId === null) rafId = requestAnimationFrame(frame); }
  function stop(){ if (rafId !== null){ cancelAnimationFrame(rafId); rafId = null; } }

  setup();
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(setup, 200); }, { passive:true });

  /* pause when the tab is hidden or the canvas is off-screen */
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  if ('IntersectionObserver' in window){
    new IntersectionObserver(([e]) => e.isIntersecting ? start() : stop()).observe(canvas);
  }

  if (prefersReduced()){ ctx.clearRect(0, 0, w, h); stop(); } else start();
}

/* ---------- hero 3D parallax tilt ---------- */
function initStageTilt(){
  const stage = $('.stage');
  const inner = $('.stage-inner');
  if (!stage || !inner || prefersReduced()) return;

  const floats = $$('.float-card', stage);
  let targetX = 0, targetY = 0, curX = 0, curY = 0, rafId = null, running = false;

  function setTarget(e){
    const rect = stage.getBoundingClientRect();
    targetX = Math.max(-0.9, Math.min(0.9, (e.clientX - rect.left) / rect.width - 0.5));
    targetY = Math.max(-0.9, Math.min(0.9, (e.clientY - rect.top) / rect.height - 0.5));
  }
  function animate(){
    curX += (targetX - curX) * 0.1;
    curY += (targetY - curY) * 0.1;
    inner.style.transform = `rotateY(${(curX * 16).toFixed(2)}deg) rotateX(${(-curY * 16).toFixed(2)}deg)`;
    for (const el of floats){
      const z = parseFloat(getComputedStyle(el).getPropertyValue('--z')) || 50;
      const tx = curX * (z / 8);
      const ty = curY * (z / 12);
      el.style.transform = `translateZ(${z}px) translateX(${tx.toFixed(2)}px) translateY(${ty.toFixed(2)}px)`;
    }
    const settled = Math.abs(targetX - curX) < 0.001 && Math.abs(targetY - curY) < 0.001;
    if (settled && targetX === 0 && targetY === 0){
      inner.style.transform = '';
      floats.forEach(el => { el.style.transform = ''; });
      running = false; rafId = null; return;
    }
    rafId = requestAnimationFrame(animate);
  }
  function kick(){
    if (running) return;
    running = true; rafId = requestAnimationFrame(animate);
  }
  stage.addEventListener('pointermove', (e) => { setTarget(e); kick(); }, { passive:true });
  stage.addEventListener('pointerdown', (e) => { setTarget(e); kick(); }, { passive:true });
  stage.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; kick(); });
}

/* ---------- generic 3D card pointer tilt ---------- */
function initCardTilt(){
  if (prefersReduced()) return;
  const sel = '.project-card-3d, .about-card-3d, .skills-category-3d, .founder-card-3d, .contact-panel-3d, .contact-form-panel-3d, .credential-card-3d, .footer-panel-3d, .footer-bottom';
  const MAX = 7;
  let ticking = false;

  document.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const card = e.target.closest?.(sel);
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      card.style.setProperty('--tilt-x', (-py * MAX).toFixed(2) + 'deg');
      card.style.setProperty('--tilt-y', (px * MAX).toFixed(2) + 'deg');
      ticking = false;
    });
  }, { passive:true });

  document.addEventListener('pointerout', (e) => {
    const card = e.target.closest?.(sel);
    if (!card || card.contains(e.relatedTarget)) return;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  }, { passive:true });
}

/* ---------- typewriter ---------- */
function initTypewriter(){
  const el = document.getElementById('roleText');
  if (!el) return;
  const roles = ['Python & Full-Stack Developer', 'Frontend Developer', 'Former Co-Founder & CTO, AperaBoost'];
  if (prefersReduced()){ el.textContent = roles[0]; return; }
  let rIdx = 0, cIdx = 0, deleting = false;
  function loop(){
    const full = roles[rIdx];
    if (!deleting){
      cIdx++; el.textContent = full.slice(0, cIdx);
      if (cIdx === full.length){ deleting = true; return setTimeout(loop, 1600); }
    } else {
      cIdx--; el.textContent = full.slice(0, cIdx);
      if (cIdx === 0){ deleting = false; rIdx = (rIdx + 1) % roles.length; }
    }
    setTimeout(loop, deleting ? 34 : 64);
  }
  loop();
}

/* ---------- count-up for verified hero stats ---------- */
function initCountUp(){
  const els = $$('.hero-stats .stat b[data-count]');
  if (!els.length) return;
  if (prefersReduced() || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) { io.unobserve(el); return; }
      const suffix = el.textContent.replace(/[0-9]/g, '');
      const steps = 32;
      let i = 0;
      const timer = setInterval(() => {
        i++;
        el.textContent = Math.round(target * i / steps) + suffix;
        if (i >= steps) { el.textContent = target + suffix; clearInterval(timer); }
      }, 26);
      io.unobserve(el);
    });
  }, { threshold:0.5 });
  els.forEach(el => io.observe(el));
}

/* ---------- icon slots ---------- */
function initIconSlots(){
  const map = { icMail:IC.mail, icClock:IC.clock, icPin:IC.pin, ghIcon:IC.github, ghIcon3d:IC.github, fbIcon3d:IC.facebook, xIcon3d:IC.x, mailIcon3d:IC.mail };
  $$('[data-ic]').forEach(el => { el.innerHTML = IC[el.dataset.ic] || ''; });
  $$('#ghIcon, #ghIcon2, #ghIcon3d').forEach(el => { el.innerHTML = IC.github; });
  $$('#fbIcon, #fbIcon2, #fbIcon3d').forEach(el => { el.innerHTML = IC.facebook; });
  $$('#xIcon, #xIcon2, #xIcon3d').forEach(el => { el.innerHTML = IC.x; });
  $$('#icMail3d, #icMail').forEach(el => { el.innerHTML = IC.mail; });
  $$('#icClock3d, #icClock').forEach(el => { el.innerHTML = IC.clock; });
  $$('#icPin3d, #icPin').forEach(el => { el.innerHTML = IC.pin; });
  // 3D footer profile links: <a data-icon="github|facebook|x|mail">
  $$('.social-ic-3d[data-icon]').forEach(el => { el.innerHTML = IC[el.dataset.icon] || ''; });
  void map;
}

/* ---------- shared markup builders ---------- */
function projectCardHTML(p, i){
  const url = hostOf(p.url);
  const tags = (p.tags || []).map(t => `<span class="tech-tag-3d">${esc(t)}</span>`).join('');
  const actions = p.url
    ? `<div class="project-links-3d">
         <a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" class="project-link-3d">${IC.external} Live Demo</a>
       </div>`
    : `<div class="project-links-3d"><span class="project-link-3d is-static" aria-disabled="true">Details on request</span></div>`;
  return `
    <article class="glass project-card-3d reveal" style="--tilt-x:0deg;--tilt-y:0deg" data-cat="${esc(p.cat)}">
      <div class="project-card-inner">
        <div class="browser-mock-3d">
          <div class="browser-bar-3d">
            <div class="browser-dots-3d"><span></span><span></span><span></span></div>
            <div class="browser-url-3d">${esc(url || 'letmeserve')}</div>
          </div>
          <div class="browser-screen-3d"><span class="glyph-3d">${p.ic}</span></div>
        </div>
        <div class="project-body-3d">
          <h3>${esc(p.name)}</h3>
          ${p.desc ? `<p>${esc(p.desc)}</p>` : ''}
          ${tags ? `<div class="project-tech-3d">${tags}</div>` : ''}
          ${actions}
        </div>
      </div>
    </article>`;
}

function projectLegacyCardHTML(p){
  return `
    <div class="glass project-card reveal">
      <div class="browser-mock">
        <div class="browser-bar">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">${esc(hostOf(p.url))}</div>
        </div>
        <div class="browser-screen"><span class="glyph">${p.ic}</span></div>
      </div>
      <div class="project-body">
        <h3>${esc(p.name)}</h3>
        ${p.desc ? `<p>${esc(p.desc)}</p>` : ''}
        ${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" class="project-live">Live Demo →</a>` : ''}
      </div>
    </div>`;
}

/* ---------- projects (3D page) ---------- */
function renderProjects3d(){
  const grid = document.getElementById('projectsGrid3d');
  if (!grid) return;

  function paint(list){
    grid.innerHTML = list.map(projectCardHTML).join('');
    stagger('#projectsGrid3d .project-card-3d', 80);
    bindTilt();
  }
  paint(PROJECTS);

  const filterBar = $('.projects-filter');
  if (filterBar){
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const f = btn.dataset.filter;
      $$('.filter-btn', filterBar).forEach(b => b.classList.toggle('active', b === btn));
      const list = f === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === f);
      paint(list);
      if (window._revealIO){
        $$('#projectsGrid3d .project-card-3d').forEach(el => {
          el.style.transitionDelay = '0ms';
          window._revealIO.observe(el);
        });
      }
    });
  }
}

/* ---------- projects preview (home) ---------- */
function renderProjectsPreview(){
  const grid = document.getElementById('projectsGridPreview');
  if (!grid) return;
  grid.innerHTML = PROJECTS.filter(p => p.url).slice(0, 3).map(projectCardHTML).join('');
  stagger('#projectsGridPreview .project-card-3d', 100);
  bindTilt();
}

/* ---------- legacy projects renderer (kept for older pages) ---------- */
function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(projectLegacyCardHTML).join('');
  stagger('.project-card', 100);
}

/* ---------- skills ---------- */
function renderSkills3d(){
  const wrap = document.getElementById('skills3dGrid');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(SKILLS).map(([group, items]) => `
    <div class="glass skills-category-3d reveal" style="--tilt-x:0deg;--tilt-y:0deg">
      <h3>${esc(group)}</h3>
      <div class="skill-grid-3d">
        ${items.map(i => `
          <div class="glass skill-chip-3d">
            <span class="skill-badge-3d" style="background:${esc(i.c)}">${esc(i.b)}</span>
            <span>${esc(i.n)}</span>
          </div>`).join('')}
      </div>
    </div>`).join('');
  stagger('#skills3dGrid .skills-category-3d', 100);
}

function renderSkills(){
  const wrap = document.getElementById('skillsWrap');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(SKILLS).map(([group, items]) => `
    <div class="skills-group reveal">
      <h3>${esc(group)}</h3>
      <div class="skill-grid">
        ${items.map(i => `<div class="glass skill-chip"><span class="skill-badge" style="background:${esc(i.c)}">${esc(i.b)}</span><span>${esc(i.n)}</span></div>`).join('')}
      </div>
    </div>`).join('');
  stagger('.skill-chip', 40);
}

/* ---------- experience timeline ---------- */
function renderTimeline(){
  const wrap = document.getElementById('timeline3d');
  if (!wrap) return;

  function itemsHTML(list, offset = 0){
    return list.map((x, i) => `
      <div class="timeline-item-3d reveal ${(i + offset) % 2 ? 'alt' : ''}">
        <div class="timeline-node-3d"></div>
        <div class="timeline-card-3d">
          <span class="timeline-tag-3d">${esc(x.tag)}${x.period ? ` · ${esc(x.period)}` : ''}</span>
          <h3>${esc(x.role)}</h3>
          <span class="org">${esc(x.org)}</span>
          <p>${esc(x.desc)}</p>
        </div>
      </div>`).join('');
  }

  wrap.innerHTML = itemsHTML(EXPERIENCE) +
    `<div class="timeline-item-3d reveal" style="padding-top:8px">
       <div class="timeline-node-3d" style="border-color:var(--cyan);box-shadow:0 0 0 6px rgba(34,211,238,.12)"></div>
     </div>` +
    `<div id="education" style="scroll-margin-top:110px"></div>` +
    itemsHTML(EDUCATION, EXPERIENCE.length);
  stagger('#timeline3d .timeline-item-3d', 110);
}

/* ---------- services / why / about principles ---------- */
function renderServices(){
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <div class="glass feature-card service-card reveal">
      <span class="ic">${s.ic}</span>
      <h4>${esc(s.t)}</h4>
      <p>${esc(s.d)}</p>
      <span class="service-arrow">→</span>
    </div>`).join('');
  stagger('#servicesGrid .feature-card');
}

function renderWhy(){
  const grid = document.getElementById('whyGrid');
  if (!grid) return;
  grid.innerHTML = WHY.map(w => `
    <div class="glass feature-card reveal"><span class="ic">${w.ic}</span><h4>${esc(w.t)}</h4><p>${esc(w.d)}</p></div>`).join('');
  stagger('#whyGrid .feature-card');
}

function renderPrinciples(){
  const wrap = document.getElementById('aboutIcons3d') || document.getElementById('aboutIcons');
  if (!wrap) return;
  const is3d = wrap.id === 'aboutIcons3d';
  wrap.innerHTML = PRINCIPLES.map(p => is3d
    ? `<div class="glass about-icon-card-3d reveal" style="--tilt-x:0deg;--tilt-y:0deg">
         <span class="ic">${p.ic}</span><b>${esc(p.t)}</b><span>${esc(p.d)}</span>
       </div>`
    : `<div class="glass about-icon-card reveal"><span class="ic">${p.ic}</span><b>${esc(p.t)}</b><span>${esc(p.d)}</span></div>`
  ).join('');
  stagger(is3d ? '#aboutIcons3d .about-icon-card-3d' : '.about-icon-card', 90);
}

/* ---------- certificates ---------- */
function renderCertificates(){
  const grid = document.getElementById('certificatesGrid');
  if (!grid) return;
  grid.innerHTML = CERTIFICATES.map((c, idx) => `
    <div class="glass certificate-card reveal">
      <div class="cert-thumb" data-cert-open="${idx}" role="button" tabindex="0" aria-label="View ${c.title} full size">
        <img src="${c.img}" alt="${c.imgAlt}" loading="lazy">
        <span class="cert-verified-badge">${IC.shield} Verified</span>
        <span class="cert-expand">${IC.expand} View Full Size</span>
      </div>
      <div class="cert-body">
        <h3>${c.title}</h3>
        <span class="cert-issuer">${c.issuer}</span>
        <div class="cert-meta">
          <span class="cert-meta-item">${IC.briefcase}${c.duration}</span>
          <span class="cert-meta-item">${IC.sparkle}${c.credentialName}</span>
        </div>
        <p class="cert-desc">${c.desc}</p>
        <div class="cert-actions">
          <button type="button" class="btn btn-glow" data-cert-open="${idx}">View Certificate</button>
          <a href="${c.img}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Open Original</a>
        </div>
      </div>
    </div>`).join('');
  stagger('.certificate-card', 100);
}

function initCertificateLightbox(){
  const overlay = document.getElementById('certificateLightbox');
  if (!overlay) return;
  const img = $('.lightbox-img', overlay);
  const caption = $('.lightbox-caption', overlay);
  const closeBtn = $('.lightbox-close', overlay);
  let lastFocus = null;

  function open(idx){
    const c = CERTIFICATES[idx];
    if (!c) return;
    lastFocus = document.activeElement;
    img.src = c.img; img.alt = c.imgAlt;
    caption.textContent = `${c.title} — ${c.issuer}`;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function close(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocus && lastFocus.focus && lastFocus.focus();
  }
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-cert-open]');
    if (trigger) open(Number(trigger.dataset.certOpen));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' '){
      const trigger = e.target.closest?.('.cert-thumb[data-cert-open]');
      if (trigger){ e.preventDefault(); open(Number(trigger.dataset.certOpen)); }
    }
    if (e.key === 'Escape') close();
  });
  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
}

/* ---------- contact form (mailto, no backend) ---------- */
function initContactForm(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const get = (id) => ($(id)?.value || '').trim();
    const name = get('#cf-name'), email = get('#cf-email'), subject = get('#cf-subject'), message = get('#cf-message');
    const body = `${message}\n\n—\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------- 3D tilt for dynamically injected cards ---------- */
function bindTilt(){
  /* CSS custom properties are consumed by the 3D card rules; the pointer
     listener is delegated at document level, so re-binding is a no-op. */
}

/* ---------- deep links into JS-rendered sections ----------
   e.g. journey.html#education is painted by renderTimeline(), so the browser
   cannot find the target before the script runs. Re-apply the jump after boot. */
function initHashScroll(){
  const hash = location.hash;
  if (!hash || hash === '#') return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  requestAnimationFrame(() => target.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block:'start' }));
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollProgress();
  initFooterYear();
  initReveal();
  initParticles();
  initStageTilt();
  initCardTilt();
  initTypewriter();
  initCountUp();
  initIconSlots();
  renderPrinciples();
  renderSkills3d();
  renderSkills();
  renderProjects3d();
  renderProjectsPreview();
  renderProjects();
  renderTimeline();
  renderServices();
  renderWhy();
  renderCertificates();
  initCertificateLightbox();
  initContactForm();
  initHashScroll();
});
