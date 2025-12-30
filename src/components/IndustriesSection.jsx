import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Building, HeartPulse, Truck, ShoppingCart, BarChart3 } from 'lucide-react';

const IndustriesSection = () => {
  const publicSector = [
    { icon: Landmark, label: 'Digital Governance' },
    { icon: Building, label: 'Citizen Portals' },
    { icon: HeartPulse, label: 'Health Tech' },
    { icon: Building, label: 'Smart Infrastructure' },
  ];

  const privateSector = [
    { icon: Building, label: 'FinTech' },
    { icon: HeartPulse, label: 'Healthcare' },
    { icon: Truck, label: 'Logistics' },
    { icon: ShoppingCart, label: 'Retail' },
    { icon: BarChart3, label: 'Data Analytics' },
  ];

  return (
    <section className="py-20 bg-surface-light overflow-hidden">
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
            Public & Private Sector Solutions
            <span className="w-8 h-px bg-primary" />
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Driving Impact Across{' '}
            <span className="gradient-text">Industries</span>
          </h2>

          <p className="text-dark-50">
            We empower businesses and governments to solve complex challenges through technology. From e-government systems to fintech platforms, Credo Solutions delivers solutions that scale with your mission.
          </p>
        </motion.div>

        {/* Split Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Public Sector */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft-lg h-full">
              <div className="absolute -top-4 left-8">
                <span className="bg-dark text-white px-4 py-2 rounded-full text-sm font-medium">
                  Public Sector
                </span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Government & Public Services
                </h3>
                <p className="text-dark-50 mb-8">
                  Digital governance, citizen portals, health tech, and smart infrastructure solutions that modernize public services.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {publicSector.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-surface-light rounded-2xl hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-dark text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Private Sector */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 shadow-soft-lg h-full text-white">
              <div className="absolute -top-4 left-8">
                <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Private Sector
                </span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4">
                  Enterprise & Business Solutions
                </h3>
                <p className="text-white/80 mb-8">
                  FinTech, healthcare, logistics, retail, and advanced data analytics solutions that drive competitive advantage.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {privateSector.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
