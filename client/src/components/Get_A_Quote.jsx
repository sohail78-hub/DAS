import { useState } from 'react';
import { motion } from 'framer-motion';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    number:null,
    service:''
  });

  const services = [
    'Web & App Development',
    'Digital Marketing',
    'Design & Development',
    'Digital Marketing Outsourcing',
    'Others'
  ];


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    
    <div className="min-h-screen bg-black flex items-center justify-center pt-32 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-900 rounded-lg shadow-xl p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Get a Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="phone"
              name="phone"
              value={formData.number}
              onChange={handleChange}
              placeholder="Your number"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <motion.select 
            variants={inputVariants}
            whileFocus="focus"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option disabled hidden value='' >
              Select Required Service
            </option>
            {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </motion.select>
          </div>



          <div>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <motion.textarea
              variants={inputVariants}
              whileFocus="focus"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows="4"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#bf9b30] to-[#a67c00] text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Submit Quote Request
          </motion.button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          We'll get back to you within 24 hours
        </p>
      </motion.div>
    </div>
  );
};

export default QuoteForm;