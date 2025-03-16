import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: '📈',
      title: 'Digital Marketing',
      description: 'SEO, PPC, Social Media strategies to grow your business.',
      cta: 'Learn More',
    },
    {
      id: 2,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom Websites, CMS Solutions, and E-commerce platforms.',
      cta: 'Learn More',
    },
    {
      id: 3,
      icon: '📱',
      title: 'App Development',
      description: 'iOS, Android, and Cross-Platform Apps for your business.',
      cta: 'Learn More',
    },
    {
      id: 4,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creative and user-friendly designs for seamless experiences.',
      cta: 'Learn More',
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions.',
      cta: 'Learn More',
    },
    {
      id: 6,
      icon: '📊',
      title: 'Data Analytics',
      description: 'Data-driven insights to make informed decisions.',
      cta: 'Learn More',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-play slider
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
  };

  // Pause slider for 10 seconds
  const pauseSlider = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      setIsPaused(false);
      startAutoPlay();
    }, 10000); // Pause for 10 seconds
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
    pauseSlider();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    pauseSlider();
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Expertise
        </h2>

        <div className="relative overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`, // Move by 1 card
            }}
          >
            {/* Render the services in a circular manner */}
            {services.map((service, index) => (
              <div
                key={service.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-4"
              >
                <div className="group bg-gradient-to-r from-white to-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                  <div className="text-5xl text-center text-blue-600 mb-6 transition-transform duration-300 group-hover:rotate-12">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-center mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="text-center">
                    <a
                      href="#"
                      className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full shadow-lg hover:bg-opacity-75 transition-all duration-300 text-2xl"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full shadow-lg hover:bg-opacity-75 transition-all duration-300 text-2xl"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;