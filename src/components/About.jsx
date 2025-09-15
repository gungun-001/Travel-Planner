import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side with Parallax Image */}
        <div className="w-full md:w-1/2 h-[500px] rounded-lg shadow-lg overflow-hidden relative">
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg')", // airplane + sky
            }}
          ></div>
          {/* Neutral overlay for readability (not yellowish) */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 bg-gray-50 text-gray-800 p-10 rounded-lg shadow-lg relative z-10">
          <h2 className="text-4xl font-bold font-playfair-display mb-4 text-center text-gray-900">
            About Us
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg leading-relaxed font-lato text-center text-gray-700">
            Discover the ultimate travel companion with our modern Trip Planner
            Web Application. Designed to deliver a seamless user experience, our
            application harnesses the power of React, Vite, and Tailwind CSS to
            provide a responsive and visually appealing interface. Effortlessly
            plan your travels by easily creating and managing your itineraries.
            With functionality that caters to all travel enthusiasts, we aim to
            make every journey memorable and hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
