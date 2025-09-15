import React from 'react';
import heroBackground from '../assets/WhatsApp Image 2025-09-10 at 18.06.37_eaf8ba1c.jpg';

const LandingHero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white bg-fixed"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // 🔑 parallax effect
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Plan Your Perfect{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
            Journey
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Seamlessly create and manage your travel itineraries. Explore new
          destinations with a personalized touch.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="/signup"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Start Planning
          </a>
          <a
            href="#features"
            className="bg-white/80 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white transition-transform transform hover:scale-105"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
