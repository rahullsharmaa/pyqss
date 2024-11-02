import React, { useState } from 'react';
import { Brain, BookOpen, Clock } from 'lucide-react';
import PracticeModeCard from './PracticeModeCard';
import AuthModal from '../auth/AuthModal';

interface PracticeModeSelectionProps {
  subject: string;
  onModeSelect: (mode: 'simplified' | 'chapter-wise' | 'full-year') => void;
}

export default function PracticeModeSelection({
  subject,
  onModeSelect,
}: PracticeModeSelectionProps) {
  const [showAuthModal, setShowAuthModal] = useState(true);

  const modes = [
    {
      id: 'simplified',
      title: 'Simplified Questions',
      description:
        'Practice with bite-sized questions focusing on specific concepts',
      icon: <Brain className="w-8 h-8 text-white" />,
      color: 'from-purple-500 to-purple-600',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      id: 'chapter-wise',
      title: 'Chapter-wise Practice',
      description: 'Master topics one chapter at a time',
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      id: 'full-year',
      title: 'Full Year Papers',
      description: 'Practice with complete previous year papers (2005-2024)',
      icon: <Clock className="w-8 h-8 text-white" />,
      color: 'from-emerald-500 to-emerald-600',
      shadowColor: 'shadow-emerald-500/20',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {subject} Practice
            </h1>
            <p className="text-xl text-gray-600">
              Select the practice mode that best suits your preparation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modes.map((mode) => (
              <PracticeModeCard
                key={mode.id}
                {...mode}
                onClick={() =>
                  onModeSelect(
                    mode.id as 'simplified' | 'chapter-wise' | 'full-year'
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
