import { useEffect, useRef, useState } from 'react';
import { useFinePointer, useMediaQuery } from '../hooks/useMediaQuery.js';

/**
 * Custom cursor: a dot that tracks tightly plus a ring that lags behind.
 * Rendered only on fine-pointer devices with a working hover, and it
 * self-disables when the OS asks for reduced motion.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  // reactive, so toggling the OS setting takes effect without a reload
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  const active = fine && !reduce;

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState('default');
  // mirrors `variant` so the pointermove handler can bail out without
  // scheduling a React render on every mouse event
  const variantRef = useRef('default');

  const setVariantBoth = (next) => {
    if (next === variantRef.current) return;
    variantRef.current = next;
    setVariant(next);
  };

  // enable the "hide native cursor" body flag only once the custom one is live
  useEffect(() => {
    if (!active) return;
    setEnabled(true);
    document.body.dataset.cursor = 'custom';
    return () => {
      delete document.body.dataset.cursor;
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;

    let raf = 0;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let shown = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        shown = true;
        rx = mx;
        ry = my;
      }

      const t = e.target;
      const interactive = t?.closest?.(
        'a, button, [role="button"], input, textarea, select, [data-cursor]',
      );
      if (interactive) {
        const name = interactive.dataset?.cursor;
        setVariantBoth(name || (interactive.matches('input, textarea, select') ? 'text' : 'link'));
      } else {
        setVariantBoth('default');
      }
    };

    const onDown = () => setVariantBoth(variantRef.current.startsWith('link') ? 'link-down' : 'down');
    const onUp = () => setVariantBoth(variantRef.current === 'link-down' ? 'link' : 'default');
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [active]);

  if (!active) return null;

  const linkish = variant.startsWith('link');
  const pressed = variant.endsWith('down');
  const ringSize = linkish ? (pressed ? 40 : 52) : pressed ? 22 : 30;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[95]">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 rounded-full border transition-[width,height,background-color,border-color,opacity] duration-200 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: linkish ? 'rgba(124,176,255,0.85)' : 'rgba(185,192,212,0.4)',
          backgroundColor: linkish ? 'rgba(77,141,255,0.12)' : 'transparent',
          opacity: enabled ? 1 : 0,
          transitionDuration: '180ms',
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 rounded-full transition-[width,height,background-color,opacity] duration-200 ease-out"
        style={{
          width: linkish ? 4 : 6,
          height: linkish ? 4 : 6,
          backgroundColor: linkish ? '#7cb0ff' : '#eef1f8',
          opacity: enabled ? 1 : 0,
        }}
      />
    </div>
  );
}
