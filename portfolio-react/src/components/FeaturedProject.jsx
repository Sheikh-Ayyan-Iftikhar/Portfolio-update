import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EASE, viewportOnce } from '../lib/motion.js';

/**
 * The single oversized case-study panel. Editorial layout: large type on the
 * left, a large visual field on the right, metadata along the bottom.
 */
export default function FeaturedProject({ project }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-py * 4.5).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(px * 5.5).toFixed(2)}deg`);
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

  const { title, kicker, description, longDescription, tech, url, accent, metric } = project;

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 34 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={reduce ? undefined : { duration: 0.85, ease: EASE }}
      className="[perspective:1600px]"
    >
      <div
        ref={ref}
        data-tilt
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ '--rx': '0deg', '--ry': '0deg', '--mx': '50%', '--my': '50%' }}
        className="group relative overflow-hidden rounded-3xl border border-line bg-ink-850/60 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-accent-500/40 hover:shadow-[0_40px_90px_-40px_rgba(77,141,255,0.45)] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_translateZ(0)]"
      >
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(520px circle at var(--mx) var(--my), rgba(77,141,255,0.12), transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:p-12">
          {/* copy */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent-500/35 bg-accent-500/10 px-3 py-1 font-sans text-[0.62rem] tracking-[0.2em] text-accent-400 uppercase">
                Featured
              </span>
              <span className="font-sans text-[0.65rem] tracking-[0.2em] text-mist-600 uppercase">
                {kicker}
              </span>
            </div>

            <h3 className="mt-6 font-display text-[clamp(2rem,5.4vw,3.4rem)] font-semibold leading-[1.02] text-mist-100">
              {title}
            </h3>

            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mist-300">
              {description}
            </p>
            <p className="mt-4 max-w-lg text-[0.85rem] leading-relaxed text-mist-600">
              {longDescription}
            </p>

            <ul className="mt-7 flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line-soft bg-white/[0.02] px-2.5 py-1 font-mono text-[0.68rem] text-mist-500"
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
              className="mt-9 inline-flex w-fit items-center gap-2.5 rounded-full bg-mist-100 px-6 py-3 text-sm font-medium text-ink-900 transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_40px_-14px_rgba(220,230,255,.55)]"
              aria-label={`Open ${title} live demo in a new tab`}
            >
              View live project
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* large visual field */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line-soft bg-ink-950 lg:aspect-auto lg:min-h-[22rem]">
            <div
              className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
              style={{
                background: `radial-gradient(115% 115% at 20% 6%, ${accent}3d, transparent 56%), radial-gradient(95% 95% at 86% 94%, ${accent}26, transparent 62%), #04060e`,
              }}
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 p-5">
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <p className="font-sans text-[0.62rem] tracking-[0.22em] text-white/40 uppercase">
                {metric?.label}
              </p>
              <p className="mt-2 font-display text-[clamp(1.8rem,5vw,3rem)] font-semibold leading-none text-white/90">
                {metric?.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
