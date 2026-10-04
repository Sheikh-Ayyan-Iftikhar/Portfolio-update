import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../lib/motion.js';

/**
 * Short, honest loading screen. Waits for real work (fonts + two frames) and
 * adds only a brief curtain on top — the progress bar is driven by that wait,
 * not by a fixed timer, so a warm cache does not pay a fake delay.
 */
export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  // kept in a ref so an inline callback from the parent cannot restart the effect
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    let raf = 0;
    let timer = 0;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      // let the bar visibly reach the end, then lift the curtain
      timer = window.setTimeout(() => {
        setVisible(false);
        doneRef.current?.();
      }, 220);
    };

    const ready = async () => {
      if (document.fonts?.ready) {
        try {
          await document.fonts.ready;
        } catch {
          /* font loading is best-effort */
        }
      }
      // two frames guarantees the first paint has actually happened
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

      // the real wait is usually over by now, so ease the bar across a short
      // window instead of a 900ms fake one
      const started = performance.now();
      const SPAN = 320;
      const tick = () => {
        const t = Math.min(1, (performance.now() - started) / SPAN);
        setProgress(Math.round((1 - Math.pow(1 - t, 2.2)) * 100));
        if (t < 1) raf = requestAnimationFrame(tick);
        else finish();
      };
      raf = requestAnimationFrame(tick);
    };

    ready();
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-hidden="true"
        >
          {/* expanding curtain lines */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/25 to-transparent"
                style={{ top: `${25 + i * 16}%` }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, ease: EASE, delay: i * 0.08 }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            <motion.p
              className="font-display text-6xl font-semibold tracking-tight text-mist-100 sm:text-7xl"
              initial={{ opacity: 0, y: 14, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '-0.03em' }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              A
            </motion.p>

            <div className="mt-8 h-px w-40 overflow-hidden bg-line sm:w-56">
              <div
                className="h-full origin-left bg-accent-500"
                style={{ transform: `scaleX(${progress / 100})` }}
              />
            </div>

            <motion.p
              className="mt-5 font-display text-[0.6rem] font-medium tracking-[0.32em] text-mist-500 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Sheikh Ayyan Iftikhar
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
