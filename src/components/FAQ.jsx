import { useId, useState } from 'react';
import { faqs } from '../content/site';

function Item({ faq, open, onToggle }) {
  const id = useId();
  return (
    <li className="border-b border-line-strong">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={onToggle}
          className="group flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
        >
          <span className="max-w-2xl text-[1.1875rem] leading-snug tracking-[-0.015em] md:text-[1.375rem]">
            {faq.question}
          </span>
          <span
            aria-hidden="true"
            className={`relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
              open ? 'border-ink bg-ink text-paper' : 'border-line-strong group-hover:border-ink'
            }`}
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className={`absolute h-3 w-px bg-current transition-transform duration-300 ease-out ${open ? 'rotate-90 scale-y-0' : ''}`}
            />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className={`overflow-hidden transition-[visibility] duration-500 ${open ? 'visible' : 'invisible'}`}>
          <p className={`max-w-2xl pb-8 pr-14 text-ink-muted transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}>
            {faq.answer}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <ul className="border-t border-line-strong">
      {faqs.map((faq, i) => (
        <Item key={faq.question} faq={faq} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
      ))}
    </ul>
  );
}
