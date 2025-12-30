import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, Phone, Send, ChevronDown,
  MessageSquare, Clock, CheckCircle2
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
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-light to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <span className="w-8 h-px bg-primary" />
              Contact Us
              <span className="w-8 h-px bg-primary" />
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">Great Together</span>
            </h1>

            <p className="text-lg text-dark-50 mb-8">
              We're ready to collaborate on your next project — whether it's modernizing legacy systems, integrating AI, or designing digital infrastructure for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <span className="w-8 h-px bg-primary" />
                Get in Touch
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                We'd Love to{' '}
                <span className="gradient-text">Hear from You</span>
              </h2>

              <p className="text-dark-50 mb-8">
                Reach out to our team for project inquiries, partnership discussions, or consultation requests. We'll respond within 24 hours.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-surface-light rounded-2xl p-5"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-50">Email Us</p>
                    <p className="font-semibold text-dark">info@credo-solutions.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 bg-surface-light rounded-2xl p-5"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-50">Location</p>
                    <p className="font-semibold text-dark">Global Operations</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 bg-surface-light rounded-2xl p-5"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-50">Response Time</p>
                    <p className="font-semibold text-dark">Within 24 Hours</p>
                  </div>
                </motion.div>
              </div>

              {/* Company Info */}
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Credo Solutions</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  A next-generation technology company helping organizations accelerate their digital transformation through AI, blockchain, and enterprise software solutions.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface-light rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Send a Message</h3>
                </div>

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
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl border border-surface-muted bg-white text-dark placeholder:text-dark-50 transition-all"
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
                          className="w-full px-5 py-4 rounded-2xl border border-surface-muted bg-white text-dark placeholder:text-dark-50 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-2xl border border-surface-muted bg-white text-dark placeholder:text-dark-50 transition-all"
                          placeholder="Your company (optional)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-5 py-4 rounded-2xl border border-surface-muted bg-white text-dark placeholder:text-dark-50 transition-all resize-none"
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
      <section className="py-20 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <span className="w-8 h-px bg-primary" />
              FAQ
              <span className="w-8 h-px bg-primary" />
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
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
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-light/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-semibold text-dark pr-4">{faq.question}</span>
                  </div>
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
                      <div className="px-6 pb-6 pl-[4.5rem]">
                        <p className="text-dark-50 leading-relaxed">{faq.answer}</p>
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
