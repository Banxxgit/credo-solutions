import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { Arrow } from './ui/Button';
import { services } from '../content/site';

/** Editorial, hairline-ruled index of Credo's capabilities. Each row links to its detail. */
export default function CapabilityList() {
  return (
    <ul className="border-t border-line-strong">
      {services.map((service, i) => (
        <Reveal as="li" key={service.id} delay={i * 60} className="border-b border-line-strong">
          <Link
            to={`/services#${service.id}`}
            className="group relative grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 gap-y-3 py-8 md:grid-cols-12 md:gap-x-8 md:py-10"
          >
            {/* hover wash */}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-5 -right-5 origin-bottom scale-y-0 bg-paper-deep transition-transform duration-500 ease-out group-hover:scale-y-100 sm:-left-8 sm:-right-8 lg:-left-12 lg:-right-12"
            />
            <span className="num relative self-start pt-2 md:col-span-1 md:pt-3">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="relative text-title font-normal transition-transform duration-500 ease-out group-hover:translate-x-2 md:col-span-5">
              {service.short}
            </span>
            <span className="relative col-span-3 col-start-2 md:col-span-5 md:col-start-7 md:pt-1.5">
              <span className="block max-w-md text-ink-muted">{service.summary}</span>
              <span className="mt-3 block max-w-md text-sm leading-relaxed text-ink-muted">
                {service.offerings
                  .map((o) => o.title.replace(/\s*\(.*\)$/, ''))
                  .join(' · ')}
              </span>
            </span>
            <span className="relative col-start-3 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-vermilion group-hover:bg-vermilion group-hover:text-ink md:col-span-1 md:col-start-12 md:justify-self-end">
              <Arrow className="h-4 w-4" />
              <span className="sr-only">— view details</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
