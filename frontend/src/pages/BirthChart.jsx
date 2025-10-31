import React from 'react';
import { Link } from 'react-router-dom';

const BirthChart = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Birth Chart Reading</h1>
        <p className="text-lg text-stone-600 mb-8">
          Discover what the stars reveal about your personality, strengths, and life path
        </p>
        
        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">What's a Birth Chart?</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Your birth chart (or natal chart) is a snapshot of the sky at the exact moment you were born. 
            It shows the positions of the sun, moon, and planets, which astrologers believe influence 
            your personality and life path.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Think of it as your cosmic fingerprint—unique to you and full of insights about who you are 
            and what you're meant to do.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-stone-900 mb-6">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">☀️ Sun Sign</h3>
              <p className="text-stone-700">Your core identity and life purpose</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">🌙 Moon Sign</h3>
              <p className="text-stone-700">Your emotional nature and inner self</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">⬆️ Rising Sign</h3>
              <p className="text-stone-700">How others see you and first impressions</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">🪐 Planetary Positions</h3>
              <p className="text-stone-700">Influences on different areas of your life</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <button className="px-8 py-3 bg-[#223d3c] text-white rounded-md hover:bg-green-900 font-medium">
              Get Your Birth Chart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BirthChart;
