import { Brain, ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8">
          <Brain className="w-5 h-5 text-indigo-600" />
          <span className="text-gray-600">AI-Powered Past Year Questions</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Master Your Exam Preparation with
          <span className="text-indigo-600"> Smart PYQs</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Practice with past year questions enhanced by AI explanations,
          personalized study plans, and real-time performance analytics.
        </p>

        <button
          onClick={onGetStarted}
          className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          <span>Get Started Free</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
