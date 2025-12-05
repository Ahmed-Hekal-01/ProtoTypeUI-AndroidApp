import { Download, Calendar, TrendingUp, Users, Building2, Activity } from 'lucide-react';

export default function AdminReports() {
  const reportTypes = [
    { name: 'Student Activity Report', icon: Users, description: 'Detailed report on student engagement and activities', color: 'bg-blue-500' },
    { name: 'Facility Usage Report', icon: Building2, description: 'Analysis of facility bookings and utilization rates', color: 'bg-green-500' },
    { name: 'Club Performance Report', icon: TrendingUp, description: 'Metrics on club activities, events, and member growth', color: 'bg-purple-500' },
    { name: 'Event Analytics Report', icon: Calendar, description: 'Attendance and engagement data for all events', color: 'bg-orange-500' },
    { name: 'System Activity Report', icon: Activity, description: 'Overall system usage and performance metrics', color: 'bg-indigo-500' },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2 text-gray-800">Reports & Analytics</h1>
        <p className="text-gray-600">Generate and download system reports</p>
      </div>

      {/* Quick Stats */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">Total Bookings This Month</p>
          <p className="text-3xl text-gray-800">1,234</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">Events Completed</p>
          <p className="text-3xl text-gray-800">156</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">Average Attendance</p>
          <p className="text-3xl text-gray-800">87%</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">Active Users</p>
          <p className="text-3xl text-gray-800">2,421</p>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid lg:grid-cols-2 gap-6">
        {reportTypes.map((report, idx) => {
          const Icon = report.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${report.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-800 mb-1">{report.name}</h3>
                  <p className="text-sm text-gray-600">{report.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Date Range</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg outline-none text-sm">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Last 3 Months</option>
                    <option>This Year</option>
                    <option>Custom Range</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Format</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg outline-none text-sm">
                    <option>PDF</option>
                    <option>Excel (XLSX)</option>
                    <option>CSV</option>
                  </select>
                </div>

                <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Generate Report
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-xl text-gray-800 mb-4">Recent Reports</h2>
        <div className="space-y-3">
          {[
            { name: 'Monthly Activity Report - November 2025', date: 'Dec 1, 2025', size: '2.4 MB' },
            { name: 'Facility Usage Report - Q4 2025', date: 'Nov 28, 2025', size: '1.8 MB' },
            { name: 'Club Performance Report - Fall Semester', date: 'Nov 25, 2025', size: '3.1 MB' },
          ].map((report, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div>
                <p className="text-sm text-gray-800 mb-1">{report.name}</p>
                <p className="text-xs text-gray-600">{report.date} • {report.size}</p>
              </div>
              <button className="p-2 hover:bg-white rounded-lg transition-colors">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
