import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  ChevronDown,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const encode = (data) =>
  Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&');


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    {
      question: 'What types of businesses can benefit from your digital transformation services?',
      answer:
        "We work with organizations of all sizes — from startups to established enterprises — across sectors like finance, logistics, healthcare, and retail. Whether you're upgrading legacy systems, automating workflows, or integrating AI, we tailor digital solutions to your business goals and growth stage.",
    },
    {
      question: 'How do you ensure data security during digital transformation or cloud migration?',
      answer:
        'Security is at the core of everything we do. We implement multi-layered protection, encrypted communication, and compliance with global standards. Before migration, we conduct a full risk assessment to ensure your data and infrastructure are protected end-to-end.',
    },
    {
      question: 'Do you offer ongoing IT support after project completion?',
      answer:
        "Yes. Our relationship doesn't end at deployment. We provide continuous monitoring, maintenance, and proactive support to ensure your systems stay secure, optimized, and scalable as your business evolves.",
    },
    {
      question: 'Can you integrate AI or automation tools into our existing systems?',
      answer:
        'Absolutely. We specialize in seamless integration. Our team evaluates your current infrastructure and builds smart automation layers or AI models that enhance your existing tools — not replace them.',
    },
    {
      question: 'How long does a typical digital transformation project take?',
      answer:
        'Timelines vary depending on project scope and complexity. Most projects range between 6–12 weeks, with measurable improvements delivered early through agile execution.',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // IMPORTANT: No preventDefault — Netlify needs the POST
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...formData,
      }),
    });

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  } catch (error) {
    alert('Something went wrong. Please try again.');
  }
};


  return (
    <div className="pt-20">
      {/* Contact Section */}
      <section className="py-20 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
                Let's Build Something{' '}
                <span className="text-primary">Great Together</span>
              </h1>

              <p className="text-dark-50 text-base md:text-lg mb-10 leading-relaxed">
                We're ready to collaborate on your next project — whether it's
                modernizing legacy systems, integrating AI, or designing digital
                infrastructure for the future.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-dark-50 block">Email us at</span>
                    <strong className="text-dark">info@credo-solutions.com</strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-dark-50 block">Our reach</span>
                    <strong className="text-dark">Global Operations</strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-dark-50 block">Response time</span>
                    <strong className="text-dark">Within 24 Hours</strong>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-surface-light rounded-3xl p-8 sm:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-dark mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-dark-50">
                        We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Netlify required hidden fields */}
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-dark mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-dark mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark"
                          placeholder="Your company (optional)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium btn-lift hover:bg-primary-600"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-36 bg-surface-light">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="font-semibold text-dark pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-dark-50" />
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div className="px-6 pb-6">
                      <p className="text-dark-50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;