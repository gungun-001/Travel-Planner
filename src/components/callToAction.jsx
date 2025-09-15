import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-white py-24 px-4 text-gray-800 text-center animate-slideInUp">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-playfair-display mb-6 tracking-tight">Your Journey Awaits</h2>
        <p className="text-lg text-gray-700 font-lato mb-10">
          Sign up today and start exploring the world. Your next great adventure is just a few clicks away.
        </p>
        <a
          href="/signup"
          className="inline-block bg-yellow-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
        >
          Create Your Free Account
        </a>
      </div>
    </section>
  );
};

export default CallToAction;