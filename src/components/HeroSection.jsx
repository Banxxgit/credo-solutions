import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Cloud, Box, Zap } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => {
  const trustedLogos = [
    'Boltshift', 'Lightbox', 'FeatherDev', 'Spherule', 'GlobalBank', 'Nietzsche'
  ];

  // Floating UI cards configuration
  const floatingCards = [
    { icon: Cpu, label: 'AI & ML', position: 'top-8 right-0 md:top-12 md:right-4', delay: 0 },
    { icon: Box, label: 'Blockchain', position: 'bottom-24 right-8 md:bottom-32 md:right-0', delay: 0.2 },
    { icon: Cloud, label: 'Cloud', position: 'bottom-8 left-0 md:bottom-12 md:left-4', delay: 0.4 },
  ];

  // Simplified mobile icons for the hero
  const mobileIcons = [
    { icon: Cpu, label: 'AI & ML' },
    { icon: Box, label: 'Blockchain' },
    { icon: Cloud, label: 'Cloud' },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-white">
      {/* Background Grid Pattern with fade */}
      <div className="absolute inset-0 grid-pattern-fade opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-5 md:mb-6 tracking-tight">
              Empowering the Next Wave of{' '}
              <span className="gradient-text">Digital Transformation</span>
            </h1>

            <p className="text-base md:text-lg text-dark-50 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
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

          {/* Geometric Composition - Hidden on mobile, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[550px] hidden lg:block"
          >
            {/* SVG Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#54B4E3" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#54B4E3" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {/* Dashed connection lines */}
              <path
                d="M 200 150 Q 280 200 300 280"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
              />
              <path
                d="M 300 280 Q 350 350 280 420"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
              />
              <path
                d="M 300 280 Q 380 300 420 250"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
              />
            </svg>

            {/* Large Light Blue Rounded Rectangle - Center */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-64 h-64 md:w-72 md:h-72 bg-primary-light rounded-[2.5rem] shadow-soft-lg" />
            </motion.div>

            {/* White Card with Border - Top Right */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-16 right-8"
            >
              <div className="w-40 h-40 md:w-44 md:h-44 bg-white rounded-3xl border-2 border-surface-muted shadow-soft-lg" />
            </motion.div>

            {/* Solid Primary Color Square - Bottom Left */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-24 left-12"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 bg-primary rounded-2xl shadow-glow" />
            </motion.div>

            {/* Small Dark Square - Accent */}
            <motion.div
              animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-32 left-24"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-dark rounded-xl" />
            </motion.div>

            {/* Transparent Bordered Square - Accent */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-40 right-24"
            >
              <div className="w-10 h-10 border-2 border-primary/40 rounded-lg" />
            </motion.div>

            {/* Floating UI Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + card.delay, type: 'spring', stiffness: 100 }}
                className={`absolute ${card.position} z-10`}
              >
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-soft-lg border border-surface-muted flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-dark">{card.label}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Decorative rotating circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 border border-dashed border-primary/20 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 border border-dotted border-primary/10 rounded-full pointer-events-none"
            />

            {/* Small floating dots */}
            <motion.div
              animate={{ y: [-5, 5, -5], x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full"
            />
            <motion.div
              animate={{ y: [5, -5, 5], x: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/50 rounded-full"
            />
          </motion.div>
        </div>

        {/* Trusted By Section - Typography only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-surface-muted"
        >
          <p className="text-center text-dark-50 text-sm mb-6 md:mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16">
            {trustedLogos.map((logo, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="trusted-company cursor-default"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#f8fafb"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
