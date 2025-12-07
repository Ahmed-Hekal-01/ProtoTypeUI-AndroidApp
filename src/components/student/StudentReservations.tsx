import { Calendar, Clock, MapPin, CheckCircle, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface StudentReservationsProps {
  onBack?: () => void;
}

export default function StudentReservations({ onBack }: StudentReservationsProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'upcoming' | 'past'>('all');

  const reservations = [
    {
      id: 1,
      type: 'Study Room',
      name: 'Private Study Room B-204',
      date: 'Today',
      fullDate: 'Dec 4, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Library - Floor 2',
      status: 'active',
      color: 'blue',
      icon: '📚',
    },
    {
      id: 2,
      type: 'Sports',
      name: 'Basketball Court A',
      date: 'Tomorrow',
      fullDate: 'Dec 5, 2025',
      time: '5:00 PM - 6:30 PM',
      location: 'Sports Complex',
      status: 'upcoming',
      color: 'green',
      icon: '⚽',
    },
    {
      id: 3,
      type: 'Event',
      name: 'Tech Club Workshop',
      date: 'Dec 6, 2025',
      fullDate: 'Dec 6, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Engineering Building - Room 301',
      status: 'registered',
      color: 'purple',
      icon: '💻',
    },
    {
      id: 4,
      type: 'Study Room',
      name: 'Private Study Room C-301',
      date: 'Dec 8, 2025',
      fullDate: 'Dec 8, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Library - Floor 3',
      status: 'upcoming',
      color: 'blue',
      icon: '📚',
    },
    {
      id: 5,
      type: 'Sports',
      name: 'Tennis Court 2',
      date: 'Dec 1, 2025',
      fullDate: 'Dec 1, 2025',
      time: '4:00 PM - 5:00 PM',
      location: 'Sports Complex',
      status: 'completed',
      color: 'green',
      icon: '🎾',
    },
    {
      id: 6,
      type: 'Event',
      name: 'Arts Exhibition',
      date: 'Nov 28, 2025',
      fullDate: 'Nov 28, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Art Gallery',
      status: 'completed',
      color: 'purple',
      icon: '🎨',
    },
  ];

  const filteredReservations = reservations.filter(res => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'active') return res.status === 'active';
    if (selectedFilter === 'upcoming') return res.status === 'upcoming' || res.status === 'registered';
    if (selectedFilter === 'past') return res.status === 'completed';
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            <CheckCircle className="w-3 h-3" />
            Active Now
          </span>
        );
      case 'upcoming':
      case 'registered':
        return (
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            Upcoming
          </span>
        );
      case 'completed':
        return (
          <span className="px-3 py-1 bg-gray-100 text-[#8E8E8E] rounded-full text-xs font-medium">
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-500 bg-blue-500';
      case 'green':
        return 'border-green-500 bg-green-500';
      case 'purple':
        return 'border-purple-500 bg-purple-500';
      default:
        return 'border-gray-500 bg-white0';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="bg-white text-black border-b border-[#EFEFEF] p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold">My Reservations</h1>
            <p className="text-blue-100 text-xs">View and manage your bookings</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-8">
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              selectedFilter === 'all'
                ? 'bg-[#0095F6] text-white shadow-md'
                : 'bg-white text-[#8E8E8E] hover:bg-white'
            }`}
          >
            All ({reservations.length})
          </button>
          <button
            onClick={() => setSelectedFilter('active')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              selectedFilter === 'active'
                ? 'bg-[#0095F6] text-white shadow-md'
                : 'bg-white text-[#8E8E8E] hover:bg-white'
            }`}
          >
            Active ({reservations.filter(r => r.status === 'active').length})
          </button>
          <button
            onClick={() => setSelectedFilter('upcoming')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              selectedFilter === 'upcoming'
                ? 'bg-[#0095F6] text-white shadow-md'
                : 'bg-white text-[#8E8E8E] hover:bg-white'
            }`}
          >
            Upcoming ({reservations.filter(r => r.status === 'upcoming' || r.status === 'registered').length})
          </button>
          <button
            onClick={() => setSelectedFilter('past')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              selectedFilter === 'past'
                ? 'bg-[#0095F6] text-white shadow-md'
                : 'bg-white text-[#8E8E8E] hover:bg-white'
            }`}
          >
            Past ({reservations.filter(r => r.status === 'completed').length})
          </button>
        </div>

        {/* Reservations List */}
        <div className="space-y-3">
          {filteredReservations.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 mb-1">No reservations found</p>
              <p className="text-sm text-gray-400">Book a study room or sports facility to get started</p>
            </div>
          ) : (
            filteredReservations.map((reservation) => (
              <div
                key={reservation.id}
                className={`bg-white rounded-xl p-4 shadow-md border-l-4 ${getColorClasses(reservation.color)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-12 h-12 ${getColorClasses(reservation.color)} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {reservation.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-gray-500 uppercase">{reservation.type}</span>
                      </div>
                      <h4 className="text-black font-medium mb-1">{reservation.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-[#8E8E8E]">
                        <MapPin className="w-3 h-3" />
                        <span className="text-xs">{reservation.location}</span>
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(reservation.status)}
                </div>

                <div className="flex items-center gap-4 mb-3 text-sm text-[#8E8E8E]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {reservation.fullDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {reservation.time}
                  </span>
                </div>

                {/* Actions */}
                {reservation.status !== 'completed' && (
                  <div className="flex gap-2 pt-2 border-t border-gray-100">
                    {(reservation.type === 'Event' || reservation.type === 'Session') && (
                      <button className="flex-1 py-2 text-sm text-black hover:bg-white rounded-lg transition-colors">
                        View Details
                      </button>
                    )}
                    {reservation.status === 'upcoming' || reservation.status === 'registered' ? (
                      <button className={`flex items-center justify-center gap-1 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors ${
                        reservation.type === 'Event' || reservation.type === 'Session' ? '' : 'flex-1'
                      }`}>
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    ) : null}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
