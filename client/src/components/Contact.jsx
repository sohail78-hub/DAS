import React from 'react';
import { motion } from 'framer-motion';
import Cards from '../contacts/Cards';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Contact = () => {
  return (
    <>
    <div className=" p-6 bg-gradient-to-r  text-white">
      <Cards/>

    <div className="flex flex-col md:flex-row   ">
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

    <div className='py-3' >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati dolores placeat dicta necessitatibus, non laudantium facere fuga nostrum enim ipsa atque quia soluta, excepturi eveniet delectus cupiditate pariatur quam.
    </div>

    <div className='py-3' >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati dolores placeat dicta necessitatibus, non laudantium facere fuga nostrum enim ipsa atque quia soluta, excepturi eveniet delectus cupiditate pariatur quam.
    </div>

    <div className='py-3' >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati dolores placeat dicta necessitatibus, non laudantium facere fuga nostrum enim ipsa atque quia soluta, excepturi eveniet delectus cupiditate pariatur quam.
    </div>

        <div className="flex space-x-4">
          <FaFacebookF/>
          <FaInstagram/>
          <FaWhatsapp/>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div 
        className="w-full  md:w-1/2 p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white">Name</label>
            <input required type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input required type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Phone</label>
            <input required type="phone" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          
          <button  type="submit" className="bg-white w-full cursor-pointer text-blue-700 font-bold p-2 rounded hover:bg-white">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
    </div>

    </>
  );
};

export default Contact;