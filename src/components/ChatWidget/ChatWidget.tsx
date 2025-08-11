import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { AVAILABLE_FEATURES } from '../../types/auth';

const ChatWidget: React.FC = () => {
  const { hasFeature } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Only show if user has chat support feature
  if (!hasFeature(AVAILABLE_FEATURES.CHAT_SUPPORT)) {
    return null;
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Demo: Message sent:', message);
      setMessage('');
      // In a real app, this would send the message to the chat service
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="font-semibold">Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 rounded-full p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-blue-600">Support:</span> How can I help you today?
              </p>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors self-end"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;