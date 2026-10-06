import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/ContactForm';
import CopyEmail from '../components/CopyEmail';
import FAQ from '../components/FAQ';
import usePageMeta from '../lib/usePageMeta';
import { contact } from '../content/site';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description:
      'Tell Credo Solutions about your project — a new product, a legacy replacement, an integration or an automation. We reply within 24 hours.',
  });

  return (
    <>
      <section className="pb-24 pt-12 md:pb-32 md:pt-20 lg:pt-24">
        <Container>
          <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5">
              <p className="eyebrow enter">Contact</p>
              <h1
                className="enter mt-8 max-w-[11ch] text-display font-normal"
                style={{ '--enter-delay': '80ms' }}
              >
                Tell us what you’re building<span className="text-credo">.</span>
              </h1>
              <p className="enter mt-8 max-w-md text-lede text-ink-muted" style={{ '--enter-delay': '160ms' }}>
                A new product, a legacy system that needs replacing, an integration, or a process worth automating.
                Tell us what you’re working on and where you are with it.
              </p>

              <dl className="enter mt-14 border-t border-line-strong" style={{ '--enter-delay': '240ms' }}>
                <div className="border-b border-line py-5">
                  <dt className="font-mono text-eyebrow uppercase text-ink-muted">Email</dt>
                  <dd className="mt-3">
                    <CopyEmail />
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="font-mono text-eyebrow uppercase text-ink-muted">Response time</dt>
                  <dd className="mt-3 text-[1.0625rem]">{contact.responseTime}</dd>
                </div>
              </dl>
            </div>

            <div className="enter lg:col-span-6 lg:col-start-7" style={{ '--enter-delay': '200ms' }}>
              <div className="border-t-2 border-ink bg-white/60 p-6 sm:p-10 lg:p-12">
                <h2 className="mb-10 text-title font-normal">Start a project</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="deep" aria-labelledby="faq">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">FAQ</p>
            </Reveal>
            <Reveal as="h2" id="faq" delay={80} className="mt-8 max-w-[10ch] text-heading font-normal">
              Before you get in touch.
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-8">
            <FAQ />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
