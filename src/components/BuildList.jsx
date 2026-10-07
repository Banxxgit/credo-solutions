import Reveal from './ui/Reveal';
import { builds } from '../content/site';

/** What Credo builds — a three-column, hairline-ruled index. */
export default function BuildList() {
  return (
    <ol className="grid border-t border-line-strong sm:grid-cols-2 lg:grid-cols-3">
      {builds.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={(i % 3) * 70}
          className="border-b border-line-strong py-8 sm:pr-8 md:py-10 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-line lg:[&:not(:nth-child(3n+1))]:pl-8 sm:max-lg:even:border-l sm:max-lg:even:border-line sm:max-lg:even:pl-8"
        >
          <span className="num">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-6 text-[1.625rem] font-normal leading-tight tracking-[-0.03em] md:mt-10 md:text-[1.875rem]">
            {item.title}
          </h3>
          <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-ink-muted">{item.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
