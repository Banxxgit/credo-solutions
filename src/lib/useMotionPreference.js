import { useCallback, useState } from 'react';

const KEY = 'credo-motion';

/**
 * Reads/writes the motion preference. The initial value is applied to
 * <html data-motion> by an inline script in index.html before first paint;
 * all animation CSS keys off that attribute.
 */
export default function useMotionPreference() {
  const [reduced, setReduced] = useState(
    () => document.documentElement.getAttribute('data-motion') === 'reduce',
  );

  const toggle = useCallback(() => {
    setReduced((prev) => {
      const next = !prev;
      const value = next ? 'reduce' : 'full';
      document.documentElement.setAttribute('data-motion', value);
      try {
        localStorage.setItem(KEY, value);
      } catch {
        /* storage unavailable — preference lasts for this visit only */
      }
      return next;
    });
  }, []);

  return { reduced, toggle };
}
