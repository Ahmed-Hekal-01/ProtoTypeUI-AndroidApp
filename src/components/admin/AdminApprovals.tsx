import { useState } from 'react';
import { Search, Filter, Calendar, Clock, MapPin, Users, Building2, CheckCircle, XCircle, Eye } from 'lucide-react';

export default function AdminApprovals() {
  const [filter, setFilter] = useState<'all' | 'events' | 'sessions'>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const pendingItems = [
    {
      id: 1,
      type: 'Event',
      title: 'AI & Machine Learning Workshop',
      club: 'Tech Club',
      clubIcon: '💻',
      date: 'Dec 5, 2025',
      time: '3:00 PM - 6:00 PM',
      location: 'Engineering Building - Room 201',
      capacity: 60,
      expectedAttendees: 45,
      targetAudience: ['Club Members', 'Engineering Faculty'],
      description: 'Learn the fundamentals of AI and build your first ML model with hands-on exercises.',
      submittedDate: 'Nov 25, 2025',
      priority: 'high',
      facilitiesRequired: ['Projector', 'Whiteboard', 'WiFi'],
    },
    {
      id: 2,
      type: 'Session',
      title: 'Weekly Coding Session',
      club: 'Tech Club',
      clubIcon: '💻',
      date: 'Dec 3, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Library - Conference Room',
      capacity: 40,
      expectedAttendees: 32,
      targetAudience: ['Club Members Only'],
      description: 'Practice coding challenges and collaborative problem-solving.',
      submittedDate: 'Nov 26, 2025',
      priority: 'medium',
      facilitiesRequired: ['Whiteboard', 'WiFi'],
    },
    {
      id: 3,
      type: 'Event',
      title: 'Annual Cultural Festival',
      club: 'Arts Club',
      clubIcon: '🎨',
      date: 'Dec 10, 2025',
      time: '10:00 AM - 8:00 PM',
      location: 'Main Campus Plaza',
      capacity: 500,
      expectedAttendees: 350,
      targetAudience: ['All Students', 'All Faculties'],
      description: 'Celebrate diversity with performances, food stalls, and cultural activities.',
      submittedDate: 'Nov 20, 2025',
      priority: 'high',
      facilitiesRequired: ['Sound System', 'Tents', 'Power Supply', 'Security'],
    },
    {
      id: 4,
      type: 'Event',
      title: 'Startup Networking Mixer',
      club: 'Entrepreneurship Club',
      clubIcon: '🚀',
      date: 'Dec 8, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Business School Lounge',
      capacity: 80,
      expectedAttendees: 65,
      targetAudience: ['Club Members', 'Business Faculty'],
      description: 'Connect with fellow entrepreneurs, mentors, and potential investors.',
      submittedDate: 'Nov 28, 2025',
      priority: 'medium',
      facilitiesRequired: ['Projector', 'Mic System', 'Catering Setup'],
    },
  ];

  const filteredItems = pendingItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'events') return item.type === 'Event';
    if (filter === 'sessions') return item.type === 'Session';
    return true;
  });

  const handleViewDetails = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2 text-gray-800">Event & Session Approvals</h1>
        <p className="text-gray-600">Review and approve club requests</p>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title, club name..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none shadow-sm"
          />
        </div>
        <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All ({pendingItems.length})
          </button>
          <button
            onClick={() => setFilter('events')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'events'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Events ({pendingItems.filter(i => i.type === 'Event').length})
          </button>
          <button
            onClick={() => setFilter('sessions')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'sessions'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Sessions ({pendingItems.filter(i => i.type === 'Session').length})
          </button>
        </div>
      </div>

      {/* Pending Items Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.clubIcon}</span>
                  <div>
                    <span className={`inline-block px-2 py-1 rounded text-xs mb-2 ${
                      item.type === 'Event'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type}
                    </span>
                    <h3 className="text-lg text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.club}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  item.priority === 'high'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.priority} priority
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{item.description}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{item.expectedAttendees}/{item.capacity} expected</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 bg-gray-50 space-y-3">
              <div>
                <p className="text-xs text-gray-600 mb-2">Target Audience</p>
                <div className="flex flex-wrap gap-1">
                  {item.targetAudience.map((audience: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-2">Facilities Required</p>
                <div className="flex flex-wrap gap-1">
                  {item.facilitiesRequired.map((facility: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-500">Submitted: {item.submittedDate}</p>
            </div>

            {/* Actions */}
            <div className="p-4 bg-white flex gap-2">
              <button
                onClick={() => handleViewDetails(item)}
                className="flex-1 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Details</span>
              </button>
              <button className="flex-1 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                <XCircle className="w-4 h-4" />
                <span>Decline</span>
              </button>
              <button className="flex-1 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Approve</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-gray-800">Request Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedItem.clubIcon}</span>
                <div>
                  <h3 className="text-xl text-gray-800">{selectedItem.title}</h3>
                  <p className="text-gray-600">{selectedItem.club}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Description</p>
                  <p className="text-gray-800">{selectedItem.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mb-1">Date</p>
                    <p className="text-gray-800">{selectedItem.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Time</p>
                    <p className="text-gray-800">{selectedItem.time}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 mb-1">Location</p>
                  <p className="text-gray-800">{selectedItem.location}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mb-1">Capacity</p>
                    <p className="text-gray-800">{selectedItem.capacity} people</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Expected Attendees</p>
                    <p className="text-gray-800">{selectedItem.expectedAttendees}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 mb-2">Target Audience</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.targetAudience.map((audience: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 mb-2">Facilities Required</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.facilitiesRequired.map((facility: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Decline Request
                </button>
                <button className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Approve Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
