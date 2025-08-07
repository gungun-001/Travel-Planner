import React from 'react';

const dailyPlan = [
  {
    day: 1,
    date: "Day 1",
    activities: [
      {
        time: "9:00 AM - 12:00 PM",
        title: "Brahma Sarovar",
        description: "A sacred tank and pilgrimage site dedicated to Lord Brahma.",
        duration: "3 hours",
        price: "Free",
        image: "https://images.unsplash.com/photo-1570144415582-7740f1a91e56?q=80&w=1920&auto=format&fit=crop"
      },
      {
        time: "1:00 PM - 4:00 PM",
        title: "Sannihit Sarovar",
        description: "Another sacred lake in Kurukshetra.",
        duration: "30 minutes",
        price: "Free",
        image: "https://images.unsplash.com/photo-1614749132104-58a436e2f1e2?q=80&w=1920&auto=format&fit=crop"
      },
    ],
  },
  {
    day: 2,
    date: "Day 2",
    activities: [
      {
        time: "9:00 AM - 12:00 PM",
        title: "Kalpana Chawla Planetarium",
        description: "Explore the stars and space.",
        duration: "1.5 hours",
        price: "₹500-₹800",
        image: "https://images.unsplash.com/photo-1609144485596-f94a3e7428f5?q=80&w=1920&auto=format&fit=crop"
      },
      {
        time: "1:00 PM - 4:00 PM",
        title: "Pehwa",
        description: "A town known for its ancient temples.",
        duration: "1 hour",
        price: "Free",
        image: "https://images.unsplash.com/photo-1594951152864-1e0e8e6b12a8?q=80&w=1920&auto=format&fit=crop"
      },
    ],
  },
];

const DailyItinerary = () => {
  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-6">Places to Visit</h3>
      {dailyPlan.map((day, dayIndex) => (
        <div key={dayIndex} className="mb-8">
          <h4 className="text-xl font-bold mb-4">Day {day.day}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {day.activities.map((activity, activityIndex) => (
              <div key={activityIndex} className="bg-gray-800 rounded-xl shadow-lg p-4 flex items-start space-x-4">
                <img src={activity.image} alt={activity.title} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h5 className="text-lg font-semibold mb-1">{activity.title}</h5>
                  <p className="text-gray-400 text-sm mb-2">{activity.description}</p>
                  <div className="flex items-center text-sm text-gray-300 space-x-4">
                    <span>🕒 {activity.duration}</span>
                    <span>💰 {activity.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DailyItinerary;