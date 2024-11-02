import React from 'react';
import { X, ArrowLeft, Binary, Beaker, TestTube2, LineChart, Mountain, Calculator, Atom } from 'lucide-react';
import SubjectCard from './SubjectCard';

interface SubjectSelectionProps {
  onBack: () => void;
  onClose: () => void;
  onSubjectSelect: (subject: string) => void;
}

export default function SubjectSelection({ onBack, onClose, onSubjectSelect }: SubjectSelectionProps) {
  const subjects = [
    {
      title: "Mathematics",
      icon: <Calculator className="w-6 h-6 text-white" />,
      description: "Linear Algebra, Calculus, Real Analysis, and more",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Chemistry",
      icon: <Beaker className="w-6 h-6 text-white" />,
      description: "Physical, Organic, and Inorganic Chemistry",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Biotechnology",
      icon: <TestTube2 className="w-6 h-6 text-white" />,
      description: "Molecular Biology, Biochemistry, and Genetics",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Economics",
      icon: <LineChart className="w-6 h-6 text-white" />,
      description: "Microeconomics, Macroeconomics, and Statistics",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Geology",
      icon: <Mountain className="w-6 h-6 text-white" />,
      description: "Mineralogy, Petrology, and Earth Sciences",
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "Mathematical Statistics",
      icon: <Binary className="w-6 h-6 text-white" />,
      description: "Probability Theory and Statistical Methods",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Physics",
      icon: <Atom className="w-6 h-6 text-white" />,
      description: "Classical Mechanics, Quantum Physics, and Electromagnetism",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <div className="bg-white rounded-2xl w-full max-w-5xl m-4 p-6 animate-slideUp">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">IIT JAM Subjects</h2>
            <p className="text-gray-600">Choose your subject to begin preparation</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <SubjectCard 
            key={subject.title} 
            {...subject} 
            onClick={() => onSubjectSelect(subject.title)}
          />
        ))}
      </div>
    </div>
  );
}