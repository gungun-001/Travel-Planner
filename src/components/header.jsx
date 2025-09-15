import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl font-extrabold tracking-tight ${
            scrolled ? "text-yellow-600" : "text-yellow-500"
          }`}
        >
          TripSync
        </Link>

        {/* Navbar Links */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          <a
            href="#home"
            className={`relative group font-semibold transition ${
              scrolled ? "text-gray-800 hover:text-yellow-600" : "text-white hover:text-yellow-500"
            }`}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className={`relative group font-semibold transition ${
              scrolled ? "text-gray-800 hover:text-yellow-600" : "text-white hover:text-yellow-500"
            }`}
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#services"
            className={`relative group font-semibold transition ${
              scrolled ? "text-gray-800 hover:text-yellow-600" : "text-white hover:text-yellow-500"
            }`}
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#testimonials"
            className={`relative group font-semibold transition ${
              scrolled ? "text-gray-800 hover:text-yellow-600" : "text-white hover:text-yellow-500"
            }`}
          >
            Testimonials
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className={`relative group font-semibold transition ${
              scrolled ? "text-gray-800 hover:text-yellow-600" : "text-white hover:text-yellow-500"
            }`}
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* Sign In Button */}
        <Link
          to="/login"
          className="ml-6 bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
