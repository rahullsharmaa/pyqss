import React from 'react';
import { Brain, Target, BarChart3, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Get detailed explanations and step-by-step solutions powered by advanced AI"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Practice",
      description: "Focus on your weak areas with customized question sets and study plans"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track your progress with detailed insights and improvement suggestions"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Smart Learning",
      description: "Learn from your mistakes with pattern recognition and topic connections"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose PYQs.com?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a smarter way to practice with our innovative features
            designed to maximize your exam preparation efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}