import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const report = location.state?.report;

  useEffect(() => {
    if (!report) {
      navigate('/questionnaire');
    }
  }, [report, navigate]);

  if (!report) {
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-xs text-green-900 font-medium">Your Personalized Reading</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
            Hi {report.name}! 👋
          </h1>
          <p className="text-lg text-stone-600">
            Here's what your birth chart reveals about you
          </p>
        </div>

        {/* Sun Sign Card */}
        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">{report.sunSign.emoji}</div>
            <div>
              <h2 className="text-2xl font-semibold text-stone-900">{report.sunSign.name}</h2>
              <p className="text-sm text-stone-500 uppercase tracking-wide">Your Sun Sign</p>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed">
            {report.sunSign.description}
          </p>
        </div>

        {/* Main Reading */}
        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h3 className="text-xl font-semibold text-stone-900">
              {report.concern} Guidance
            </h3>
          </div>
          <p className="text-stone-700 leading-relaxed mb-6">
            {report.guidance}
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h4 className="font-semibold text-stone-900 mb-4">Key insights for you:</h4>
            <ul className="space-y-3">
              {report.insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#223d3c] mt-1 shrink-0">•</span>
                  <span className="text-stone-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lucky Elements */}
        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-6">
          <h3 className="text-xl font-semibold text-stone-900 mb-6">Your lucky elements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-5 bg-stone-50 rounded-lg">
              <div className="text-3xl mb-2">🔢</div>
              <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Number</p>
              <p className="text-2xl font-semibold text-stone-900">{report.lucky.number}</p>
            </div>
            <div className="text-center p-5 bg-stone-50 rounded-lg">
              <div className="text-3xl mb-2">📅</div>
              <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Day</p>
              <p className="text-lg font-semibold text-stone-900">{report.lucky.day}</p>
            </div>
            <div className="text-center p-5 bg-stone-50 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Color</p>
              <p className="text-lg font-semibold text-stone-900">{report.lucky.color}</p>
            </div>
            <div className="text-center p-5 bg-stone-50 rounded-lg">
              <div className="text-3xl mb-2">💎</div>
              <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Stone</p>
              <p className="text-lg font-semibold text-stone-900">{report.lucky.stone}</p>
            </div>
          </div>
        </div>

        {/* Extra Details (if available) */}
        {(report.occupation || report.relationshipStatus || report.expectations) && (
          <div className="bg-white rounded-lg border border-stone-200 p-8 mb-6">
            <h3 className="text-xl font-semibold text-stone-900 mb-4">About you</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {report.occupation && (
                <div className="p-4 bg-stone-50 rounded-lg">
                  <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Occupation</p>
                  <p className="text-stone-900 font-medium">{report.occupation}</p>
                </div>
              )}
              {report.relationshipStatus && (
                <div className="p-4 bg-stone-50 rounded-lg">
                  <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Status</p>
                  <p className="text-stone-900 font-medium">{report.relationshipStatus}</p>
                </div>
              )}
              {report.expectations && (
                <div className="p-4 bg-stone-50 rounded-lg md:col-span-2">
                  <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Looking for</p>
                  <p className="text-stone-900 font-medium">{report.expectations}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-[#223d3c] text-white rounded-md hover:bg-green-900 font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download as PDF
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-white border border-stone-300 text-stone-700 rounded-md hover:bg-stone-50 font-medium"
          >
            Back to Home
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-stone-500 mt-8">
          This reading was generated on {new Date(report.createdAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
