import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Target, Heart, Zap,
  Users, Globe, Award, Lightbulb
} from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We believe innovation should be accessible, measurable, and transformative.',
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Technology should serve people, not the other way around.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every project starts with understanding your challenges and ends with creating measurable value.',
    },
  ];

  const promises = [
    'Transparent communication and ethical delivery',
    'Deep technical expertise backed by global experience',
    'Scalable solutions aligned with your business goals',
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Global Clients' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-light to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <span className="w-8 h-px bg-primary" />
              About Us
              <span className="w-8 h-px bg-primary" />
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Building Technology that{' '}
              <span className="gradient-text">Moves the World Forward</span>
            </h1>

            <p className="text-lg text-dark-50 mb-8">
              We are a team of engineers, strategists, and innovators committed to helping organizations leverage emerging technologies for real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-1">
                <div className="bg-white rounded-[22px] p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-surface-light rounded-2xl p-6 text-center"
                      >
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-dark-50">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center"
              >
                <Globe className="w-10 h-10 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center"
              >
                <Award className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <span className="w-8 h-px bg-primary" />
                Our Story
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Founded on a Simple{' '}
                <span className="gradient-text">Belief</span>
              </h2>

              <p className="text-dark-50 mb-6 leading-relaxed">
                Credo Solutions was founded on a simple belief — that innovation should be accessible, measurable, and transformative. Our multidisciplinary teams work across industries and borders, helping clients navigate complexity and build for the future.
              </p>

              <p className="text-dark-50 mb-8 leading-relaxed">
                From software engineering and AI to blockchain and digital strategy, we bring together the best of technology and business expertise to deliver solutions that matter.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-dark-50">
                  <span className="font-semibold text-dark">50+ experts</span> ready to help
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Philosophy
              <span className="w-8 h-px bg-primary" />
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Technology Should{' '}
              <span className="gradient-text">Serve People</span>
            </h2>

            <p className="text-dark-50">
              We believe technology should serve people, not the other way around. That's why every project we take on starts with understanding your challenges and ends with creating measurable value. Our approach combines agility, precision, and empathy to deliver work that's both powerful and practical.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-soft card-lift text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                <p className="text-dark-50 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <span className="w-8 h-px bg-primary" />
                Our Promise
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                What We{' '}
                <span className="gradient-text">Commit To</span>
              </h2>

              <p className="text-dark-50 mb-8">
                When you partner with Credo Solutions, you're not just getting a vendor — you're gaining a dedicated team committed to your success.
              </p>

              <ul className="space-y-4 mb-8">
                {promises.map((promise, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-dark-400">{promise}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium btn-lift hover:bg-primary-600"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-surface-light rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-soft-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Our Vision</h4>
                      <p className="text-sm text-dark-50">Empowering the future</p>
                    </div>
                  </div>
                  <p className="text-dark-50 leading-relaxed">
                    To create technology that amplifies human potential, enabling organizations to solve real-world challenges with clarity, speed, and confidence.
                  </p>
                </div>
              </div>

              {/* Floating decorations */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-dotted border-primary/30 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
