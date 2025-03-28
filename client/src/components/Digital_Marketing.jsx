import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { btnClas } from '../../constants/Colors';
import LogoSliders from './LogoSliders';

const sliderData=[
  {
    id: 1,
    src: 'https://www.seobrand.com/wp-content/uploads/2024/03/What-are-SEO-Services.jpg',
    title: 'SEO Services'
  },
  {
    id: 2,
    src: 'https://www.one-resource.com/wp-content/uploads/Social-media-management-%E2%80%93-small-business-know-how.png',
    title: 'Social Media Management'
  },
  {
    id: 3,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7v_tplgnFEKcWyqwkwL0Qd8G2a1DNE9e5qQ&s',
    title: 'Meta Ads'
  },
  {
    id: 4,
    src: 'https://www.searchenginejournal.com/wp-content/uploads/2021/11/google-ads-insights-page-61967650b562e-sej.png',
    title: 'Google Ads'
  }
  ,
  {
    id: 5,
    src: 'https://media.licdn.com/dms/image/v2/D5612AQHnqP4GvpQnKQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723018550857?e=2147483647&v=beta&t=VFtkQOy-jaherYlOpLsNX0dOnaidxcIb8mShr1dZKrw',
    title: 'Business Promotion'
  }
  ,
  {
    id: 6,
    src: 'https://media.licdn.com/dms/image/v2/C5612AQG2V0uc_r0ciA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1617417923890?e=2147483647&v=beta&t=glHQ2YgBavB2cytxS66fqXQOUXXBoqfazvA_07QChcQ',
    title: 'Brand Building'
  }
    ,
    {
        id: 7,
        src: 'https://www.glueup.com/sites/default/files/image_1571.png',
        title: 'Digital Business Consultation'
    }
    ,
    {
        id: 8,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqnsk1Z5Z6qvlFXzwVc0UCaPfm-YiFIFWEA&s',
        title: 'Content Creation'
    }

]

const Digital_Marketing = () => {
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
     <section className="py-28 px-0 sm:px-0 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Digital Marketing
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-white">
            Boost Your Brand — Let’s Grow!
          </h2>
          <p className="text-white text-lg">
            Elevate your online presence with Marketist’s Digital Marketing solutions! We create data-driven strategies to increase your visibility and engagement.
          </p>
          <p className="text-white text-lg">
            From SEO to social media campaigns, our tailored approaches ensure your brand reaches the right audience and converts clicks into customers.
          </p>
          <p className="text-white font-semibold text-lg">
            Let’s amplify your digital growth today!
          </p>
           <div className=" space-x-4" >
                  <Link to='/Get_A_Quote' className={`${btnClas}`}>
                      Get a Quote
                    </Link>
                  </div>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🔍</div>
            <div>
              <h3 className="text-xl font-semibold text-white">SEO Services</h3>
              <p className="text-white">
                Rank higher on search engines with our expert SEO strategies, driving organic traffic to your site
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">📱</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Social Media Marketing</h3>
              <p className="text-white">
                Engage your audience on platforms like Instagram, Facebook, and LinkedIn with targeted campaigns
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">📈</div>
            <div>
              <h3 className="text-xl font-semibold text-white">PPC Campaigns</h3>
              <p className="text-white">
                Maximize ROI with our Pay-Per-Click advertising on Google Ads and other platforms
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">✍️</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Content Marketing</h3>
              <p className="text-white">
                Build trust and authority with high-quality blogs, videos, and infographics tailored to your audience
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

export default Digital_Marketing;