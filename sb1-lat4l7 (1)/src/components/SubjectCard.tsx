import React from 'react';

interface SubjectCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  onClick: () => void;
}

export default function SubjectCard({ title, icon, description, color, onClick }: SubjectCardProps) {
  return (
    <button 
      onClick={onClick}
      className={`p-6 rounded-xl bg-gradient-to-br ${color} hover:scale-105 transition-transform duration-200 text-left w-full`}
    >
      <div className="bg-white/20 rounded-lg p-2 w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </button>
  );
}