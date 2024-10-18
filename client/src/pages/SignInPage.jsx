import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex  justify-center bg-gray-900">
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full h-full mt-5 max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Sign In
        </h2>
        <form className="space-y-4">
          {/* Email or Username */}
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="email-username">
              Email or Username
            </label>
            <input
              type="text"
              id="email-username"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Enter your email or username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4 text-gray-400">
          <p>
            Don't have an account?{' '}
            <Link to={"/signup"} className="text-orange-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="mt-2">
            Forgot your password?{' '}
            <Link to={"/signup"} className="text-orange-500 hover:underline">
              Reset it
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
