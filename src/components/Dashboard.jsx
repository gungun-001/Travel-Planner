import React from 'react';
import Header from './header.jsx';
import Footer from './Footer.jsx';

const Dashboard = ({ isLoggedIn }) => {
  return (
    <div className="bg-gray-950 min-h-screen text-white font-montserrat">
      <Header isLoggedIn={isLoggedIn} />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center">Dashboard</h2>
        <p className="text-center text-gray-400 mt-4">Your trip content will go here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;