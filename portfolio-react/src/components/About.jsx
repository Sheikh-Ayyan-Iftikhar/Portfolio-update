import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Gauge, Layers, Sparkles } from 'lucide-react';
import { site } from '../data/site.js';
import { focusAreas } from '../data/skills.js';
import { Section, SectionHeading } from './Section.jsx';
import { EASE, viewportOnce } from '../lib/motion.js';

const icons = [Code2, Layers, Sparkles, Gauge];

export default function About() {
  const reduce = useReducedMotion();
  const paragraphs = site.bio.split('\n\n');

  return (
    <Section id="about" className="border-t border-line-soft">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
        {/* sticky headline column */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow="About" title="A little about me" />
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-line">
              <img
                src={site.profilePhoto}
                alt={`${site.name}, frontend developer`}
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-mist-100">{site.name}</p>
              <p className="text-[0.8rem] text-mist-500">{site.title}</p>
            </div>
          </motion.div>
        </div>

        {/* body copy + focus grid */}
        <div>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="text-[0.98rem] leading-[1.75] text-mist-300"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={area.label}
                  initial={reduce ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={reduce ? undefined : { duration: 0.6, ease: EASE, delay: i * 0.05 }}
                  className="group relative bg-ink-900 p-6 transition-colors duration-500 hover:bg-ink-850"
                >
                  <Icon
                    size={17}
                    className="mb-4 text-accent-400 transition-transform duration-500 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <h3 className="text-[0.95rem] font-semibold text-mist-100">{area.label}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-mist-500">
                    {area.note}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
