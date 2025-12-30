import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Box, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesSection = ({ setCurrentPage }) => {
  const services = [
    {
      icon: Code2,
      title: 'Software Engineering',
      description: 'Custom applications and enterprise systems built for performance and scale.',
      features: ['Custom Application Development', 'Cloud Migration', 'API Integration', 'Legacy Modernization'],
    },
    {
      icon: Brain,
      title: 'AI & Intelligent Automation',
      description: 'Smarter decisions, faster operations through machine learning and automation.',
      features: ['Predictive Analytics', 'NLP & Chatbots', 'Computer Vision', 'Process Automation'],
    },
    {
      icon: Box,
      title: 'Blockchain & Web3',
      description: 'Secure, transparent, and future-ready digital ecosystems.',
      features: ['Smart Contracts', 'Decentralized Apps', 'Digital Identity', 'Tokenization'],
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Turn your vision into measurable business results.',
      features: ['Product Strategy', 'Market Research', 'Go-to-Market', 'Growth Campaigns'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
            <span className="w-8 h-px bg-primary" />
            Our Core Expertise
            <span className="w-8 h-px bg-primary" />
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Smart Solutions for a{' '}
            <span className="gradient-text">Connected World</span>
          </h2>

          <p className="text-dark-50">
            At Credo Solutions, we combine deep technical expertise with strategic thinking to deliver end-to-end innovation. Whether you're modernizing legacy systems, automating workflows, or scaling with cloud and AI, our teams design and deploy technology that transforms the way you work and compete.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-surface-light hover:bg-white rounded-3xl p-8 border border-transparent hover:border-primary/10 hover:shadow-soft-xl transition-all duration-500 card-lift"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-dark-50 text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-dark-50">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setCurrentPage('services')}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium btn-lift hover:bg-primary-600"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
