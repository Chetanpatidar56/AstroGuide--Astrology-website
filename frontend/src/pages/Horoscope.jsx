import React from 'react';
import { Link } from 'react-router-dom';

const Horoscope = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Daily Horoscope</h1>
        <p className="text-lg text-stone-600 mb-8">
          See what the stars have in store for you today
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-blue-900">
            📅 Daily horoscopes coming soon! Sign up to get notified when this feature launches.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">What to Expect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">Daily Insights</h3>
              <p className="text-stone-700">Fresh guidance every morning based on today's planetary movements</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">Weekly Overview</h3>
              <p className="text-stone-700">Plan your week with a 7-day forecast</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">Monthly Predictions</h3>
              <p className="text-stone-700">Big picture guidance for the month ahead</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <button className="px-8 py-3 bg-[#223d3c] text-white rounded-md hover:bg-green-900 font-medium">
              Sign Up for Updates
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
