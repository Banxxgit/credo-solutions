import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  // Featured testimonial
  const featuredTestimonial = {
    quote: "Working with Credo Solutions feels like having an in-house tech partner. They're strategic, detail-oriented, and genuinely invested in outcomes. The AI automation they developed reduced our manual workload by nearly 60%.",
    author: "Samuel Brooks",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  };

  // Regular testimonials
  const testimonials = [
    {
      quote: "Credo Solutions transformed our digital infrastructure in record time. Their technical depth and ability to align with business goals made the transition seamless.",
      author: "Jason Miller",
      role: "IT Director",
    },
    {
      quote: "The Credo team didn't just deliver software; they built a system that scaled as our operations grew. Their understanding of enterprise needs is unmatched.",
      author: "Alicia Gomez",
      role: "Operations Manager",
    },
    {
      quote: "Our shift to cloud architecture with Credo was smoother than we anticipated. They handled complex integrations without downtime.",
      author: "Michael Grant",
      role: "Head of Infrastructure",
    },
  ];

  // Generate avatar URL using UI Avatars API
  const getAvatarUrl = (name) => {
    const formattedName = name.replace(' ', '+');
    return `https://ui-avatars.com/api/?name=${formattedName}&background=54B4E3&color=fff&size=88`;
  };

  return (
    <section className="py-20 md:py-36 bg-surface-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

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
            Testimonials
            <span className="w-10 h-0.5 bg-primary" />
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-dark mb-5 md:mb-6 leading-tight tracking-tight">
            Built on Trust.{' '}
            <span className="text-primary">Driven by Results.</span>
          </h2>

          <p className="text-dark-50 text-sm sm:text-base leading-relaxed">
            We believe technology works best when people trust the team behind it. From global enterprises to fast-growing startups, our partners share one thing in common — measurable success powered by Credo Solutions.
          </p>
        </motion.div>

        {/* Featured testimonial - larger, with image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-soft-lg mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Quote side */}
            <div className="relative">
              {/* Large quote mark */}
              <span className="text-7xl sm:text-8xl font-serif text-primary/10 absolute -top-6 sm:-top-10 -left-2 sm:-left-5 select-none" style={{ fontFamily: 'Georgia, serif' }}>
                "
              </span>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 relative z-10 text-dark-400">
                {featuredTestimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.author}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-primary-light object-cover"
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <div>
                  <h4 className="font-semibold text-dark text-base sm:text-lg">{featuredTestimonial.author}</h4>
                  <span className="text-dark-50 text-sm">{featuredTestimonial.role}</span>
                </div>
              </div>
            </div>

            {/* Image side */}
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Team collaboration"
                className="w-full h-[350px] object-cover rounded-2xl shadow-soft"
                loading="lazy"
                width="600"
                height="350"
              />
            </div>
          </div>
        </motion.div>

        {/* Smaller testimonial cards - avatars only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <p className="text-dark-50 mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={getAvatarUrl(testimonial.author)}
                  alt={testimonial.author}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-primary-light"
                  loading="lazy"
                  width="44"
                  height="44"
                />
                <div>
                  <h4 className="font-semibold text-dark text-sm">{testimonial.author}</h4>
                  <span className="text-xs text-dark-50">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
