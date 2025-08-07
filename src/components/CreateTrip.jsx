import React from 'react';
import Header from './header.jsx';
import Footer from './Footer.jsx';
import CreateTripForm from './createTripForm.jsx'; // <-- Import the new form component

const CreateTrip = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white font-montserrat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CreateTripForm /> {/* <-- Use the component here */}
      </main>
      <Footer />
    </div>
  );
};

export default CreateTrip;