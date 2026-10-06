import Container from '../components/ui/Container';
import { Button, ArrowLink } from '../components/ui/Button';
import usePageMeta from '../lib/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({ title: 'Page not found', description: 'The page you were looking for does not exist.', noindex: true });

  return (
    <section className="pb-32 pt-16 md:pb-48 md:pt-28">
      <Container>
        <p className="eyebrow enter">404</p>
        <h1 className="enter mt-8 max-w-[12ch] text-display-xl font-normal" style={{ '--enter-delay': '80ms' }}>
          This page doesn’t exist<span className="text-credo">.</span>
        </h1>
        <div className="enter mt-12 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ '--enter-delay': '160ms' }}>
          <Button to="/">Back to home</Button>
          <ArrowLink to="/contact">Contact us</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
