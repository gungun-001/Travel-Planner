import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Import all your components
import Header from './components/header.jsx';
import LandingHero from './components/landingHero.jsx';
import Features from './components/Features.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import LoggedInLandingPage from './components/LoggedIn.jsx';
import CreateTrip from './components/CreateTrip.jsx';
import TripItinerary from './components/TripItinerary.jsx';

import './index.css';

// The LandingPage component will be rendered when the user is NOT logged in
const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Redirect to the dashboard after a successful login
    navigate('/dashboard'); 
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
    // Redirect to the dashboard after a successful signup
    navigate('/dashboard'); 
  };

  return (
    <>
      <Routes>
        {/* The landing page for non-logged-in users */}
        <Route path="/" element={isLoggedIn ? <LoggedInLandingPage /> : <LandingPage />} />

        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup onSignupSuccess={handleSignupSuccess} />} />
        
        {/* The dashboard route */}
        <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/trip-itinerary" element={<TripItinerary />} />
      </Routes>
    </>
  );
}

export default App;