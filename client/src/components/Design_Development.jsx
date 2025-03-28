import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { btnClas } from '../../constants/Colors';
import LogoSliders from './LogoSliders';
import { serviceSliders } from './serviceSliders';

// const sliderData=[
//   {
//     id: 1,
//     src: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/attachment_59337693.jpg?auto=format&q=60&fit=max&w=930',
//     title: 'Graphic Design'
//   },
//   {
//     id: 2,
//     src: 'https://www.one-resource.com/wp-content/uploads/Social-media-management-%E2%80%93-small-business-know-how.png',
//     title: 'Logo Design'
//   },
//   {
//     id: 3,
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfl84nMCPWCgt7iQ8CltVHqX2uH6wFutM_w&s',
//     title: '3d Product content'
//   },
//   {
//     id: 4,
//     src: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_78794486.jpeg?auto=format&q=60&fit=max&w=930',
//     title: 'Digital Ads Design'
//   }
//   ,
//   {
//     id: 5,
//     src: 'https://cdn.dribbble.com/userupload/4395530/file/original-b8f52895e979c6d95234206c6cfa860d.jpg?resize=400x0',
//     title: 'Reel Content'
//   }
//   ,
//   {
//     id: 6,
//     src: 'https://cdn.svgator.com/images/2024/02/website-animation-examples-and-effects.png',
//     title: 'Animation content'
//   }
//   ,
//   {
//     id: 7,
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNS5w0F-BZq-W3gvVbhi-IU5or5MfzfShDA&s',
//     title: 'Video Editing'
//   }
  

// ]


const Design_Development = () => {
  // Get slider data from centralized source
  const sliderData = serviceSliders.designDevelopment.items;

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
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Design & Development
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-white">
            Create Stunning Solutions — Let’s Innovate!
          </h2>
          <p className="text-white text-lg">
            Bring your ideas to life with Marketist’s Design & Development services! We combine creativity and technology to deliver visually stunning and highly functional solutions.
          </p>
          <p className="text-white text-lg">
            From UI/UX design to full-stack development, our team ensures your project is both beautiful and efficient, tailored to meet your business goals.
          </p>
          <p className="text-white font-semibold text-lg">
            Let’s craft your next big thing—start today!
          </p>
          <div className=" space-x-4" >
          <Link to='/Get_A_Quote' className={`${btnClas}`}>
              Get a Quote
            </Link>
          </div>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🎨</div>
            <div>
              <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
              <p className="text-white">
                Create intuitive and visually appealing interfaces that enhance user experience
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">💻</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Front-End Development</h3>
              <p className="text-white">
                Build responsive and interactive user interfaces using React, HTML, CSS, and JavaScript
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🛠️</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Back-End Development</h3>
              <p className="text-white">
                Develop robust server-side solutions with Node.js, Laravel, or Python
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-white text-3xl">🧪</div>
            <div>
              <h3 className="text-xl font-semibold text-white">Prototyping & Testing</h3>
              <p className="text-white">
                Validate your ideas with prototypes and ensure quality through rigorous testing
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

export default Design_Development;