import React from 'react';
import { motion } from 'framer-motion';

const Digital_Marketing = () => {
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
            Digital Marketing
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-white">
            Boost Your Brand — Let’s Grow!
          </h2>
          <p className="text-white text-lg">
            Elevate your online presence with Marketist’s Digital Marketing solutions! We create data-driven strategies to increase your visibility and engagement.
          </p>
          <p className="text-white text-lg">
            From SEO to social media campaigns, our tailored approaches ensure your brand reaches the right audience and converts clicks into customers.
          </p>
          <p className="text-white font-semibold text-lg">
            Let’s amplify your digital growth today!
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🔍</div>
            <div>
              <h3 className="text-xl font-semibold text-white">SEO Services</h3>
              <p className="text-white">
                Rank higher on search engines with our expert SEO strategies, driving organic traffic to your site
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">📱</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Social Media Marketing</h3>
              <p className="text-white">
                Engage your audience on platforms like Instagram, Facebook, and LinkedIn with targeted campaigns
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">📈</div>
            <div>
              <h3 className="text-xl font-semibold text-white">PPC Campaigns</h3>
              <p className="text-white">
                Maximize ROI with our Pay-Per-Click advertising on Google Ads and other platforms
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">✍️</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Content Marketing</h3>
              <p className="text-white">
                Build trust and authority with high-quality blogs, videos, and infographics tailored to your audience
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Digital_Marketing;