import Reveal from './ui/Reveal';
import { technologies } from '../content/site';

/** Platforms and methods, grouped by area — all named in the service offerings. */
export default function TechIndex() {
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {technologies.map((group, i) => (
        <Reveal key={group.group} delay={i * 80} className="border-t border-line-strong pt-5">
          <h3 className="font-mono text-eyebrow uppercase text-ink-muted">{group.group}</h3>
          <ul className="mt-6 space-y-0">
            {group.items.map((item) => (
              <li key={item} className="border-b border-line py-2.5 text-[1.0625rem] tracking-[-0.01em] last:border-b-0">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
