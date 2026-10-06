import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE = 'Credo Solutions';

function setMeta(selector, attr, key, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets the document title, description and canonical URL for the current route.
 * Pass `noindex` for pages that should not be indexed (e.g. 404): the canonical
 * link is removed and a robots noindex tag is added for the life of the page.
 */
export default function usePageMeta({ title, description, noindex = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (noindex) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      setMeta('meta[name="robots"]', 'name', 'robots', 'noindex');
    } else {
      setCanonical(window.location.origin + pathname);
    }
    const fullTitle = title ? `${title} | ${SITE}` : SITE;
    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    }
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    return () => {
      if (noindex) document.head.querySelector('meta[name="robots"]')?.remove();
    };
  }, [title, description, pathname, noindex]);
}
