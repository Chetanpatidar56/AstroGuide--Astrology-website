import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Privacy Policy</h1>
        <p className="text-stone-600 mb-8">Last updated: October 2025</p>
        
        <div className="bg-white rounded-lg border border-stone-200 p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">What We Collect</h2>
            <p className="text-stone-700 mb-2">When you use AstroGuide, we collect:</p>
            <ul className="list-disc pl-6 text-stone-700 space-y-1">
              <li>Your name and birth information for readings</li>
              <li>Email address for account access</li>
              <li>Usage data to improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">How We Use It</h2>
            <p className="text-stone-700">
              We use your information solely to provide personalized astrological readings. 
              We never sell your data to third parties. Your birth chart and personal details 
              are kept private and secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Your Rights</h2>
            <p className="text-stone-700 mb-2">You can:</p>
            <ul className="list-disc pl-6 text-stone-700 space-y-1">
              <li>Request a copy of your data</li>
              <li>Delete your account anytime</li>
              <li>Opt out of emails (except essential notifications)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Contact Us</h2>
            <p className="text-stone-700">
              Questions about privacy? Email us at privacy@astroguide.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
