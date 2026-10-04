import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading } from './Section.jsx';
import { skillGroups } from '../data/skills.js';
import { EASE, viewportOnce } from '../lib/motion.js';

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills" className="border-t border-line-soft">
      <SectionHeading
        eyebrow="Toolkit"
        title="What I work with"
        lede="The tools I reach for day to day. No progress bars — proficiency claims without a way to back them up aren't worth showing."
      />

      <div className="mt-16 space-y-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: gi * 0.08 }}
            className="group rounded-2xl border border-line bg-ink-850/60 p-6 transition-colors duration-500 hover:border-accent-500/35 sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
              <h3 className="shrink-0 font-display text-[0.95rem] font-semibold tracking-tight text-mist-100 sm:w-44 sm:pt-2">
                {group.group}
              </h3>

              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item, i) => (
                  <li key={item.name}>
                    <motion.span
                      className="inline-flex cursor-default items-center gap-2.5 rounded-xl border border-line bg-white/[0.02] px-3.5 py-2 text-[0.82rem] text-mist-300 transition-[transform,border-color,background-color,color] duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-accent-500/50 hover:bg-white/[0.05] hover:text-mist-100"
                      initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
                      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={
                        reduce ? undefined : { duration: 0.45, ease: EASE, delay: gi * 0.06 + i * 0.04 }
                      }
                    >
                      <span
                        className="grid h-5 w-5 place-items-center rounded-md bg-accent-500/15 text-[0.58rem] font-semibold tracking-tight text-accent-400 transition-colors duration-300 group-hover:bg-accent-500/25"
                        aria-hidden="true"
                      >
                        {item.mark}
                      </span>
                      {item.name}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
