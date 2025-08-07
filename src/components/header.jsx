import React from 'react';
import { Link } from 'react-router-dom';

// Accept isLoggedIn and onOpenLoginModal props
const Header = ({ isLoggedIn, onOpenLoginModal }) => {
  return (
    <header className="bg-gray-950/80 backdrop-blur-sm text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300">
            <svg className="h-8 w-8 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0112 2zM12 6a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <span className="text-2xl font-extrabold tracking-tight ml-2 drop-shadow-md">Tripio</span>
          </Link>
        </div>

        {/* Conditional Buttons based on login state */}
        <div>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/create-trip" // Assuming a route for creating a trip
                className="bg-gray-800 text-teal-400 font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                + Create Trip
              </Link>
              <Link
                to="/my-trips" // Assuming a route for my trips
                className="bg-gray-800 text-teal-400 font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                My Trips
              </Link>
              {/* User Profile Placeholder */}
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg cursor-pointer">
                G {/* Replace with user's initial or profile pic */}
              </div>
            </div>
          ) : (
            <button
              onClick={onOpenLoginModal} // This opens the modal
              className="bg-teal-500 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-teal-400 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(45,212,191,0.7)]"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;