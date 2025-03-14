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

  const menuColors = {
    'shop': '#4F46E5', // Indigo
    'resource': '#10B981', // Emerald
    'menu': '#F59E0B' // Amber
  };

  const menuItems = [
    {
      id: 'shop',
      icon: '💻',
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
      icon: '🗃️',
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
      icon: '👓',
      label: 'Menu',
      submenu: [
        { id: 'settings', icon: '⚙️', label: 'Settings' },
        { id: 'profile', icon: '👤', label: 'Profile' },
        { id: 'help', icon: '❓', label: 'Help & FAQ' },
        { id: 'logout', icon: '🚪', label: 'Logout' }
      ]
    },
    {
      id: 'services',
      icon: '👓',
      label: 'services',
      submenu: [
        { id: 'settings', icon: '⚙️', label: 'Settings' },
        { id: 'profile', icon: '👤', label: 'Profile' },
        { id: 'help', icon: '❓', label: 'Help & FAQ' },
        { id: 'logout', icon: '🚪', label: 'Logout' }
      ]
    },
    // {
    //   id: 'About',
    //   icon: '👓',
    //   label: 'About Us',
    //   submenu: [
    //     { id: 'settings', icon: '⚙️', label: 'Settings' },
    //     { id: 'profile', icon: '👤', label: 'Profile' },
    //     { id: 'help', icon: '❓', label: 'Help & FAQ' },
    //     { id: 'logout', icon: '🚪', label: 'Logout' }
    //   ]
    // },
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

  const quoteButtonVariants = {
    initial: { scale: 1, opacity: 0, y: -10 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)"
    },
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

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.5
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
    className="flex items-center w-full gap-6 bg-gray-800 rounded-full px-6 py-2 text-gray-200 shadow-lg"
    animate={scrolled ? "scrolled" : "animate"}
    variants={navbarVariants}
    style={{ width: scrolled ? '450px' : '700px' }}
  >
    {/* Logo */}
    <motion.div 
      className="mr-4"
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="flex items-center justify-center rounded-full h-12 w-12 overflow-hidden">
        <img src='da-log.png' className='w-full h-full' />
      </div>
    </motion.div>
    
    {/* Menu Items */}
    <div className="flex-1 flex items-center gap-6">
      {getVisibleMenuItems().map((item) => (
        <motion.button
          key={item.id}
          className={`flex items-center gap-2 px-5 py-1 rounded-md transition-colors duration-200 ${
            activeMenu === item.id ? 'bg-gray-700' : ''
          }`}
          onMouseEnter={() => setActiveMenu(item.id)}
          variants={menuButtonVariants}
          initial="initial"
          whileHover={{
            scale: 1.05,
            backgroundColor: menuColors[item.id] + '44',
            transition: { duration: 0.2 }
          }}
          whileTap="tap"
          layout
          style={{
            backgroundColor: activeMenu === item.id ? menuColors[item.id] + '66' : '',
          }}
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
    </div>
  </motion.div>

  {/* Submenu */}
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
        style={{ 
          width: '450px',
          borderTop: `3px solid ${menuColors[activeMenu]}` 
        }}
      >
        <div className="flex flex-col gap-3">
          {menuItems.find(item => item.id === activeMenu).submenu.map((subItem, index) => (
            <motion.button
              key={subItem.id}
              className="flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 text-left hover:bg-gray-700"
              variants={submenuItemVariants}
              custom={index}
              whileHover={{ x: 5 }}
            >
              <span className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-md">
                {subItem.icon}
              </span>
              <span>{subItem.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
    </>
  );
};

export default Navbar;