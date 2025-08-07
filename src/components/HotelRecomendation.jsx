import React from 'react';

const hotels = [
  {
    name: "Hotel Sunstar",
    location: "Near Kurukshetra Railway Station, Kurukshetra, Haryana 136118",
    price: "₹1500–₹3000 per night",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1570144415582-7740f1a91e56?q=80&w=1920&auto=format&fit=crop"
  },
  {
    name: "Hotel Ashoka",
    location: "Model Town, Kurukshetra, Haryana",
    price: "₹1800–₹3500 per night",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1614749132104-58a436e2f1e2?q=80&w=1920&auto=format&fit=crop"
  },
  {
    name: "Haveli",
    location: "National Highway 1, Kurukshetra, Haryana",
    price: "₹2500–₹4000 per night",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1609144485596-f94a3e7428f5?q=80&w=1920&auto=format&fit=crop"
  }
];

const HotelRecommendations = () => {
  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-6">Hotel Recommendation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-1">{hotel.name}</h4>
              <p className="text-gray-400 text-sm mb-2">📍 {hotel.location}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-300 font-bold">💰 {hotel.price}</span>
                <span className="text-yellow-400 font-bold">⭐ {hotel.rating} stars</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelRecommendations;