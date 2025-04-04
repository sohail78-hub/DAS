// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const PortfolioHero = () => {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const menuData = {
//     webDevelopment: {
//       title: "Web & App Development",
//       icon: "🖥️",
//       submenus: [
//         { name: "Dynamic Website Design", icon: "🎨" },
//         { name: "e-Commerce Store", icon: "🛒" },
//         { name: "Landing Page | 1 Page", icon: "📄" },
//         { name: "Cloud based POS, CRM & ERP Solution", icon: "☁️" },
//         { name: "Cyber Security", icon: "🔒" },
//         { name: "App Development", icon: "📱" },
//         { name: "Custom Digital Software Solutions", icon: "⚙️" }
//       ]
//     },
//     digitalMarketing: {
//       title: "Digital Marketing",
//       icon: "📊",
//       submenus: [
//         { name: "Google Ads", icon: "🔍" },
//         { name: "Meta Ads", icon: "👥" },
//         { name: "SEO", icon: "📈" },
//         { name: "Social Media Management", icon: "💬" }
//       ]
//     },
//     outsourcing: {
//       title: "Digital Marketing Outsourcing",
//       icon: "🤝",
//       submenus: [
//         { name: "Content Creation", icon: "✏️" },
//         { name: "Copywriting Services", icon: "📝" },
//         { name: "Social Media Management Services", icon: "📱" },
//         { name: "Paid Ads", icon: "💰" },
//         { name: "SEO Services", icon: "🔝" }
//       ]
//     },
//     design: {
//       title: "Design & Development",
//       icon: "🎨",
//       submenus: [
//         { name: "Logo Design", icon: "⭐" },
//         { name: "Ads", icon: "📣" },
//         { name: "Graphic Works", icon: "🖌️" },
//         { name: "Reels", icon: "🎬" },
//         { name: "Video Animation Work", icon: "🎥" }
//       ]
//     }
//   };

//   const handleMouseEnter = (menuKey) => {
//     setActiveMenu(menuKey);
//   };

//   const handleMouseLeave = () => {
//     setActiveMenu(null);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl rounded-2xl overflow-hidden relative">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/3 p-6 flex flex-col space-y-4">
//             {Object.entries(menuData)
//               .filter(([key]) => key === 'webDevelopment' || key === 'digitalMarketing')
//               .map(([key, menu]) => (
//                 <motion.div
//                   key={key}
//                   className="border border-white/30 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 cursor-pointer relative text-white"
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   onMouseEnter={() => handleMouseEnter(key)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="flex items-center">
//                     <span className="text-2xl mr-3">{menu.icon}</span>
//                     <h3 className="font-medium">{menu.title}</h3>
//                   </div>
                  
//                   {activeMenu === key && (
//                     <motion.div
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       className="absolute top-0 left-full ml-4 bg-white/10 backdrop-blur-md shadow-xl rounded-lg p-4 z-10 w-72 border border-white/30"
//                     >
//                       <div className="space-y-3">
//                         {menu.submenus.map((submenu, idx) => (
//                           <motion.div 
//                             key={idx} 
//                             className="flex items-center p-2 text-white hover:bg-white/20 rounded-md"
//                             whileHover={{ x: 5 }}
//                           >
//                             <span className="text-lg mr-3">{submenu.icon}</span>
//                             <span>{submenu.name}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//           </div>
          
//           <div className="md:w-1/3 flex justify-center items-center p-6">
//             <motion.div
//               whileHover={{ rotate: 5 }}
//               className="bg-white/10 backdrop-blur-sm rounded-full p-2 h-48 w-48 flex items-center justify-center border border-white/30"
//             >
//               <img  src="/da-log.png" alt="Company Logo" className="rounded-full" />
//             </motion.div>
//           </div>
          
//           <div className="md:w-1/3 p-6 flex flex-col space-y-4">
//             {Object.entries(menuData)
//               .filter(([key]) => key === 'outsourcing' || key === 'design')
//               .map(([key, menu]) => (
//                 <motion.div
//                   key={key}
//                   className="border border-white/30 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 cursor-pointer relative text-white"
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   onMouseEnter={() => handleMouseEnter(key)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="flex items-center">
//                     <span className="text-2xl mr-3">{menu.icon}</span>
//                     <h3 className="font-medium">{menu.title}</h3>
//                   </div>
                  
//                   {activeMenu === key && (
//                     <motion.div
//                       initial={{ opacity: 0, x: 10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 10 }}
//                       className="absolute top-0 right-full mr-4 bg-white/10 backdrop-blur-md shadow-xl rounded-lg p-4 z-10 w-72 border border-white/30"
//                     >
//                       <div className="space-y-3">
//                         {menu.submenus.map((submenu, idx) => (
//                           <motion.div 
//                             key={idx} 
//                             className="flex items-center p-2 text-white hover:bg-white/20 rounded-md"
//                             whileHover={{ x: -5 }}
//                           >
//                             <span className="text-lg mr-3">{submenu.icon}</span>
//                             <span>{submenu.name}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//           </div>
//         </div>
        
//         <div className="text-center mt-48 py-4 backdrop-blur-sm bg-white/5">
//           <h2 className="text-xl font-bold">
//             <span className="text-white">MARKETIST</span>
//             <span className="text-blue-300"> PORTFOLIO</span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioHero;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const categories = [
    {
      id: 'web-app-dev',
      title: 'Web & App Development',
      icon: '🌐',
      color: 'blue',
      subItems: [
        { title: 'Dynamic Website Design', icon: '🎨' },
        { title: 'e-Commerce Store', icon: '🛒' },
        { title: 'Landing Page | 1 Page', icon: '📄' },
        { title: 'Cloud based POS, CRM & ERP Solution', icon: '☁️' },
        { title: 'Cyber Security', icon: '🔒' },
        { title: 'App Development', icon: '📱' },
        { title: 'Custom Digital Software Solutions', icon: '💻' }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: '📈',
      color: 'green',
      subItems: [
        { title: 'Google Ads', icon: '🔍' },
        { title: 'Meta Ads', icon: '👥' },
        { title: 'SEO', icon: '🔝' },
        { title: 'Social Media Management', icon: '📱' }
      ]
    },
    {
      id: 'digital-marketing-outsourcing',
      title: 'Digital Marketing Outsourcing',
      icon: '🤝',
      color: 'purple',
      subItems: [
        { title: 'Content Creation', icon: '✍️' },
        { title: 'Copywriting Services', icon: '📝' },
        { title: 'Social Media Management Services', icon: '📲' },
        { title: 'Paid Ads', icon: '💰' },
        { title: 'SEO Services', icon: '📊' }
      ]
    },
    {
      id: 'design-development',
      title: 'Design & Development',
      icon: '🎨',
      color: 'orange',
      subItems: [
        { title: 'Logo Design', icon: '⭐' },
        { title: 'Ads', icon: '📢' },
        { title: 'Graphic Works', icon: '🖌️' },
        { title: 'Reels', icon: '🎬' },
        { title: 'Video Animation Work', icon: '🎥' }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const getCirclePositions = (itemCount) => {
    const positions = [];
    const radius = 180;
    const angleStep = (2 * Math.PI) / itemCount;

    for (let i = 0; i < itemCount; i++) {
      const angle = i * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      positions.push({ x, y });
    }

    return positions;
  };

  const getCircleColor = () => {
    if (!selectedCategory) return 'bg-blue-50';
    
    switch (selectedCategory.color) {
      case 'blue': return 'bg-blue-50';
      case 'green': return 'bg-green-50';
      case 'purple': return 'bg-purple-50';
      case 'orange': return 'bg-orange-50';
      default: return 'bg-blue-50';
    }
  };

  const getShadowColor = () => {
    if (!selectedCategory) return 'shadow-blue-200';
    
    switch (selectedCategory.color) {
      case 'blue': return 'shadow-blue-200';
      case 'green': return 'shadow-green-200';
      case 'purple': return 'shadow-purple-200';
      case 'orange': return 'shadow-orange-200';
      default: return 'shadow-blue-200';
    }
  };

  const renderMainCategories = () => {
    const positions = getCirclePositions(categories.length);
    
    return categories.map((category, index) => {
      const { x, y } = positions[index];
      
      return (
        <motion.div
          key={category.id}
          className="absolute flex flex-col items-center cursor-pointer"
          style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setSelectedCategory(category)}
        >
          <div className="p-4 rounded-full shadow-md flex items-center justify-center text-2xl">
            {category.icon}
          </div>
          <motion.div 
            className="mt-2 px-3 py-1 rounded-full shadow-sm text-sm whitespace-nowrap"
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {category.title}
          </motion.div>
        </motion.div>
      );
    });
  };

  const renderSubItems = () => {
    if (!selectedCategory) return null;
    
    const positions = getCirclePositions(selectedCategory.subItems.length);
    
    return (
      <motion.div 
        className="absolute w-full h-full"
        animate={{ rotate: hoveredItem ? 0 : 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {selectedCategory.subItems.map((item, index) => {
          const { x, y } = positions[index];
          const itemId = `${selectedCategory.id}-item-${index}`;
          
          return (
            <motion.div
              key={itemId}
              className="absolute"
              style={{ 
                left: `calc(50% + ${x}px)`, 
                top: `calc(50% + ${y}px)`,
                transformOrigin: "center center",
              }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setHoveredItem(itemId)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="p-3 rounded-full shadow-md flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <motion.div 
                className="mt-2 px-3 py-1 rounded-full shadow-sm text-sm whitespace-nowrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: hoveredItem === itemId ? 1 : 0, x: hoveredItem === itemId ? 0 : -20 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center text-white p-8">
      <div className="relative w-full max-w-4xl h-96">
        <motion.div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-64 h-64 rounded-full ${getCircleColor()} flex items-center justify-center
            shadow-xl ${getShadowColor()}`}
          layout
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="text-center">
            {selectedCategory ? (
              <>
                <div className="text-4xl mb-2">{selectedCategory.icon}</div>
                <h2 className="text-xl font-bold text-white">{selectedCategory.title}</h2>
              </>
            ) : (
              <>
                <div className="w-40 h-40 overflow-hidden">
                  <img src="/da-log.png" alt="Company Logo" className="rounded-full w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-bold mt-2">MARKETIST PORTFOLIO</h2>
              </>
            )}
          </div>
        </motion.div>

        {selectedCategory && (
          <motion.button
            className="absolute top-0 left-0 text-white p-2 rounded-full shadow-xl shadow-white z-10"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedCategory(null)}
          >
            ← Back
          </motion.button>
        )}

        {selectedCategory ? renderSubItems() : renderMainCategories()}
      </div>
    </div>
  );
};

export default PortfolioHero;