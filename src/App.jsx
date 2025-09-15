import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// App.jsx ya main.jsx ke top me
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './components/header.jsx';
import LandingHero from './components/landingHero.jsx';
import Features from './components/features.jsx';
import CallToAction from './components/callToAction.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import LoggedInLandingPage from './components/LoggedIn.jsx';
import CreateTrip from './components/CreateTrip.jsx';
import TripItinerary from './components/TripItinerary.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonals.jsx';
import Contact from './components/Contact.jsx';

import './index.css';

// Landing page for non-logged-in users
const LandingPage = () => {
  return (
    <>
      <section id="home">
        <LandingHero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <CallToAction />
      <Footer />
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/dashboard'); 
  };

    const handleSignupSuccess = () => {
    setIsSignedUp(true);   
    setIsLoggedIn(true);   
    navigate('/dashboard'); 
  };

  // jaha header nahi chahiye
  const hideHeaderRoutes = ["/login", "/signup", "/dashboard", "/create-trip", "/trip-itinerary"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && (
        <Header isLoggedIn={isLoggedIn} />
      )}

      <Routes>
        <Route path="/" element={isLoggedIn ? <LoggedInLandingPage /> : <LandingPage />} />

        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup onSignupSuccess={handleSignupSuccess} />} />

        <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/trip-itinerary" element={<TripItinerary />} />
      </Routes>
    </>
  );
}

export default App;
