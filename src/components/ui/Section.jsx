import Container from './Container';

const tones = {
  paper: 'bg-paper text-ink',
  deep: 'bg-paper-deep text-ink',
  wash: 'bg-credo-wash text-ink',
  ink: 'on-ink bg-ink text-paper',
};

const spacing = {
  default: 'py-24 md:py-32 lg:py-40',
  compact: 'py-16 md:py-24',
  none: '',
};

/** A full-width colour chapter with a contained inner grid. */
export default function Section({
  tone = 'paper',
  space = 'default',
  className = '',
  innerClassName = '',
  children,
  ...props
}) {
  return (
    <section className={`${tones[tone]} ${spacing[space]} ${className}`} {...props}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}
