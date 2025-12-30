import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, Target, Heart, Zap,
  Users, Lightbulb
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
      <section className="py-12 md:py-20 bg-gradient-to-b from-surface-light to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-5 md:mb-6">
              Building Technology that{' '}
              <span className="gradient-text">Moves the World Forward</span>
            </h1>

            <p className="text-base md:text-lg text-dark-50 mb-6 md:mb-8">
              We are a team of engineers, strategists, and innovators committed to helping organizations leverage emerging technologies for real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean, Standalone */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-dark-50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 lg:mb-0"
            >
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <span className="w-8 h-px bg-primary" />
                Our Story
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 md:mb-6">
                Founded on a Simple{' '}
                <span className="gradient-text">Belief</span>
              </h2>

              <p className="text-dark-50 mb-5 md:mb-6 leading-relaxed text-sm sm:text-base">
                Credo Solutions was founded on a simple belief — that innovation should be accessible, measurable, and transformative. Our multidisciplinary teams work across industries and borders, helping clients navigate complexity and build for the future.
              </p>

              <p className="text-dark-50 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
                From software engineering and AI to blockchain and digital strategy, we bring together the best of technology and business expertise to deliver solutions that matter.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
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

            {/* Visual Side - Clean Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:pl-8"
            >
              <div className="bg-surface-light rounded-2xl sm:rounded-3xl p-5 sm:p-8">
                <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-sm sm:text-base">Our Vision</h4>
                      <p className="text-xs sm:text-sm text-dark-50">Empowering the future</p>
                    </div>
                  </div>
                  <p className="text-dark-50 leading-relaxed text-sm sm:text-base">
                    To create technology that amplifies human potential, enabling organizations to solve real-world challenges with clarity, speed, and confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-12 md:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Philosophy
              <span className="w-8 h-px bg-primary" />
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 md:mb-6">
              Technology Should{' '}
              <span className="gradient-text">Serve People</span>
            </h2>

            <p className="text-dark-50 text-sm sm:text-base">
              We believe technology should serve people, not the other way around. That's why every project we take on starts with understanding your challenges and ends with creating measurable value. Our approach combines agility, precision, and empathy to deliver work that's both powerful and practical.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-soft card-lift text-center"
              >
                <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <value.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-dark-50 text-xs sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 lg:mb-0"
            >
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 mx-auto lg:mx-0">
                <span className="w-8 h-px bg-primary" />
                Our Promise
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 md:mb-6">
                What We{' '}
                <span className="gradient-text">Commit To</span>
              </h2>

              <p className="text-dark-50 mb-6 md:mb-8 text-sm sm:text-base">
                When you partner with Credo Solutions, you're not just getting a vendor — you're gaining a dedicated team committed to your success.
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-6 md:mb-8 text-left">
                {promises.map((promise, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-dark-400 text-sm sm:text-base">{promise}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium btn-lift hover:bg-primary-600 min-h-[48px]"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Visual Side - Clean, no floating decorations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-surface-light rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-soft-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Our Mission</h4>
                      <p className="text-sm text-dark-50">Driving real impact</p>
                    </div>
                  </div>
                  <p className="text-dark-50 leading-relaxed">
                    To partner with organizations worldwide, delivering technology solutions that drive measurable business outcomes and lasting transformation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
