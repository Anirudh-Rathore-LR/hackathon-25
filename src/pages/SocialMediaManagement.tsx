import React, { useState } from 'react';
import { Share2, Plus, Calendar, BarChart3, Users, Heart, MessageCircle, Repeat2, Eye } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AVAILABLE_FEATURES } from '../types/auth';

const SocialMediaManagement: React.FC = () => {
  const { hasFeature } = useAuth();
  const [activeTab, setActiveTab] = useState('posts');

  if (!hasFeature(AVAILABLE_FEATURES.SOCIAL_MEDIA_MANAGEMENT)) {
    return (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Feature Not Enabled</h2>
          <p className="text-gray-600">The Social Media Management feature is not enabled on your account.</p>
        </div>
      </div>
    );
  }

  const socialPosts = [
    {
      id: 1,
      platform: 'Facebook',
      content: 'Exciting news! Our Q1 results show 150% growth in customer satisfaction.',
      scheduledTime: '2024-01-20 10:00 AM',
      status: 'Scheduled',
      engagement: { likes: 245, comments: 32, shares: 18 }
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Just launched our new CRM dashboard! Check out the amazing features.',
      scheduledTime: '2024-01-19 2:30 PM',
      status: 'Published',
      engagement: { likes: 89, comments: 12, shares: 24 }
    },
    {
      id: 3,
      platform: 'LinkedIn',
      content: 'Thrilled to announce our partnership with leading tech companies.',
      scheduledTime: '2024-01-18 9:00 AM',
      status: 'Published',
      engagement: { likes: 156, comments: 28, shares: 45 }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
            <Share2 className="h-8 w-8 text-pink-600" />
            <span>Social Media Management</span>
          </h1>
          <p className="text-gray-600 mt-1">Manage all your social media accounts from one place</p>
        </div>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create Post</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Followers</p>
              <p className="text-2xl font-bold text-gray-900">24.5K</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Engagement Rate</p>
              <p className="text-2xl font-bold text-gray-900">8.2%</p>
            </div>
            <Heart className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Posts This Month</p>
              <p className="text-2xl font-bold text-gray-900">42</p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Reach</p>
              <p className="text-2xl font-bold text-gray-900">156K</p>
            </div>
            <Eye className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Content Management */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['posts', 'analytics', 'calendar'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'posts' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
              {socialPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {post.platform}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        post.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{post.scheduledTime}</span>
                  </div>
                  <p className="text-gray-900 mb-3">{post.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.engagement.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Repeat2 className="h-4 w-4" />
                      <span>{post.engagement.shares}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="text-center py-12">
              <BarChart3 className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Social Media Analytics</h3>
              <p className="mt-1 text-sm text-gray-500">Detailed analytics and insights coming soon.</p>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Content Calendar</h3>
              <p className="mt-1 text-sm text-gray-500">Plan and schedule your social media content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;