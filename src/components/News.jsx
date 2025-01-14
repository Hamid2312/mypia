import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Importing video icon from react-icons

import News3 from '../assets/news3.jpg';
import News2 from '../assets/news2.jpg';
import News1 from '../assets/news1.jpg';

const News = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl sm:text-4xl md:text-[42px] text-[#006937] mb-8 text-center">OUR NEWS</h1>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="relative border border-transparent rounded-lg overflow-hidden shadow-md">
          <img src={News1} alt="News 1" className="w-full h-60 sm:h-72 object-cover" />
          <div className="p-4">
            <h2 className="text-lg sm:text-2xl text-[#006937] font-semibold mb-2">Airline Award 2023</h2>
            <p className="text-black text-xs sm:text-sm mb-4">
              PIA has bagged different airlines and won the reward of best airline in order to have best service in their flights as well as they provided good environment to their customers and users that's why PIA won best Airline reward in 2023.
            </p>
            <button className="text-[#006937] text-sm sm:text-base border-[#006937] mt-2 border-2 py-2 px-4 rounded-sm hover:text-[#AA9113]">Learn More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative border border-transparent rounded-lg overflow-hidden shadow-md">
          <img src={News2} alt="News 2" className="w-full h-60 sm:h-72 object-cover" />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full opacity-80">
            <FaPlay size={40} color="green" />
          </div>
          <div className="p-4">
            <h2 className="text-lg sm:text-2xl text-[#006937] font-semibold mb-2">EASA Restores Certification</h2>
            <p className="text-black text-xs sm:text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nemo voluptatum iusto maiores doloribus aut reiciendis, dolorum consequuntur molestias possimus in officiis atque tempore, error consequatur illo rem unde recusandae.
              This is a short description of the news article. It provides a preview of the content.
            </p>
            <button className="text-[#006937] text-sm sm:text-base border-[#006937] justify-end border-2 py-2 px-4 rounded-sm hover:text-[#AA9113]">Learn More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative border border-transparent rounded-lg overflow-hidden shadow-md">
          <img src={News3} alt="News 3" className="w-full h-60 sm:h-72 object-cover" />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full opacity-80">
            <FaPlay size={40} color="green" />
          </div>
          <div className="p-4">
            <h2 className="text-lg sm:text-2xl text-[#006937] font-semibold mb-2">Corporate Executive Suit</h2>
            <p className="text-black text-xs sm:text-sm mb-4">
              This is a short description of the news article. It provides a preview of the content.
            </p>
            <button className="text-[#006937] text-sm sm:text-base border-[#006937] mb-4 border-2 py-2 px-4 rounded-sm hover:text-[#AA9113]">Learn More</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default News;
