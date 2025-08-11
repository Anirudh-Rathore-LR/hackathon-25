import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Home, 
  Mail, 
  Users, 
  BarChart3, 
  MessageCircle, 
  FileText,
  ChevronRight 
} from 'lucide-react';
import { AVAILABLE_FEATURES } from '../../types/auth';

const Sidebar: React.FC = () => {
  const { hasFeature } = useAuth();
  const location = useLocation();

  const menuItems = [
    {
      name: 'Dashboard',
      icon: Home,
      path: '/dashboard',
      feature: null
    },
    {
      name: 'Email Campaigns',
      icon: Mail,
      path: '/email-campaigns',
      feature: AVAILABLE_FEATURES.EMAIL_CAMPAIGNS
    },
    {
      name: 'Lead Management',
      icon: Users,
      path: '/lead-management',
      feature: AVAILABLE_FEATURES.LEAD_MANAGEMENT
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      path: '/analytics',
      feature: AVAILABLE_FEATURES.ANALYTICS_DASHBOARD
    },
    {
      name: 'Custom Reports',
      icon: FileText,
      path: '/reports',
      feature: AVAILABLE_FEATURES.CUSTOM_REPORTS
    }
  ];

  const filteredItems = menuItems.filter(item => 
    !item.feature || hasFeature(item.feature)
  );

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 bg-white border-r border-gray-200">
        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            {filteredItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive
                      ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-150 ease-in-out`}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                  {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;