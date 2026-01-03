import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutSection = ({ setCurrentPage }) => {
  return (
    <section className="py-20 md:py-36 bg-surface-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              <span className="w-10 h-0.5 bg-primary" />
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-dark mb-5 md:mb-6 leading-tight tracking-tight">
              Building Technology that{' '}
              <span className="text-primary">Moves the World Forward</span>
            </h2>

            <p className="text-dark-50 mb-5 md:mb-6 leading-relaxed text-base md:text-lg">
              Credo Solutions is a next-generation technology company helping organizations accelerate their digital transformation. Our multidisciplinary teams blend <strong className="text-dark font-semibold">software engineering</strong>, <strong className="text-dark font-semibold">data science</strong>, and <strong className="text-dark font-semibold">strategic consulting</strong> to deliver technology that doesn't just work — but creates measurable impact.
            </p>

            <p className="text-dark-50 mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
              We build with purpose, ensuring every line of code, every model, and every strategy is designed to drive innovation, resilience, and growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentPage('about')}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium btn-lift hover:bg-primary-600 min-h-[48px]"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Image side with floating stat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-soft-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[350px] sm:h-[400px] lg:h-[450px] object-cover"
                loading="lazy"
                width="800"
                height="450"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 lg:-left-10 bg-white rounded-2xl p-5 sm:p-6 shadow-soft-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-dark-50">Years of Excellence</div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 sm:-top-12 sm:-right-12 lg:-top-16 lg:-right-16 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-primary/5 rounded-3xl rotate-12 -z-10 hide-mobile-decorative" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
