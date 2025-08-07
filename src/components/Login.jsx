import React, { useState } from 'react';

const Login = ({ onSwitchToSignup, onCloseModal, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Simulate successful login
    alert("Login successful! (Simulated)");
    onCloseModal(); // Close the modal on success
    onLoginSuccess(); // Notify App.jsx about successful login
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Login</h2>
      <form onSubmit={handleLogin}>
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
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-gray-400 text-sm">
        Don't have an account?{' '}
        <button onClick={onSwitchToSignup} className="text-teal-400 hover:text-teal-300 font-bold transition-colors duration-200">
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;