import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { Button, Arrow } from '../ui/Button';
import { nav, contact } from '../../content/site';

const mobileNav = [{ label: 'Home', to: '/' }, ...nav];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // While the mobile menu is open: lock scroll, make the page inert, handle Escape.
  useEffect(() => {
    const page = [document.getElementById('main'), document.getElementById('footer')];
    if (!open) return undefined;

    document.body.style.overflow = 'hidden';
    page.forEach((el) => el?.setAttribute('inert', ''));
    // Defer until the panel's visibility transition has started, or focus() is ignored.
    const focusTimer = setTimeout(() => firstLinkRef.current?.focus(), 50);

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = '';
      page.forEach((el) => el?.removeAttribute('inert'));
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Note: backdrop-filter would make the header the containing block for the
  // fixed mobile menu, so it is dropped while the menu is open.
  const surface = open
    ? 'bg-paper'
    : scrolled
      ? 'bg-paper/90 shadow-[0_1px_0_rgba(21,24,26,0.1)] backdrop-blur-md'
      : 'bg-paper';

  return (
    <header className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${surface}`}>
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="-m-2 rounded-md p-2" aria-label="Credo Solutions — home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2 py-2 text-[0.9375rem] tracking-[-0.01em] transition-colors ${
                      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full bg-credo transition-transform duration-300 ${
                          isActive ? 'scale-100' : 'scale-0 group-hover:scale-75'
                        }`}
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" size="sm">
            Start a project
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 flex h-11 items-center gap-3 rounded-full px-3 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 flex flex-col bg-paper transition-[opacity,visibility] duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto border-t border-line">
          <ul className="px-5 sm:px-8">
            {mobileNav.map((item, i) => (
              <li
                key={item.to}
                className={`border-b border-line transition-[opacity,transform] duration-500 ease-out ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              >
                <NavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between py-5 text-[2.5rem] font-normal leading-none tracking-[-0.04em] ${
                      isActive ? 'text-ink' : 'text-ink/70'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs tracking-normal text-ink-muted">0{i + 1}</span>
                        <span>
                          {item.label}
                          {isActive && <span className="text-credo">.</span>}
                        </span>
                      </span>
                      <Arrow className="h-5 w-5 self-center text-ink-muted" />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-line px-5 pb-8 pt-6 sm:px-8">
          <p className="font-mono text-eyebrow uppercase text-ink-muted">Email</p>
          <a href={`mailto:${contact.email}`} className="mt-2 block text-lg">
            {contact.email}
          </a>
          <Button to="/contact" className="mt-6 w-full">
            Start a project
          </Button>
        </div>
      </div>
    </header>
  );
}
