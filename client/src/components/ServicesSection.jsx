// ServiceSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { btnClas } from '../../constants/Colors';
import LogoSliders from './LogoSliders';

const ServiceSection = ({ serviceData }) => {
  const { title, subtitle, description, features, sliderData } = serviceData;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-white">{subtitle}</h2>
            {description.map((para, index) => (
              <p key={index} className={`text-white text-lg ${index === description.length - 1 ? 'font-semibold' : ''}`}>
                {para}
              </p>
            ))}
            <div className="space-x-4">
              <Link to="/Get_A_Quote" className={`${btnClas}`}>
                Get a Quote
              </Link>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-white text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-white">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Slider Section */}
      <div className="w-full overflow-hidden px-0 mx-0">
        <LogoSliders sliderData={sliderData} />
      </div>
    </>
  );
};

export default ServiceSection;