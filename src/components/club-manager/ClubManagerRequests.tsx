import { Clock, CheckCircle, XCircle, Calendar, Users } from 'lucide-react';

export default function ClubManagerRequests() {
  const requests = [
    {
      id: 1,
      type: 'event',
      name: 'React Workshop 2024',
      date: '2024-12-15',
      startTime: '14:00',
      endTime: '17:00',
      description: 'Introduction to React and modern web development',
      expectedRegistrations: 50,
      status: 'pending',
      submittedDate: 'Dec 1, 2024',
    },
    {
      id: 2,
      type: 'session',
      name: 'Python Basics',
      date: '2024-12-10',
      startTime: '10:00',
      endTime: '12:00',
      description: 'Learn Python programming fundamentals',
      expectedRegistrations: 30,
      isOnline: true,
      status: 'approved',
      submittedDate: 'Nov 28, 2024',
      approvedDate: 'Nov 29, 2024',
    },
    {
      id: 3,
      type: 'event',
      name: 'Annual Tech Fest',
      date: '2024-12-20',
      startTime: '09:00',
      endTime: '18:00',
      description: 'Full day technology festival with workshops and competitions',
      expectedRegistrations: 200,
      status: 'rejected',
      submittedDate: 'Nov 25, 2024',
      rejectedDate: 'Nov 26, 2024',
      rejectionReason: 'Venue not available on selected date',
    },
    {
      id: 4,
      type: 'session',
      name: 'Web Development Bootcamp',
      date: '2024-12-12',
      startTime: '15:00',
      endTime: '18:00',
      description: 'Intensive HTML, CSS, and JavaScript training',
      expectedRegistrations: 40,
      isOnline: false,
      status: 'pending',
      submittedDate: 'Dec 2, 2024',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'approved':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5" />;
      case 'approved':
        return <CheckCircle className="w-5 h-5" />;
      case 'rejected':
        return <XCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const approvedCount = requests.filter(r => r.status === 'approved').length;
  const rejectedCount = requests.filter(r => r.status === 'rejected').length;

  return (
    <div className="p-4 space-y-4 pb-20">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-2 text-gray-800">My Requests</h2>
        <p className="text-gray-600">Track your event and session requests</p>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-yellow-600" />
            <span className="text-xs text-yellow-700 font-medium">Pending</span>
          </div>
          <p className="text-2xl text-yellow-700">{pendingCount}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-700 font-medium">Approved</span>
          </div>
          <p className="text-2xl text-green-700">{approvedCount}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <XCircle className="w-4 h-4 text-red-600" />
            <span className="text-xs text-red-700 font-medium">Rejected</span>
          </div>
          <p className="text-2xl text-red-700">{rejectedCount}</p>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-3">
        <h3 className="text-gray-700 font-semibold">All Requests</h3>
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-xl p-4 shadow-md"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-gray-800 font-semibold">{request.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    request.type === 'event' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {request.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{request.description}</p>
              </div>
            </div>

            {/* Status Badge */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border mb-3 ${getStatusColor(request.status)}`}>
              {getStatusIcon(request.status)}
              <span className="text-sm font-medium capitalize">{request.status}</span>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{request.date} • {request.startTime} - {request.endTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Expected: {request.expectedRegistrations} registrations</span>
              </div>
              {request.type === 'session' && request.isOnline !== undefined && (
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    request.isOnline ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {request.isOnline ? 'Online' : 'In-person'}
                  </span>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="pt-3 border-t border-gray-100 space-y-1 text-xs text-gray-500">
              <div>Submitted: {request.submittedDate}</div>
              {request.status === 'approved' && request.approvedDate && (
                <div className="text-green-600">Approved: {request.approvedDate}</div>
              )}
              {request.status === 'rejected' && request.rejectedDate && (
                <>
                  <div className="text-red-600">Rejected: {request.rejectedDate}</div>
                  {request.rejectionReason && (
                    <div className="text-red-600 mt-2 p-2 bg-red-50 rounded">
                      <strong>Reason:</strong> {request.rejectionReason}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
