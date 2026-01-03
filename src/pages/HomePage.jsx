import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div>
      <HeroSection setCurrentPage={setCurrentPage} />
      <AboutSection setCurrentPage={setCurrentPage} />
      <ServicesSection setCurrentPage={setCurrentPage} />
      <CaseStudiesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
