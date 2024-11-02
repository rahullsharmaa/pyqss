import React, { useState } from 'react';
import { Brain, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './auth/AuthModal';

export default function NavBar() {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowProfileMenu(false);
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">PYQs.com</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Subjects
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" />
                  ) : (
                    <UserIcon className="w-6 h-6 text-gray-600" />
                  )}
                  <span className="text-gray-700">{user.displayName || user.email}</span>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-100">
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 w-full"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </nav>
  );
}