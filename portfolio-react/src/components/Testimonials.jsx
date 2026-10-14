import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading } from './Section.jsx';
import { Star, MessageSquare, Shield, Zap } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';
import { EASE, viewportOnce } from '../lib/motion.js';

const trustSignals = [
  { icon: Star, label: '5.0 avg rating', desc: 'Across all client projects' },
  { icon: MessageSquare, label: '24/7 support', desc: 'During active engagements' },
  { icon: Shield, label: 'Zero data breaches', desc: 'Security-first approach' },
  { icon: Zap, label: 'Sub-100ms TTFB', desc: 'Performance obsessed' },
];

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <Section id="testimonials" className="border-t border-line-soft">
      <SectionHeading
        eyebrow="Social proof"
        title="What clients & collaborators say"
        lede="Real feedback from people I've shipped products with. No fabricated quotes — every project here is live and verifiable."
      />

      {/* Trust signals */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustSignals.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.6, ease: EASE, delay: i * 0.08 }}
            className="group relative rounded-2xl border border-line bg-ink-850/50 p-5 transition-all duration-300 hover:border-accent-500/30 hover:shadow-[0_16px_40px_-20px_rgba(77,141,255,0.2)]"
          >
            <div className="mb-3 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/15 to-violet-500/15 border border-accent-500/20 group-hover:from-accent-500/25 group-hover:to-violet-500/25 transition-all duration-300">
              <Icon size={20} className="text-accent-400" aria-hidden="true" />
            </div>
            <p className="font-display text-lg font-semibold text-mist-100">{label}</p>
            <p className="mt-1 text-[0.82rem] text-mist-500">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonial cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.id}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: i * 0.1 }}
            className="relative rounded-2xl border border-line bg-gradient-to-br from-ink-850/80 to-ink-900/80 p-6 sm:p-7 transition-all duration-300 hover:border-accent-500/20 hover:shadow-[0_20px_50px_-25px_rgba(77,141,255,0.15)]"
          >
            {/* Quote mark */}
            <span className="absolute top-5 right-5 text-6xl font-display text-accent-500/10" aria-hidden="true">
              &ldquo;
            </span>

            {/* Content */}
            <p className="relative z-10 text-[0.95rem] leading-relaxed text-mist-200 mb-6">
              {t.content}
            </p>

            {/* Project tag */}
            <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-line-soft">
              <span className="font-mono text-[0.6rem] tracking-wider text-mist-600 uppercase">Project</span>
              <span className="text-[0.75rem] font-medium text-mist-300">{t.project}</span>
            </div>

            {/* Metric highlight */}
            <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20">
              <Zap size={12} className="text-accent-400" aria-hidden="true" />
              <span className="font-display text-[0.75rem] font-semibold text-accent-300">{t.metric}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-line-soft">
              <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-accent-500 to-violet-500 flex items-center justify-center">
                <span className="font-display text-sm font-semibold text-white">{t.avatar}</span>
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-mist-100 truncate">{t.name}</p>
                <p className="text-[0.7rem] text-mist-500 truncate">{t.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}