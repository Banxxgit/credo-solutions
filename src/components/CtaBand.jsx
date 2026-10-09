import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { Button } from './ui/Button';
import CopyEmail from './CopyEmail';
import { contact } from '../content/site';

/** Closing colour chapter that hands off to the contact page. */
export default function CtaBand() {
  return (
    <Section tone="wash" className="overflow-hidden">
      <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <Reveal className="lg:col-span-12">
          <p className="eyebrow">Start a project</p>
        </Reveal>
        <Reveal as="h2" delay={80} className="max-w-[13ch] text-display font-normal lg:col-span-8">
          Have something to build<span className="text-credo-deep">?</span>
        </Reveal>
        <Reveal delay={160} className="flex flex-col justify-end gap-8 lg:col-span-4 lg:pl-8">
          <p className="max-w-xs text-ink-muted">
            A short description of the problem is enough to start. We reply {contact.responseTime.toLowerCase()}.
          </p>
          <Button to="/contact" className="self-start">
            Start a project
          </Button>
        </Reveal>
        <Reveal delay={200} className="border-t border-line-strong pt-6 lg:col-span-12">
          <CopyEmail />
        </Reveal>
      </div>
    </Section>
  );
}
