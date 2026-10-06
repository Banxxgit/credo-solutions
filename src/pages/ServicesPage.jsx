import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Reveal from '../components/ui/Reveal';
import { ArrowLink, Arrow } from '../components/ui/Button';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import usePageMeta from '../lib/usePageMeta';
import { services } from '../content/site';

function ServiceIndex() {
  return (
    <nav aria-label="Services on this page" className="enter mt-16 md:mt-24" style={{ '--enter-delay': '260ms' }}>
      <ol className="grid border-t border-line-strong sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s, i) => (
          <li key={s.id} className="border-b border-line-strong lg:border-b-0 lg:px-5 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-line">
            <Link
              to={`#${s.id}`}
              className="group flex h-full items-start justify-between gap-4 py-5 transition-colors hover:text-credo-deep"
            >
              <span>
                <span className="block font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, '0')}</span>
                <span className="mt-3 block text-[1.0625rem] leading-snug tracking-[-0.015em]">{s.short}</span>
              </span>
              <Arrow direction="s" className="mt-0.5 h-4 w-4 text-ink-muted" />
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ServiceDetail({ service, index }) {
  return (
    <section
      id={service.id}
      tabIndex={-1}
      aria-labelledby={`${service.id}-title`}
      className="border-t border-line-strong py-20 outline-none md:py-28"
    >
      <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="font-mono text-xs text-credo-deep">{String(index + 1).padStart(2, '0')}</span>
            </Reveal>
            <Reveal as="h2" id={`${service.id}-title`} delay={60} className="mt-6 max-w-[14ch] text-heading font-normal">
              {service.title}
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-md text-ink-muted">{service.description}</p>
              <ArrowLink to="/contact" className="mt-10">
                Talk to us about this
              </ArrowLink>
            </Reveal>
          </div>
        </div>

        <ul className="lg:col-span-6 lg:col-start-7">
          {service.offerings.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 50} className="border-b border-line py-7 first:border-t first:border-line-strong md:py-8">
              <h3 className="text-[1.25rem] leading-snug tracking-[-0.02em] md:text-[1.375rem]">{o.title}</h3>
              <p className="mt-2.5 max-w-lg text-[0.9375rem] leading-relaxed text-ink-muted">{o.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  usePageMeta({
    title: 'Services',
    description:
      'What Credo Solutions does: software engineering, AI and automation, blockchain and Web3, product and go-to-market strategy, and support after launch.',
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Five disciplines.
            <br /> One team<span className="text-credo">.</span>
          </>
        }
        lede="Software engineering, AI and automation, blockchain, product strategy, and support after launch — what each discipline covers, in detail."
      >
        <ServiceIndex />
      </PageHero>

      <Container className="pb-12">
        {services.map((service, i) => (
          <ServiceDetail key={service.id} service={service} index={i} />
        ))}
      </Container>

      <CtaBand />
    </>
  );
}
