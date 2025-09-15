import React from "react";
import { FaPlus, FaCalendarAlt, FaWallet, FaCloudSun, FaPlane } from "react-icons/fa";

const Dashboard = ({ isLoggedIn, isSignedUp }) => {
  if (!isLoggedIn && !isSignedUp) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Please log in or sign up to view your Dashboard</h2>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold text-yellow-600 mb-10">TripSync</h1>
        <nav className="space-y-4">
          <a href="/dashboard" className="block text-gray-700 hover:text-yellow-600">🏠 Dashboard</a>
          <a href="/create-trip" className="block text-gray-700 hover:text-yellow-600">✈️ Create Trip</a>
          <a href="/trip-itinerary" className="block text-gray-700 hover:text-yellow-600">📋 My Trips</a>
          <a href="#" className="block text-gray-700 hover:text-yellow-600">📅 Calendar</a>
          <a href="#" className="block text-gray-700 hover:text-yellow-600">⚙️ Settings</a>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back, Traveler 👋</h2>
          <p className="text-gray-500">Here’s an overview of your trips & activities</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-yellow-100 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <FaPlus className="text-3xl text-yellow-600 mb-2" />
            <h3 className="font-bold text-lg">Create New Trip</h3>
            <p className="text-gray-600 text-sm">Plan your next adventure</p>
          </div>
          <div className="p-6 bg-blue-100 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <FaCalendarAlt className="text-3xl text-blue-600 mb-2" />
            <h3 className="font-bold text-lg">View Calendar</h3>
            <p className="text-gray-600 text-sm">Check upcoming trips</p>
          </div>
          <div className="p-6 bg-green-100 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <FaWallet className="text-3xl text-green-600 mb-2" />
            <h3 className="font-bold text-lg">Budget Tracker</h3>
            <p className="text-gray-600 text-sm">Track your expenses</p>
          </div>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Trips */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Upcoming Trips</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Paris, France</h4>
                  <p className="text-sm text-gray-500">12th Oct - 18th Oct</p>
                </div>
                <FaPlane className="text-yellow-600 text-2xl" />
              </div>
              <div className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Tokyo, Japan</h4>
                  <p className="text-sm text-gray-500">25th Dec - 2nd Jan</p>
                </div>
                <FaPlane className="text-yellow-600 text-2xl" />
              </div>
            </div>
          </div>

          {/* Budget / Weather */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Weather & Budget</h3>
            <div className="flex gap-6">
              <div className="flex-1 text-center p-4 bg-blue-50 rounded-lg">
                <FaCloudSun className="text-3xl text-blue-500 mb-2" />
                <h4 className="font-bold">Paris</h4>
                <p className="text-gray-600">18°C Sunny</p>
              </div>
              <div className="flex-1 text-center p-4 bg-green-50 rounded-lg">
                <FaWallet className="text-3xl text-green-600 mb-2" />
                <h4 className="font-bold">Budget</h4>
                <p className="text-gray-600">$1,200 / $2,000</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
