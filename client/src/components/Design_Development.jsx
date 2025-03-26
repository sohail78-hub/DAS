import React from 'react';
import { motion } from 'framer-motion';

const Design_Development = () => {
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
            Design & Development
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-white">
            Create Stunning Solutions — Let’s Innovate!
          </h2>
          <p className="text-white text-lg">
            Bring your ideas to life with Marketist’s Design & Development services! We combine creativity and technology to deliver visually stunning and highly functional solutions.
          </p>
          <p className="text-white text-lg">
            From UI/UX design to full-stack development, our team ensures your project is both beautiful and efficient, tailored to meet your business goals.
          </p>
          <p className="text-white font-semibold text-lg">
            Let’s craft your next big thing—start today!
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🎨</div>
            <div>
              <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
              <p className="text-white">
                Create intuitive and visually appealing interfaces that enhance user experience
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">💻</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Front-End Development</h3>
              <p className="text-white">
                Build responsive and interactive user interfaces using React, HTML, CSS, and JavaScript
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🛠️</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Back-End Development</h3>
              <p className="text-white">
                Develop robust server-side solutions with Node.js, Laravel, or Python
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🧪</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Prototyping & Testing</h3>
              <p className="text-white">
                Validate your ideas with prototypes and ensure quality through rigorous testing
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Design_Development;