import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    require('../assets/image1.jpg'), // Replace with your image paths
    require('../assets/image2.jpg'),
  ];
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 4000ms (4 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  const handlePrev = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat transition-all duration-500 mt-[78px] h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-5 sm:left-10 lg:left-20 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-3xl font-bold px-4 py-2 rounded-full hover:opacity-75 transition"
        aria-label="Previous Image"
      >
        &lt;
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-5 sm:right-10 lg:right-20 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-3xl font-bold px-4 py-2 rounded-full hover:opacity-75 transition"
        aria-label="Next Image"
      >
        &gt;
      </button>

   
    </div>
  );
};

export default HeroSection;
