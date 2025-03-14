import React from 'react';

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

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-r from-white to-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl text-center text-blue-600 mb-6 transition-transform duration-300 group-hover:rotate-12">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-6">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;