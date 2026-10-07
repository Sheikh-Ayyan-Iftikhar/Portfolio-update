import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
import { EASE, viewportOnce } from '../lib/motion.js';

/**
 * A certification entry with its document preview. Clicking the thumbnail
 * opens the full-size image in a modal, so the certificate is actually
 * checkable rather than just asserted.
 */
export default function CertificateCard({ cert, index = 0 }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  // move focus into the dialog, and lock the page behind it
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      // simple focus trap: Tab cycles inside the dialog
      if (e.key === 'Tab') {
        const nodes = document.querySelectorAll(
          '#certificate-dialog button, #certificate-dialog a[href]',
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  const hasImage = Boolean(cert.image);

  return (
    <>
      <motion.article
        initial={reduce ? undefined : { opacity: 0, y: 18 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={reduce ? undefined : { duration: 0.6, ease: EASE, delay: index * 0.07 }}
        className="group relative overflow-hidden rounded-2xl border border-line bg-ink-850/50 transition-[border-color,box-shadow] duration-300 hover:border-accent-500/40 hover:shadow-[0_28px_60px_-34px_rgba(77,141,255,0.45)]"
      >
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
          {hasImage && (
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              className="relative shrink-0 overflow-hidden rounded-xl border border-line-soft bg-ink-950"
              style={{ width: '100%', maxWidth: 168, aspectRatio: '1400 / 990' }}
            >
              <img
                src={cert.image}
                alt={cert.imageAlt || `${cert.label} certificate`}
                loading="lazy"
                decoding="async"
                width={1400}
                height={990}
                className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
              />
              <span
                className="pointer-events-none absolute inset-0 bg-ink-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-ink-950/80 px-2.5 py-1 font-mono text-[0.6rem] tracking-wider text-mist-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <ExternalLink size={10} aria-hidden="true" />
                View
              </span>
            </button>
          )}

          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 font-display text-[0.62rem] tracking-[0.22em] text-accent-400 uppercase">
              <Award size={13} aria-hidden="true" />
              Certificate
            </span>
            <h4 className="mt-2.5 font-display text-[1.05rem] font-semibold text-mist-100">
              {cert.label}
            </h4>
            <p className="mt-1 text-[0.82rem] text-mist-500">{cert.org}</p>
            <p className="mt-0.5 text-[0.78rem] text-mist-600">{cert.note}</p>

            {cert.href && (
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-mist-300 transition-colors hover:text-accent-400"
              >
                Open certificate
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            id="certificate-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${cert.label} certificate`}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.figure
              className="relative flex max-h-full w-full max-w-4xl flex-col"
              initial={reduce ? undefined : { scale: 0.94, y: 14 }}
              animate={reduce ? undefined : { scale: 1, y: 0 }}
              exit={reduce ? undefined : { scale: 0.96, y: 8 }}
              transition={{ duration: 0.32, ease: EASE }}
            >
              <img
                src={cert.image}
                alt={cert.imageAlt || `${cert.label} certificate`}
                className="max-h-[78vh] w-full rounded-xl border border-line object-contain"
              />
              <figcaption className="mt-4 text-center text-[0.8rem] text-mist-400">
                {cert.label} &middot; {cert.org}
              </figcaption>

              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="absolute -top-2 -right-2 grid h-10 w-10 place-items-center rounded-full border border-line bg-ink-900 text-mist-200 transition-colors hover:border-accent-500/50 hover:text-mist-100 sm:top-0 sm:right-0"
              >
                <X size={16} aria-hidden="true" />
                <span className="sr-only">Close certificate</span>
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}