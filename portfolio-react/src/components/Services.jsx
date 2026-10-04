import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading } from './Section.jsx';
import { services } from '../data/skills.js';
import { EASE, viewportOnce } from '../lib/motion.js';

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <Section id="services" className="border-t border-line-soft">
      <SectionHeading
        eyebrow="Services"
        title="What I build"
        lede="Four things I do well, described plainly."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.65, ease: EASE, delay: i * 0.06 }}
            className="group relative overflow-hidden bg-ink-900 p-7 transition-colors duration-500 hover:bg-ink-850 sm:p-9"
          >
            {/* accent sweep on hover */}
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent-500 to-transparent transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100"
              aria-hidden="true"
            />

            <span className="font-sans text-[0.65rem] tracking-[0.2em] text-mist-600">
              0{i + 1}
            </span>

            <h3 className="mt-4 font-display text-xl font-semibold text-mist-100 sm:text-2xl">
              {s.title}
            </h3>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-mist-300">{s.note}</p>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-mist-600">{s.detail}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
