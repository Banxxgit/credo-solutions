import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Box, Bot, Truck } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: Brain,
      category: 'Blockchain & Web3',
      title: 'AI-Powered Blockchain Explorer',
      description: 'Developed an AI-powered blockchain explorer capable of analyzing Solana transactions in real time with NLP summaries and ML rug-pull detection.',
      metrics: [
        { value: '70%', label: 'Faster Analysis' },
        { value: '2.5x', label: 'User Engagement' },
      ],
    },
    {
      icon: Box,
      category: 'Retail & Supply Chain',
      title: 'Intelligent Inventory Management',
      description: 'AI inventory management platform using ML models to predict demand patterns and automate restocking with real-time dashboards.',
      metrics: [
        { value: '40%', label: 'Inventory Turnover' },
        { value: '30%', label: 'Cost Reduction' },
      ],
    },
    {
      icon: Bot,
      category: 'Crypto/FinTech',
      title: 'Smart Algorithmic Trading Bot',
      description: 'AI-driven trading bot with autonomous decision-making based on market trends, technical indicators, and real-time data feeds.',
      metrics: [
        { value: '3x', label: 'Faster Execution' },
        { value: '55%', label: 'Improved ROI' },
      ],
    },
    {
      icon: Truck,
      category: 'Logistics & Supply Chain',
      title: 'AI Logistics Assistant',
      description: 'AI logistics assistant unifying customer support with NLP chatbot for WhatsApp/web and real-time data integration.',
      metrics: [
        { value: '60%', label: 'Faster Response' },
        { value: '45%', label: 'Customer Satisfaction' },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-36 bg-dark text-white relative overflow-hidden">
      {/* Large watermark text */}
      <div className="absolute -bottom-[5%] -right-[2%] watermark-text pointer-events-none select-none">
        IMPACT
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-3 text-primary font-semibold text-sm uppercase tracking-wider mb-5 justify-center">
            <span className="w-10 h-0.5 bg-primary" />
            Featured Work
            <span className="w-10 h-0.5 bg-primary" />
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white mb-5 md:mb-6 leading-tight tracking-tight">
            Real Solutions,{' '}
            <span className="text-primary">Real Results</span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Explore how we've helped organizations across industries transform their operations and achieve measurable success through innovative technology solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="case-card group"
            >
              {/* Category Tag */}
              <span className="case-tag">
                {study.category}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {study.description}
              </p>

              {/* Metrics row - THIS is the visual interest */}
              <div className="flex gap-6 sm:gap-8 pt-6 border-t border-white/10">
                {study.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <span className="text-2xl sm:text-3xl font-bold text-primary">{metric.value}</span>
                    <span className="text-xs text-white/50 block mt-1">{metric.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
