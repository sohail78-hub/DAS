import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const PortfolioHero = () => {
  const [activeService, setActiveService] = useState(null);
  const [centerImage, setCenterImage] = useState('/da-log.png');
  const [rotationAngle, setRotationAngle] = useState(0);
  const logoRef = useRef(null);
  const rotationRef = useRef(null);
  
  const serviceRefs = {
    development: useRef(null),
    marketing: useRef(null),
    outsourcing: useRef(null),
    designing: useRef(null)
  };

  const [originalPositions, setOriginalPositions] = useState({
    development: { x: 0, y: 0 },
    marketing: { x: 0, y: 0 },
    outsourcing: { x: 0, y: 0 },
    designing: { x: 0, y: 0 }
  });

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

  useEffect(() => {
    const saveOriginalPositions = () => {
      const positions = {};
      Object.keys(serviceRefs).forEach(serviceId => {
        if (serviceRefs[serviceId].current) {
          const rect = serviceRefs[serviceId].current.getBoundingClientRect();
          positions[serviceId] = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };
        }
      });
      setOriginalPositions(positions);
    };
    
    setTimeout(saveOriginalPositions, 500);
    
    window.addEventListener('resize', saveOriginalPositions);
    return () => window.removeEventListener('resize', saveOriginalPositions);
  }, []);

  useEffect(() => {
    let animationId;
    
    if (activeService) {
      const animate = () => {
        setRotationAngle(prev => (prev - 0.2) % 360);
        animationId = requestAnimationFrame(animate);
      };
      
      animate();
    }
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [activeService]);

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

  const handleServiceClick = (service) => {
    if (activeService === service.id) {
      setActiveService(null);
      setCenterImage('/da-log.png');
    } else {
      setActiveService(service.id);
      setCenterImage(service.image);
    }
  };

  const getSubmenuItemPosition = (index, total, serviceId) => {
    if (!originalPositions[serviceId]) return { x: 0, y: 0 };
    
    const radius = 120;
    const baseAngle = (index / total) * (Math.PI * 2);
    const currentAngle = baseAngle + (rotationAngle * Math.PI / 180);
    
    return {
      x: Math.cos(currentAngle) * radius,
      y: Math.sin(currentAngle) * radius
    };
  };

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
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20  transform scale-110"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-30  transform scale-105"></div>
            <motion.img 
              key={centerImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={centerImage} 
              alt="Center Logo" 
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-16">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center relative">
              <motion.div 
                ref={serviceRefs[service.id]}
                className="relative cursor-pointer mb-2"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleServiceClick(service)}
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
              </motion.div>
              
              <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              
              {activeService === service.id && (
                <div 
                  ref={rotationRef}
                  className="absolute w-full h-full"
                  style={{
                    top: 0,
                    left: 0,
                    width: '300px',
                    height: '300px',
                    pointerEvents: 'none',
                  }}
                >
                  {service.items.map((item, index) => {
                    const position = getSubmenuItemPosition(index, service.items.length, service.id);
                    return (
                      <motion.div
                        key={index}
                        className="absolute bg-gray-800 bg-opacity-80 rounded-lg p-2 text-white text-xs z-30"
                        style={{
                          width: '100px',
                          top: '50%',
                          left: '50%',
                          x: position.x,
                          y: position.y,
                          translateX: '-50%',
                          translateY: '-50%',
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        <div className="flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-1 flex-shrink-0"></div>
                          <span className="truncate">{item}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
