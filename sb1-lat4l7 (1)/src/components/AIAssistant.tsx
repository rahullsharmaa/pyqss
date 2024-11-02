import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-medium">AI Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-96 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4 max-w-[80%]">
              👋 Hi! I'm your AI study assistant. How can I help you today?
            </div>
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-indigo-300"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}