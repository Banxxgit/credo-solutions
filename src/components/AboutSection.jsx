import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Compass, Building2, Shield, ArrowRight } from 'lucide-react';

const AboutSection = ({ setCurrentPage }) => {
  const metrics = [
    {
      icon: Clock,
      value: '10+',
      label: 'Years of Industry Experience',
    },
    {
      icon: Compass,
      value: '360°',
      label: 'Technology Consulting',
    },
    {
      icon: Building2,
      value: 'Public & Private',
      label: 'Sector Expertise',
    },
    {
      icon: Shield,
      value: 'Agile',
      label: 'Enterprise Delivery',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-soft card-lift min-h-[140px] sm:min-h-[160px] flex flex-col"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-dark mb-1 leading-tight">
                  {metric.value}
                </div>
                <p className="text-dark-50 text-xs sm:text-sm leading-snug mt-auto">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <span className="w-8 h-px bg-primary" />
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 md:mb-6">
              Building Technology that{' '}
              <span className="gradient-text">Moves the World Forward</span>
            </h2>

            <p className="text-dark-50 mb-5 md:mb-6 leading-relaxed text-sm sm:text-base">
              Credo Solutions is a next-generation technology company helping organizations accelerate their digital transformation. Our multidisciplinary teams blend <strong className="text-dark">software engineering</strong>, <strong className="text-dark">data science</strong>, and <strong className="text-dark">strategic consulting</strong> to deliver technology that doesn't just work — but creates measurable impact.
            </p>

            <p className="text-dark-50 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
              We build with purpose, ensuring every line of code, every model, and every strategy is designed to drive innovation, resilience, and growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentPage('about')}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all min-h-[48px]"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
