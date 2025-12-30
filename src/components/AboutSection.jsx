import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Compass, Building2, Shield, ArrowRight } from 'lucide-react';

const AboutSection = ({ setCurrentPage }) => {
  const metrics = [
    {
      icon: Clock,
      value: '10+',
      label: 'Years of Combined Industry Experience',
    },
    {
      icon: Compass,
      value: '360°',
      label: 'Technology Consulting Approach',
    },
    {
      icon: Building2,
      value: 'Public & Private',
      label: 'Expertise Across Sectors',
    },
    {
      icon: Shield,
      value: 'Agile',
      label: 'Delivery & Enterprise-Grade Security',
    },
  ];

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-soft card-lift"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-dark mb-1">
                  {metric.value}
                </div>
                <p className="text-dark-50 text-sm">{metric.label}</p>
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Building Technology that{' '}
              <span className="gradient-text">Moves the World Forward</span>
            </h2>

            <p className="text-dark-50 mb-6 leading-relaxed">
              Credo Solutions is a next-generation technology company helping organizations accelerate their digital transformation. Our multidisciplinary teams blend <strong className="text-dark">software engineering</strong>, <strong className="text-dark">data science</strong>, and <strong className="text-dark">strategic consulting</strong> to deliver technology that doesn't just work — but creates measurable impact.
            </p>

            <p className="text-dark-50 mb-8 leading-relaxed">
              We build with purpose, ensuring every line of code, every model, and every strategy is designed to drive innovation, resilience, and growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentPage('about')}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
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
