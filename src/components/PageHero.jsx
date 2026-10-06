import Container from './ui/Container';

/** Opening block for inner pages: label, oversized headline, lede. */
export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="pb-16 pt-12 md:pb-24 md:pt-20 lg:pt-24">
      <Container>
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          <p className="eyebrow enter lg:col-span-12">{eyebrow}</p>
          <h1
            className="enter max-w-[15ch] text-display-xl font-normal lg:col-span-12"
            style={{ '--enter-delay': '80ms' }}
          >
            {title}
          </h1>
          {lede && (
            <p
              className="enter max-w-[34rem] text-lede text-ink-muted lg:col-span-6 lg:col-start-7 lg:mt-6"
              style={{ '--enter-delay': '180ms' }}
            >
              {lede}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
