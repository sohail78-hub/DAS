import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuItems = [
    {
      id: 'shop',
      icon: '🛒',
      label: 'Shop',
      submenu: [
        { id: 'products', icon: '📦', label: 'Products' },
        { id: 'new-arrivals', icon: '🆕', label: 'New Arrivals' },
        { id: 'bestsellers', icon: '🏆', label: 'Bestsellers' },
        { id: 'discounts', icon: '💰', label: 'Discounts' }
      ]
    },
    {
      id: 'resource',
      icon: '📑',
      label: 'Resource',
      submenu: [
        { id: 'framer-motion', icon: '✨', label: 'Framer motion' },
        { id: 'navigation', icon: '🧭', label: 'Navigation' },
        { id: 'components', icon: '🧩', label: 'Components' },
        { id: 'all-resource', icon: '📁', label: 'All resource' }
      ]
    },
    {
      id: 'menu',
      icon: '≡',
      label: 'Menu',
      submenu: [
        { id: 'settings', icon: '⚙️', label: 'Settings' },
        { id: 'profile', icon: '👤', label: 'Profile' },
        { id: 'help', icon: '❓', label: 'Help & FAQ' },
        { id: 'logout', icon: '🚪', label: 'Logout' }
      ]
    }
  ];

  // Animation variants
  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    scrolled: {
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
    }
  };

  const menuButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const submenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const submenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const sideMenuVariants = {
    hidden: { 
      x: -250,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const sideMenuButtonVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3
      }
    },
    hidden: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const getVisibleMenuItems = () => {
    if (scrolled) {
      return menuItems.filter(item => item.id === 'menu');
    } else {
      return menuItems;
    }
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-full flex justify-center z-50 pt-4 pb-4"
        initial="initial"
        animate="animate"
        variants={navbarVariants}
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <motion.div 
          className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 text-gray-200 shadow-lg"
          animate={scrolled ? "scrolled" : "animate"}
          variants={navbarVariants}
          style={{ width: scrolled ? '150px' : '400px' }}
        >
          {getVisibleMenuItems().map((item) => (
            <motion.button
              key={item.id}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-200 ${
                activeMenu === item.id ? 'bg-gray-700' : ''
              }`}
              onMouseEnter={() => setActiveMenu(item.id)}
              variants={menuButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              layout
            >
              <motion.span 
                animate={{ rotate: activeMenu === item.id ? [0, -10, 10, -10, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.span>
              <span>{item.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeMenu && menuItems.find(item => item.id === activeMenu)?.submenu && (
            <motion.div 
              className="absolute top-16 mt-2 p-4 bg-gray-800 rounded-xl text-gray-200 shadow-lg z-10 overflow-hidden"
              onMouseLeave={() => setActiveMenu(null)}
              variants={submenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={activeMenu}
              style={{ width: '400px' }}
            >
              <div className="flex flex-col gap-3">
                {menuItems.find(item => item.id === activeMenu).submenu.map((subItem, index) => (
                  <motion.button
                    key={subItem.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-left"
                    variants={submenuItemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-md"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {subItem.icon}
                    </motion.span>
                    <span>{subItem.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      
   

      {/* Page content  */}
      <div className="pt-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Page Content</h1>
          {Array(20).fill().map((_, i) => (
            <p key={i} className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, 
              tortor eget ullamcorper finibus, leo quam faucibus orci, a varius ligula 
              nisl nec velit. Ut tempus ex a libero vulputate, sit amet faucibus massa lacinia.
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;