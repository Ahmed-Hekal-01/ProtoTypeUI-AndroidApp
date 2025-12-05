import { useState } from 'react';
import { Search, Filter, AlertCircle, Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react';

export default function AdminComplaints() {
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'in-progress' | 'resolved'>('all');

  const complaints = [
    {
      id: 1,
      title: 'AC not working in Study Room B-204',
      description: 'The air conditioning has been broken for 3 days. Room is too hot to study.',
      reportedBy: 'Sarah Johnson',
      date: 'Nov 25, 2025',
      facility: 'Study Room B-204',
      category: 'Maintenance',
      status: 'in-progress',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Broken whiteboard marker in Court A',
      description: 'Need new whiteboard markers for basketball court planning sessions.',
      reportedBy: 'Michael Chen',
      date: 'Nov 20, 2025',
      facility: 'Basketball Court A',
      category: 'Equipment',
      status: 'resolved',
      priority: 'low',
    },
    {
      id: 3,
      title: 'Poor lighting in Football Field',
      description: 'Half of the lights are not working during evening games.',
      reportedBy: 'Emma Williams',
      date: 'Nov 28, 2025',
      facility: 'Football Field',
      category: 'Maintenance',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 4,
      title: 'WiFi connection issues in Conference Room',
      description: 'WiFi keeps disconnecting during important meetings.',
      reportedBy: 'James Brown',
      date: 'Nov 27, 2025',
      facility: 'Conference Room A',
      category: 'Technical',
      status: 'in-progress',
      priority: 'medium',
    },
    {
      id: 5,
      title: 'Broken chair in Study Hall',
      description: 'One of the chairs has a broken leg and is unsafe to use.',
      reportedBy: 'Lisa Wang',
      date: 'Nov 26, 2025',
      facility: 'Open Study Hall A',
      category: 'Equipment',
      status: 'resolved',
      priority: 'medium',
    },
  ];

  const filteredComplaints = complaints.filter(c => 
    statusFilter === 'all' || c.status === statusFilter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: Clock };
      case 'in-progress': return { bg: 'bg-blue-100', text: 'text-blue-700', icon: AlertCircle };
      case 'resolved': return { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', icon: AlertCircle };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-orange-100 text-orange-700';
      case 'low': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2 text-gray-800">Complaints Management</h1>
        <p className="text-gray-600">Track and resolve facility issues</p>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-gray-600">Total Complaints</span>
          </div>
          <p className="text-3xl text-gray-800">{complaints.length}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-gray-600">Pending</span>
          </div>
          <p className="text-3xl text-gray-800">
            {complaints.filter(c => c.status === 'pending').length}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
          <p className="text-3xl text-gray-800">
            {complaints.filter(c => c.status === 'in-progress').length}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Resolved</span>
          </div>
          <p className="text-3xl text-gray-800">
            {complaints.filter(c => c.status === 'resolved').length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search complaints..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none shadow-sm"
          />
        </div>
        <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              statusFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter('pending')}
            className={`px-4 py-2 rounded-lg transition-all ${
              statusFilter === 'pending'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setStatusFilter('in-progress')}
            className={`px-4 py-2 rounded-lg transition-all ${
              statusFilter === 'in-progress'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatusFilter('resolved')}
            className={`px-4 py-2 rounded-lg transition-all ${
              statusFilter === 'resolved'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Resolved
          </button>
        </div>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        {filteredComplaints.map((complaint) => {
          const statusStyle = getStatusColor(complaint.status);
          const StatusIcon = statusStyle.icon;
          
          return (
            <div
              key={complaint.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-gray-800">{complaint.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${getPriorityColor(complaint.priority)}`}>
                      {complaint.priority} priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{complaint.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Reported by: {complaint.reportedBy}</span>
                    <span>•</span>
                    <span>{complaint.date}</span>
                    <span>•</span>
                    <span className="text-blue-600">{complaint.facility}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                      {complaint.category}
                    </span>
                  </div>
                </div>
                <div className={`px-4 py-2 ${statusStyle.bg} ${statusStyle.text} rounded-lg flex items-center gap-2`}>
                  <StatusIcon className="w-4 h-4" />
                  <span className="text-sm capitalize">{complaint.status.replace('-', ' ')}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-100">
                {complaint.status === 'pending' && (
                  <>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Mark In Progress
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Contact Reporter
                    </button>
                  </>
                )}
                {complaint.status === 'in-progress' && (
                  <>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                      Mark Resolved
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Send Update
                    </button>
                  </>
                )}
                {complaint.status === 'resolved' && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    View Details
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
