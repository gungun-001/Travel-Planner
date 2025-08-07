import React from 'react';
import LandingHero from './landingHero.jsx';
import Features from './Features.jsx';
import CallToAction from './CallToAction.jsx';
import Footer from './Footer.jsx';

const LoggedInLandingPage = () => {
  return (
    <>
      <LandingHero />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
};

export default LoggedInLandingPage;