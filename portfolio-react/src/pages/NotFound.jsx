import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion.js';
import { navLinks } from '../data/site.js';
import PageMeta from '../components/PageMeta.jsx';

const META = {
  title: 'Page not found — Sheikh Ayyan Iftikhar',
  description: 'That page does not exist. Every page on this site is linked below.',
};

export default function NotFound() {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-[78rem] flex-col items-center justify-center px-5 py-40 text-center md:px-10">
      <PageMeta {...META} />
      <motion.p
        initial={reduce ? undefined : { opacity: 0, y: 14 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.6, ease: EASE }}
        className="font-display text-[0.68rem] tracking-[0.24em] text-accent-400 uppercase"
      >
        Error 404
      </motion.p>

      <motion.h1
        initial={reduce ? undefined : { opacity: 0, y: 22 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.06 }}
        className="mt-5 font-display text-[2.4rem] leading-[1.05] font-semibold tracking-tight text-mist-100 sm:text-[3.2rem]"
      >
        This page doesn&rsquo;t exist.
      </motion.h1>

      <motion.p
        initial={reduce ? undefined : { opacity: 0, y: 18 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.12 }}
        className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mist-400"
      >
        The link may be out of date. Everything on this site is one of the pages below.
      </motion.p>

      <nav aria-label="Site pages" className="mt-10">
        <ul className="flex flex-wrap items-center justify-center gap-2.5">
          {navLinks.map((l, i) => (
            <motion.li
              key={l.to}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={
                reduce ? undefined : { duration: 0.6, ease: EASE, delay: 0.18 + i * 0.06 }
              }
            >
              <Link
                to={l.to}
                className="inline-flex rounded-full border border-line px-5 py-2.5 text-[0.85rem] text-mist-300 transition-[border-color,color] duration-300 hover:border-accent-500/50 hover:text-mist-100"
              >
                {l.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
