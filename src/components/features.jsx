import React from 'react';

const Features = () => {
  const features = [
    { 
      title: "Intuitive Planning", 
      description: "Build your itinerary with our simple drag-and-drop interface. Effortlessly organize your trip details.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-teal-400 mb-4 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "AI Discovery", 
      description: "Our AI helps you find hidden gems, local spots, and amazing experiences tailored to your interests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-teal-400 mb-4 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    { 
      title: "Collaborate", 
      description: "Invite your travel companions to plan the perfect trip together in real-time. Make decisions as a team.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-teal-400 mb-4 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-3a2 2 0 01-2-2v-4h-2v4a2 2 0 01-2 2H7M4 12h16" />
        </svg>
      )
    },
    { 
      title: "Access Anywhere", 
      description: "Access your plans anytime, on any device, even without an internet connection.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-teal-400 mb-4 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-4 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold font-montserrat mb-12">Features Designed for You</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-500">
              {feature.icon}
              <h3 className="text-2xl font-semibold font-montserrat mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;