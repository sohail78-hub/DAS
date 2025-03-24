import { useState, useEffect } from 'react';
import './Servicespage.css';

const ServicesPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [servicesData] = useState({
    mainServices: [
      {
        title: "Digital Marketing",
        image: "/images/digital-marketing.svg",
        description: "Amplify your online presence with data-driven marketing strategies"
      },
      {
        title: "Web Development",
        image: "/images/web-development.svg",
        description: "Build powerful web experiences that convert visitors to customers"
      },
      {
        title: "App Development",
        image: "/images/app-development.svg",
        description: "Transform your business with custom mobile solutions"
      },
      {
        title: "Graphic Designing",
        image: "/images/graphic-design.svg",
        description: "Create memorable brand experiences with stunning visuals"
      }
    ],
    subServices: {
      "Digital Marketing": [
        "SEO Services",
        "Social Media Management",
        "Meta Ads",
        "Google Ads",
        "Business Promotion",
        "Brand Building",
        "Digital Business Consultation",
        "Business Prototype",
        "Content Creation",
        "Copyright Services"
      ],
      "Web Development": [
        "Complete e-Commerce Solution",
        "Dynamic Custom Web",
        "e-Store",
        "API Integration",
        "Logistic & Payment Integration"
      ],
      "App Development": [
        "ERP Solution",
        "Customize Business Modules",
        "Mobile Applications",
        "POS",
        "Integration with Govt."
      ],
      "Graphic Designing": [
        "Logo Design",
        "Graphic Works",
        "Ads Design",
        "Reel / Video Content",
        "Animation Work"
      ]
    }
  });

  useEffect(() => {
    // Handle hash-based scrolling
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Auto-rotate banner
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % servicesData.mainServices.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Helper function remains the same
  const getServiceDescription = (category, service) => {
    const descriptions = {
      "Digital Marketing": {
        "SEO Services": "Boost your search rankings with our white-hat SEO techniques",
        "Social Media Management": "Engage your audience with curated social strategies",
        // Add more descriptions
      },
      // Add descriptions for other categories
    };
    return descriptions[category]?.[service] || "Professional services tailored to your business needs";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        {servicesData.mainServices.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              activeSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-full flex items-center">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-white md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                  <p className="text-xl mb-6">{service.description}</p>
                  <button className="bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-opacity-90 transition">
                    Explore {service.title}
                  </button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-64 w-auto object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {servicesData.mainServices.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Service Sections with IDs */}
      {servicesData.mainServices.map((mainService) => {
        const sectionId = mainService.title.toLowerCase().replace(' ', '-');
        return (
          <section 
            key={sectionId}
            id={sectionId}
            className="container mx-auto px-4 py-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-indigo-600 pl-4">
              {mainService.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.subServices[mainService.title]?.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <img 
                        src={`/icons/${sectionId}-${index+1}.png`} 
                        alt="service icon"
                        className="w-8 h-8"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item}</h3>
                    <p className="text-gray-600">
                      {getServiceDescription(mainService.title, item)}
                    </p>
                  </div>
                  <button className="text-indigo-600 font-medium hover:underline flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
                      <path stroke="currentColor" d="M1 12h18m0 0l-6-6m6 6l-6 6"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ServicesPage;