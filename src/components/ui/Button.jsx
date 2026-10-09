import { Link } from 'react-router-dom';

/** North-east arrow that slides out and is replaced on hover. */
export function Arrow({ direction = 'ne', className = '' }) {
  const paths = {
    ne: 'M5 15 15 5M7 5h8v8',
    e: 'M3 10h14M11 4l6 6-6 6',
    s: 'M10 3v14M4 11l6 6 6-6',
  };
  const icon = (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-full w-full">
      <path d={paths[direction]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const out = {
    ne: 'group-hover:translate-x-full group-hover:-translate-y-full',
    e: 'group-hover:translate-x-full',
    s: 'group-hover:translate-y-full',
  };
  const inn = {
    ne: '-translate-x-full translate-y-full',
    e: '-translate-x-full',
    s: '-translate-y-full',
  };

  return (
    <span className={`relative inline-block shrink-0 overflow-hidden ${className}`} aria-hidden="true">
      <span className={`block transition-transform duration-500 ease-out ${out[direction]}`}>{icon}</span>
      <span
        className={`absolute inset-0 block transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 ${inn[direction]}`}
      >
        {icon}
      </span>
    </span>
  );
}

const variants = {
  primary: 'bg-ink text-paper hover:bg-ink-soft',
  secondary: 'border border-line-strong text-ink hover:border-vermilion',
  light: 'bg-paper text-ink hover:bg-white',
  outlineLight: 'border border-line-dark text-paper hover:border-paper/60',
};

const sizes = {
  md: 'h-12 gap-3 pl-6 pr-5 text-[0.9375rem]',
  sm: 'h-10 gap-2.5 pl-4 pr-3.5 text-sm',
};

function resolve({ to, href, ...rest }) {
  if (to) return [Link, { to, ...rest }];
  if (href) return ['a', { href, ...rest }];
  return ['button', { type: 'button', ...rest }];
}

export function Button({ variant = 'primary', size = 'md', arrow = 'ne', className = '', children, ...props }) {
  const [Tag, tagProps] = resolve(props);
  return (
    <Tag
      className={`group inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...tagProps}
    >
      <span>{children}</span>
      {arrow && (
        <Arrow
          direction={arrow}
          className={`transition-colors duration-300 group-hover:text-vermilion ${size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'}`}
        />
      )}
    </Tag>
  );
}

/** Understated text link with a hairline underline and directional arrow. */
export function ArrowLink({ arrow = 'e', className = '', children, ...props }) {
  const [Tag, tagProps] = resolve(props);
  return (
    <Tag
      className={`group inline-flex items-center gap-2.5 font-medium tracking-[-0.01em] ${className}`}
      {...tagProps}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out group-hover:bg-[length:0%_1px] group-hover:bg-right-bottom">
        {children}
      </span>
      <Arrow direction={arrow} className="h-4 w-4 transition-colors duration-300 group-hover:text-vermilion" />
    </Tag>
  );
}
