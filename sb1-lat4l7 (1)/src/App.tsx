import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import DomainSelection from './components/DomainSelection';
import AIAssistant from './components/AIAssistant';
import PracticeModeSelection from './components/practice/PracticeModeSelection';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [showDomainSelection, setShowDomainSelection] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'practice'>('home');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentView('practice');
    setShowDomainSelection(false);
  };

  const handleModeSelect = (mode: 'simplified' | 'chapter-wise' | 'full-year') => {
    // Handle mode selection - to be implemented
    console.log('Selected mode:', mode);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        {currentView === 'practice' ? (
          <PracticeModeSelection 
            subject={selectedSubject!}
            onModeSelect={handleModeSelect} 
          />
        ) : (
          <>
            <Hero onGetStarted={() => setShowDomainSelection(true)} />
            <Features />
          </>
        )}
        <DomainSelection 
          isOpen={showDomainSelection} 
          onClose={() => setShowDomainSelection(false)}
          onSubjectSelect={handleSubjectSelect}
        />
        <AIAssistant />
      </div>
    </AuthProvider>
  );
}

export default App;