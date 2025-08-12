import React, { useState } from 'react';
import { Zap, Plus, Play, Pause, Settings, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AVAILABLE_FEATURES } from '../types/auth';

const TaskAutomation: React.FC = () => {
  const { hasFeature } = useAuth();
  const [activeTab, setActiveTab] = useState('workflows');

  if (!hasFeature(AVAILABLE_FEATURES.TASK_AUTOMATION)) {
    return (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Feature Not Enabled</h2>
          <p className="text-gray-600">The Task Automation feature is not enabled on your account.</p>
        </div>
      </div>
    );
  }

  const workflows = [
    {
      id: 1,
      name: 'Lead Nurturing Sequence',
      description: 'Automatically send follow-up emails to new leads',
      status: 'Active',
      triggers: 3,
      actions: 5,
      lastRun: '2024-01-15 14:30'
    },
    {
      id: 2,
      name: 'Customer Onboarding',
      description: 'Welcome new customers with automated tasks',
      status: 'Active',
      triggers: 2,
      actions: 8,
      lastRun: '2024-01-15 12:15'
    },
    {
      id: 3,
      name: 'Invoice Reminder',
      description: 'Send payment reminders for overdue invoices',
      status: 'Paused',
      triggers: 1,
      actions: 3,
      lastRun: '2024-01-14 09:00'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Paused': return 'bg-yellow-100 text-yellow-800';
      case 'Error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
            <Zap className="h-8 w-8 text-yellow-600" />
            <span>Task Automation</span>
          </h1>
          <p className="text-gray-600 mt-1">Automate repetitive tasks and workflows</p>
        </div>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create Workflow</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Workflows</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tasks Automated</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
            <Zap className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Time Saved</p>
              <p className="text-2xl font-bold text-gray-900">156h</p>
            </div>
            <Clock className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">98.5%</p>
            </div>
            <AlertCircle className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Workflows Management */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['workflows', 'templates', 'logs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'workflows' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">All Workflows</h2>
              </div>

              <div className="space-y-4">
                {workflows.map((workflow) => (
                  <div key={workflow.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{workflow.name}</h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(workflow.status)}`}>
                            {workflow.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{workflow.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <span>{workflow.triggers} triggers</span>
                          <span>{workflow.actions} actions</span>
                          <span>Last run: {workflow.lastRun}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                          <Play className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-yellow-600 transition-colors">
                          <Pause className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <Settings className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="text-center py-12">
              <Zap className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Workflow Templates</h3>
              <p className="mt-1 text-sm text-gray-500">Pre-built templates to get you started quickly.</p>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Execution Logs</h3>
              <p className="mt-1 text-sm text-gray-500">View detailed logs of workflow executions.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskAutomation;