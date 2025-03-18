import React from 'react';
import { motion } from 'framer-motion';
import Cards from '../contacts/Cards';

const Contact = () => {
  return (
    <>
    <Cards/>
    <div className="flex flex-col md:flex-row p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white ">
      {/* Left Column */}
      <motion.div 
        className="w-full md:w-1/2 p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Your Needs, Our Priority</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-red-500 hover:text-red-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div 
        className="w-full md:w-1/2 p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-white text-blue-700 font-bold p-2 rounded hover:bg-white">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
    </>
  );
};

export default Contact;