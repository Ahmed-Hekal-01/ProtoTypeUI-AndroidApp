import { useState } from 'react';
import { Search, Download, Filter, Users, Mail, Phone, CheckCircle, Clock, Calendar } from 'lucide-react';

export default function ClubManagerAttendees() {
  const [selectedEvent, setSelectedEvent] = useState<string>('ai-workshop');
  const [viewMode, setViewMode] = useState<'registered' | 'attended'>('registered');

  const events = [
    { id: 'ai-workshop', name: 'AI & Machine Learning Workshop', date: 'Dec 5', status: 'upcoming' },
    { id: 'web-dev', name: 'Web Development Basics', date: 'Dec 3', status: 'upcoming' },
    { id: 'coding-session', name: 'Weekly Coding Session', date: 'Nov 28', status: 'completed' },
  ];

  const registeredList = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@university.edu',
      faculty: 'Computer Science',
      registeredDate: 'Nov 25, 2025',
      status: 'confirmed',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@university.edu',
      faculty: 'Engineering',
      registeredDate: 'Nov 26, 2025',
      status: 'confirmed',
    },
    {
      id: 3,
      name: 'Emma Williams',
      email: 'emma.w@university.edu',
      faculty: 'Business',
      registeredDate: 'Nov 27, 2025',
      status: 'confirmed',
    },
    {
      id: 4,
      name: 'James Brown',
      email: 'james.b@university.edu',
      faculty: 'Computer Science',
      registeredDate: 'Nov 28, 2025',
      status: 'waitlist',
    },
  ];

  const attendedList = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@university.edu',
      checkInTime: '2:55 PM',
      feedback: 'Excellent',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@university.edu',
      checkInTime: '3:02 PM',
      feedback: 'Good',
    },
    {
      id: 3,
      name: 'Emma Williams',
      email: 'emma.w@university.edu',
      checkInTime: '3:10 PM',
      feedback: 'Excellent',
    },
  ];

  const currentEvent = events.find(e => e.id === selectedEvent);

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-2 text-gray-800">Attendees</h2>
        <p className="text-gray-600">Manage event registrations and check-ins</p>
      </div>

      {/* Event Selector */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <label className="text-sm text-gray-700 mb-2 block">Select Event</label>
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="w-full p-3 bg-gray-50 rounded-lg outline-none"
        >
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name} - {event.date} ({event.status})
            </option>
          ))}
        </select>
      </div>

      {/* Event Status Info */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg">{currentEvent?.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs ${
            currentEvent?.status === 'upcoming' 
              ? 'bg-white/20' 
              : 'bg-green-400/30'
          }`}>
            {currentEvent?.status}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {currentEvent?.date}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {currentEvent?.status === 'upcoming' ? registeredList.length : attendedList.length}/{registeredList.length}
          </span>
        </div>
      </div>

      {/* View Mode Selector */}
      <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm">
        <button
          onClick={() => setViewMode('registered')}
          className={`flex-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${
            viewMode === 'registered'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Clock className="w-4 h-4" />
          Registered ({registeredList.length})
        </button>
        <button
          onClick={() => setViewMode('attended')}
          className={`flex-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${
            viewMode === 'attended'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          Attended ({attendedList.length})
        </button>
      </div>

      {/* Search and Actions */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search attendees..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none shadow-sm"
          />
        </div>
        <button className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-3 bg-purple-600 text-white rounded-xl shadow-sm hover:shadow-md transition-all">
          <Download className="w-5 h-5" />
        </button>
      </div>

      {/* Registered List */}
      {viewMode === 'registered' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700">Registered Attendees</h3>
            <button className="text-sm text-purple-600">Send Update</button>
          </div>
          {registeredList.map((attendee) => (
            <div
              key={attendee.id}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-gray-800">{attendee.name}</h4>
                    {attendee.status === 'confirmed' && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      {attendee.email}
                    </div>
                    <div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                        {attendee.faculty}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  attendee.status === 'confirmed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {attendee.status}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  Registered: {attendee.registeredDate}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Attended List */}
      {viewMode === 'attended' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700">Checked-In Attendees</h3>
            <span className="text-sm text-gray-500">
              {attendedList.length}/{registeredList.length} attended
            </span>
          </div>
          {attendedList.length > 0 ? (
            attendedList.map((attendee) => (
              <div
                key={attendee.id}
                className="bg-white rounded-xl p-4 shadow-md border-l-4 border-green-500"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-gray-800 mb-1">{attendee.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-3 h-3" />
                      {attendee.email}
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>Check-in: {attendee.checkInTime}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    attendee.feedback === 'Excellent'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {attendee.feedback}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No check-ins yet</p>
              <p className="text-sm text-gray-400 mt-1">
                Attendees can check-in when the event starts
              </p>
            </div>
          )}
        </div>
      )}

      {/* Statistics */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="text-gray-700 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl text-purple-600 mb-1">{registeredList.length}</p>
            <p className="text-xs text-gray-600">Total Registered</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-green-600 mb-1">{attendedList.length}</p>
            <p className="text-xs text-gray-600">Attended</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-orange-600 mb-1">
              {Math.round((attendedList.length / registeredList.length) * 100)}%
            </p>
            <p className="text-xs text-gray-600">Attendance Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
