import { useEffect, useRef } from 'react';
import { useFinePointer } from './useMediaQuery.js';

/**
 * Magnetic pull toward the cursor, damped with a rAF loop.
 * Writes to CSS custom properties on the element so React never re-renders.
 *
 * Listeners are attached to the element itself rather than to `window`: one
 * `window` pointermove per magnetic button meant a getBoundingClientRect() on
 * every mouse event for every button, and `pointerleave` on `window` is not
 * reliably fired in all browsers.
 */
export function useMagnetic(strength = 0.32, radius = 1.15) {
  const ref = useRef(null);
  const fine = useFinePointer();

  useEffect(() => {
    const el = ref.current;
    if (!el || !fine) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let settled = true;

    const paint = () => {
      el.style.setProperty('--mx', `${cx.toFixed(2)}px`);
      el.style.setProperty('--my', `${cy.toFixed(2)}px`);
    };

    const loop = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;

      if (Math.abs(tx - cx) < 0.05 && Math.abs(ty - cy) < 0.05) {
        cx = tx;
        cy = ty;
        settled = true;
        raf = 0;
      } else {
        raf = requestAnimationFrame(loop);
      }
      paint();
    };

    const kick = () => {
      if (!raf && !settled) raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const reach = (Math.max(r.width, r.height) / 2) * radius;

      if (Math.hypot(dx, dy) > reach) {
        tx = 0;
        ty = 0;
      } else {
        tx = dx * strength;
        ty = dy * strength;
      }
      settled = false;
      kick();
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      settled = false;
      kick();
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength, radius, fine]);

  return ref;
}
