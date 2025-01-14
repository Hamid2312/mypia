import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';
import offer4 from '../assets/offer4.jpg';
import offer5 from '../assets/offer5.jpg';

const Facility = () => {
  return (
    <div className="py-16 px-5 sm:px-10 md:px-20">
      {/* Heading */}
      <h1 className="text-[#006937] text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        BEST OFFERS
      </h1>

      {/* Grid Layout */}
      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center h-full">
        {/* First Column (Up and Down Pics) */}
        <div className="flex flex-col gap-4 sm:w-1/3 md:w-1/4">
          <ImageCard src={offer1} alt="Facility 1" />
          <ImageCard src={offer2} alt="Facility 2" />
        </div>

        {/* Center Column (Single Pic) */}
        <div className="flex sm:w-full md:w-1/3 justify-center">
          <ImageCard src={offer3} alt="Facility 3" />
        </div>

        {/* Third Column (Up and Down Pics) */}
        <div className="flex flex-col gap-4 sm:w-1/3 md:w-1/4">
          <ImageCard src={offer4} alt="Facility 4" />
          <ImageCard src={offer5} alt="Facility 5" />
        </div>
      </div>
    </div>
  );
};

// Reusable ImageCard Component
const ImageCard = ({ src, alt }) => {
  return (
    <div className="relative group w-full h-[250px] sm:h-[300px] md:h-[350px]">
      {/* Price Tag */}
      <div className="absolute top-10 left-0 bg-[#AA9113] text-white text-lg sm:text-xl px-4 py-2">
        <div>Islamabad</div>
        <div>Toronto</div>
        <div>PKR417,480.00</div>
      </div>

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-md"
      />

      {/* Buttons */}
      <div className="absolute inset-0 flex flex-col justify-end items-center gap-2 bg-black bg-opacity-50 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-md p-4">
        <button className="bg-[#006937] text-white px-6 sm:px-8 md:px-10 py-2 rounded hover:bg-green-700">
          Book Now
        </button>
        <button className="text-white px-4 sm:px-6 py-2 border-b-2 border-transparent hover:border-[#AA9113] transition-all duration-300">
          More Details
        </button>
      </div>
    </div>
  );
};

export default Facility;
