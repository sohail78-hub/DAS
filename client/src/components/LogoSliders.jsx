import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const LogoSliders = ({ sliderData }) => {
  const controls = useAnimation();
  const doubledSlides = [...sliderData, ...sliderData];

  const sliderVariants = {
    animate: {
      x: '-50%', 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="w-full py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            variants={sliderVariants}
            initial={{ x: 0 }}
            animate="animate"
          >
            {doubledSlides.map((item) => (
              <motion.div
                key={`${item.id}-${Math.random()}`}
                className="flex-none w-48 flex flex-col items-center justify-center p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.src || 'https://via.placeholder.com/150'}
                  alt={item.title}
                  className="w-24 h-24 object-contain mb-2"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
                <h3 className="text-sm font-medium text-gray-200 text-center">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoSliders;