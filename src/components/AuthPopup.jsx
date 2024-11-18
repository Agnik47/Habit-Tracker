import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPopup = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  const closePopup = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80">
      <div className="relative bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
        {/* Close Icon */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        
        <form>
          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded font-semibold"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="mt-4 text-center">
          {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
          <button
            onClick={toggleAuthMode}
            className="text-blue-400 hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPopup;
