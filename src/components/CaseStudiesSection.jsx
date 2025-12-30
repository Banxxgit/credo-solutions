import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users, Brain, Box, Bot, Truck } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: Brain,
      category: 'Blockchain & Web3',
      title: 'AI-Powered Blockchain Explorer',
      challenge: 'The blockchain analytics space lacked tools that translated complex on-chain data into human-readable insights.',
      solution: 'Developed an AI-powered blockchain explorer capable of analyzing Solana transactions in real time with NLP summaries and ML rug-pull detection.',
      metrics: [
        { value: '70%', label: 'Reduced Data Interpretation Time' },
        { value: '2.5x', label: 'Increased Engagement' },
      ],
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Box,
      category: 'Retail & Supply Chain',
      title: 'Intelligent Inventory Management',
      challenge: 'Growing retail business struggled with stock-outs and overstocking due to manual tracking systems.',
      solution: 'AI inventory management platform using ML models to predict demand patterns and automate restocking with real-time dashboards.',
      metrics: [
        { value: '40%', label: 'Improved Inventory Turnover' },
        { value: '30%', label: 'Reduction in Operational Costs' },
      ],
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Bot,
      category: 'Crypto/FinTech',
      title: 'Smart Algorithmic Trading Bot',
      challenge: 'Startup entering crypto trading market wanted to offer intelligent, data-driven trading with automation.',
      solution: 'AI-driven trading bot with autonomous decision-making based on market trends, technical indicators, and real-time data feeds.',
      metrics: [
        { value: '3x', label: 'Faster Execution Speed' },
        { value: '55%', label: 'Improved User ROI' },
      ],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Truck,
      category: 'Logistics & Supply Chain',
      title: 'AI Logistics Assistant',
      challenge: 'Logistics company overwhelmed by repetitive customer inquiries about shipment status and delivery timelines.',
      solution: 'AI logistics assistant unifying customer support with NLP chatbot for WhatsApp/web and real-time data integration.',
      metrics: [
        { value: '60%', label: 'Faster Response Times' },
        { value: '45%', label: 'Boost in Customer Satisfaction' },
      ],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

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
            Featured Work
            <span className="w-8 h-px bg-primary" />
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Real Solutions,{' '}
            <span className="gradient-text">Real Results</span>
          </h2>

          <p className="text-dark-50">
            Explore how we've helped organizations across industries transform their operations and achieve measurable success through innovative technology solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface-light hover:bg-white rounded-3xl p-8 border border-transparent hover:border-primary/10 hover:shadow-soft-xl transition-all duration-500 card-lift"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center`}>
                  <study.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-medium text-dark-50 bg-white px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {study.title}
              </h3>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-dark-50 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-dark-50 text-sm">{study.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex gap-4 pt-4 border-t border-dark/5">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex-1">
                    <p className="text-2xl font-bold text-dark">{metric.value}</p>
                    <p className="text-xs text-dark-50">{metric.label}</p>
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
