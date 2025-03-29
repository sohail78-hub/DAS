import React from 'react';
import { btnClas } from '../../constants/Colors';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r  py-26 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white max-w-2xl mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Empowering Your Digital Journey
          </h1>
          <p className="text-xl mb-8">
            Expert Digital Marketing and Cutting-Edge Web & App Development Solutions.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
            <button className={`${btnClas}`}>
              Get a Quote
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/5">
          <img
            src="digi_agency.png"
            alt="Hero Illustration"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>


    </section>
  );
};

export default HeroSection;