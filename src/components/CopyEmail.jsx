import { useState } from 'react';
import { contact } from '../content/site';

/** Email address as a mailto link, with a copy-to-clipboard control. */
export default function CopyEmail({ className = '' }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${className}`}>
      <a href={`mailto:${contact.email}`} className="text-lg tracking-[-0.01em] underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink">
        {contact.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-8 items-center gap-2 rounded-full border border-line-strong px-3 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:border-ink hover:text-ink"
      >
        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full transition-colors ${copied ? 'bg-credo-deep' : 'bg-ink-faint'}`} />
        {copied ? 'Copied' : 'Copy email'}
      </button>
      <span role="status" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
