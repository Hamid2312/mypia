import React from 'react';
import mainBanner from '../assets/mainBanner.jpg';

const Banner = () => {
  return (
    <div className="w-full flex justify-center bg-[#F9F5EC]">
      <img
        className="w-full sm:w-[830px] md:w-[1000px] lg:w-[1200px] h-auto"
        src={mainBanner}
        alt="Main Banner"
      />
    </div>
  );
};

export default Banner;
