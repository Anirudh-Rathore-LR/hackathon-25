import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Home, 
  Mail, 
  Users, 
  BarChart3, 
  FileText,
  ChevronRight,
  Share2,
  Zap,
  Headphones,
  Package,
  TrendingUp,
  FolderOpen,
  Users2,
  Settings
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
    },
    {
      name: 'Social Media',
      icon: Share2,
      path: '/social-media',
      feature: AVAILABLE_FEATURES.SOCIAL_MEDIA_MANAGEMENT
    },
    {
      name: 'Task Automation',
      icon: Zap,
      path: '/automation',
      feature: AVAILABLE_FEATURES.TASK_AUTOMATION
    },
    {
      name: 'Customer Support',
      icon: Headphones,
      path: '/support',
      feature: AVAILABLE_FEATURES.CUSTOMER_SUPPORT
    },
    {
      name: 'Sales Forecasting',
      icon: TrendingUp,
      path: '/forecasting',
      feature: AVAILABLE_FEATURES.SALES_FORECASTING
    }
  ];

  const filteredItems = menuItems.filter(item => 
    !item.feature || hasFeature(item.feature)
  );

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 bg-white/50 backdrop-blur-xl border-r border-gray-200/50">
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
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-r-2 border-blue-600 text-blue-700 shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50'
                  } group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:shadow-sm hover:scale-[1.02] mx-1`}
                >
                  <Icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? 'animate-pulse' : ''}`} />
                  {item.name}
                  {isActive && <ChevronRight className="ml-auto h-4 w-4 animate-bounce" />}
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