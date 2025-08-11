import React, { useState } from 'react';
import { FileText, Plus, Download, Filter, Calendar, BarChart3 } from 'lucide-react';

const CustomReports: React.FC = () => {
  const [selectedReportType, setSelectedReportType] = useState('');

  const savedReports = [
    {
      id: 1,
      name: 'Monthly Sales Report',
      type: 'Sales',
      lastRun: '2024-01-15',
      frequency: 'Monthly',
      format: 'PDF'
    },
    {
      id: 2,
      name: 'Campaign Performance Summary',
      type: 'Marketing',
      lastRun: '2024-01-14',
      frequency: 'Weekly',
      format: 'Excel'
    },
    {
      id: 3,
      name: 'Lead Conversion Analysis',
      type: 'Analytics',
      lastRun: '2024-01-13',
      frequency: 'Daily',
      format: 'PDF'
    }
  ];

  const reportTemplates = [
    {
      name: 'Sales Performance',
      description: 'Comprehensive sales metrics and trends',
      category: 'Sales'
    },
    {
      name: 'Marketing ROI',
      description: 'Return on investment for marketing campaigns',
      category: 'Marketing'
    },
    {
      name: 'Customer Journey',
      description: 'Track customer interactions and touchpoints',
      category: 'Analytics'
    },
    {
      name: 'Revenue Forecast',
      description: 'Projected revenue based on current pipeline',
      category: 'Finance'
    }
  ];

  const handleCreateReport = () => {
    console.log('Demo: Create report clicked');
    alert('Demo: This would open the report builder');
  };

  const handleRunReport = (reportId: number) => {
    console.log(`Demo: Run report ${reportId}`);
    alert('Demo: This would generate and download the report');
  };

  const handleScheduleReport = (reportId: number) => {
    console.log(`Demo: Schedule report ${reportId}`);
    alert('Demo: This would open the scheduling options');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
            <FileText className="h-8 w-8 text-orange-600" />
            <span>Custom Reports</span>
          </h1>
          <p className="text-gray-600 mt-1">Generate custom business reports and analytics</p>
        </div>
        <button
          onClick={handleCreateReport}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Create Report</span>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Reports</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Scheduled Reports</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Downloaded</p>
              <p className="text-2xl font-bold text-gray-900">142</p>
            </div>
            <Download className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Data Sources</p>
              <p className="text-2xl font-bold text-gray-900">6</p>
            </div>
            <BarChart3 className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Builder */}
        <div className="lg:col-span-2 space-y-6">
          {/* Saved Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Saved Reports</h3>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm transition-colors">
                    <Filter className="h-4 w-4 inline mr-1" />
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Report Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Run
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {savedReports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{report.name}</div>
                            <div className="text-sm text-gray-500">{report.frequency} • {report.format}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {report.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {report.lastRun}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleRunReport(report.id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Run
                            </button>
                            <button
                              onClick={() => handleScheduleReport(report.id)}
                              className="text-green-600 hover:text-green-900"
                            >
                              Schedule
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Report Builder Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Report Builder</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Report Type
                  </label>
                  <select
                    value={selectedReportType}
                    onChange={(e) => setSelectedReportType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select report type...</option>
                    <option value="sales">Sales Report</option>
                    <option value="marketing">Marketing Report</option>
                    <option value="analytics">Analytics Report</option>
                    <option value="custom">Custom Report</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Range
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500">
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>Last year</option>
                      <option>Custom range</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Format
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500">
                      <option>PDF</option>
                      <option>Excel</option>
                      <option>CSV</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => alert('Demo: This would generate the report')}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Report Templates */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Report Templates</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {reportTemplates.map((template, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => alert(`Demo: Using ${template.name} template`)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{template.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{template.description}</p>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2">
                          {template.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Downloads */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Downloads</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {[
                  { name: 'Sales Report Q1.pdf', date: '2024-01-15' },
                  { name: 'Campaign Analysis.xlsx', date: '2024-01-14' },
                  { name: 'Lead Report.csv', date: '2024-01-13' }
                ].map((download, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{download.name}</p>
                        <p className="text-xs text-gray-500">{download.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-900 text-sm">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomReports;