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
    {
      id: 7,
      icon: '🚀',
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business.',
      cta: 'Learn More',
    },
    {
      id: 8,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions to automate and optimize processes.',
      cta: 'Learn More',
    },
  ];

  const loopedServices = [...services, ...services];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered card index
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null); // For resetting after mouse leave

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % loopedServices.length);
    }, 3000);
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const pauseSlider = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const resumeSlider = () => {
    setIsPaused(false);
  };

  // Function to calculate the scale of each card based on its position relative to the center or hovered card
  const getCardSize = (index) => {
    if (hoveredIndex !== null) {
      // If a card is hovered, make it larger and others smaller
      return index === hoveredIndex ? 1 : 0.8;
    } else {
      // If no card is hovered, make the center card larger and others smaller
      const centerOffset = 2; // The center card is the 3rd card (index 2 when 5 cards are visible)
      const distance = Math.abs(index - currentIndex - centerOffset);
      return 1 - Math.min(distance * 0.15, 0.6); // Adjust scaling factor as needed
    }
  };

  // Handle mouse enter (hover) on a card
  const handleMouseEnter = (index) => {
    pauseSlider(); // Pause the slider
    setHoveredIndex(index); // Set the hovered card index
    clearTimeout(timeoutRef.current); // Clear any existing timeout
  };

  // Handle mouse leave from a card
  const handleMouseLeave = () => {
    // Set a timeout to reset the hovered index after 3 seconds
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null); // Reset hovered card index
      resumeSlider(); // Resume the slider
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r  relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Expertise
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 5)}%)`,
            }}
          >
            {loopedServices.map((service, index) => {
              const scale = getCardSize(index);
              return (
                <div
                  key={index}
                  className="w-full sm:w-1/1 md:w-1/3 lg:w-1/5 flex-shrink-0 px-2"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease' }}
                >
                  <div className="group bg-gradient-to-r from-white to-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="text-4xl text-center text-blue-600 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <a
                        href="#"
                        className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
                      >
                        {service.cta}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + loopedServices.length) % loopedServices.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white ml-5"
        >
          &#10094;
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % loopedServices.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white mr-5"
        >
          &#10095;
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex % services.length ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;