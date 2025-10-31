import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="bg-white fixed w-full z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
             <div className="w-7 h-7 bg-yellow-300 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✦</span>
            </div>
              <span className="text-xl font-semibold text-stone-800">AstroGuide</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-stone-600 hover:text-stone-900 text-sm">
                Home
              </Link>
              <Link to="/about" className="text-stone-600 hover:text-stone-900 text-sm">
                About
              </Link>
              <Link to="/contact" className="text-stone-600 hover:text-stone-900 text-sm">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Link to="/login">
                <button className="px-4 py-2 text-sm text-stone-700 hover:text-stone-900">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2 bg-[#223d3c] text-white text-sm rounded-md hover:bg-green-900">
                  Sign Up
                </button>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stone-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link to="/" className="block py-2 text-stone-600">Home</Link>
              <Link to="/about" className="block py-2 text-stone-600">About</Link>
              <Link to="/contact" className="block py-2 text-stone-600">Contact</Link>
              <div className="pt-3 space-y-2">
                <Link to="/login" className="block">
                  <button className="w-full py-2 text-stone-700 border border-stone-300 rounded-md">Login</button>
                </Link>
                <Link to="/signup" className="block">
                  <button className="w-full py-2 bg-[#223d3c] text-white rounded-md">Sign Up</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto mt-8">
          {/* <div className="inline-block px-3 py-1 bg-blue-50 rounded-full mb-6">
            <span className="text-xs text-green-900 font-medium">✨ Free Astrology Reading</span>
          </div> */}
          
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 leading-tight">
            Get to know yourself better with personalized astrology insights
          </h1>
          
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Answer a few questions about yourself and we'll create a personalized astrology report 
            just for you. Takes about 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-3 bg-[#223d3c] text-white rounded-md hover:bg-green-900 font-medium"
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 bg-white border border-stone-300 text-stone-700 rounded-md hover:bg-stone-50 font-medium"
            >
              Learn More
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No payment needed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>5 minute quiz</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">
            What's included in your reading
          </h2>
          <p className="text-stone-600 mb-12">
            We'll analyze your birth chart and give you personalized insights
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-stone-50 rounded-lg">
              <div className="text-3xl mb-3">☀️</div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Your Sun Sign</h3>
              <p className="text-stone-600 text-sm">
                Learn what your sun sign says about your personality and how you show up in the world
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-lg">
              <div className="text-3xl mb-3">💫</div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Life Guidance</h3>
              <p className="text-stone-600 text-sm">
                Get advice on career, relationships, health, or whatever's on your mind right now
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-lg">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Lucky Elements</h3>
              <p className="text-stone-600 text-sm">
                Find out your lucky numbers, colors, and stones that match your cosmic energy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-12 text-center">
            How it works
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#223d3c] text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-1">Tell us about yourself</h3>
                <p className="text-stone-600">
                  We'll ask for your birth details and what you'd like guidance on
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#223d3c] text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-1">We create your chart</h3>
                <p className="text-stone-600">
                  Our system looks at your unique astrological patterns
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#223d3c] text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-1">Get your reading</h3>
                <p className="text-stone-600">
                  See your personalized insights and save or download your report
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#223d3c]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to learn more about yourself?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get your free personalized astrology reading in just a few minutes
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-white text-[#223d3c] rounded-md hover:bg-blue-50 font-semibold"
          >
            Start Your Reading
          </button>
          <p className="text-sm text-blue-200 mt-4">
            100% free • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-stone-900 mb-3 text-sm">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-stone-600 hover:text-stone-900">About</Link></li>
                <li><Link to="/contact" className="text-stone-600 hover:text-stone-900">Contact</Link></li>
                
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-stone-900 mb-3 text-sm">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/birthchart" className="text-stone-600 hover:text-stone-900">Birth Chart</a></li>
                <li><a href="/readings" className="text-stone-600 hover:text-stone-900">Readings</a></li>
                <li><a href="/horoscope" className="text-stone-600 hover:text-stone-900">Horoscope</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-stone-900 mb-3 text-sm">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-stone-600 hover:text-stone-900">Privacy</a></li>
                <li><a href="/terms" className="text-stone-600 hover:text-stone-900">Terms</a></li>
              </ul>
            </div>

          
          </div>

          <div className="pt-8 border-t border-stone-200 text-center text-sm text-stone-500">
            © 2025 AstroGuide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
