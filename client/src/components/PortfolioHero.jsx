import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 'development',
      title: 'Development',
      image: '/images/development.png',
      items: [
        'Dynamic Website Design',
        'e-Commerce Store',
        'Landing Page | 1 Page',
        'Cloud based POS, CRM & ERP Solution',
        'Cyber Security',
        'App Development',
        'Custom Digital Software Solutions'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing',
      image: '/images/digital-marketing.png',
      items: [
        'Google Ads',
        'Meta Ads',
        'SEO',
        'Social Media Management'
      ]
    },
    {
      id: 'outsourcing',
      title: 'Outsourcing',
      image: '/images/outsourcing.png',
      items: [
        'Content Creation',
        'Copywriting Services',
        'Social Media Management Services',
        'Paid Ads',
        'SEO Services'
      ]
    },
    {
      id: 'designing',
      title: 'Designing',
      image: '/images/graphic.png',
      items: [
        'Logo Design',
        'Ads',
        'Graphic Works',
        'Reels',
        'Video Animation Work'
      ]
    }
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          <span className="text-white">SERVICES</span>
          <span className="text-blue-500"> PORTFOLIO</span>
        </h2>
      </div>

      <div className="relative w-full max-w-6xl">
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-40 h-40"
          animate={{ 
            rotate: 360 
          }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          <img 
            src="/da-log.png" 
            alt="Digital Agency" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:gap-16">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <motion.div 
                className="relative cursor-pointer mb-2"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveService(service.id)}
                onClick={() => setActiveService(service.id === activeService ? null : service.id)}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
                <motion.div 
                  className={`absolute inset-0 rounded-full bg-blue-500 opacity-0 ${activeService === service.id ? 'bg-opacity-20' : ''}`}
                  animate={{ opacity: activeService === service.id ? 0.2 : 0 }}
                />
              </motion.div>
              
              <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              
              {activeService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-gray-800 bg-opacity-80 rounded-lg p-4 w-full max-w-sm"
                >
                  <ul className="text-white text-sm">
                    {service.items.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="mb-2 flex items-center"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;