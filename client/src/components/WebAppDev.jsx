import React from 'react';
import { motion } from 'framer-motion';

const WebAppDev = () => {
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
    <section className="text-white py-28 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Web & App Development
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-orange-500">
            Website That Drives Results — Let's Build!
          </h2>
          <p className="text-white text-lg">
            Transform your online presence with Marketist’s Web Design & Development! We craft stunning, SEO-friendly websites that captivate visitors and drive sales.
          </p>
          <p className="text-white text-lg">
            From dynamic e-commerce platforms to sleek informational sites, our tailored solutions ensure your brand stands out and converts leads into loyal customers.
          </p>
          <p className="text-white font-semibold text-lg">
            Let’s build your digital success story today!
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="text-orange-500 text-3xl">⚙️</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Business Website Design</h3>
              <p className="text-white">
                Perfect for small and medium businesses to showcase services, online presence & portfolio
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-orange-500 text-3xl">🛒</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Ecommerce Store</h3>
              <p className="text-white">
                Sell your products online with our Ecommerce Web Solutions. Full Featured WordPress, Shopify or Custom Developed Store
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-orange-500 text-3xl">📦</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Landing Page | 1 Page Web</h3>
              <p className="text-white">
                Perfect for Sales Funnel for Google Ads & Other Paid Ad Campaign
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-orange-500 text-3xl">⚡</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Custom Solutions</h3>
              <p className="text-white">
                Backend can be in php, laravel, React Native. Front end will be in html, css & javascript
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WebAppDev;