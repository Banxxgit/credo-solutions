import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Database, Cloud, Shield, Zap, Box } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => {
  const floatingNodes = [
    { icon: Cpu, label: 'AI', position: 'top-16 left-4 md:top-20 md:left-20', delay: 0 },
    { icon: Box, label: 'Blockchain', position: 'top-16 right-4 md:top-32 md:right-24', delay: 0.2 },
    { icon: Cloud, label: 'Cloud', position: 'bottom-16 left-4 md:bottom-32 md:left-32', delay: 0.4 },
    { icon: Shield, label: 'Security', position: 'bottom-16 right-4 md:bottom-20 md:right-28', delay: 0.6 },
  ];

  const trustedLogos = [
    'Boltshift', 'Lightbox', 'FeatherDev', 'Spherule', 'GlobalBank', 'Nietzsche'
  ];

  // Simplified mobile icons for the hero
  const mobileIcons = [
    { icon: Cpu, label: 'AI' },
    { icon: Box, label: 'Blockchain' },
    { icon: Cloud, label: 'Cloud' },
    { icon: Shield, label: 'Security' },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Next-Gen Technology Solutions
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-5 md:mb-6">
              Empowering the Next Wave of{' '}
              <span className="gradient-text">Digital Transformation</span>
            </h1>

            <p className="text-base md:text-lg text-dark-50 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              From AI to Blockchain, we help organizations reimagine what's possible, building scalable, secure, and intelligent solutions that drive real business outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium btn-lift hover:bg-primary-600 min-h-[48px]"
              >
                Discover More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center justify-center gap-2 bg-white text-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium border-2 border-surface-muted hover:border-primary/30 transition-colors min-h-[48px]"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          {/* Mobile Tech Icons - Horizontal scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex lg:hidden justify-center gap-3 mt-8"
          >
            {mobileIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-1.5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-dark-50">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Node Visualization - Hidden on mobile, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(84, 180, 227, 0.3)',
                    '0 0 0 30px rgba(84, 180, 227, 0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-soft-xl flex items-center justify-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Floating Nodes */}
            {floatingNodes.map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + node.delay, type: 'spring' }}
                className={`absolute ${node.position}`}
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="relative"
                >
                  {/* Connection Line */}
                  <svg
                    className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ zIndex: -1 }}
                  >
                    <line
                      x1="50%"
                      y1="50%"
                      x2={index < 2 ? '150%' : '-50%'}
                      y2={index % 2 === 0 ? '150%' : '-50%'}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#54B4E3" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#54B4E3" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="bg-white rounded-2xl p-4 shadow-soft-lg border border-surface-muted">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                      <node.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-dark">{node.label}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 border border-dashed border-primary/20 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 border border-dotted border-primary/10 rounded-full pointer-events-none"
            />

            {/* Small floating elements */}
            <motion.div
              animate={{ y: [-5, 5, -5], x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full"
            />
            <motion.div
              animate={{ y: [5, -5, 5], x: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-primary/50 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/3 right-1/4 w-4 h-4 border-2 border-primary/30 rounded-full"
            />
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-surface-muted"
        >
          <p className="text-center text-dark-50 text-sm mb-6 md:mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16">
            {trustedLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2 text-dark-50/50 hover:text-dark-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-muted flex items-center justify-center">
                  <div className="w-4 h-4 bg-dark-50/20 rounded" />
                </div>
                <span className="font-medium text-sm">{logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
