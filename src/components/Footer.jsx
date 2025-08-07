import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tripio. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-6 text-sm">
          <a href="#" className="hover:text-teal-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400 transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-teal-400 transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;