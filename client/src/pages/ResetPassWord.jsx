import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
  return (
    <div className="min-h-screen flex  justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full h-full mt-9 max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Reset Your Password
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your email address, and we'll send you a link to reset your password.
        </p>
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4 text-gray-400">
          <p>
            Remember your password?{' '}
            <a href="/signin" className="text-orange-500 hover:underline">
              Sign In
            </a>
          </p>
          <p className="mt-2">
            Don't have an account?{' '}
            <a href="/signup" className="text-orange-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
