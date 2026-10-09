import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/Button';
import { submitNetlifyForm } from '../lib/netlifyForm';
import { contact } from '../content/site';

const empty = { name: '', email: '', company: '', message: '' };

function Field({ id, label, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between font-mono text-eyebrow uppercase text-ink-muted">
        {label}
        {optional && <span className="normal-case tracking-normal text-ink-muted">Optional</span>}
      </label>
      {children}
    </div>
  );
}

/**
 * Netlify "contact" form. The form name, field names (name, email, company,
 * message) and honeypot (bot-field) must stay in sync with index.html.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState(empty);
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const successRef = useRef(null);

  // Move focus to the confirmation so keyboard and screen-reader users hear it.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitNetlifyForm('contact', { ...formData, 'bot-field': botField });
      setStatus('success');
      setFormData(empty);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex min-h-[28rem] flex-col justify-between outline-none">
        <div>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-credo" aria-hidden="true">
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="#15181A" strokeWidth="1.6">
              <path d="m4.5 10.5 3.5 3.5 7.5-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="mt-8 text-heading font-normal">Message sent.</p>
          <p className="mt-4 max-w-sm text-lede text-ink-muted">
            Thank you. We’ll get back to you {contact.responseTime.toLowerCase()}.
          </p>
        </div>
        <Button variant="secondary" arrow="e" onClick={() => setStatus('idle')} className="mt-10 self-start">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-9"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-9 sm:grid-cols-2 sm:gap-8">
        <Field id="contact-name" label="Name">
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            autoComplete="name"
            className="field"
            placeholder="Your name"
          />
        </Field>
        <Field id="contact-email" label="Email">
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
            inputMode="email"
            className="field"
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <Field id="contact-company" label="Company" optional>
        <input
          id="contact-company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          autoComplete="organization"
          className="field"
          placeholder="Where you work"
        />
      </Field>

      <Field id="contact-message" label="Message">
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="field resize-y"
          placeholder="Tell us about your project — what you’re building, and where you’re stuck."
        />
      </Field>

      <div className="pt-2">
        <Button type="submit" disabled={status === 'sending'} className="w-full disabled:opacity-60 sm:w-auto">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </Button>
      </div>

      {status === 'error' && (
        <p role="alert" className="border-l-2 border-red-700 pl-4 text-sm text-red-800">
          Something went wrong and your message wasn’t sent. Please try again, or email us at{' '}
          <a href={`mailto:${contact.email}`} className="underline underline-offset-2">
            {contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
