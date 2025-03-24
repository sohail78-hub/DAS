import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

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
    return () => window.removeEventListener('scroll', handleScroll);
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
      label: 'Services',
      link: '/services',
      submenu: [
        { id: 'digital-marketing', label: 'Digital Marketing', link: '/services#digital-marketing' },
        { id: 'web-development', label: 'Web Development', link: '/services#web-development' },
        { id: 'app-development', label: 'App Development', link: '/services#app-development' },
        { id: 'graphic-design', label: 'Graphic Design', link: '/services#graphic-design' }
      ],
    },
    {
      id: 'about',
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
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' }},
    scrolled: { boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' },
  };

  const menuButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -10, clipPath: 'inset(0% 0% 100% 0%)' },
    visible: {  
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05, delayChildren: 0.1 }
    },
  };

  const submenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' }},
    hover: { scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.5 }},
  };

  const getVisibleMenuItems = () => scrolled && !hovered ? [] : menuItems;

  const handleServicesClick = (e) => {
    navigate('/services');
    setActiveMenu(null);
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
              <motion.div
                key={item.id}
                className={`relative flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-200 ${
                  activeMenu === item.id ? 'bg-gray-700' : ''
                }`}
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => !item.submenu && setActiveMenu(null)}
                variants={menuButtonVariants}
                initial="initial"
                whileHover={{ scale: 1.05, backgroundColor: menuColors[item.id] + '44' }}
                whileTap="tap"
                style={{
                  backgroundColor: activeMenu === item.id ? menuColors[item.id] + '66' : '',
                }}
              >
                {item.id === 'services' ? (
                  <>
                    <Link
                      to={item.link}
                      onClick={handleServicesClick}
                      className="flex items-center gap-2 text-current hover:no-underline"
                    >
                      <span>{item.label}</span>
                    </Link>
                    <AnimatePresence>
                      {activeMenu === 'services' && (
                        <motion.div
                          className="absolute top-[100%] left-0 -mt-2 p-4 bg-[#eae5d7] rounded-xl shadow-lg z-10"
                          style={{ width: '400px', borderTop: `3px solid ${menuColors[item.id]}` }}
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <div className="flex flex-col gap-3">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.link}
                                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors"
                                onClick={() => {
                                  setActiveMenu(null);
                                  setHovered(false);
                                }}
                              >
                                <span className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-md">
                                  {/* Add icon if needed */}
                                </span>
                                <span>{subItem.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <>
                    <span>{item.label}</span>
                    <AnimatePresence>
                      {activeMenu === item.id && item.submenu && (
                        <motion.div
                          className="absolute top-[100%] left-0 -mt-2 p-4 bg-[#eae5d7] rounded-xl shadow-lg z-10"
                          style={{ width: '400px', borderTop: `3px solid ${menuColors[item.id]}` }}
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <div className="flex flex-col gap-3">
                            {item.submenu.map((subItem) => (
                              <motion.div
                                key={subItem.id}
                                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-300"
                                variants={submenuItemVariants}
                                whileHover={{ x: 5 }}
                              >
                                <span className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-md">
                                  {subItem.icon}
                                </span>
                                <span>{subItem.label}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;