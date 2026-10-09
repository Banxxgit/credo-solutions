import Reveal from './Reveal';

/**
 * Asymmetric section opener: a small label in the left column,
 * the heading (and optional lede) on the right.
 */
export default function SectionHeader({ eyebrow, title, lede, as: Heading = 'h2', aside, className = '' }) {
  return (
    <div className={`grid gap-y-8 lg:grid-cols-12 lg:gap-x-8 ${className}`}>
      <Reveal className="lg:col-span-3 lg:pt-4">
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <div className="lg:col-span-9">
        <Reveal as={Heading} delay={80} className="max-w-[18ch] text-heading font-normal">
          {title}
        </Reveal>
        {(lede || aside) && (
          <Reveal delay={160} className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2 md:gap-12">
            {lede && <p className="max-w-prose text-lede text-ink-muted [.on-ink_&]:text-paper/70">{lede}</p>}
            {aside}
          </Reveal>
        )}
      </div>
    </div>
  );
}
