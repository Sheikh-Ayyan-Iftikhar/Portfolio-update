# Portfolio — Legacy Static Site

The original hand-written portfolio: nine static HTML pages sharing
`assets/style.css` and `assets/main.js`. No build step, no dependencies.

Archived. The current site is [`../portfolio-react`](../portfolio-react) — see the
[root README](../README.md).

## Viewing it

Open `index.html` directly, or serve the folder so relative links behave the
same way they would on a host:

```bash
npx serve .
# or
python -m http.server 8000
```

## Pages

| File | Section |
| --- | --- |
| `index.html` | Home |
| `about.html` | About |
| `skills.html` | Skills |
| `projects.html` | Projects |
| `journey.html` | Journey |
| `services.html` | Services |
| `certificates.html` | Certificates |
| `reviews.html` | Reviews |
| `contact.html` | Contact |

## Shared assets

```
assets/
  style.css   all styling, including the 3D footer
  main.js     project rendering, nav, and footer interactions
  profile.png
  favicon.png
  certificates/   certificate images
  resume/         resume PDF
```

## What changed while it was active

- The 401 `HiringMine` clone was removed rather than left as a dead card.
- The footer was unified across all nine pages and given the 3D panel / cube /
  keycap treatment, with pointer tilt and reduced-motion handling.
- GitHub, Facebook, X and email were added as footer profile links.
- An undefined `--pink` custom property was corrected to `--cyan`.

Verified at the time it was archived: all pages return 200, no broken internal
links, `main.js` parses, CSS braces balance, and footer hover works with no
console errors.
