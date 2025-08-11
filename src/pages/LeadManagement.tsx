import React, { useState } from 'react';
import { Users, Plus, Search, Filter, Mail, Phone, Calendar, DollarSign } from 'lucide-react';

const LeadManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const leads = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc.',
      status: 'Hot',
      value: '$15,000',
      lastContact: '2024-01-15',
      source: 'Website'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 987-6543',
      company: 'Marketing Pro',
      status: 'Warm',
      value: '$8,500',
      lastContact: '2024-01-12',
      source: 'Referral'
    },
    {
      id: 3,
      name: 'Mike Davis',
      email: 'mike.davis@business.com',
      phone: '+1 (555) 456-7890',
      company: 'StartUp Labs',
      status: 'Cold',
      value: '$3,200',
      lastContact: '2024-01-08',
      source: 'LinkedIn'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-100 text-red-800';
      case 'Warm': return 'bg-yellow-100 text-yellow-800';
      case 'Cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddLead = () => {
    console.log('Demo: Add lead clicked');
    alert('Demo: This would open the add lead form');
  };

  const handleContactLead = (leadId: number, method: string) => {
    console.log(`Demo: Contact lead ${leadId} via ${method}`);
    alert(`Demo: This would initiate ${method} contact`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
            <Users className="h-8 w-8 text-green-600" />
            <span>Lead Management</span>
          </h1>
          <p className="text-gray-600 mt-1">Track and nurture your sales leads</p>
        </div>
        <button
          onClick={handleAddLead}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Lead</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">248</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Hot Leads</p>
              <p className="text-2xl font-bold text-gray-900">42</p>
            </div>
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">High priority</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">18.5%</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">+2.3% improvement</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">$1.2M</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Pipeline value</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <select className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500">
              <option>All Status</option>
              <option>Hot</option>
              <option>Warm</option>
              <option>Cold</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">All Leads</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                      <div className="text-sm text-gray-500">{lead.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {lead.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.lastContact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleContactLead(lead.id, 'email')}
                        className="text-blue-600 hover:text-blue-900 p-1"
                        title="Send Email"
                      >
                        <Mail className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleContactLead(lead.id, 'phone')}
                        className="text-green-600 hover:text-green-900 p-1"
                        title="Call"
                      >
                        <Phone className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleContactLead(lead.id, 'meeting')}
                        className="text-purple-600 hover:text-purple-900 p-1"
                        title="Schedule Meeting"
                      >
                        <Calendar className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => alert('Demo: Import leads functionality')}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Import Leads</h3>
              <p className="text-xs text-gray-500">Upload CSV or connect integrations</p>
            </div>
          </div>
        </button>
        
        <button
          onClick={() => alert('Demo: Lead scoring functionality')}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Lead Scoring</h3>
              <p className="text-xs text-gray-500">Set up automated scoring rules</p>
            </div>
          </div>
        </button>
        
        <button
          onClick={() => alert('Demo: Lead nurturing functionality')}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Nurture Campaigns</h3>
              <p className="text-xs text-gray-500">Automated follow-up sequences</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LeadManagement;