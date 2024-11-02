import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DomainCardProps {
  title: string;
  icon: React.ReactNode;
  exams: string[];
  color: string;
  onExamSelect: (exam: string) => void;
}

export default function DomainCard({ title, icon, exams, color, onExamSelect }: DomainCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
      <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      
      <div className="p-4">
        {exams.map((exam) => (
          <button
            key={exam}
            onClick={() => onExamSelect(exam)}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between group/item"
          >
            <span className="text-gray-700 group-hover/item:text-gray-900">{exam}</span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-gray-600 transform group-hover/item:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>
    </div>
  );
}