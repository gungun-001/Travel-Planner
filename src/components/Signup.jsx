import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignupSuccess }) => { // <-- The onSignupSuccess prop is crucial
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { email, password });
    alert("Signup successful! (Simulated)");
    
    // Call the onSignupSuccess prop to trigger the redirect
    onSignupSuccess(); 
  };

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center p-4">
      <div className="p-8 bg-gray-800 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-teal-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(45,212,191,0.7)]"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <button onClick={() => {}} className="text-teal-400 hover:text-teal-300 font-bold transition-colors duration-200">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;