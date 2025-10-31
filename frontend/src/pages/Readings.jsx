import React from 'react';
import { Link } from 'react-router-dom';

const Readings = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Personalized Readings</h1>
        <p className="text-lg text-stone-600 mb-8">
          Get guidance tailored to your life right now
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">💼 Career Guidance</h3>
            <p className="text-stone-700 mb-4">
              Understand your professional strengths and find the career path that aligns with 
              your cosmic blueprint.
            </p>
            <Link to="/signup" className="text-[#223d3c] hover:text-green-900 font-medium">Get started →</Link>
          </div>

          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">❤️ Love & Relationships</h3>
            <p className="text-stone-700 mb-4">
              Discover your relationship patterns and learn how to build stronger connections.
            </p>
            <Link to="/signup" className="text-[#223d3c] hover:text-green-900 font-medium">Get started →</Link>
          </div>

          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">🌱 Personal Growth</h3>
            <p className="text-stone-700 mb-4">
              Understand yourself better and identify areas for growth and self-improvement.
            </p>
            <Link to="/signup" className="text-[#223d3c] hover:text-green-900 font-medium">Get started →</Link>
          </div>

          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">💰 Financial Insights</h3>
            <p className="text-stone-700 mb-4">
              Learn about your relationship with money and find your path to abundance.
            </p>
            <Link to="/signup" className="text-[#223d3c] hover:text-green-900 font-medium">Get started →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readings;
