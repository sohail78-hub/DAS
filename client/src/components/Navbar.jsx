import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(false);
      setActiveMenu(null);
    }, 200);
  };

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
    shop: '#4F46E5',
    resource: '#10B981',
    menu: '#F59E0B',
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
        { id: 'discounts', icon: '💰', label: 'Discounts' },
      ],
    },
    {
      id: 'resource',
      icon: '🗃️',
      label: 'Resource',
      submenu: [
        { id: 'framer-motion', icon: '✨', label: 'Framer motion' },
        { id: 'navigation', icon: '🧭', label: 'Navigation' },
        { id: 'components', icon: '🧩', label: 'Components' },
        { id: 'all-resource', icon: '📁', label: 'All resource' },
      ],
    },
    {
      id: 'menu',
      icon: '👓',
      label: 'Menu',
      submenu: [
        { id: 'services', icon: '⚙️', label: 'services' },
        { id: 'portfolio', icon: '👤', label: 'portfolio' },
        { id: 'contact', icon: '❓', label: 'contact' },
        { id: 'About Us', icon: '🚪', label: 'About Us' },
        { id: 'blog', icon: '🚪', label: 'blog' },

      ],
    },
  ];

  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    scrolled: {
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    },
  };

  const menuButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const submenuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      clipPath: 'inset(0% 0% 100% 0%)',
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const submenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const getVisibleMenuItems = () => {
    if (scrolled && !hovered) {
      return [];
    } else {
      return menuItems;
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 w-full flex justify-center z-50 pt-4 pb-4"
        initial={{ left: '50%', x: '-50%', width: '550px' }} // Center the Navbar initially
        animate={{
          left: scrolled ? '20px' : '50%', // Move to left on scroll
          x: scrolled ? '0' : '-50%', // Adjust transform for centering
          width: hovered ? '550px' : scrolled ? 'auto' : '550px', // Adjust width
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 text-gray-200 shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="mr-4 flex items-center"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <img src="/da-log.png" alt="Logo" className="h-16 w-auto" />
          </motion.div>

          <div className="flex-1 flex items-center">
            {getVisibleMenuItems().map((item) => (
              <motion.button
                key={item.id}
                className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-200 ${
                  activeMenu === item.id ? 'bg-gray-700' : ''
                }`}
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => {
                  if (!item.submenu) {
                    setActiveMenu(null);
                  }
                }}
                variants={menuButtonVariants}
                initial="initial"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: menuColors[item.id] + '44',
                  transition: { duration: 0.2 },
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

        <AnimatePresence>
          {activeMenu && menuItems.find((item) => item.id === activeMenu)?.submenu && (
            <motion.div
              className="absolute top-[100%] -mt-2 p-4 bg-gray-800 rounded-xl text-gray-200 shadow-lg z-10 overflow-hidden"
              style={{ marginBottom: '20px' }}
              onMouseEnter={() => {
                clearTimeout(timeoutRef.current);
                setHovered(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setHovered(false);
                  setActiveMenu(null);
                }, 200);
              }}
              variants={submenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={activeMenu}
              style={{
                width: '400px',
                borderTop: `3px solid ${menuColors[activeMenu]}`,
              }}
            >
              <div className="flex flex-col gap-3">
                {menuItems
                  .find((item) => item.id === activeMenu)
                  .submenu.map((subItem, index) => (
                    <motion.button
                      key={subItem.id}
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 text-left hover:bg-gray-700"
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