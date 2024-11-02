import React from 'react';

interface PracticeModeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  shadowColor: string;
  onClick: () => void;
}

export default function PracticeModeCard({
  title,
  description,
  icon,
  color,
  shadowColor,
  onClick
}: PracticeModeCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-8 rounded-2xl bg-gradient-to-br ${color} ${shadowColor} 
        hover:scale-105 transition-all duration-300 text-left group relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
      
      <div className="bg-white/20 rounded-xl p-3 w-fit mb-6">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-white/90">
        {description}
      </p>
    </button>
  );
}