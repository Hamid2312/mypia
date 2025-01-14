import React from 'react';
import banner from '../assets/banner.jpg'; // Import your banner image

const Member = () => {
  return (
    <div
      className="relative w-full h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Transparent Green Overlay */}
      <div className="absolute inset-0 bg-[#006937] opacity-50"></div>

      {/* Dummy Data */}
      <div className="absolute inset-0 flex justify-center items-center text-white px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            A+ Executive Corporate Program
          </h1>
          <p className="text-sm sm:text-md md:text-lg mt-4 w-full sm:w-[70%] md:w-[60%] mx-auto text-center">
            Our business services offer flexibility and exclusive savings for your company. <br />
            We provide tailored solutions based on your travel spend to maximize your corporate travel budget. 
            You can collectively earn rewards from all employee travel and redeem them for dynamic flights. <br />
            Additionally, you can use your rewards for flight upgrades and other benefits like excess baggage and pre-allocation of seats. <br />
            Our goal is to enhance your corporate travel experience and ensure the best value for your budget.
          </p>
          <div className="mt-8">
            <button className="bg-white text-black font-bold rounded-md py-2 px-6 hover:text-[#AA9113] transition duration-300">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
