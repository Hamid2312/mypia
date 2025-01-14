import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-16 sm:py-24 lg:py-32">
      <div>
        <div className="flex flex-col lg:flex-row justify-around gap-16 sm:px-4">
          {/* Footer Logo */}
          <div className="flex justify-center items-center mb-8 lg:mb-0">
            <img src={Logo} alt="Footer Logo" className="w-32 sm:w-40 lg:w-44" />
          </div>

          {/* Location Section */}
          <div className="flex flex-col items-start text-[#006937] space-y-3">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-2" />
              <p className="text-base sm:text-lg hover:text-[#AA9113] transition-colors duration-300">
                PIA Building, Jinnah International Airport,
                <br />
                Karachi, 75200, Pakistan.
              </p>
            </div>
          </div>

          {/* Contact Number Section */}
          <div className="flex flex-col items-start text-[#006937] space-y-3">
            <div className="flex items-center">
              <FaPhoneAlt className="text-3xl mr-2" />
              <p className="text-base sm:text-lg hover:text-[#AA9113] transition-colors duration-300">(+92-21)-111-786-786</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-start text-[#006937] space-y-3">
            <div className="flex items-center">
              <FaEnvelope className="text-2xl mr-2" />
              <p className="text-lg sm:text-xl hover:text-[#AA9113] transition-colors duration-300">Contact@Piac.aero</p>
            </div>
          </div>
        </div>

        {/* Horizontal Line with Icons */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="flex items-center justify-center">
            <div className="flex justify-between items-center w-full px-4">
              <hr className="border-t-1 border-slate-400 flex-1" />
              <div className="flex justify-center items-center space-x-6 bg-white px-6">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006937] text-2xl hover:text-blue-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006937] text-2xl hover:text-black transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006937] text-2xl hover:text-pink-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006937] text-2xl hover:text-blue-700 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006937] text-2xl hover:text-red-600 transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
              <hr className="border-t-1 border-slate-400 flex-1" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-[#006937] mt-10">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-12 lg:gap-16">
            {/* First Heading and Texts */}
            <div className="flex flex-col mb-8 lg:mb-0">
              <h2 className="text-md sm:text-lg font-bold mb-4">About Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">
                    <Link to="/our-team">Our Team</Link>
                  </p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">
                    <Link to="/vision-values">Vision & Values</Link>
                  </p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">
                    <Link to="/careers">Careers</Link>
                  </p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">
                    <Link to="/plan-feedback">Plan & Feedback</Link>
                  </p>
                </div>
                <div>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Press Release</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Tenders</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Bid Reports</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Agent Registration</p>
                </div>
              </div>
            </div>

            {/* Second Heading and Texts */}
            <div className="flex flex-col mb-8 lg:mb-0">
              <h2 className="text-md sm:text-lg font-bold mb-4">Facilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Air Passenger Rights</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Conditions of Carriage</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Booking Conditions</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Traveler's Information</p>
                </div>
                <div>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Overseas Pakistanis</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Track Your Cargo</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Book Charter</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Digital Check-In</p>
                </div>
              </div>
            </div>

            {/* Third Heading and Texts */}
            <div className="flex flex-col mr-auto mb-8 lg:mb-0">
              <h2 className="text-md sm:text-lg font-bold mb-4">Help & Contact</h2>
              <div className="flex flex-wrap justify-between gap-8">
                <div>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Help & Contact</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Special Assistance</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Special Assistance Form</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Frequently Asked Questions</p>
                </div>
                <div>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Site Map</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Privacy Policy</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Business with PIA</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Feedback</p>
                  <p className="mb-1 hover:text-[#AA9113] transition-colors duration-300">Customer Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
