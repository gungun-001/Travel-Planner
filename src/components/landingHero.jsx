import React from 'react';

const LandingHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-950 to-gray-800 text-white text-center py-40 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-md">
          Discover Your Next Adventure <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500"></span>
          <br />
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <a href="/signup" className="inline-block bg-teal-500 text-gray-900 font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:bg-teal-400 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.6)]">
          Get Started, It's Free
        </a>
      </div>
    </section>
  );
};

export default LandingHero;