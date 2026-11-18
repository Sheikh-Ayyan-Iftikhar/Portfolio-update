import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { EASE } from '../lib/motion.js';
import Button from './Button.jsx';

export default function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // solidity + border appear once the hero is behind us
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // a new route should never leave the mobile sheet hanging open behind it
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock scroll, close on Escape, and move focus into/out of the sheet
  const toggleRef = useRef(null);
  const sheetRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);

    // hand focus to the sheet so keyboard and screen-reader users are not
    // left behind on the toggle button behind the overlay
    const first = sheetRef.current?.querySelector('a, button');
    first?.focus();

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      // returning focus avoids focus landing on <body> after the sheet closes
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={reduce ? undefined : { y: -24, opacity: 0 }}
        animate={reduce ? undefined : { y: 0, opacity: 1 }}
        transition={reduce ? undefined : { duration: 0.8, ease: EASE, delay: 0.15 }}
      >
        <div
          className={`mx-auto flex max-w-[78rem] items-center justify-between gap-6 px-5 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:px-10 ${
            scrolled ? 'mt-3 rounded-2xl glass py-2.5' : 'mt-0 py-5'
          }`}
        >
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight"
            aria-label={`${site.name} — home`}
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-mist-100 text-[0.7rem] font-bold text-ink-900 transition-transform duration-500 group-hover:rotate-[18deg]">
              {site.monogram}
            </span>
            <span className="hidden sm:inline">{site.shortName}</span>
          </Link>

          

          <div className="flex items-center gap-2">
            {/* wrap rather than putting `hidden` on Button: Button's base class
                already sets `inline-flex`, and two display utilities on one
                element resolve by stylesheet order, not class order */}
            <span className="hidden sm:inline-flex">
              <Button href="/contact" variant="accent" className="px-5 py-2.5 text-[0.8rem]">
                Let&rsquo;s talk
              </Button>
            </span>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line text-mist-300 transition-colors hover:border-accent-500/50 hover:text-mist-100 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            ref={sheetRef}
            className="fixed inset-0 z-40 bg-ink-950/97 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
          >

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
