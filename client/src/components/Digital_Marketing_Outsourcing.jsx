import React from 'react';
import { motion } from 'framer-motion';

const Digital_Marketing_Outsourcing = () => {
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
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Digital Marketing Outsourcing
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-white">
            Scale Your Growth — Let’s Partner!
          </h2>
          <p className="text-white text-lg">
            Outsource your digital marketing with Marketist and focus on what you do best! We provide expert solutions to boost your online presence while saving you time and resources.
          </p>
          <p className="text-white text-lg">
            From strategy to execution, our team handles everything, ensuring your brand thrives in the digital landscape with measurable results.
          </p>
          <p className="text-white font-semibold text-lg">
            Let’s take your marketing to the next level—partner with us today!
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">📊</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Full Campaign Management</h3>
              <p className="text-white">
                Comprehensive management of your digital campaigns, from planning to optimization
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">📉</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Analytics & Reporting</h3>
              <p className="text-white">
                Detailed insights and reports to track performance and ROI of your marketing efforts
              </p>
            </div>
          </div>

          {/* Ad Management */}
          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">💻</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Ad Management</h3>
              <p className="text-white">
                Expert handling of Google Ads, social media ads, and other paid campaigns for maximum impact
              </p>
            </div>
          </div>

          {/* Dedicated Support */}
          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🤝</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Dedicated Support</h3>
              <p className="text-white">
                A dedicated team to support your marketing needs, ensuring seamless collaboration
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Digital_Marketing_Outsourcing;