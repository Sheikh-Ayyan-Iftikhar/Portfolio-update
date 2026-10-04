import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { site, stats } from '../data/site.js';
import { EASE } from '../lib/motion.js';
import { useDeviceTier } from '../hooks/useMediaQuery.js';
import { useMagnetic } from '../hooks/useMagnetic.js';
import Button from './Button.jsx';
import CountUp from './CountUp.jsx';

// the 3D bundle is the heaviest thing on the page - keep it off the critical path
const Scene3D = lazy(() => import('./Scene3D.jsx'));

function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useMagnetic(strength);
  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {children}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const tier = useDeviceTier();
  const sceneOn = tier !== 'static';

  // split the data-layer name so the headline can style the two parts
  // differently without duplicating the name in two places
  const nameParts = site.name.split(' ');
  const firstName = nameParts.slice(0, -1).join(' ');
  const lastName = nameParts[nameParts.length - 1];

  const rise = (delay) => ({
    initial: reduce ? undefined : { opacity: 0, y: 26 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: reduce ? undefined : { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* ambient background wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-10%] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,141,255,0.16),transparent)] blur-3xl" />
        <div className="absolute right-[-14%] top-[36%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent)] blur-3xl" />
      </div>

      {sceneOn && (
        <Suspense fallback={null}>
          <Scene3D tier={tier} />
        </Suspense>
      )}

      {/* readability scrim over the scene */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(5,6,15,0.94)_0%,rgba(5,6,15,0.72)_42%,rgba(5,6,15,0.15)_100%)]"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="max-w-2xl">
          <motion.div
            {...rise(0.1)}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[0.72rem] text-mist-300">{site.availability}</span>
          </motion.div>

          <motion.h1
            {...rise(0.18)}
            className="font-display text-[clamp(2.6rem,8.4vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          >
            <span className="block text-mist-100">{firstName}</span>
            <span className="text-gradient block">{lastName}</span>
          </motion.h1>

          <motion.p
            {...rise(0.26)}
            className="mt-6 font-display text-lg font-medium text-mist-300 sm:text-xl"
          >
            {site.role}
          </motion.p>

          <motion.p
            {...rise(0.34)}
            className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-mist-500 sm:text-[1.02rem]"
          >
            {site.intro}
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.28}>
              <Button href="#projects" variant="primary" icon={ArrowRight}>
                View my work
              </Button>
            </Magnetic>
            <Magnetic strength={0.22}>
              <Button href="#contact" variant="ghost">
                Let&rsquo;s connect
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            {...rise(0.5)}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.8rem] text-mist-600"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} aria-hidden="true" />
              {site.location}
            </span>
            {stats.map((s) => (
              <span key={s.label} className="inline-flex items-baseline gap-1.5">
                <strong className="font-display text-base font-semibold text-mist-100">
                  <CountUp to={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        aria-hidden="true"
      >
        <div className="flex h-9 w-[22px] items-start justify-center rounded-full border border-line p-1.5">
          <motion.span
            className="block h-1.5 w-1 rounded-full bg-mist-500"
            animate={reduce ? undefined : { y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
