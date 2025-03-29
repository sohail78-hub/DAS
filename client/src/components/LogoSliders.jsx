import React from 'react';
import { motion } from 'framer-motion';

const LogoSliders = ({ sliderData }) => {
  const gapSize = 16; // Match your gap size (gap-4 = 16px)
  const doubledSlides = [...sliderData, ...sliderData];

  const sliderVariants = {
    animate: {
      x: `calc(-50% - ${gapSize / 2}px)`, // Compensate for gap spacing
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Increased duration for smoother motion
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="w-full py-8 px-0 mx-0">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 whitespace-nowrap" // Added gap-4 here
          variants={sliderVariants}
          initial={{ x: 0 }}
          animate="animate"
        >
          {doubledSlides.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="flex-none w-48 flex flex-col items-center justify-center p-0 mx-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative w-full h-24 mx-0 overflow-hidden">
                <img
                  src={item.src || 'https://via.placeholder.com/150'}
                  alt={item.title}
                  className="w-full h-full object-cover px-0 mx-0 rounded-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
                <div className="absolute bottom-0 h-full py-10 left-0 right-0 bg-black/60 p-1">
                  <h3 className="text-xs font-medium text-white text-center truncate">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSliders;