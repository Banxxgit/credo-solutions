import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import usePageMeta from '../lib/usePageMeta';
import { about } from '../content/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description:
      'Credo Solutions is a team of engineers, data scientists and strategists helping organizations put technology to practical use — and keep it working after launch.',
  });

  return (
    <>
      <PageHero
        eyebrow="About Credo"
        title={
          <>
            Founded on a simple belief<span className="text-credo">.</span>
          </>
        }
        lede={about.intro}
      />

      {/* Story */}
      <Section className="border-t border-line" aria-labelledby="story">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-3 lg:pt-4">
            <p className="eyebrow">The belief</p>
            <p className="mt-6 font-mono text-xs text-ink-muted">
              <span className="italic">credo</span> — Latin, “I believe”
            </p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal as="h2" id="story" delay={80} className="max-w-[22ch] text-heading font-normal">
              “{about.belief}”
            </Reveal>
            <Reveal delay={160} className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
              <p className="max-w-prose text-ink-muted">{about.team}</p>
              <p className="max-w-prose text-ink-muted">{about.range}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section tone="ink" aria-labelledby="philosophy">
        <SectionHeader
          eyebrow="Our philosophy"
          title={
            <span id="philosophy">
              Technology should <span className="text-credo">serve people</span>, not the other way around.
            </span>
          }
          lede={about.philosophy}
        />
        <ol className="mt-20 grid gap-x-8 gap-y-12 md:mt-28 md:grid-cols-3">
          {about.values.map((value, i) => (
            <Reveal as="li" key={value.title} delay={i * 90} className="border-t border-line-dark pt-6">
              <span className="font-mono text-xs text-vermilion">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 text-[1.5rem] font-normal leading-tight tracking-[-0.025em]">{value.title}</h3>
              <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-paper/65">{value.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Vision & mission */}
      <Section aria-label="Vision and mission">
        <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-8">
          {[
            { label: 'Vision', text: about.vision },
            { label: 'Mission', text: about.mission },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 100} className="border-t border-line-strong pt-6 md:pr-10">
              <h2 className="font-mono text-eyebrow uppercase text-ink-muted">{item.label}</h2>
              <p className="mt-10 max-w-[24ch] text-title font-normal">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Promise */}
      <Section tone="deep" aria-labelledby="promise">
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Our promise</p>
            </Reveal>
            <Reveal as="h2" id="promise" delay={80} className="mt-8 max-w-[14ch] text-heading font-normal">
              What we commit to.
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-sm text-ink-muted">
                When you work with Credo Solutions you get a dedicated team, not a vendor handing over a deliverable.
              </p>
              <Button to="/contact" className="mt-10">
                Work with us
              </Button>
            </Reveal>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {about.promises.map((promise, i) => (
              <Reveal
                as="li"
                key={promise}
                delay={i * 80}
                className="flex gap-6 border-b border-line-strong py-8 first:border-t md:gap-10"
              >
                <span className="num self-start pt-2">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-title font-normal">{promise}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
