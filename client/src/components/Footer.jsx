import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import {motion} from 'framer-motion'

const footerData={
    Guide:{
        title:"Guide",
        links:[
      "How to Make an OrderLorem",
      "Delivery Lorem",
      "My Lorem",
      "Lorem",
      "Terms and Lorem",
        ]
    },
      customerService: {
    title: "CUSTOMER SERVICE",
    links: ["Product Simple", "Product Extended", "Your Cart", "Wishlist", "Shop"],
  },
  sportStore: {
    title: "DIGITAL AGENCY",
    links: ["Lorem Ipsum", "Lorem", "Lorem", "Our Lorem", "Lorem"],
  },
  quickLinks: {
    title: "QUICK LINKS",
    links: ["Facebook", "Instagram", "YouTube", "Pinterest", "Twitter"],
  },

}

const Footer = () => {
  return (
    <>
    <div className=" w-full mx-auto h-full py-10 bg-gradient-to-r bg-gray-900 text-white"> 
{/* logo */}
<h2 className="text-2xl font-bold text-center my-2 ">DIGITAL AGENCY</h2>


<div className='flex justify-center gap-3 items-center py-8 cursor-pointer'>
  <motion.div
    whileHover={{ scale: 0.9, y: 20 }}
    initial={{ x: 0, rotate: 0 }}
    animate={{ x: 0, rotate: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaLinkedin />
  </motion.div>

  <motion.div
    whileHover={{ scale: 0.9, y: 20 }}
    initial={{ x: 0, rotate: 0 }}
    animate={{ x: 0, rotate: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaDiscord />
  </motion.div>

  <motion.div
    whileHover={{ scale: 0.9, y: 20 }}
    initial={{ x: 0, rotate: 0 }}
    animate={{ x: 0, rotate: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaTwitter />
  </motion.div>

  <motion.div
    whileHover={{ scale: 0.9, y: 20 }}
    initial={{ x: 0, rotate: 0 }}
    animate={{ x: 0, rotate: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaFacebookF />
  </motion.div>

  <motion.div
    whileHover={{ scale: 0.9, y: 20 }}
    initial={{ x: 0, rotate: 0 }}
    animate={{ x: 0, rotate: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaInstagram />
  </motion.div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-3">
         {Object.values(footerData).map((section,id)=>{
            return (
                <div key={id} >
                    <motion.div 
  
                    className='font-bold text-white py-4' >{section.title}</motion.div >
                    <ul>
                        {section.links.map((item,id)=>{
                            return (
                                <motion.div whileHover={{scale:1,x:20}} key={id} >
                                <li className='text-white cursor-pointer ' >{item}</li>
                                </motion.div>
                            )
                        })}
                    </ul>
                </div>
            )
         })}
      </div>
      </div>
    </>
  )
}

export default Footer
