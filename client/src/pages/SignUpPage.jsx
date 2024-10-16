import React from 'react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex  justify-center bg-gray-900 p-5">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg h-full w-full max-w-md mb-5">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Sign Up
        </h2>
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Optional Location */}
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="location">
              Location <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Enter your location"
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
              Sign Up
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4 text-gray-400">
          <p>
            Already have an account?{' '}
            <a href="/signin" className="text-orange-400 hover:underline">
              Sign in
            </a>
          </p>
          <p className="mt-2">
            Forgot your password?{' '}
            <a href="/reset" className="text-orange-400 hover:underline">
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
