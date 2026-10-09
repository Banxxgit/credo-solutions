/**
 * Credo identity.
 *
 * Drawn on a 30-unit grid with an 8-unit stroke: a squared "C" — the
 * system (applications above, integration spine, infrastructure below) —
 * whose arms stop short of the edge, and a single Credo-blue module that
 * sits in the opening and extends past it — the product, connected to
 * the system and reaching out of it. The hero figure (CredoSystem) is the
 * same geometry at 12×.
 *
 * The structure takes `currentColor`, so it works on paper and ink;
 * pass `mono` to render the module in currentColor as well.
 */

export function CredoMark({ className = '', mono = false, title }) {
  return (
    <svg
      viewBox="0 0 30 30"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M3 0h21v8H8v14h16v8H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Z"
      />
      <rect x="22" y="11" width="8" height="8" fill={mono ? 'currentColor' : '#54B4E3'} />
    </svg>
  );
}

/** Mark + wordmark lockup. */
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <CredoMark className="h-[1.375rem] w-[1.375rem] shrink-0" />
      <span className="text-[1.125rem] font-medium leading-none tracking-[-0.035em]">
        Credo
        <span className="ml-[0.3em] font-normal text-ink-muted [.on-ink_&]:text-paper/55">Solutions</span>
      </span>
    </span>
  );
}
