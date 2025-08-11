import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Users, 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  Activity
} from 'lucide-react';
import { AVAILABLE_FEATURES } from '../types/auth';

const Dashboard: React.FC = () => {
  const { hasFeature, user } = useAuth();
  const navigate = useNavigate();

  const featureCards = [
    {
      title: 'Email Campaigns',
      description: 'Create and manage email marketing campaigns',
      icon: Mail,
      path: '/email-campaigns',
      feature: AVAILABLE_FEATURES.EMAIL_CAMPAIGNS,
      color: 'bg-blue-500',
      stats: '12 Active'
    },
    {
      title: 'Lead Management',
      description: 'Track and nurture your sales leads',
      icon: Users,
      path: '/lead-management',
      feature: AVAILABLE_FEATURES.LEAD_MANAGEMENT,
      color: 'bg-green-500',
      stats: '248 Leads'
    },
    {
      title: 'Analytics Dashboard',
      description: 'View detailed performance analytics',
      icon: BarChart3,
      path: '/analytics',
      feature: AVAILABLE_FEATURES.ANALYTICS_DASHBOARD,
      color: 'bg-purple-500',
      stats: '89% Growth'
    },
    {
      title: 'Custom Reports',
      description: 'Generate custom business reports',
      icon: FileText,
      path: '/reports',
      feature: AVAILABLE_FEATURES.CUSTOM_REPORTS,
      color: 'bg-orange-500',
      stats: '15 Reports'
    }
  ];

  const availableFeatures = featureCards.filter(card => 
    hasFeature(card.feature)
  );

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-blue-100">
              Here's what's happening with your CRM today
            </p>
          </div>
          <div className="hidden md:block">
            <Activity className="h-16 w-16 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-900">1,248</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">+12% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <Calendar className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-gray-600">3 scheduled this week</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">24.8%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">+5.2% improvement</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Available Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {availableFeatures.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                onClick={() => handleCardClick(card.path)}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${card.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">
                        {card.stats}
                      </span>
                      <span className="text-xs text-gray-500">
                        Click to explore
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* No Features Available */}
      {availableFeatures.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
            <FileText className="h-8 w-8 text-gray-400 mx-auto mt-2" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No features available</h3>
          <p className="text-gray-600">Contact your administrator to enable CRM features.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;