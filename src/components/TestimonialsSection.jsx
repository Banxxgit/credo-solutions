import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Credo Solutions transformed our digital infrastructure in record time. Their technical depth and ability to align with business goals made the transition seamless.",
      author: "Jason Miller",
      role: "IT Director",
      rating: 5,
    },
    {
      quote: "The Credo team didn't just deliver software; they built a system that scaled as our operations grew. Their understanding of enterprise needs is unmatched.",
      author: "Alicia Gomez",
      role: "Operations Manager",
      rating: 5,
    },
    {
      quote: "Our shift to cloud architecture with Credo was smoother than we anticipated. They handled complex integrations across AWS and Azure without downtime.",
      author: "Michael Grant",
      role: "Head of Infrastructure",
      rating: 5,
    },
    {
      quote: "The AI automation Credo developed reduced our manual workload by nearly 60%. Their delivery process is transparent, fast, and focused on impact.",
      author: "Priya Desai",
      role: "Process Innovation Lead",
      rating: 5,
    },
    {
      quote: "Working with Credo Solutions feels like having an in-house tech partner. They're strategic, detail-oriented, and genuinely invested in outcomes.",
      author: "Samuel Brooks",
      role: "Chief Technology Officer",
      rating: 5,
    },
    {
      quote: "We wanted a blockchain solution that was secure and future-proof. Credo's team helped us design and deploy a system that exceeded compliance requirements.",
      author: "Danielle Ross",
      role: "Product Manager",
      rating: 5,
    },
    {
      quote: "Their project management and training support made implementation effortless for our teams. Credo's clarity and communication stand out.",
      author: "Kelvin Oduro",
      role: "Program Manager",
      rating: 5,
    },
    {
      quote: "Credo helped us bridge innovation and compliance perfectly. Their understanding of both technology and regulation gave us confidence to scale.",
      author: "Maria Alvarez",
      role: "Compliance Consultant",
      rating: 5,
    },
    {
      quote: "From concept to launch, Credo delivered a full go-to-market strategy that worked. They think beyond software — they think growth.",
      author: "James Turner",
      role: "Product Marketing Lead",
      rating: 5,
    },
    {
      quote: "The level of professionalism and precision from Credo Solutions is rare. Every milestone was met with care, speed, and strategic insight.",
      author: "Evelyn Chen",
      role: "Digital Transformation Lead",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const visibleTestimonials = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <section className="py-20 bg-surface-light relative overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#FF9156" fillOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
          
          {/* Stylized world map continents */}
          <g fill="#FF9156" fillOpacity="0.08">
            {/* North America */}
            <path d="M150 120 Q200 100 280 130 Q320 150 300 200 Q280 250 230 260 Q180 250 150 200 Q130 160 150 120Z" />
            {/* South America */}
            <path d="M220 280 Q260 270 280 320 Q290 380 260 420 Q230 450 210 400 Q190 350 200 300 Q210 280 220 280Z" />
            {/* Europe */}
            <path d="M500 100 Q560 90 600 130 Q620 160 590 180 Q550 190 520 170 Q490 150 500 100Z" />
            {/* Africa */}
            <path d="M520 200 Q580 190 610 250 Q630 320 600 380 Q560 420 520 380 Q490 320 500 260 Q510 210 520 200Z" />
            {/* Asia */}
            <path d="M650 80 Q750 60 850 100 Q920 130 900 200 Q880 260 800 280 Q720 290 680 250 Q650 200 660 140 Q655 100 650 80Z" />
            {/* Australia */}
            <path d="M850 350 Q920 340 960 380 Q980 420 950 450 Q900 470 860 440 Q830 400 850 350Z" />
          </g>
          
          {/* Connection lines */}
          <g stroke="#FF9156" strokeOpacity="0.15" strokeWidth="1" fill="none" strokeDasharray="5,5">
            <path d="M200 180 Q400 150 550 160" />
            <path d="M550 160 Q700 180 800 200" />
            <path d="M250 350 Q450 300 550 280" />
            <path d="M550 280 Q700 320 900 400" />
          </g>
          
          {/* Connection dots */}
          <g fill="#FF9156">
            <circle cx="200" cy="180" r="4" fillOpacity="0.5" />
            <circle cx="550" cy="160" r="4" fillOpacity="0.5" />
            <circle cx="800" cy="200" r="4" fillOpacity="0.5" />
            <circle cx="250" cy="350" r="4" fillOpacity="0.5" />
            <circle cx="900" cy="400" r="4" fillOpacity="0.5" />
          </g>
        </svg>
      </div>

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
            Testimonials
            <span className="w-8 h-px bg-primary" />
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Built on Trust.{' '}
            <span className="gradient-text">Driven by Results.</span>
          </h2>

          <p className="text-dark-50">
            We believe technology works best when people trust the team behind it. From global enterprises to fast-growing startups, our partners share one thing in common — measurable success powered by Credo Solutions.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-soft-lg relative"
                >
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 pt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-dark-400 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{testimonial.author}</p>
                      <p className="text-dark-50 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-dark-50 hover:text-primary hover:shadow-soft-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-primary' : 'bg-dark-50/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-dark-50 hover:text-primary hover:shadow-soft-lg transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
