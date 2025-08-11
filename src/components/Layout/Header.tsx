import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Building2, LogOut, User } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">CRM Pro</h1>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User className="h-4 w-4" />
              <span>{user?.name}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;