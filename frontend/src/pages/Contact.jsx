import React, { useState } from 'react';
import axiosClient from '../client/axiosClient';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axiosClient.post('/contact/query', formData);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Get in Touch</h1>
        <p className="text-stone-600 mb-8">Have a question? We'd love to hear from you.</p>
        
        <div className="bg-white rounded-lg border border-stone-200 p-8 mb-8">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800">✅ Thanks for reaching out! We'll get back to you soon.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800">❌ Something went wrong. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-900 mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-[#223d3c]"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-900 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-[#223d3c]"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-900 mb-2">Message</label>
              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-[#223d3c] resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-md font-medium ${
                isSubmitting 
                  ? 'bg-stone-400 text-white cursor-not-allowed' 
                  : 'bg-[#223d3c] text-white hover:bg-green-900'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

    
      </div>
    </div>
  );
};

export default Contact;
