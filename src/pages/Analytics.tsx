import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, Mail, Activity } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AVAILABLE_FEATURES } from '../types/auth';

const Analytics: React.FC = () => {
  const { hasFeature } = useAuth();

  if (!hasFeature(AVAILABLE_FEATURES.ANALYTICS_DASHBOARD)) {
    return (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Feature Not Enabled</h2>
          <p className="text-gray-600">The Analytics Dashboard feature is not enabled on your account.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
          <BarChart3 className="h-8 w-8 text-purple-600" />
          <span>Analytics Dashboard</span>
        </h1>
        <p className="text-gray-600 mt-1">View detailed performance analytics and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$124,592</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500 font-medium">+12.5%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New Customers</p>
              <p className="text-2xl font-bold text-gray-900">342</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500 font-medium">+8.2%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Email Open Rate</p>
              <p className="text-2xl font-bold text-gray-900">24.8%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-sm text-red-500 font-medium">-2.1%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">3.24%</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500 font-medium">+0.8%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Revenue chart visualization</p>
              <p className="text-sm text-gray-400">Demo: Chart would render here</p>
            </div>
          </div>
        </div>

        {/* Customer Acquisition */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Customer Acquisition</h3>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>This month</option>
              <option>This quarter</option>
              <option>This year</option>
            </select>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Customer acquisition chart</p>
              <p className="text-sm text-gray-400">Demo: Chart would render here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Campaigns */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Campaigns</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: 'Summer Sale 2024', performance: '89%', revenue: '$15,240' },
                { name: 'Product Launch', performance: '76%', revenue: '$12,890' },
                { name: 'Black Friday', performance: '92%', revenue: '$28,450' },
                { name: 'Newsletter #47', performance: '68%', revenue: '$8,760' }
              ].map((campaign, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{campaign.name}</p>
                    <p className="text-xs text-gray-500">Performance: {campaign.performance}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">{campaign.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Lead Sources</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { source: 'Organic Search', leads: 142, percentage: '38%' },
                { source: 'Social Media', leads: 89, percentage: '24%' },
                { source: 'Email Marketing', leads: 76, percentage: '20%' },
                { source: 'Direct Traffic', leads: 45, percentage: '12%' },
                { source: 'Referrals', leads: 23, percentage: '6%' }
              ].map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-900">{source.source}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{source.leads} leads</span>
                    <span className="text-sm font-medium text-gray-900">{source.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h4 className="font-medium text-blue-900">Increase Conversions</h4>
            </div>
            <p className="text-sm text-blue-700">
              Your email open rates are down 2.1%. Consider A/B testing subject lines.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-5 w-5 text-green-600" />
              <h4 className="font-medium text-green-900">Scale Successful Campaigns</h4>
            </div>
            <p className="text-sm text-green-700">
              Your Black Friday campaign performed 92% above average. Consider similar offers.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-5 w-5 text-orange-600" />
              <h4 className="font-medium text-orange-900">Optimize Lead Sources</h4>
            </div>
            <p className="text-sm text-orange-700">
              Organic search is your top source. Invest more in SEO and content marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;