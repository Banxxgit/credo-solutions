import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, MapPin, Phone, Send, ChevronDown,
  Clock, CheckCircle2
} from 'lucide-react';

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
      answer: 'We work with organizations of all sizes — from startups to established enterprises — across sectors like finance, logistics, healthcare, and retail. Whether you\'re upgrading legacy systems, automating workflows, or integrating AI, we tailor digital solutions to your business goals and growth stage.',
    },
    {
      question: 'How do you ensure data security during digital transformation or cloud migration?',
      answer: 'Security is at the core of everything we do. We implement multi-layered protection, encrypted communication, and compliance with global standards (ISO, GDPR, HIPAA where applicable). Before migration, we conduct a full risk assessment to ensure your data and infrastructure are protected end-to-end.',
    },
    {
      question: 'Do you offer ongoing IT support after project completion?',
      answer: 'Yes. Our relationship doesn\'t end at deployment. We provide continuous monitoring, maintenance, and proactive support to ensure your systems stay secure, optimized, and scalable as your business evolves.',
    },
    {
      question: 'Can you integrate AI or automation tools into our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration. Our team evaluates your current infrastructure and builds smart automation layers or AI models that enhance your existing tools — not replace them. This approach saves costs while delivering immediate productivity gains.',
    },
    {
      question: 'How long does a typical digital transformation project take?',
      answer: 'Timelines vary depending on project scope and complexity. However, most of our transformation and implementation projects range between 6–12 weeks. We follow an agile process, so you start seeing measurable improvements from the early stages of deployment.',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Contact Form Section - Clean Layout */}
      <section className="py-20 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Content + contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-5 md:mb-6 tracking-tight">
                Let's Build Something{' '}
                <span className="text-primary">Great Together</span>
              </h1>

              <p className="text-dark-50 text-base md:text-lg mb-10 leading-relaxed">
                We're ready to collaborate on your next project — whether it's modernizing legacy systems, integrating AI, or designing digital infrastructure for the future.
              </p>

              {/* Contact info items */}
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-dark-50 block">Email us at</span>
                    <strong className="text-dark">info@credo-solutions.com</strong>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-dark-50 block">Our reach</span>
                    <strong className="text-dark">Global Operations</strong>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-dark-50 block">Response time</span>
                    <strong className="text-dark">Within 24 Hours</strong>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Form in card */}
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
                      <h4 className="text-xl font-bold text-dark mb-2">Message Sent!</h4>
                      <p className="text-dark-50">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* 2-column row for name/email on desktop */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-dark mb-2">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark placeholder:text-dark-50/60 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark placeholder:text-dark-50/60 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      {/* Full-width company field */}
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark placeholder:text-dark-50/60 transition-all"
                          placeholder="Your company (optional)"
                        />
                      </div>

                      {/* Full-width message field */}
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-5 py-4 rounded-xl border border-surface-muted bg-white text-dark placeholder:text-dark-50/60 transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      {/* Full-width submit button */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium btn-lift hover:bg-primary-600 min-h-[48px]"
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

      {/* FAQ Section - Typography only */}
      <section className="py-20 md:py-36 bg-surface-light">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-3 text-primary font-semibold text-sm uppercase tracking-wider mb-5 justify-center">
              <span className="w-10 h-0.5 bg-primary" />
              FAQ
              <span className="w-10 h-0.5 bg-primary" />
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 tracking-tight">
              Frequently Asked{' '}
              <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-surface-light/50 transition-colors min-h-[72px]"
                >
                  <span className="font-semibold text-dark pr-4 text-sm sm:text-base">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-surface-light rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-dark-50" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6">
                        <p className="text-dark-50 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </div>
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
