import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EASE, viewportOnce } from '../lib/motion.js';

/**
 * A project card that tilts toward the cursor.
 * Tilt values are written straight to CSS custom properties on the element, so
 * React never re-renders on pointer movement — the transform is resolved by CSS.
 */
export default function ProjectCard({ project, index = 0 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(px * 8).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
  };

  const { title, kicker, description, tech, url, accent, metric } = project;

  return (
    <motion.article
      initial={reduce ? undefined : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: index * 0.08 }}
      className="[perspective:1400px]"
    >
      <div
        ref={ref}
        data-tilt
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ '--rx': '0deg', '--ry': '0deg', '--mx': '50%', '--my': '50%' }}
        className="group relative h-full rounded-2xl border border-line bg-ink-850/70 p-6 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-accent-500/40 hover:shadow-[0_28px_60px_-30px_rgba(77,141,255,0.4)] sm:p-7 [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_translateZ(0)]"
      >
        {/* cursor-following glow */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(280px circle at var(--mx) var(--my), rgba(77,141,255,0.13), transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* visual preview, built from a gradient + type rather than a
            screenshot so nothing is fabricated or 404-prone */}
        <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-line-soft bg-ink-950">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
            style={{
              background: `radial-gradient(120% 120% at 18% 8%, ${accent}33, transparent 58%), radial-gradient(90% 90% at 88% 92%, ${accent}1f, transparent 60%), #04060e`,
            }}
            aria-hidden="true"
          />
          {/* faint grid */}
          <span
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 p-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="ml-2 font-mono text-[0.6rem] tracking-wider text-white/30">
              {metric?.label}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-display text-[1.35rem] font-semibold leading-tight text-white/90 sm:text-[1.6rem]">
              {metric?.value}
            </p>
          </div>
        </div>

        <div className="relative">
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-mist-600 uppercase">
            {kicker}
          </p>

          <h3 className="mt-3 font-display text-xl font-semibold text-mist-100 transition-colors duration-300 group-hover:text-accent-400 sm:text-[1.4rem]">
            {title}
          </h3>

          <p className="mt-2.5 text-[0.87rem] leading-relaxed text-mist-500">{description}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-line-soft bg-white/[0.02] px-2 py-1 font-mono text-[0.66rem] text-mist-500"
              >
                {t}
              </li>
            ))}
          </ul>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="mt-6 inline-flex items-center gap-2 text-[0.82rem] font-medium text-mist-300 transition-colors duration-300 hover:text-accent-400"
            aria-label={`Open ${title} live demo in a new tab`}
          >
            Live demo
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
