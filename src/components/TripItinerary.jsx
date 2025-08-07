import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './Footer.jsx';
import TripItineraryDetails from './TripItineraryDetails.jsx';
import HotelRecommendations from './HotelRecomendation.jsx';
import DailyItinerary from './Daily.jsx';

const TripItinerary = () => {
  const location = useLocation();
  const tripData = location.state;

  if (!tripData) {
    return (
      <div className="bg-gray-950 min-h-screen text-white font-montserrat">
        <Header />
        <main className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Error: No Trip Data Found</h2>
          <p className="text-lg text-gray-400">Please go back and generate a trip.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen text-white font-montserrat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TripItineraryDetails tripData={tripData} />
        <HotelRecommendations />
        <DailyItinerary />
      </main>
      <Footer />
    </div>
  );
};

export default TripItinerary;