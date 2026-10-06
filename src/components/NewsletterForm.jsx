import { useState } from 'react';
import { Arrow } from './ui/Button';
import { submitNetlifyForm } from '../lib/netlifyForm';

/** Netlify "newsletter" form — field names must match index.html. */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitNetlifyForm('newsletter', { email, 'bot-field': botField });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p role="status" className="flex items-center gap-3 border-b border-line-dark py-3 text-lg text-paper">
        <span className="h-2 w-2 rounded-full bg-credo" aria-hidden="true" />
        Thanks — you’re on the list.
      </p>
    );
  }

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="group flex items-center border-b border-line-dark transition-colors focus-within:border-paper hover:border-paper/50">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent py-3 text-lg text-paper placeholder:text-paper/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group -mr-2 flex h-11 items-center gap-2 rounded-full px-2 text-sm font-medium text-paper disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Subscribe'}
          <Arrow direction="e" className="h-4 w-4" />
        </button>
      </div>
      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-[#F2A7A0]">
          Subscription failed. Please try again.
        </p>
      )}
    </form>
  );
}
