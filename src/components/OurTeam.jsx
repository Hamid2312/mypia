import React from 'react';
import teamimage from '../assets/ourteam.jpg';
import amirhayat from '../assets/AmirHayat.jpg'
import firstrow from '../assets/firstrow.jpg'
import secondrow from '../assets/secondrow.jpg'
import thirdrow from '../assets/thirdrow.jpg'
import Footer from './Footer';

const OurTeam = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-28">
        <p className='mb-4 text-sm text-gray-600'>Home / About Us / Our Team</p>
        <img
          src={teamimage}
          alt="Our Team"
          className="w-full h-auto m-auto rounded-lg shadow-md" // Ensures full width while maintaining aspect ratio
        />
      </div>
      <h1 className='text-[#006937] text-2xl sm:text-3xl font-bold mt-8 ml-2'>Our Team</h1>
      
      {/* Team Member 1 */}
      <div className='bg-slate-100 w-full sm:w-80 ml-3 h-auto mb-4 mt-4 p-4 rounded-lg shadow-sm'>
        <img src={amirhayat} alt="AVM Muhammad Amir Hayat"
          className='w-72 sm:w-72 h-72 mx-auto rounded-full mb-4' />
        <h1 className='text-[#006937] text-xl sm:text-2xl font-bold text-center'>AVM Muhammad Amir Hayat</h1>
        <p className='text-center text-slate-500 text-sm sm:text-base'>Chief Executive Officer</p>
      </div>
      
      {/* Images of the Team */}
      <div className='space-y-4'>
        <div>
          <img src={firstrow} alt="First Row" className='w-full rounded-lg shadow-md' />
        </div>
        <div>
          <img src={secondrow} alt="Second Row" className='w-full rounded-lg shadow-md' />
        </div>
        <div>
          <img src={thirdrow} alt="Third Row" className='w-full rounded-lg shadow-md' />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;
