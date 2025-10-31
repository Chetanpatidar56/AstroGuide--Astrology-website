import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Terms of Service</h1>
        <p className="text-stone-600 mb-8">Last updated: October 2025</p>
        
        <div className="bg-white rounded-lg border border-stone-200 p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Using AstroGuide</h2>
            <p className="text-stone-700">
              By using our service, you agree to provide accurate birth information and use 
              the readings for personal guidance only. AstroGuide is for entertainment and 
              self-reflection purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">What's Free</h2>
            <p className="text-stone-700">
              Your personalized birth chart reading is completely free. You can create unlimited 
              readings for yourself.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Disclaimer</h2>
            <p className="text-stone-700">
              Astrological readings are for guidance and should not replace professional advice 
              for medical, legal, or financial decisions. Use our insights as one tool among many 
              for self-understanding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Account Rules</h2>
            <p className="text-stone-700 mb-2">Don't:</p>
            <ul className="list-disc pl-6 text-stone-700 space-y-1">
              <li>Share your account with others</li>
              <li>Use the service for harmful purposes</li>
              <li>Copy or redistribute our content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Questions?</h2>
            <p className="text-stone-700">
              Contact us at terms@astroguide.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
