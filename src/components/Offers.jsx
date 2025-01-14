import React, { useState, useEffect } from 'react';

// Import images from the assets folder
import charterFlightImage from '../assets/flight1.jpg';
import onlineDiscountImage from '../assets/discount2.jpg';
import checkInImage from '../assets/media3.jpg';
import callAndFlyImage from '../assets/fly4.jpg';
import nusukImage from '../assets/nusk5.jpg';

const Offers = () => {
  const [activeHeading, setActiveHeading] = useState(1); // Default to the first heading

  // Data for headings and images
  const headings = [
    { id: 1, title: 'Charter Flight', image: charterFlightImage },
    { id: 2, title: 'Online Discount', image: onlineDiscountImage },
    { id: 3, title: 'Web & Mobile Check-In', image: checkInImage },
    { id: 4, title: 'Call and Fly', image: callAndFlyImage },
    { id: 5, title: 'Nusuk', image: nusukImage },
  ];

  // useEffect hook to automatically change the heading every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeading((prev) => (prev === headings.length ? 1 : prev + 1));
    }, 4000); // 4 seconds delay

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Headings */}
      <div className="w-full flex flex-wrap justify-center gap-6 bg-gray-100 py-4 pt-20 sm:pt-24">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => setActiveHeading(heading.id)}
            className={`px-6 py-2 font-semibold text-lg sm:text-xl ${
              activeHeading === heading.id
                ? 'text-[#006937] font-bold'
                : 'text-[#90c1a8]'
            } transition-all duration-300`}
          >
            {heading.title}
          </button>
        ))}
      </div>

      {/* Full-Width Image */}
      <div className="w-full pb-10">
        {headings.map(
          (heading) =>
            activeHeading === heading.id && (
              <img
                key={heading.id}
                src={heading.image}
                alt={heading.title}
                className="w-full object-cover transition-all duration-300 rounded-lg shadow-lg"
              />
            )
        )}
      </div>
    </div>
  );
};

export default Offers;
