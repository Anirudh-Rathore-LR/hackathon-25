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
  Activity,
  Share2,
  Zap,
  Headphones,
  Package,
  FolderOpen,
  Users2,
  Settings,
  Sparkles,
  Star
  Activity,
  Share2,
  Zap,
  Headphones,
  Package,
  FolderOpen,
  Users2,
  Settings,
  Sparkles,
  Star
} from 'lucide-react';
import { AVAILABLE_FEATURES } from '../types/auth';

const Dashboard: React.FC = () => {
  const { hasFeature, user, isLoading } = useAuth();
  const navigate = useNavigate();

  const featureCards = [
    {
      title: 'Email Campaigns',
      description: 'Create and manage email marketing campaigns',
      icon: Mail,
      path: '/email-campaigns',
      feature: AVAILABLE_FEATURES.EMAIL_CAMPAIGNS,
      gradient: 'from-blue-500 to-blue-600',
      stats: '12 Active',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      title: 'Lead Management',
      description: 'Track and nurture your sales leads',
      icon: Users,
      path: '/lead-management',
      feature: AVAILABLE_FEATURES.LEAD_MANAGEMENT,
      gradient: 'from-green-500 to-green-600',
      stats: '248 Leads',
      bgGradient: 'from-green-50 to-green-100'
    },
    {
      title: 'Analytics Dashboard',
      description: 'View detailed performance analytics',
      icon: BarChart3,
      path: '/analytics',
      feature: AVAILABLE_FEATURES.ANALYTICS_DASHBOARD,
      gradient: 'from-purple-500 to-purple-600',
      stats: '89% Growth',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      title: 'Custom Reports',
      description: 'Generate custom business reports',
      icon: FileText,
      path: '/reports',
      feature: AVAILABLE_FEATURES.CUSTOM_REPORTS,
      gradient: 'from-orange-500 to-orange-600',
      stats: '15 Reports',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      title: 'Social Media Management',
      description: 'Manage all your social media accounts',
      icon: Share2,
      path: '/social-media',
      feature: AVAILABLE_FEATURES.SOCIAL_MEDIA_MANAGEMENT,
      gradient: 'from-pink-500 to-pink-600',
      stats: '8 Platforms',
      bgGradient: 'from-pink-50 to-pink-100'
    },
    {
      title: 'Task Automation',
      description: 'Automate repetitive business processes',
      icon: Zap,
      path: '/automation',
      feature: AVAILABLE_FEATURES.TASK_AUTOMATION,
      gradient: 'from-yellow-500 to-yellow-600',
      stats: '24 Workflows',
      bgGradient: 'from-yellow-50 to-yellow-100'
    },
    {
      title: 'Customer Support',
      description: 'Manage customer inquiries and tickets',
      icon: Headphones,
      path: '/support',
      feature: AVAILABLE_FEATURES.CUSTOMER_SUPPORT,
      gradient: 'from-indigo-500 to-indigo-600',
      stats: '156 Tickets',
      bgGradient: 'from-indigo-50 to-indigo-100'
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales and revenue trends',
      icon: TrendingUp,
      path: '/forecasting',
      feature: AVAILABLE_FEATURES.SALES_FORECASTING,
      gradient: 'from-teal-500 to-teal-600',
      stats: 'Q1 Ready',
      bgGradient: 'from-teal-50 to-teal-100'
    }
  ];

  const availableFeatures = featureCards.filter(card => 
    hasFeature(card.feature)
  );

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your CRM dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="absolute top-4 right-4">
          <Sparkles className="h-8 w-8 text-white/60 animate-pulse" />
        </div>
        <div className="flex items-center justify-between">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-blue-100 text-lg">
              Here's what's happening with your CRM today
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-sm text-blue-100">Premium Account Active</span>
            </div>
          </div>
          <div className="hidden md:block relative z-10">
            <Activity className="h-20 w-20 text-blue-200 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Contacts</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">1,248</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">1,248</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">+12% from last month</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Campaigns</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">12</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-2xl shadow-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <Calendar className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-gray-600 font-medium">3 scheduled this week</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">24.8%</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-2xl shadow-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">+5.2% improvement</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Available Features
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>{availableFeatures.length} features active</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {availableFeatures.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                onClick={() => handleCardClick(card.path)}
                className={`bg-gradient-to-br ${card.bgGradient} rounded-2xl shadow-lg border border-white/50 p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${card.gradient} p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {card.stats}
                      </span>
                      <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
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
        <div className="text-center py-16 animate-fade-in">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full p-8 w-24 h-24 mx-auto mb-6 shadow-lg">
            <FileText className="h-8 w-8 text-gray-400 mx-auto mt-2" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">No features available</h3>
          <p className="text-gray-600 text-lg">Contact your administrator to enable CRM features.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;