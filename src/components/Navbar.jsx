import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="bg-white text-[#006937] fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-none">
          <Link to="/">
            <img
              src={require('../assets/logo1.png')}
              alt="Logo"
              className="object-contain"
              style={{ marginLeft: 0, padding: 0, width: 190, height: 78 }}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 ml-8 items-center font-semibold text-m">
            <li>
              <Link to="offer" className="relative hover:after:content-[''] hover:after:block hover:after:h-2 hover:after:w-full hover:after:bg-[#AA9139] hover:after:absolute hover:after:bottom-[-30px] hover:after:left-0 transition-all duration-300">
                Where we Fly
              </Link>
            </li>
            <li>
              <Link to="facility" className="relative hover:after:content-[''] hover:after:block hover:after:h-2 hover:after:w-full hover:after:bg-[#AA9139] hover:after:absolute hover:after:bottom-[-30px] hover:after:left-0 transition-all duration-300">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/service" className="relative hover:after:content-[''] hover:after:block hover:after:h-2 hover:after:w-full hover:after:bg-[#AA9139] hover:after:absolute hover:after:bottom-[-30px] hover:after:left-0 transition-all duration-300">
                Loyalty Programs
              </Link>
            </li>
            <li>
              <Link to="careers" className="relative hover:after:content-[''] hover:after:block hover:after:h-2 hover:after:w-full hover:after:bg-[#AA9139] hover:after:absolute hover:after:bottom-[-30px] hover:after:left-0 transition-all duration-300">
                Deals
              </Link>
            </li>
            <li>
              <Link to="our-team" className="relative hover:after:content-[''] hover:after:block hover:after:h-2 hover:after:w-full hover:after:bg-[#AA9139] hover:after:absolute hover:after:bottom-[-30px] hover:after:left-0 transition-all duration-300">
                Corporate Website
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Corner Button and Search for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div>
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 text-[#006937]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l4 4"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <Link to="banner">
              <button className="bg-[#006937] text-white px-5 py-1 text-sm font-semibold border rounded-none hover:transition">
                Award +plus login
              </button>
            </Link>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar} className="text-3xl">
            <svg
              className="w-6 h-6 text-[#006937]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 bg-[#006937] text-white w-64 h-full transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeSidebar} className="text-3xl text-white">
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link to="offer" className="text-xl" onClick={closeSidebar}>
              Where we Fly
            </Link>
          </li>
          <li>
            <Link to="facility" className="text-xl" onClick={closeSidebar}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/service" className="text-xl" onClick={closeSidebar}>
              Loyalty Programs
            </Link>
          </li>
          <li>
            <Link to="careers" className="text-xl" onClick={closeSidebar}>
              Deals
            </Link>
          </li>
          <li>
            <Link to="our-team" className="text-xl" onClick={closeSidebar}>
              Corporate Website
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
