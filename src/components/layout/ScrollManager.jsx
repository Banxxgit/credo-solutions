import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On navigation: scroll to the #hash target if present (smoothly only within the
 * same page), otherwise jump to the top,
 * and move focus to <main> so keyboard and screen-reader users start at the new content.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);
  const prevPath = useRef(pathname);

  useEffect(() => {
    const isFirst = first.current;
    const samePage = !isFirst && prevPath.current === pathname;
    first.current = false;
    prevPath.current = pathname;

    if (hash) {
      // Wait a frame so the new route has rendered.
      requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: samePage ? 'auto' : 'instant' });
          target.focus({ preventScroll: true });
        }
      });
      return;
    }

    // 'instant' overrides the global smooth scroll-behavior: a new page should start at the top.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (!isFirst) document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}
