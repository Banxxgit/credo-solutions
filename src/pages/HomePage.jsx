import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import { Button, ArrowLink } from '../components/ui/Button';
import CredoSystem from '../components/CredoSystem';
import BuildList from '../components/BuildList';
import CapabilityList from '../components/CapabilityList';
import Approach from '../components/Approach';
import TechIndex from '../components/TechIndex';
import CtaBand from '../components/CtaBand';
import usePageMeta from '../lib/usePageMeta';
import { positioning, sectors } from '../content/site';

// 1. What is Credo?
function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16 lg:pt-20">
      <Container>
        <h1
          className="enter text-[clamp(2.625rem,6.7vw,7.25rem)] font-normal max-md:[text-wrap:pretty] leading-[0.95] tracking-[-0.045em] md:max-w-[17ch]"
          style={{ '--enter-delay': '80ms' }}
        >
          {positioning.headline}
          <span className="text-credo">.</span>
        </h1>

        <div className="mt-10 grid items-start gap-y-16 md:mt-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="enter lg:col-span-6 lg:pt-2" style={{ '--enter-delay': '200ms' }}>
            <p className="max-w-[31rem] text-lede text-ink-muted">{positioning.summary}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Button to="/contact">Start a project</Button>
              <ArrowLink to="/services">See what we do</ArrowLink>
            </div>
          </div>

          <figure
            className="enter mx-auto w-full max-w-[17rem] sm:max-w-[22rem] lg:col-span-5 lg:col-start-8 lg:-mt-36 lg:mr-0 lg:max-w-[24rem]"
            style={{ '--enter-delay': '120ms' }}
          >
            <CredoSystem />
          </figure>
        </div>

      </Container>
    </section>
  );
}

export default function HomePage() {
  usePageMeta({
    title: 'Technology & Product Engineering',
    description:
      'Credo Solutions designs, builds, integrates and supports software for businesses — with experience across cloud, data and AI, enterprise platforms and blockchain.',
  });

  return (
    <>
      <Hero />

      {/* 2. What does Credo help businesses build? */}
      <Section tone="deep" aria-labelledby="what-we-build">
        <SectionHeader
          eyebrow="What we build"
          title={
            <span id="what-we-build">
              Products, platforms, and the systems that connect them<span className="text-credo-deep">.</span>
            </span>
          }
          lede="Customer-facing products, the internal systems behind them, and the connections that make them work together."
        />
        <div className="mt-20 md:mt-28">
          <BuildList />
        </div>
      </Section>

      {/* 3. What capabilities does Credo bring? */}
      <Section aria-labelledby="disciplines">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <span id="disciplines">
              What we bring to a project<span className="text-credo">.</span>
            </span>
          }
          lede="Projects draw on whichever disciplines the problem needs — one, or several. Select any to see exactly what it covers."
        />
        <div className="mt-20 md:mt-28">
          <CapabilityList />
        </div>
      </Section>

      {/* 4. How does Credo work? */}
      <Section tone="ink" aria-labelledby="how-we-work">
        <SectionHeader
          eyebrow="How we work"
          title={
            <span id="how-we-work">
              Understand first. Deliver early. <span className="text-credo">Stay on.</span>
            </span>
          }
          lede="Four principles that shape every engagement."
        />
        <div className="mt-20 md:mt-28">
          <Approach />
        </div>
      </Section>

      {/* 5. Which sectors? */}
      <Section aria-labelledby="sectors">
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Who we work with</p>
            </Reveal>
            <Reveal as="h2" id="sectors" delay={80} className="mt-8 max-w-[13ch] text-heading font-normal">
              From startups to established enterprises.
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-sm text-ink-muted">
                We shape each engagement around the organization’s goals and stage of growth. What a startup needs
                first is rarely what an enterprise needs first.
              </p>
            </Reveal>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7" aria-label="Sectors">
            {sectors.map((sector, i) => (
              <Reveal
                as="li"
                key={sector}
                delay={i * 70}
                className="flex items-baseline gap-6 border-b border-line-strong py-5 first:border-t md:gap-10 md:py-6"
              >
                <span className="font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[clamp(2.25rem,4.4vw,4rem)] font-normal leading-none tracking-[-0.04em]">
                  {sector}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6. What factual evidence can we provide? */}
      <Section tone="deep" aria-labelledby="technical-experience">
        <SectionHeader
          eyebrow="Technical experience"
          title={
            <span id="technical-experience">
              The platforms and methods behind the work<span className="text-credo-deep">.</span>
            </span>
          }
          lede="Named, not implied. Every item here is part of a service we offer — ask us about any of them."
        />
        <div className="mt-20 md:mt-28">
          <TechIndex />
        </div>
      </Section>

      {/* 7. How to start */}
      <CtaBand />
    </>
  );
}
