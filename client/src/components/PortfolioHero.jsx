import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    webDevelopment: {
      title: "Web & App Development",
      icon: "🖥️",
      submenus: [
        { name: "Dynamic Website Design", icon: "🎨" },
        { name: "e-Commerce Store", icon: "🛒" },
        { name: "Landing Page | 1 Page", icon: "📄" },
        { name: "Cloud based POS, CRM & ERP Solution", icon: "☁️" },
        { name: "Cyber Security", icon: "🔒" },
        { name: "App Development", icon: "📱" },
        { name: "Custom Digital Software Solutions", icon: "⚙️" }
      ]
    },
    digitalMarketing: {
      title: "Digital Marketing",
      icon: "📊",
      submenus: [
        { name: "Google Ads", icon: "🔍" },
        { name: "Meta Ads", icon: "👥" },
        { name: "SEO", icon: "📈" },
        { name: "Social Media Management", icon: "💬" }
      ]
    },
    outsourcing: {
      title: "Digital Marketing Outsourcing",
      icon: "🤝",
      submenus: [
        { name: "Content Creation", icon: "✏️" },
        { name: "Copywriting Services", icon: "📝" },
        { name: "Social Media Management Services", icon: "📱" },
        { name: "Paid Ads", icon: "💰" },
        { name: "SEO Services", icon: "🔝" }
      ]
    },
    design: {
      title: "Design & Development",
      icon: "🎨",
      submenus: [
        { name: "Logo Design", icon: "⭐" },
        { name: "Ads", icon: "📣" },
        { name: "Graphic Works", icon: "🖌️" },
        { name: "Reels", icon: "🎬" },
        { name: "Video Animation Work", icon: "🎥" }
      ]
    }
  };

  const handleMouseEnter = (menuKey) => {
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-6 flex flex-col space-y-4">
            {Object.entries(menuData)
              .filter(([key]) => key === 'webDevelopment' || key === 'digitalMarketing')
              .map(([key, menu]) => (
                <motion.div
                  key={key}
                  className="border border-white/30 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 cursor-pointer relative text-white"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{menu.icon}</span>
                    <h3 className="font-medium">{menu.title}</h3>
                  </div>
                  
                  {activeMenu === key && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="absolute top-0 left-full ml-4 bg-white/10 backdrop-blur-md shadow-xl rounded-lg p-4 z-10 w-72 border border-white/30"
                    >
                      <div className="space-y-3">
                        {menu.submenus.map((submenu, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center p-2 text-white hover:bg-white/20 rounded-md"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-lg mr-3">{submenu.icon}</span>
                            <span>{submenu.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
          </div>
          
          <div className="md:w-1/3 flex justify-center items-center p-6">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 h-48 w-48 flex items-center justify-center border border-white/30"
            >
              <img  src="/da-log.png" alt="Company Logo" className="rounded-full" />
            </motion.div>
          </div>
          
          <div className="md:w-1/3 p-6 flex flex-col space-y-4">
            {Object.entries(menuData)
              .filter(([key]) => key === 'outsourcing' || key === 'design')
              .map(([key, menu]) => (
                <motion.div
                  key={key}
                  className="border border-white/30 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 cursor-pointer relative text-white"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{menu.icon}</span>
                    <h3 className="font-medium">{menu.title}</h3>
                  </div>
                  
                  {activeMenu === key && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="absolute top-0 right-full mr-4 bg-white/10 backdrop-blur-md shadow-xl rounded-lg p-4 z-10 w-72 border border-white/30"
                    >
                      <div className="space-y-3">
                        {menu.submenus.map((submenu, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center p-2 text-white hover:bg-white/20 rounded-md"
                            whileHover={{ x: -5 }}
                          >
                            <span className="text-lg mr-3">{submenu.icon}</span>
                            <span>{submenu.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
        
        <div className="text-center mt-48 py-4 backdrop-blur-sm bg-white/5">
          <h2 className="text-xl font-bold">
            <span className="text-white">MARKETIST</span>
            <span className="text-blue-300"> PORTFOLIO</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;