import Reveal from './ui/Reveal';
import { approach } from '../content/site';

/** Four-step working method, set on hairline-topped columns. */
export default function Approach() {
  return (
    <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {approach.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 90} className="border-t border-line-dark pt-6">
          <span className="font-mono text-xs text-vermilion">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-8 text-[1.5rem] font-normal leading-tight tracking-[-0.025em]">{step.title}</h3>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-paper/65">{step.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
