# Portfolio Workspace

Two versions of the Sheikh Ayyan Iftikhar portfolio live here.

| Folder | What it is | Status |
| --- | --- | --- |
| [`portfolio-react/`](./portfolio-react) | Current portfolio — React 19 + Vite + Tailwind 4 + React Three Fiber. Single page, cinematic dark theme, generated 3D hero. | **Active — work on this one** |
| [`portfolio-legacy/`](./portfolio-legacy) | Earlier hand-written static site (9 HTML pages, no build step). Kept for reference and as a fallback host. | Archived |

## Quick start

```bash
cd portfolio-react
npm install
npm run dev     # http://localhost:5173
npm run build   # production output -> dist/
npm run preview # serve the production build
```

The legacy site has no dependencies — open `portfolio-legacy/index.html` in a browser,
or serve the folder with any static file server.

## Content accuracy

Everything rendered on the site comes from four data files in `portfolio-react/src/data/`.
Edit those instead of hunting through components:

| File | Holds |
| --- | --- |
| `site.js` | Name, role, location, email, social links, navigation, biography |
| `projects.js` | The four live projects and which one is featured |
| `skills.js` | Skills, focus areas, services |
| `journey.js` | Experience and education timeline |

Rules that were applied while building this, worth keeping:

- Only link projects that are **live and reachable**. A project returning `401`/`404`
  is left out entirely rather than shipped as a dead card.
- Never invent a URL. Projects with no known repository get a live-demo link only,
  and the GitHub button is omitted.
- Socials without a confirmed URL render as visibly disabled rather than linking
  to a guessed profile.
- Only list tools actually used. The Drag & Drop uploader is plain HTML/CSS/JS,
  so it is not described as a React project.

## Known follow-ups

- `portfolio-react/public/resume/resume.pdf` is copied from the old site and still
  lists AperaBoost as a current role. It needs regenerating.
- The LinkedIn icon is intentionally inert until a real profile URL is supplied.
- `og:image` in `index.html` points at a relative `profile.png`; make it absolute
  once a production domain exists.
- `public/profile.png` is ~522 kB and could be compressed.
