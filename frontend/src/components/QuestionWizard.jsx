import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../client/axiosClient';
import { questions } from '../data/questions';

const QuestionWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    
    if (currentQuestion.type === 'choice') {
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          handleSubmit(newAnswers);
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(answers);
    }
  };

  const handleSubmit = async (finalAnswers) => {
    setIsSubmitting(true);
    
    try {
      const response = await axiosClient.post('/response/submit', finalAnswers);
      const report = response.data.report;

      navigate('/results', { 
        state: { report: report } 
      });

    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isAnswered = () => {
    if (currentQuestion.optional) {
      return true;
    }
    return answers[currentQuestion.id]?.toString().trim() !== '';
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-stone-600">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-sm text-stone-500">{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#223d3c] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-3">
            {currentQuestion.question}
          </h2>
          
          {currentQuestion.subtitle && (
            <p className="text-stone-600 mb-6">{currentQuestion.subtitle}</p>
          )}

          {/* Choice Type */}
          {currentQuestion.type === 'choice' && (
            <div className="space-y-3 mt-6">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-md border text-left font-medium transition-all ${
                    answers[currentQuestion.id] === option
                      ? 'border-[#223d3c] bg-blue-50 text-blue-900'
                      : 'border-stone-300 hover:border-[#223d3c] hover:bg-stone-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Text Type */}
          {currentQuestion.type === 'text' && (
            <input
              type="text"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full mt-6 px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-[#223d3c] focus:ring-2 focus:ring-blue-100"
            />
          )}

          {/* Date Type */}
          {currentQuestion.type === 'date' && (
            <input
              type="date"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full mt-6 px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-[#223d3c] focus:ring-2 focus:ring-blue-100"
            />
          )}

          {/* Textarea Type */}
          {currentQuestion.type === 'textarea' && (
            <textarea
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestion.placeholder}
              rows="4"
              className="w-full mt-6 px-4 py-3 border border-stone-300 rounded-md resize-none focus:outline-none focus:border-[#223d3c] focus:ring-2 focus:ring-blue-100"
            />
          )}

          {/* Navigation for non-choice questions */}
          {currentQuestion.type !== 'choice' && (
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-stone-200">
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-4 py-2 text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}
              
              <button
                onClick={handleNext}
                disabled={!isAnswered() || isSubmitting}
                className={`ml-auto px-6 py-3 rounded-md font-medium flex items-center gap-2 ${
                  isAnswered() && !isSubmitting
                    ? 'bg-[#223d3c] text-white hover:bg-green-900'
                    : 'bg-stone-300 text-stone-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {currentStep === questions.length - 1 ? 'See My Results' : 'Continue'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Skip button for optional questions */}
          {currentQuestion.optional && currentQuestion.type !== 'choice' && (
            <div className="text-center mt-3">
              <button
                onClick={handleNext}
                className="text-sm text-stone-500 hover:text-stone-700"
              >
                Skip this question
              </button>
            </div>
          )}
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-stone-500 mt-6">
          Your information is private and secure
        </p>
      </div>
    </div>
  );
};

export default QuestionWizard;
