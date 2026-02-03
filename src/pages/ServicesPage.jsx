import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Brain, Box, Target, HeadphonesIcon, 
  ChevronDown, CheckCircle2, ArrowRight,
  Cloud, Database, RefreshCw, Settings, Cpu,
  MessageSquare, Eye, Cog, Shield,
  FileCode, Coins, Fingerprint, Lock,
  Rocket, Palette, Search, TrendingUp,
  FolderKanban, Users, Wrench, ShieldCheck
} from 'lucide-react';

const ServicesPage = ({ setCurrentPage }) => {
  const [openAccordion, setOpenAccordion] = useState('software');

  const services = [
    {
      id: 'software',
      icon: Code2,
      title: 'Software Development & Engineering',
      description: 'We build software that scales with your ambitions. From modern web and mobile apps to enterprise-grade ERP, CRM, and HR systems, we help businesses streamline processes and deliver value faster.',
      offerings: [
        {
          icon: Code2,
          title: 'Custom Application Development',
          description: 'End-to-end design and engineering of scalable web, mobile, and enterprise apps.',
        },
        {
          icon: Cloud,
          title: 'Cloud Migration (AWS, Azure, GCP)',
          description: 'Seamless transition to secure, cost-optimized cloud environments.',
        },
        {
          icon: Database,
          title: 'API & Systems Integration',
          description: 'Connecting data, tools, and workflows across modern and legacy systems.',
        },
        {
          icon: RefreshCw,
          title: 'Legacy Modernization',
          description: 'Upgrading outdated platforms to meet today\'s performance and security standards.',
        },
        {
          icon: Settings,
          title: 'Enterprise Platforms (SAP, Salesforce, Workday)',
          description: 'Implementation, customization, and lifecycle management for critical enterprise systems.',
        },
      ],
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI & Intelligent Automation',
      description: 'Harness the power of machine learning and automation to make smarter decisions and accelerate productivity. We design and deploy AI-driven systems that reduce inefficiency, detect patterns, and unlock new revenue opportunities.',
      offerings: [
        {
          icon: TrendingUp,
          title: 'Predictive Analytics & Machine Learning Models',
          description: 'Build data-driven systems that anticipate trends, forecast demand, and optimize operations.',
        },
        {
          icon: MessageSquare,
          title: 'Natural Language Processing (Chatbots & Document Intelligence)',
          description: 'Automate conversations, summarize documents, and extract insights with intelligent language models.',
        },
        {
          icon: Eye,
          title: 'Computer Vision & Image Recognition',
          description: 'Enable visual intelligence for inspections, surveillance, and smart automation.',
        },
        {
          icon: Cog,
          title: 'Intelligent Process Automation (RPA + AI)',
          description: 'Combine robotic process automation with AI to eliminate repetitive tasks and boost efficiency.',
        },
        {
          icon: Shield,
          title: 'Responsible AI & Model Auditing',
          description: 'Ensure fairness, transparency, and compliance across all deployed AI systems.',
        },
      ],
    },
    {
      id: 'blockchain',
      icon: Box,
      title: 'Blockchain & Web3',
      description: 'We design decentralized systems that redefine trust and transparency. Whether you\'re building digital assets, smart contracts, or identity systems, our blockchain architects ensure scalability, compliance, and performance.',
      offerings: [
        {
          icon: FileCode,
          title: 'Smart Contract Development',
          description: 'Build and deploy self-executing contracts that enable automation, security, and efficiency across digital ecosystems.',
        },
        {
          icon: Coins,
          title: 'Decentralized Applications (dApps) & Tokenization',
          description: 'Create user-focused blockchain products and tokenized assets that unlock new business models and engagement channels.',
        },
        {
          icon: Cpu,
          title: 'Blockchain Architecture & Consulting',
          description: 'Design the right infrastructure, governance, and integration strategy for your enterprise blockchain journey.',
        },
        {
          icon: Fingerprint,
          title: 'Digital Identity & Zero-Trust Security',
          description: 'Strengthen identity management and cybersecurity through decentralized identity systems and zero-trust frameworks.',
        },
      ],
    },
    {
      id: 'strategy',
      icon: Target,
      title: 'Go-to-Market & Digital Strategy',
      description: 'Technology is only as strong as the strategy behind it. We help you define your market, validate your product, and create launch frameworks that convert.',
      offerings: [
        {
          icon: Rocket,
          title: 'Product Strategy & Roadmapping',
          description: 'Define the right vision, prioritize features, and map the path from concept to commercial success.',
        },
        {
          icon: Palette,
          title: 'Brand Positioning & Product Storytelling',
          description: 'Craft a compelling narrative and brand identity that connects with users and stands out in competitive markets.',
        },
        {
          icon: Search,
          title: 'Market Research & Competitive Intelligence',
          description: 'Uncover insights that shape smarter decisions, validate opportunities, and identify your edge.',
        },
        {
          icon: TrendingUp,
          title: 'Launch & Growth Campaigns',
          description: 'Execute high-impact go-to-market campaigns that accelerate adoption and drive measurable growth.',
        },
      ],
    },
    {
      id: 'support',
      icon: HeadphonesIcon,
      title: 'Support & Advisory',
      description: 'We don\'t just build — we stay with you. Our support and advisory teams ensure your technology evolves with your business.',
      offerings: [
        {
          icon: FolderKanban,
          title: 'IT Project & Program Management',
          description: 'Deliver complex technology initiatives on time and within scope through agile execution and strategic oversight.',
        },
        {
          icon: Users,
          title: 'Change Management & Training',
          description: 'Equip your teams to embrace transformation with structured adoption frameworks and hands-on enablement.',
        },
        {
          icon: Wrench,
          title: 'Managed Services & Continuous Support',
          description: 'Keep critical systems optimized with proactive monitoring, maintenance, and 24/7 technical support.',
        },
        {
          icon: ShieldCheck,
          title: 'Cybersecurity & Compliance',
          description: 'Protect digital assets and maintain regulatory confidence through rigorous security controls and compliance best practices.',
        },
      ],
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-surface-light to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-3 text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              <span className="w-10 h-0.5 bg-primary" />
              Our Services
              <span className="w-10 h-0.5 bg-primary" />
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-5 md:mb-6 tracking-tight">
              Innovating at the Intersection of{' '}
              <span className="text-primary">Technology and Business</span>
            </h1>

            <p className="text-base md:text-lg text-dark-50 mb-6 md:mb-8">
              Explore how our teams help organizations across industries unlock growth through digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-3 md:space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-light rounded-2xl md:rounded-3xl overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 md:p-8 text-left hover:bg-surface-muted transition-colors min-h-[72px]"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors flex-shrink-0 ${
                      openAccordion === service.id ? 'bg-primary' : 'bg-primary/10'
                    }`}>
                      <service.icon className={`w-5 h-5 sm:w-7 sm:h-7 transition-colors ${
                        openAccordion === service.id ? 'text-white' : 'text-primary'
                      }`} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark leading-tight">{service.title}</h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openAccordion === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-soft flex items-center justify-center flex-shrink-0 ml-2 sm:ml-4"
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-dark-50" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {openAccordion === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
                        <p className="text-dark-50 text-sm sm:text-base mb-6 md:mb-8 pl-0 md:pl-[4.5rem]">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pl-0 md:pl-[4.5rem]">
                          {service.offerings.map((offering, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-soft hover:shadow-soft-lg transition-shadow"
                            >
                              <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                  <offering.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h4 className="font-semibold text-dark mb-1 text-sm leading-tight">
                                    {offering.title}
                                  </h4>
                                  <p className="text-dark-50 text-xs leading-relaxed">
                                    {offering.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 md:mt-16"
          >
            <p className="text-dark-50 text-sm sm:text-base mb-5 md:mb-6">
              Ready to transform your business with our expert services?
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium btn-lift hover:bg-primary-600 min-h-[48px]"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
