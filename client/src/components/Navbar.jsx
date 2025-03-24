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
    services: '#4F46E5',
    about: '#10B981',
    contact: '#F59E0B',
    portfolio: '#EC4899',
  };

  const menuItems = [
    {
      id: 'services',
      // icon: '⚙️',
      label: 'Services',
      submenu: [
        { id: 'consulting', icon: '📋', label: 'Consulting' },
        { id: 'development', icon: '💻', label: 'Development' },
        { id: 'design', icon: '🎨', label: 'Design' },
        { id: 'support', icon: '🛠️', label: 'Support' },
      ],
    },
    {
      id: 'about',
      // icon: '👤',
      label: 'About',
      submenu: [
        { id: 'team', icon: '👥', label: 'Our Team' },
        { id: 'mission', icon: '🎯', label: 'Mission' },
        { id: 'history', icon: '📜', label: 'History' },
        { id: 'values', icon: '🌟', label: 'Values' },
      ],
    },
    {
      id: 'contact',
      // icon: '❓',
      label: 'Contact',
      submenu: [
        { id: 'email', icon: '✉️', label: 'Email' },
        { id: 'phone', icon: '📞', label: 'Phone' },
        { id: 'location', icon: '📍', label: 'Location' },
        { id: 'support', icon: '💬', label: 'Support' },
      ],
    },
    {
      id: 'portfolio',
      // icon: '📁',
      label: 'Portfolio',
      submenu: [
        { id: 'projects', icon: '🏗️', label: 'Projects' },
        { id: 'case-studies', icon: '📊', label: 'Case Studies' },
        { id: 'clients', icon: '🤝', label: 'Clients' },
        { id: 'gallery', icon: '🖼️', label: 'Gallery' },
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
        initial={{ left: '50%', x: '-50%', width: '550px' }}
        animate={{
          left: scrolled ? '20px' : '50%',
          x: scrolled ? '0' : '-50%',
          width: hovered ? '550px' : scrolled ? 'auto' : '550px',
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="flex items-center gap-2 bg-[#e8e4d7] rounded-full px-4 py-2 text-gray-800 shadow-lg"
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
              className="absolute top-[100%] -mt-2 p-4 bg-[#eae5d7] rounded-xl text-gray-900 shadow-lg z-10 overflow-hidden"
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
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 text-left hover:bg-gray-300"
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