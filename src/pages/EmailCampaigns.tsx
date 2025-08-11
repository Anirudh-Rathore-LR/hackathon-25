
import React, { useState } from 'react';
import { Mail, Plus, Send, Edit, Trash2, Calendar, Users, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AVAILABLE_FEATURES } from '../types/auth';

const EmailCampaigns: React.FC = () => {
  const { hasFeature } = useAuth();
  const [activeTab, setActiveTab] = useState('campaigns');

  if (!hasFeature(AVAILABLE_FEATURES.EMAIL_CAMPAIGNS)) {
    return (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Feature Not Enabled</h2>
          <p className="text-gray-600">The Email Campaigns feature is not enabled on your account.</p>
        </div>
      </div>
    );
  }

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      status: 'Active',
      recipients: 1250,
      openRate: '24.5%',
      clickRate: '3.2%',
      sentDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Product Launch Announcement',
      status: 'Scheduled',
      recipients: 2100,
      openRate: '-',
      clickRate: '-',
      sentDate: '2024-01-20'
    },
    {
      id: 3,
      name: 'Customer Feedback Survey',
      status: 'Draft',
      recipients: 800,
      openRate: '-',
      clickRate: '-',
      sentDate: '-'
    }
  ];

  const handleCreateCampaign = () => {
    console.log('Demo: Create campaign clicked');
    alert('Demo: This would open the campaign creation wizard');
  };

  const handleManageCampaign = (id: number, action: string) => {
    console.log(`Demo: ${action} campaign ${id}`);
    alert(`Demo: This would ${action} the campaign`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
            <Mail className="h-8 w-8 text-blue-600" />
            <span>Email Campaigns</span>
          </h1>
          <p className="text-gray-600 mt-1">Create, manage, and track your email marketing campaigns</p>
        </div>
        <button
          onClick={handleCreateCampaign}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Create Campaign</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Mail className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Recipients</p>
              <p className="text-2xl font-bold text-gray-900">4,150</p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Open Rate</p>
              <p className="text-2xl font-bold text-gray-900">26.8%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Click Rate</p>
              <p className="text-2xl font-bold text-gray-900">4.2%</p>
            </div>
            <Send className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['campaigns', 'templates', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'campaigns' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">All Campaigns</h2>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm transition-colors">
                    Filter
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm transition-colors">
                    Sort
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Campaign
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recipients
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Open Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Click Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {campaign.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {campaign.sentDate !== '-' ? `Sent: ${campaign.sentDate}` : 'Not sent'}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {campaign.recipients.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {campaign.openRate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {campaign.clickRate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleManageCampaign(campaign.id, 'edit')}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleManageCampaign(campaign.id, 'duplicate')}
                              className="text-green-600 hover:text-green-900"
                            >
                              <Send className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleManageCampaign(campaign.id, 'delete')}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="text-center py-12">
              <Mail className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No email templates</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new email template.</p>
              <div className="mt-6">
                <button
                  onClick={() => alert('Demo: Template creation would open here')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Create Template
                </button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Campaign Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Default Sender</h4>
                      <p className="text-sm text-gray-600">campaigns@company.com</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                      Edit
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Tracking</h4>
                      <p className="text-sm text-gray-600">Email opens and clicks are being tracked</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCampaigns;