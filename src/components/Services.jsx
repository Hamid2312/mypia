import React from 'react';

// Import images for the cards
import serviceImage1 from '../assets/service1.jpg';
import serviceImage2 from '../assets/service2.jpg';
import serviceImage3 from '../assets/service3.jpg';
import serviceImage4 from '../assets/service4.jpg';

const Services = () => {
  // Data for the services (heading, description, image)
  const services = [
    {
      id: 1,
      image: serviceImage1,
      heading: 'Pre-book Meal',
      description: 'Indulge in anticipation with our Pre-booked Meals – a culinary journey designed to elevate your dining experience, ensuring a delightful feast awaits you at your destination.',
    },
    {
      id: 2,
      image: serviceImage2,
      heading: 'Seat Selection',
      description: 'Tailor your travel experience with our Seat Selection feature, where comfort meets choice. Choose your preferred seat and embark on a journey personalized just for you.',
    },
    {
      id: 3,
      image: serviceImage3,
      heading: 'Pre-book Baggage',
      description: 'Simplify your travel with ease and foresight by opting for our Pre-book Baggage service. Secure your peace of mind by reserving your luggage space in advance, ensuring a seamless journey from check-in to arrival.',
    },
    {
      id: 4,
      image: serviceImage4,
      heading: 'Special Assistance',
      description: 'Elevate your journey with our Special Assistance services, including personalized wheelchair support. Ensuring a smooth and accessible travel experience, we prioritize your comfort and convenience every step of the way.',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-[#F9F5EC]">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left text-[#006937] mb-8">
        OUR SERVICES
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
          >
            {/* Card Image */}
            <img
              src={service.image}
              alt={service.heading}
              className="w-full h-56 sm:h-64 lg:h-70 object-cover transition-all duration-300"
            />

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#006937] mb-2 transition-colors duration-300">
                {service.heading}
              </h2>
              <p className="text-sm sm:text-base text-black-600 transition-colors duration-300 hover:text-[#AA9113]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
