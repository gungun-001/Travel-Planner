import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTripForm = () => {
  const [destination, setDestination] = useState('');
  const [tripDuration, setTripDuration] = useState('');
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTravelers, setSelectedTravelers] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const budgets = [
    { title: 'Cheap', emoji: '💸', description: 'Stay conscious of costs' },
    { title: 'Moderate', emoji: '💰', description: 'Keep cost on the average side' },
    { title: 'Luxury', emoji: '💎', description: "Don't worry about cost" },
  ];

  const travelers = [
    { title: 'Just Me', emoji: '✈️', description: 'A sole travels in exploration' },
    { title: 'A Couple', emoji: '🥂', description: 'Two travels in tandem' },
    { title: 'Family', emoji: '🏡', description: 'A group of fun loving adv' },
    { title: 'Friends', emoji: '⛵', description: 'A bunch of thrill-seekees' },
  ];

  const handleGenerateTrip = () => {
    if (!destination || !tripDuration || !selectedBudget || !selectedTravelers) {
      alert("Please fill out all the fields before generating your trip.");
      return;
    }

    setLoading(true);

    // Simulate AI generation delay and then navigate
    setTimeout(() => {
      setLoading(false);
      
      navigate('/trip-itinerary', {
        state: { destination, tripDuration, selectedBudget, selectedTravelers },
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-extrabold text-white mb-2">Tell us your travel preferences ✈️🌴</h2>
        <p className="text-gray-400 mb-12">
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>

        <div className="mb-8">
          <label className="block text-xl font-bold text-white mb-4" htmlFor="destination">
            What is destination of choice?
          </label>
          <div className="relative">
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 appearance-none pr-8"
            >
              <option value="">Select...</option>
              <option value="Las Vegas">Las Vegas, NV, USA</option>
              <option value="Paris">Paris, France</option>
              <option value="Tokyo">Tokyo, Japan</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-xl font-bold text-white mb-4" htmlFor="tripDuration">
            How many days are you planning your trip?
          </label>
          <input
            type="number"
            id="tripDuration"
            value={tripDuration}
            onChange={(e) => setTripDuration(e.target.value)}
            placeholder="Ex: 3"
            className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
          />
        </div>

        <div className="mb-8">
          <label className="block text-xl font-bold text-white mb-4">
            What is Your Budget?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {budgets.map((budget) => (
              <div
                key={budget.title}
                onClick={() => setSelectedBudget(budget.title)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 
                  ${selectedBudget === budget.title ? 'border-teal-400 bg-gray-800 shadow-lg' : 'border-gray-700 bg-gray-800 hover:border-teal-400'}`}
              >
                <div className="text-4xl mb-2">{budget.emoji}</div>
                <h3 className="text-lg font-semibold text-white">{budget.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{budget.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <label className="block text-xl font-bold text-white mb-4">
            Who do you plan on traveling with on your next adventure?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {travelers.map((traveler) => (
              <div
                key={traveler.title}
                onClick={() => setSelectedTravelers(traveler.title)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center
                  ${selectedTravelers === traveler.title ? 'border-teal-400 bg-gray-800 shadow-lg' : 'border-gray-700 bg-gray-800 hover:border-teal-400'}`}
              >
                <div className="text-4xl mb-2">{traveler.emoji}</div>
                <h3 className="text-lg font-semibold text-white">{traveler.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{traveler.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={handleGenerateTrip}
            disabled={loading}
            className={`inline-block text-gray-900 font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 transform
              ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-400 hover:scale-105'}`}
          >
            {loading ? 'Generating...' : 'Generate Trip'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTripForm;