import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, TrendingUp, ArrowRight } from 'lucide-react';

const WhyChooseSection = ({ setCurrentPage }) => {
  const values = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We go beyond code to deliver clarity, collaboration, and measurable progress. Every engagement starts with understanding your challenges.',
    },
    {
      number: '02',
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent communication and ethical delivery guide everything we do. Deep technical expertise backed by global experience.',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Impact',
      description: 'Scalable solutions aligned with your business goals. Technical precision and a commitment to excellence drive real outcomes.',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-light to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
            <span className="w-8 h-px bg-primary" />
            Why Choose Credo
            <span className="w-8 h-px bg-primary" />
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Innovation. Integrity.{' '}
            <span className="gradient-text">Impact.</span>
          </h2>

          <p className="text-dark-50">
            Our success lies in understanding yours. At Credo, we go beyond code — we deliver clarity, collaboration, and measurable progress. Every engagement is guided by transparency, technical precision, and a commitment to excellence.
          </p>
        </motion.div>

        {/* Values - Connected Cards */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number connector */}
                <div className="hidden lg:flex absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-soft-lg items-center justify-center z-10 border-4 border-surface-light">
                  <span className="text-primary font-bold text-lg">{value.number}</span>
                </div>

                <div className="bg-surface-light hover:bg-white rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-soft-xl card-lift lg:pt-12">
                  {/* Mobile number */}
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      {value.number}
                    </span>
                  </div>

                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3">
                    {value.title}
                  </h3>

                  <p className="text-dark-50 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Arrow connector (desktop) */}
                {index < values.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full shadow-soft flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium btn-lift hover:bg-primary-600"
          >
            Let's Build the Future
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
