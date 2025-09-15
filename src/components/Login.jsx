import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    alert("Login successful! (Simulated)");
    onLoginSuccess();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542858169-24b553644f1c?q=80&w=1920&auto=format&fit=crop')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Form Container */}
      <div className="relative z-10 p-8 bg-white rounded-xl shadow-lg w-full max-w-sm border border-gray-200">
        <h2 className="text-3xl font-bold font-playfair-display text-center mb-6 text-gray-900">Sign In</h2>
        
        {/* Continue with Google Button (UI Only) */}
        <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300">
          <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.5 20H24V28.8H35.6C35.1 31.3 33.5 33.4 31.4 34.8V40.2H38.5C42.8 36.3 45.4 30.6 45.4 24C45.4 22.5 45.2 21 45 19.5H44.5Z" fill="#4285F4"/>
            <path d="M24 45.9C30.6 45.9 36.3 43.6 40.5 39.5L34.1 34.8C32 36.2 29 37.1 26 37.1C21.4 37.1 17.5 34.4 15.6 30.7L9.9 35.1C13.4 42.1 20.3 45.9 27 45.9H24Z" fill="#34A853"/>
            <path d="M9.9 35.1C9.1 32.7 8.7 30.2 8.7 27.6C8.7 25 9.1 22.5 9.9 20.1L3.6 15.4C2.1 18.5 1.2 22 1.2 25.5C1.2 29 2.1 32.5 3.6 35.6L9.9 35.1Z" fill="#FBBC04"/>
            <path d="M24 8.7C27.4 8.7 30.4 10.1 32.6 12.3L37.1 7.8C33.1 4.1 28.6 2.3 23.9 2.3C17.2 2.3 10.3 6.1 6.8 13.1L13.1 17.8C15 14.1 18.9 11.4 23.5 11.4C26.5 11.4 29.2 12.4 31.4 14.2L24 8.7Z" fill="#EA4335"/>
          </svg>
          <span>Continue with Google</span>
        </button>
        
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 font-medium">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        
        {/* Email & Password Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:text-blue-700 font-bold transition-colors duration-200">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;