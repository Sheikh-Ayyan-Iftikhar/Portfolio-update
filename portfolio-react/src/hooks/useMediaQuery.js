import { useEffect, useState } from 'react';

/** SSR-safe media query hook. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** True for pointer devices that get the custom cursor. */
export function useFinePointer() {
  return useMediaQuery('(hover: hover) and (pointer: fine)');
}

/** Small helper so 3D quality can step down on weaker devices. */
export function useDeviceTier() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const lowMem = useMediaQuery('(max-width: 480px)');

  if (reduced) return 'static';
  if (lowMem) return 'low';
  if (mobile) return 'medium';
  return 'high';
}
