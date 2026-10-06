import { useEffect, useRef, useState } from 'react';

/**
 * Hero figure: the Credo mark drawn as a working system.
 *
 * Same geometry as CredoMark (30-unit grid, 8-unit stroke) at 12×:
 *   top arm  — Applications
 *   spine    — Integration: APIs, data & AI (joins the arms)
 *   base     — Cloud infrastructure
 *   module   — the product: docked in the opening, reaching past it
 *
 * Motion (CSS only, see index.css "Hero system"):
 *   entrance — base, spine, then top arm assemble; the product docks.
 *   idle     — every 7s a signal leaves applications and infrastructure,
 *              meets in the spine and arrives at the product together.
 *   hover    — pieces part slightly (exploded view) to show the joints.
 * Reduced motion shows the assembled, resting state only.
 */

const K = 12; // scale from the 30-unit logo grid
const O = 40; // outer margin
const u = (n) => O + n * K; // logo units → figure units
const STROKE = 8 * K; // 96
const J = 8; // joint gap between pieces

const spineX = u(4); // centre line of the spine
const meetY = u(15); // centre line of the product
const productX = u(22);

// Signal paths — equal length, so both arrive at the product together.
const fromApps = `M${u(23)} ${u(4)}H${spineX}V${meetY}H${productX}`;
const fromInfra = `M${u(23)} ${u(26)}H${spineX}V${meetY}H${productX}`;

const rr = (x0, y0, w, h, r = 6) =>
  `M${x0 + r} ${y0}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 -${r} ${r}h-${w - 2 * r}a${r} ${r} 0 0 1 -${r} -${r}v-${h - 2 * r}a${r} ${r} 0 0 1 ${r} -${r}Z`;

/** Ruler ticks every 4 logo units along a horizontal arm. */
function ArmTicks({ top, to }) {
  const lines = [];
  for (let n = 4; n < to; n += 4) {
    const px = u(n);
    lines.push(<line key={`t${n}`} x1={px} y1={top} x2={px} y2={top + 6} />);
    lines.push(<line key={`b${n}`} x1={px} y1={top + STROKE - 6} x2={px} y2={top + STROKE} />);
  }
  return (
    <g stroke="#15181A" strokeOpacity="0.35" strokeWidth="1">
      {lines}
    </g>
  );
}

function Piece({ d, className, children }) {
  return (
    <g className={className}>
      <path d={d} transform="translate(5 5)" fill="#15181A" fillOpacity="0.06" />
      <path d={d} fill="#EDEAE3" stroke="#15181A" strokeOpacity="0.55" strokeWidth="1" />
      {children}
    </g>
  );
}

export default function CredoSystem({ className = '' }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  // Pause the idle loop while the figure is off screen.
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting));
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const label = 'cs-label font-mono text-[11px] uppercase tracking-[0.08em]';
  const size = 30 * K + 2 * O;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${size} ${size}`}
      className={`cs h-auto w-full overflow-visible ${className}`}
      data-paused={paused || undefined}
      role="img"
      aria-label="The Credo mark drawn as a system: applications, an integration layer for data and AI, and cloud infrastructure join to support a product."
    >
      <defs>
        <pattern id="cs-dots" width="24" height="24" patternUnits="userSpaceOnUse" x={O} y={O}>
          <circle cx="0.75" cy="0.75" r="0.9" fill="#15181A" fillOpacity="0.16" />
        </pattern>
        <radialGradient id="cs-fade">
          <stop offset="0.55" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="cs-mask">
          <rect width="100%" height="100%" fill="url(#cs-fade)" />
        </mask>
      </defs>

      {/* engineering grid */}
      <rect className="cs-grid" width="100%" height="100%" fill="url(#cs-dots)" mask="url(#cs-mask)" />

      {/* channels — the signal's route, always visible */}
      <g className="cs-channel" fill="none" stroke="#15181A" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="2 5">
        <path d={fromApps} />
        <path d={fromInfra} />
      </g>

      {/* base — cloud infrastructure */}
      <g className="cs-x-base">
        <Piece className="cs-base" d={rr(u(0), u(22), u(24) - O, STROKE)}>
          <ArmTicks top={u(22)} to={24} />
        </Piece>
        <text x={u(0) + 22} y={u(26) + 4} className={`${label} fill-ink-muted`}>
          Cloud infrastructure
        </text>
      </g>

      {/* spine — integration, data & AI */}
      <g className="cs-x-spine">
        <Piece className="cs-spine" d={rr(u(0), u(8) + J, STROKE, u(22) - u(8) - 2 * J)} />
        <text
          x={spineX + 4}
          y={meetY}
          transform={`rotate(-90 ${spineX + 4} ${meetY})`}
          textAnchor="middle"
          className={`${label} fill-ink-muted`}
        >
          APIs · Data · AI
        </text>
      </g>

      {/* top arm — applications */}
      <g className="cs-x-top">
        <Piece className="cs-top" d={rr(u(0), u(0), u(24) - O, STROKE)}>
          <ArmTicks top={u(0)} to={24} />
        </Piece>
        <text x={u(0) + 22} y={u(4) + 4} className={`${label} fill-ink-muted`}>
          Applications
        </text>
      </g>

      {/* joints */}
      <g className="cs-pins" fill="#15181A">
        <rect x={spineX - 12} y={u(8) - 1} width="24" height={J + 2} rx="1" />
        <rect x={spineX - 12} y={u(22) - J - 1} width="24" height={J + 2} rx="1" />
      </g>

      {/* signals */}
      <g fill="none" stroke="#54B4E3" strokeWidth="3" strokeLinecap="round">
        <path className="cs-signal" d={fromApps} pathLength="100" />
        <path className="cs-signal" d={fromInfra} pathLength="100" />
      </g>

      {/* product */}
      <g className="cs-x-product">
        <g className="cs-product">
          <rect x={productX + 5} y={u(11) + 5} width={STROKE} height={STROKE} rx="6" fill="#2F87B2" />
          <rect x={productX} y={u(11)} width={STROKE} height={STROKE} rx="6" fill="#54B4E3" />
          <rect
            className="cs-ring"
            x={productX}
            y={u(11)}
            width={STROKE}
            height={STROKE}
            rx="6"
            fill="none"
            stroke="#54B4E3"
            strokeWidth="1.5"
          />
          <circle cx={productX + STROKE / 2} cy={meetY} r="4" fill="#15181A" />
        </g>
        <text x={u(30)} y={u(11) - 14} textAnchor="end" className={`${label} fill-credo-deep`}>
          Your product
        </text>
      </g>
    </svg>
  );
}
