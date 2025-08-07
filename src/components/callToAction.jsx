import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gray-950 py-24 px-4 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 font-montserrat tracking-tight">Your Journey Awaits</h2>
        <p className="text-lg text-gray-400 mb-10">
          Sign up today and start exploring the world. Your next great adventure is just a few clicks away.
        </p>
        <a
          href="/signup"
          className="inline-block bg-teal-500 text-gray-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.6)]"
        >
          Create Your Free Account
        </a>
      </div>
    </section>
  );
};

export default CallToAction;