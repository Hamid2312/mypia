import React, { useState } from 'react';
import Careerphoto from '../assets/career.jpg';
import Footer from './Footer';

const Careers = () => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="mt-28">
        <p className="mb-4 ml-5 sm:ml-10 md:ml-20">Home / Careers</p>
        <img
          src={Careerphoto}
          alt="Career Banner"
          className="max-w-full w-full mx-auto"
        />
      </div>
      <div className="ml-5 sm:ml-10 md:ml-20 mt-8">
        <h1 className="text-[#006937] text-xl sm:text-2xl font-bold mb-6">Current Positions</h1>
        <p>Select a category</p>

        {/* Dropdown Input */}
        <div className="relative w-full sm:w-64 mt-4">
          <div
            className="flex items-center justify-between border border-gray-400 px-4 py-2 rounded-md cursor-pointer"
            onClick={toggleDropdown}
          >
            <span>Select</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full border border-gray-400 bg-white rounded-md mt-1 shadow-lg">
              <div className="py-2 px-4 hover:bg-gray-100">Select</div>
              <div className="py-2 px-4 hover:bg-gray-100">SEO</div>
            </div>
          )}
        </div>
      </div>

      <div className="ml-5 sm:ml-10 md:ml-20 mt-12 mb-3">
        <p className="text-[12px] text-[#006937]">1 results</p>
      </div>

      {/* Job Listing */}
      <div className="group w-full sm:w-64 h-64 bg-slate-200 mx-auto sm:ml-5 md:ml-20 mb-6 hover:bg-[#AA9113]">
        <div>
          <h1 className="text-[#AA9113] text-[20px] sm:text-[22px] pt-10 ml-6 group-hover:text-white">
            Chief Executive Officer
          </h1>
          <h1 className="text-[#AA9113] text-[20px] sm:text-[22px] ml-6 group-hover:text-white">
            - PIACL
          </h1>
        </div>
        <h4 className="text-[#AA9113] mt-20 text-[12px] ml-6 group-hover:text-white">CEO</h4>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;
