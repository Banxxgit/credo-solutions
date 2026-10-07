import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import NewsletterForm from '../NewsletterForm';
import useMotionPreference from '../../lib/useMotionPreference';
import { contact, services } from '../../content/site';

const company = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function FooterHeading({ children }) {
  return <h2 className="font-mono text-eyebrow uppercase text-paper/50">{children}</h2>;
}

const linkClass = 'text-paper/80 transition-colors hover:text-paper';

export default function Footer() {
  const { reduced, toggle } = useMotionPreference();

  return (
    <footer id="footer" className="on-ink bg-ink text-paper">
      <Container className="pb-10 pt-20 md:pt-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="max-w-[16ch] text-title font-normal">Notes from Credo, now and then<span className="text-vermilion">.</span></p>
            <p className="mt-4 max-w-sm text-paper/60">
              Leave your email and we’ll keep you posted on what we’re building.
            </p>
            <div className="mt-8 max-w-md">
              <NewsletterForm />
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-[1fr_0.75fr_1.25fr] lg:col-span-7 lg:col-start-6">
            <div>
              <FooterHeading>Services</FooterHeading>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services#${s.id}`} className={linkClass}>
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {company.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <FooterHeading>Contact</FooterHeading>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                <li>
                  <a href={`mailto:${contact.email}`} className={linkClass}>
                    {contact.email}
                  </a>
                </li>
                <li className="text-paper/60">Replies {contact.responseTime.toLowerCase()}</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line-dark pt-8 md:mt-28 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-col gap-4 text-sm text-paper/60 sm:flex-row sm:items-center sm:gap-8">
            <button
              type="button"
              onClick={toggle}
              aria-pressed={reduced}
              className="group -my-2 inline-flex items-center gap-3 py-2 text-left transition-colors hover:text-paper"
            >
              <span
                aria-hidden="true"
                className={`relative h-4 w-7 rounded-full border transition-colors ${
                  reduced ? 'border-credo bg-credo' : 'border-paper/40'
                }`}
              >
                <span
                  className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full transition-[left,background-color] ${
                    reduced ? 'left-[15px] bg-ink' : 'left-[3px] bg-paper/70'
                  }`}
                />
              </span>
              Reduce motion
            </button>
            <p>© {new Date().getFullYear()} Credo Solutions. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
