import React from 'react';
import { Link } from 'react-router-dom';

const ContactButton = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col rotate-90 items-center">
     <Link to="footer"><button className="bg-[#006937] text-white py-2 px-4 text-lg shadow-lg mb-2 transition-all">
        Contact Us
      </button></Link> 
      {/* You can add more buttons here if needed */}
      {/* Example of another button */}
      {/* <button className="bg-[#FF5733] text-white py-2 px-4 text-lg shadow-lg transition-all">Another Button</button> */}
    </div>
  );
};

export default ContactButton;
 