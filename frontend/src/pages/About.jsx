import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-6">About AstroGuide</h1>
        
        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">Our Story</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            AstroGuide started with a simple belief: everyone deserves access to personalized astrological guidance. 
            We built this platform to make astrology approachable, accurate, and helpful for everyday life.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Whether you're facing a career decision, navigating relationships, or simply curious about what the stars 
            have to say, we're here to provide insights that actually make sense for your life.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">What We Believe</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">Accessible</h3>
              <p className="text-stone-700">Astrology shouldn't be complicated or expensive. Everyone should be able to get guidance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">Personal</h3>
              <p className="text-stone-700">Your birth chart is unique. We provide readings tailored to your specific cosmic blueprint.</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">Practical</h3>
              <p className="text-stone-700">We focus on insights you can actually use in your daily life, not vague predictions.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <button className="px-6 py-3 bg-[#223d3c] text-white rounded-md hover:bg-green-900 font-medium">
              Get Your Reading
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
