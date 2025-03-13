import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Content */}
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
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src="https://via.placeholder.com/500x400" 
            alt="Hero Illustration"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Additional CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition duration-300">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default HeroSection;