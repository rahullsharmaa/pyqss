import React, { useState } from 'react';
import { GraduationCap, BookOpen, Building2, X } from 'lucide-react';
import DomainCard from './DomainCard';
import SubjectSelection from './SubjectSelection';

interface DomainSelectionProps {
  isOpen: boolean;
  onClose: () => void;
  onSubjectSelect: (subject: string) => void;
}

export default function DomainSelection({ isOpen, onClose, onSubjectSelect }: DomainSelectionProps) {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  if (!isOpen) return null;

  const domains = [
    {
      title: "Master's Entrance",
      icon: <GraduationCap className="w-6 h-6" />,
      exams: ["IIT JAM", "GATE", "CMI Entrance"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "UG Entrance",
      icon: <BookOpen className="w-6 h-6" />,
      exams: ["JEE Mains", "CUET", "NEET"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Government Exams",
      icon: <Building2 className="w-6 h-6" />,
      exams: ["UPSC", "SSC", "Banking"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const handleExamSelect = (exam: string) => {
    if (exam === "IIT JAM") {
      setSelectedExam(exam);
    }
  };

  const handleBack = () => {
    setSelectedExam(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      {selectedExam ? (
        <SubjectSelection 
          onBack={handleBack} 
          onClose={onClose}
          onSubjectSelect={onSubjectSelect}
        />
      ) : (
        <div className="bg-white rounded-2xl w-full max-w-4xl m-4 p-6 animate-slideUp">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Choose Your Path</h2>
              <p className="text-gray-600">Select your exam category to get started</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((domain) => (
              <DomainCard 
                key={domain.title} 
                {...domain} 
                onExamSelect={handleExamSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}