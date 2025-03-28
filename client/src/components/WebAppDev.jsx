import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { btnClas } from '../../constants/Colors';
import LogoSliders from './LogoSliders';
import { serviceSliders } from './serviceSliders';

// const sliderData = [
//   {
//     id: 1,
//     src: 'https://www.apptunix.com/blog/wp-content/uploads/sites/3/2019/10/mobile-apps-in-business-copy-5.jpg',
//     title: 'Mobile Apps'
//   },
//   {
//     id: 2,
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITiUDIxOHORHKvxMsniK1j8Bwfpmd0sLROg&s',
//     title: 'Ecommerce'
//   },
//   {
//     id: 3,
//     src: 'https://blog.dreamfactory.com/hubfs/Imported_Blog_Media/What-is-an-API-Integration.png',
//     title: 'Payment Integration'
//   },
//   {
//     id: 4,
//     src: 'https://cdn-ikpplpn.nitrocdn.com/rKfvbqixbjRUiVJszbkgQBRIwKbXWEuF/assets/images/optimized/rev-d592128/www.schgroup.com/wp-content/uploads/2024/04/ERP-Webpage-Graphic-1.png',
//     title: 'Erp Solution'
//   }
//   ,
//   {
//     id: 5,
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtrFZhWsmo1Dm46amYTr2eLwp_SsxxLVVxw&s',
//     title: 'Customized Bysiness Solutions'
//   }
//   ,
//   {
//     id: 6,
//     src: 'https://blog.dreamfactory.com/hubfs/Imported_Blog_Media/What-is-an-API-Integration.png',
//     title: 'Api Integration'
//   }
//   ,
//   {
//     id: 7,
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgSWqFdONwoBO8jSssXk68mt5xXo0gbiUwA&s',
//     title: 'POS'
//   }
//   ,
//   {
//     id: 8,
//     src: 'https://images-platform.99static.com//Ion7fKG2TbkDPFtKGAkZzhduHbQ=/0x0:1288x1288/fit-in/500x500/99designs-contests-attachments/75/75098/attachment_75098795',
//     title: 'Logistic '
//   }
//   ,
//   {
//     id: 9,
//     src: 'https://vestazone.com/assets/images/blogs/Why-Shop-at-Vesta-Zone/userfriendlywebsite.webp',
//     title: 'E Store'
//   }
//   ,
//   {
//     id: 10,
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZCNzLGmsLK_BEn8tWUT21UQhgEKf8W0IUg&s',
//     title: 'Logo 10'
//   }
// ]


const WebAppDev = () => {
  // Get slider data from centralized source
  const sliderData = serviceSliders.webAppDev.items;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="text-white py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Web & App Development
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-orange-500">
              Website That Drives Results — Let's Build!
            </h2>
            <p className="text-white text-lg">
              Transform your online presence with Marketist’s Web Design & Development! We craft stunning, SEO-friendly websites that captivate visitors and drive sales.
            </p>
            <p className="text-white text-lg">
              From dynamic e-commerce platforms to sleek informational sites, our tailored solutions ensure your brand stands out and converts leads into loyal customers.
            </p>
            <p className="text-white font-semibold text-lg">
              Let’s build your digital success story today!
            </p>
            <div className=" space-x-4" >
              <Link to='/Get_A_Quote' className={`${btnClas}`}>
                Get a Quote
              </Link>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-start space-x-4">
              <div className="text-orange-500 text-3xl">⚙️</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Business Website Design</h3>
                <p className="text-white">
                  Perfect for small and medium businesses to showcase services, online presence & portfolio
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-orange-500 text-3xl">🛒</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Ecommerce Store</h3>
                <p className="text-white">
                  Sell your products online with our Ecommerce Web Solutions. Full Featured WordPress, Shopify or Custom Developed Store
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-orange-500 text-3xl">📦</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Landing Page | 1 Page Web</h3>
                <p className="text-white">
                  Perfect for Sales Funnel for Google Ads & Other Paid Ad Campaign
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-orange-500 text-3xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold text-white">Custom Solutions</h3>
                <p className="text-white">
                  Backend can be in php, laravel, React Native. Front end will be in html, css & javascript
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Updated slider container */}
      <div className="w-full overflow-hidden px-0 mx-0">
        <LogoSliders sliderData={sliderData} />
      </div>
    </>
  );
};

export default WebAppDev;