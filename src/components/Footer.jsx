import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const footerLinks = {
    services: [
      { name: 'Software Development', id: 'services' },
      { name: 'AI & Automation', id: 'services' },
      { name: 'Blockchain & Web3', id: 'services' },
      { name: 'Digital Strategy', id: 'services' },
    ],
    company: [
      { name: 'About Us', id: 'about' },
      { name: 'Our Work', id: 'home' },
      { name: 'Careers', id: 'contact' },
      { name: 'Contact', id: 'contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-surface-light overflow-hidden">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-soft-lg mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">
                Let's Connect With Us
              </h3>
              <p className="text-dark-50">
                Ready to accelerate your digital transformation?
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 md:w-64 px-5 py-3 rounded-full border border-surface-muted bg-surface-light text-dark placeholder:text-dark-50 focus:border-primary"
              />
              <button className="bg-primary text-white p-4 rounded-full btn-lift hover:bg-primary-600">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-dark">
                Credo<span className="text-primary">Solutions</span>
              </span>
            </div>
            <p className="text-dark-50 text-sm leading-relaxed mb-6">
              Empowering organizations to accelerate digital transformation through AI, blockchain, and enterprise software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-dark-50 hover:text-primary hover:shadow-soft-lg transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-dark font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-dark-50 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-dark font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-dark-50 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-dark font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-dark-50 text-sm">info@credo-solutions.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-dark-50 text-sm">Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-dark/5">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-dark-50 hover:text-primary text-sm transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-dark-50 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-dark-50 text-sm">
            ©2025 Credo Solutions. All rights reserved.
          </p>
        </div>
      </div>

      {/* Large Watermark Text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <div className="watermark-text text-center transform translate-y-1/4">
          CREDO
        </div>
      </div>
    </footer>
  );
};

export default Footer;
