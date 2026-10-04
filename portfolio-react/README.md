# Portfolio — React

React 19 + Vite 8 + Tailwind CSS 4 + React Three Fiber. One page, dark cinematic
theme, a generated (no external model) 3D hero, and content driven from plain
data files.

## Commands

```bash
npm install
npm run dev      # dev server, HMR
npm run build    # production bundle -> dist/
npm run preview  # serve dist/ locally
```

## Layout

```
index.html            SEO / Open Graph / font preloads
vite.config.js        react + tailwind plugins, manual chunk splitting
public/
  favicon.png
  profile.jpg
  resume/resume.pdf
src/
  main.jsx            React entry
  App.jsx             section order, loader curtain, ambient background
  index.css           Tailwind theme tokens + global a11y/reduced-motion rules
  components/         one file per section or shared UI piece
  data/               all site content (see ../README.md)
  hooks/              useMediaQuery, useMagnetic
  lib/motion.js       shared Framer Motion variants
```

## Sections

`Hero → About → Skills → Projects → Experience → Services → Contact → Footer`

`Projects` renders the featured case study first (`featuredProject` in
`data/projects.js`), then the rest as cards.

## Notes for editing

- **Content** lives in `src/data/`. Components hold no hard-coded copy (the Hero
  headline is split from `site.name`, not typed out again).
- **3D scene** (`components/Scene3D.jsx`) builds geometry in code, so there are no
  model files to manage. It steps down quality on low-power devices and is not
  mounted at all under `prefers-reduced-motion: reduce`.
- **`three` is pinned to `0.182.0`.** `Clock` was deprecated in r183, and
  `@react-three/fiber` 9.8 still constructs `new THREE.Clock()` and reads
  `clock.oldTime`, which `THREE.Timer` does not provide. Bumping `three` past
  r182 reintroduces a `THREE.Clock: This module has been deprecated` console
  warning until R3F migrates. Remove the pin only after upgrading R3F.
- **Brand icons** (GitHub/LinkedIn/X/Facebook) are inlined in
  `components/SocialIcon.jsx` because Lucide 1.x dropped brand marks. Generic
  icons still come from `lucide-react`.
- **Dead socials are not shipped as links.** X returns 404 and no LinkedIn URL is
  verified, so both render as inert, `aria-disabled` entries instead of anchors.
  Set `href` in `data/site.js` once a real URL exists.
- **`overflow-x: clip` on `html`, not `overflow-x: hidden` on `body`.** `hidden`
  computes `overflow-y` to `auto`, which turns the body into a scroll container
  and silently breaks the `position: sticky` heading in About.
- Word-by-word headings render the text twice on purpose: an `sr-only` copy for
  assistive tech and an `aria-hidden` animated copy. Do not add `aria-label` to
  the wrapper — it is ignored on a generic `span`.
- **Contact form** has no backend; it validates input then composes a `mailto:`
  draft, so nothing is stored or sent to a third party.
- The `three` chunk is ~240 kB gzip but is dynamically imported by `Scene3D`,
  so it does not block first paint.
- There is no lint/typecheck script and no ESLint config. `npm run build` plus the
  CDP smoke suite are the gates.

## Verified

Chrome CDP smoke run against the production build: **31 checks pass, 0 fail, and
no console errors or warnings** — covering all eight sections, 3D canvas and
WebGL, live project links, inert dead socials, card tilt producing a real
`matrix3d` transform, sticky About heading, certifications, `sr-only` text,
image `alt` coverage, desktop/mobile overflow, mobile-menu focus handling, and
reduced motion.
