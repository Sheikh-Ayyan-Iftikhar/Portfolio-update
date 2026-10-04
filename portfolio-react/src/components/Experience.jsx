import { motion, useReducedMotion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Section, SectionHeading } from './Section.jsx';
import { experience, education, certifications } from '../data/journey.js';
import { EASE, viewportOnce } from '../lib/motion.js';

function Entry({ item, index, last }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? undefined : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={reduce ? undefined : { duration: 0.65, ease: EASE, delay: index * 0.07 }}
      className="relative grid gap-3 pb-10 pl-9 last:pb-0 sm:pl-12"
    >
      {/* rail + node */}
      <span
        className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-accent-500/60 bg-ink-900"
        aria-hidden="true"
      />
      {!last && (
        <span
          className="absolute left-[4px] top-5 h-[calc(100%-1.5rem)] w-px bg-line"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="rounded-full border border-line-soft bg-white/[0.02] px-2.5 py-0.5 font-sans text-[0.62rem] tracking-[0.18em] text-mist-600 uppercase">
          {item.tag}
        </span>
        <span className="text-[0.78rem] text-mist-600">{item.period}</span>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-lg font-semibold text-mist-100 sm:text-xl">
          {item.role}
        </h3>
        <span className="text-[0.85rem] text-accent-400">{item.org}</span>
      </div>

      {item.metric && (
        <p className="font-display text-[0.9rem] text-mist-300">
          <strong className="text-accent-400">{item.metric}</strong> {item.metricLabel}
        </p>
      )}

      <p className="max-w-xl text-[0.87rem] leading-relaxed text-mist-500">{item.detail}</p>
    </motion.li>
  );
}

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="journey" className="border-t border-line-soft">
      <SectionHeading
        eyebrow="Journey"
        title="My journey"
        lede="Where I've been, what's ongoing, and what I'm learning right now."
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <h3 className="font-display text-[0.7rem] tracking-[0.22em] text-mist-600 uppercase">
            Experience
          </h3>
          <ul className="mt-8">
            {experience.map((item, i) => (
              <Entry key={item.id} item={item} index={i} last={i === experience.length - 1} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[0.7rem] tracking-[0.22em] text-mist-600 uppercase">
            Learning &amp; education
          </h3>
          <ul className="mt-8">
            {education.map((item, i) => (
              <Entry key={item.id} item={item} index={i} last={i === education.length - 1} />
            ))}
          </ul>

          {certifications.length > 0 && (
            <>
              <h3 className="mt-14 font-display text-[0.7rem] tracking-[0.22em] text-mist-600 uppercase">
                Certifications
              </h3>
              <ul className="mt-8 space-y-3">
                {certifications.map((c, i) => (
                  <motion.li
                    key={c.id}
                    initial={reduce ? undefined : { opacity: 0, y: 18 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={reduce ? undefined : { duration: 0.6, ease: EASE, delay: i * 0.07 }}
                    className="flex items-start gap-3.5 rounded-xl border border-line bg-ink-850/50 p-4"
                  >
                    <Award
                      size={17}
                      className="mt-0.5 shrink-0 text-accent-400"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[0.9rem] font-medium text-mist-100">{c.label}</p>
                      <p className="mt-0.5 text-[0.8rem] text-mist-500">
                        {c.org} · {c.note}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
