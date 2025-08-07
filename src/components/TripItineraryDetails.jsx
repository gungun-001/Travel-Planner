import React from 'react';

const TripItineraryDetails = ({ tripData }) => {
  const { destination, tripDuration, selectedBudget, selectedTravelers } = tripData;
  const image = "https://images.unsplash.com/photo-1594951152864-1e0e8e6b12a8?q=80&w=1920&auto=format&fit=crop";

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
      <img src={image} alt="Trip Destination" className="w-full h-80 object-cover opacity-50" />
      <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-md">{destination}</h2>
        <div className="flex flex-wrap items-center space-x-2 md:space-x-4 text-sm md:text-lg text-gray-200 mt-2">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">{tripDuration} days</div>
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">{selectedBudget} Budget</div>
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">{selectedTravelers} Travelers</div>
        </div>
      </div>
    </div>
  );
};

export default TripItineraryDetails;