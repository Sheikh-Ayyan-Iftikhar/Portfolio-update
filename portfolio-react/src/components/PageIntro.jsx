import { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE, viewportOnce } from '../lib/motion.js';
import { useDeviceTier, useMediaQuery } from '../hooks/useMediaQuery.js';
import SceneBoundary from './SceneBoundary.jsx';

// loaded per-page rather than up front, so the first paint stays light
const ConstellationScene = lazy(() => import('./ConstellationScene.jsx'));

/**
 * Shared header for the inner pages. Carries a small generated 3D motif so the
 * routes feel like part of the same world as the hero, without paying for a
 * second WebGL context on every page at once.
 */
export default function PageIntro({ eyebrow, title, lede }) {
  const reduce = useReducedMotion();
  const tier = useDeviceTier();
  // the motif is lg-only, so don't create a WebGL context that CSS would hide
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <header className="relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-20">
      {/* 3D motif, right-aligned and behind the text */}
      {isDesktop && tier !== 'static' && (
        <div
          className="pointer-events-none absolute top-24 -right-24 hidden h-80 w-80 opacity-70 lg:block"
          aria-hidden="true"
        >
          <SceneBoundary>
            <Suspense fallback={null}>
              <ConstellationScene tier={tier} />
            </Suspense>
          </SceneBoundary>
        </div>
      )}

      <div className="mx-auto w-full max-w-[78rem] px-5 md:px-10">
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.6, ease: EASE }}
          className="font-display text-[0.68rem] tracking-[0.24em] text-accent-400 uppercase"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.06 }}
          className="mt-5 max-w-3xl font-display text-[2.1rem] leading-[1.08] font-semibold tracking-tight text-mist-100 sm:text-[2.9rem] lg:text-[3.4rem]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.14 }}
          className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-mist-400 sm:text-base"
        >
          {lede}
        </motion.p>
      </div>
    </header>
  );
}
