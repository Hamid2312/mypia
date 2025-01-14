import React from 'react';
import Footer from './Footer';

const PlanFeedback = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-24 ml-0 sm:ml-12">
        <p className="text-sm text-gray-600">Home / About Us / Accessibility Plan</p>
        
        <h1 className="mt-8 text-2xl sm:text-3xl font-bold text-[#006937]">
          Accessibility Plan & Feedback
        </h1>
        
        <h1 className="mt-12 text-xl sm:text-2xl font-bold text-[#006937]">
          To view the accessibility plan, please 
          <span className="text-blue-500 italic text-sm sm:text-base underline cursor-pointer"> click here</span>
        </h1>

        <h1 className="mt-12 text-xl sm:text-2xl font-bold text-[#006937]">
          For feedback, please 
          <span className="text-blue-500 italic text-sm sm:text-base underline cursor-pointer"> click here</span>
        </h1>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlanFeedback;
