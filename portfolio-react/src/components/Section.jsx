import { motion, useReducedMotion } from 'framer-motion';
import { EASE, fadeUp, viewportOnce } from '../lib/motion.js';

/** Section heading block: eyebrow + large display title + optional lede. */
export function SectionHeading({ eyebrow, title, lede, align = 'left', className = '' }) {
  const reduce = useReducedMotion();
  const center = align === 'center';

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow mb-5 flex items-center gap-3" style={center ? { justifyContent: 'center' } : undefined}>
          <span className="inline-block h-px w-8 bg-accent-500/60" aria-hidden="true" />
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={reduce ? undefined : fadeUp}
        initial={reduce ? undefined : 'hidden'}
        whileInView={reduce ? undefined : 'show'}
        viewport={viewportOnce}
        className="text-[clamp(2rem,5.2vw,3.75rem)] font-semibold text-mist-100"
      >
        {title}
      </motion.h2>

      {lede && (
        <motion.p
          variants={reduce ? undefined : fadeUp}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={viewportOnce}
          transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.12 }}
          className="mt-6 text-[0.98rem] leading-relaxed text-mist-500 sm:text-base"
        >
          {lede}
        </motion.p>
      )}
    </motion.div>
  );
}

/** Splits a line into words and reveals them with a stagger. */
export function RevealText({ text, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ show: { transition: { staggerChildren: 0.028, delayChildren: delay } } }}
    >
      {/* the animated words are decorative duplicates, so the real text is
          exposed once for assistive tech instead of relying on aria-label,
          which is ignored on a generic span */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%' },
                show: { y: '0%', transition: { duration: 0.75, ease: EASE } },
              }}
            >
              {w}
            </motion.span>
            {/* a real space, outside the inline-block, so the line can still wrap */}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </motion.span>
  );
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 md:py-40 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}
