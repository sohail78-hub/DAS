import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const PortfolioHero = () => {
  const [activeService, setActiveService] = useState(null);
  const logoRef = useRef(null);
  
  // Refs for each service icon
  const serviceRefs = {
    development: useRef(null),
    marketing: useRef(null),
    outsourcing: useRef(null),
    designing: useRef(null)
  };

  // Motion values for elastic connections
  const connections = {
    development: {
      x: useMotionValue(0),
      y: useMotionValue(0),
      isDragging: false
    },
    marketing: {
      x: useMotionValue(0),
      y: useMotionValue(0),
      isDragging: false
    },
    outsourcing: {
      x: useMotionValue(0),
      y: useMotionValue(0),
      isDragging: false
    },
    designing: {
      x: useMotionValue(0),
      y: useMotionValue(0),
      isDragging: false
    }
  };

  const services = [
    {
      id: 'development',
      title: 'Development',
      fullTitle: 'Web & App Development',
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
      fullTitle: 'Digital Marketing',
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
      fullTitle: 'Digital Marketing Outsourcing',
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
      fullTitle: 'Design & Development',
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

  const drawConnections = () => {
    if (!logoRef.current) return;
    
    const canvas = document.getElementById('connections-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const logoRect = logoRef.current.getBoundingClientRect();
    const logoX = logoRect.x + logoRect.width / 2;
    const logoY = logoRect.y + logoRect.height / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    Object.keys(serviceRefs).forEach(serviceId => {
      const serviceRef = serviceRefs[serviceId];
      if (!serviceRef.current) return;
      
      const serviceRect = serviceRef.current.getBoundingClientRect();
      const serviceX = serviceRect.x + serviceRect.width / 2 + (connections[serviceId].x.get() || 0);
      const serviceY = serviceRect.y + serviceRect.height / 2 + (connections[serviceId].y.get() || 0);
      
      ctx.beginPath();
      ctx.moveTo(logoX, logoY);
      
      const cpX1 = logoX + (serviceX - logoX) * 0.3;
      const cpY1 = logoY + (serviceY - logoY) * 0.1;
      const cpX2 = logoX + (serviceX - logoX) * 0.7;
      const cpY2 = logoY + (serviceY - logoY) * 0.9;
      
      ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, serviceX, serviceY);
      
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)'; 
      ctx.stroke();
    });
  };

  useEffect(() => {
    let animationId;
    
    const animate = () => {
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <canvas id="connections-canvas" className="absolute inset-0 pointer-events-none z-0" />
      
      <div className="text-center mb-8 z-10">
        <h2 className="text-3xl font-bold">
          <span className="text-white">SERVICES</span>
          <span className="text-blue-500"> PORTFOLIO</span>
        </h2>
      </div>

      <div className="relative w-full max-w-6xl z-10">
        <div 
          ref={logoRef}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-40 h-40"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-md transform scale-110"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-30 blur-sm transform scale-105"></div>
            <img 
              src="/da-log.png" 
              alt="Digital Agency" 
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-16">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <motion.div 
                ref={serviceRefs[service.id]}
                className="relative cursor-pointer mb-2"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveService(service.id)}
                onClick={() => setActiveService(service.id === activeService ? null : service.id)}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.7}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                onDragStart={() => {
                  connections[service.id].isDragging = true;
                }}
                onDragEnd={() => {
                  connections[service.id].isDragging = false;
                }}
                style={{
                  x: connections[service.id].x,
                  y: connections[service.id].y
                }}
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
                
                <motion.div
                  className="absolute top-1/2 left-full transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-r-lg whitespace-nowrap overflow-hidden ml-2"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: activeService === service.id ? 'auto' : 0,
                    opacity: activeService === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium">{service.fullTitle}</span>
                </motion.div>
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