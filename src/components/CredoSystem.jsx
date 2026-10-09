import { useEffect, useRef, useState } from 'react';

/**
 * Hero figure — "the cantilever".
 *
 * What Credo does, not who Credo is: a product carried out into open
 * space by an engineered system. Drawn in oblique projection.
 *
 *   core     strata of different materials — separate capabilities —
 *            assembled into one load-bearing mass
 *   slab     anchored inside the core, reaching out over open space
 *   product  the only colour, carried at the slab's tip
 *
 * Choreography (CSS, index.css "Hero figure"):
 *   1. the parts lie scattered; the lower strata move in and seat
 *   2. the slab extends out of the core
 *   3. the upper strata seat on it, locking it in
 *   4. the product emerges from the core and travels to the tip
 *   5. the slab takes the load, flexes once and holds
 * Idle, once every 14s: a stratum re-seats (the system is maintained while it
 * runs) and the product registers it. Otherwise still.
 * Reduced motion shows the resolved state. Ink uses currentColor.
 */

const D = 28; // depth of the oblique projection (up and to the right)
const GROUND = 380;
const CORE = { x0: 70, x1: 200 };
const SLAB = { y0: 196, y1: 222, x1: 440 };
const PRODUCT = { x: 348, s: 66, d: 14 };
const EMERGE_FROM = 214; // product starts at the core's face

// Strata, bottom to top. `x1` lets the top block step in.
// `from` is where each part lies before assembly: [x, y, rotation].
const STRATA = [
  { id: 's1', y0: 300, y1: GROUND, m: 'solid', from: [-34, 0, 0], i: 0 },
  { id: 's2', y0: 226, y1: 296, m: 'hatch', from: [96, 40, -7], i: 1, reseat: true },
  { id: 's3', y0: 120, y1: 192, m: 'tint', from: [150, 30, 5], i: 3 },
  { id: 's4', y0: 76, y1: 116, m: 'solid', from: [250, 150, -9], i: 4, x1: 150 },
];

const pts = (...p) => p.map(([x, y]) => `${x},${y}`).join(' ');

/** Front, top and right faces of an oblique box. */
function Box({ x0, x1, y0, y1, d = D, m }) {
  const front = { solid: 'currentColor', hatch: 'url(#em-hatch)', tint: 'var(--em-tint)' }[m];
  const top = m === 'solid' ? 'var(--em-solid-top)' : 'var(--em-light-top)';
  const side = m === 'solid' ? 'var(--em-solid-side)' : 'var(--em-light-side)';
  const line = m === 'solid' ? 'none' : 'currentColor';
  return (
    <>
      <polygon points={pts([x0, y0], [x0 + d, y0 - d], [x1 + d, y0 - d], [x1, y0])} fill={top} stroke={line} strokeOpacity="0.45" strokeLinejoin="round" />
      <polygon points={pts([x1, y0], [x1 + d, y0 - d], [x1 + d, y1 - d], [x1, y1])} fill={side} stroke={line} strokeOpacity="0.45" strokeLinejoin="round" />
      {m !== 'solid' && <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill="var(--em-paper)" />}
      <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={front} stroke={line} strokeOpacity="0.5" />
    </>
  );
}

export default function CredoSystem({ className = '' }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  // Pause the idle event while the figure is off screen.
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting));
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const p = { x0: PRODUCT.x + PRODUCT.d, y1: SLAB.y0 - PRODUCT.d };
  const strata = (filter) =>
    STRATA.filter(filter).map((s) => (
      <g
        key={s.id}
        className="em-stratum"
        style={{ '--fx': `${s.from[0]}px`, '--fy': `${s.from[1]}px`, '--fr': `${s.from[2]}deg`, '--i': s.i }}
      >
        <g className={s.reseat ? 'em-reseat' : undefined}>
          <Box x0={CORE.x0} x1={s.x1 ?? CORE.x1} y0={s.y0} y1={s.y1} m={s.m} />
        </g>
      </g>
    ));

  return (
    <svg
      ref={ref}
      viewBox="24 36 460 352"
      className={`em h-auto w-full overflow-visible text-ink ${className}`}
      data-paused={paused || undefined}
      role="img"
      aria-label="A cantilevered structure: a core assembled from different layers holds a slab that reaches out over open space, carrying a blue product at its tip."
    >
      <defs>
        <pattern id="em-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeOpacity="0.42" />
        </pattern>
      </defs>

      {/* ground */}
      <line className="em-ground" x1="30" y1={GROUND} x2="480" y2={GROUND} stroke="currentColor" strokeOpacity="0.3" pathLength="1" />

      {/* cast shadow of the slab and product on the ground plane */}
      <g className="em-cast" fill="currentColor">
        <polygon points={pts([CORE.x1, GROUND], [CORE.x1 + D, GROUND - D], [SLAB.x1 + D, GROUND - D], [SLAB.x1, GROUND])} fillOpacity="0.045" />
        <polygon
          points={pts([p.x0, GROUND], [p.x0 + PRODUCT.d, GROUND - PRODUCT.d], [p.x0 + PRODUCT.s + PRODUCT.d, GROUND - PRODUCT.d], [p.x0 + PRODUCT.s, GROUND])}
          fillOpacity="0.07"
          transform={`translate(0 ${-PRODUCT.d})`}
        />
      </g>

      {/* lower strata */}
      {strata((s) => s.i < 2)}

      {/* the slab — and what it carries — flexes about the core's edge */}
      <g className="em-flex">
        <g className="em-slab">
          <Box x0={CORE.x0} x1={SLAB.x1} y0={SLAB.y0} y1={SLAB.y1} m="solid" />
        </g>
        <g className="em-product" style={{ '--emerge': `${EMERGE_FROM - PRODUCT.x}px` }}>
          <g className="em-respond">
            <polygon
              points={pts([p.x0, p.y1 - PRODUCT.s], [p.x0 + PRODUCT.d, p.y1 - PRODUCT.s - PRODUCT.d], [p.x0 + PRODUCT.s + PRODUCT.d, p.y1 - PRODUCT.s - PRODUCT.d], [p.x0 + PRODUCT.s, p.y1 - PRODUCT.s])}
              fill="#8FD0EF"
            />
            <polygon
              points={pts([p.x0 + PRODUCT.s, p.y1 - PRODUCT.s], [p.x0 + PRODUCT.s + PRODUCT.d, p.y1 - PRODUCT.s - PRODUCT.d], [p.x0 + PRODUCT.s + PRODUCT.d, p.y1 - PRODUCT.d], [p.x0 + PRODUCT.s, p.y1])}
              fill="#2F87B2"
            />
            <rect x={p.x0} y={p.y1 - PRODUCT.s} width={PRODUCT.s} height={PRODUCT.s} fill="#54B4E3" />
          </g>
        </g>
      </g>

      {/* upper strata lock the slab in */}
      {strata((s) => s.i >= 2)}
    </svg>
  );
}
