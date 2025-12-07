import { useState } from 'react';
import { Search, Users, Clock, MapPin, Calendar, Info, ArrowLeft } from 'lucide-react';

interface StudentSportsProps {
  onBack?: () => void;
}

export default function StudentSports({ onBack }: StudentSportsProps) {
  const [selectedSport, setSelectedSport] = useState<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const sports = [
    {
      id: 1,
      name: 'Basketball',
      icon: '🏀',
      type: 'team',
      minPlayers: 8,
      maxPlayers: 10,
      facilities: [
        { name: 'Court A', available: '5:00 PM', status: 'available' },
        { name: 'Court B', available: '6:00 PM', status: 'available' },
      ],
      duration: '1.5 hours',
      location: 'Sports Complex - Building A',
    },
    {
      id: 2,
      name: 'Football',
      icon: '⚽',
      type: 'team',
      minPlayers: 18,
      maxPlayers: 22,
      facilities: [
        { name: 'Field 1', available: 'Tomorrow 4:00 PM', status: 'available' },
      ],
      duration: '2 hours',
      location: 'Sports Complex - Outdoor',
    },
    {
      id: 3,
      name: 'Tennis',
      icon: '🎾',
      type: 'individual',
      minPlayers: 2,
      maxPlayers: 4,
      facilities: [
        { name: 'Court 1', available: '3:00 PM', status: 'available' },
        { name: 'Court 2', available: '4:30 PM', status: 'available' },
        { name: 'Court 3', available: 'Occupied', status: 'occupied' },
      ],
      duration: '1 hour',
      location: 'Sports Complex - Building B',
    },
    {
      id: 4,
      name: 'Volleyball',
      icon: '🏐',
      type: 'team',
      minPlayers: 10,
      maxPlayers: 12,
      facilities: [
        { name: 'Indoor Court', available: '7:00 PM', status: 'available' },
      ],
      duration: '1.5 hours',
      location: 'Sports Complex - Building A',
    },
  ];

  const gymSlots = [
    { time: '6:00 AM - 8:00 AM', available: 5, capacity: 30, status: 'available' },
    { time: '8:00 AM - 10:00 AM', available: 12, capacity: 30, status: 'available' },
    { time: '2:00 PM - 4:00 PM', available: 8, capacity: 30, status: 'available' },
    { time: '4:00 PM - 6:00 PM', available: 0, capacity: 30, status: 'full' },
    { time: '6:00 PM - 8:00 PM', available: 3, capacity: 30, status: 'available' },
  ];

  const myReservations = [
    {
      sport: 'Basketball',
      icon: '🏀',
      court: 'Court A',
      date: 'Tomorrow',
      time: '5:00 PM - 6:30 PM',
      players: '8/10',
      status: 'confirmed',
    },
  ];

  const handleBookSport = (sport: any) => {
    setSelectedSport(sport);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div 
        className="text-white p-4 sticky top-0 z-10 shadow-md"
        style={{ background: 'linear-gradient(to right, #16a34a, #059669)' }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold">Sports Facilities</h1>
            <p className="text-green-100 text-xs">Book courts and gym sessions</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search sports..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-[#EFEFEF] focus:border-green-500 focus:outline-none shadow-sm"
          />
        </div>

      {/* My Reservations */}
      {myReservations.length > 0 && (
        <div>
          <h3 className="mb-3 text-black">My Reservations</h3>
          <div className="space-y-3">
            {myReservations.map((reservation, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">{reservation.icon}</div>
                  <div className="flex-1">
                    <h4 className="mb-1">{reservation.sport} - {reservation.court}</h4>
                    <div className="flex items-center gap-2 text-sm text-green-100">
                      <Calendar className="w-4 h-4" />
                      {reservation.date} at {reservation.time}
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-white/20 rounded-lg text-xs">
                    {reservation.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{reservation.players} Players</span>
                  </div>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gym Sessions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-black flex items-center gap-2">
            💪 Gym Sessions
          </h3>
          <span className="text-xs text-gray-500">No minimum required</span>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {gymSlots.map((slot, idx) => (
            <div
              key={idx}
              className={`p-4 flex items-center justify-between ${
                idx !== gymSlots.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-black">{slot.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#8E8E8E]">
                  <Users className="w-4 h-4" />
                  <span>{slot.available}/{slot.capacity} spots available</span>
                </div>
              </div>
              {slot.status === 'available' ? (
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Book
                </button>
              ) : (
                <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm">
                  Full
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Team Sports */}
      <div>
        <h3 className="mb-3 text-black">Team Sports</h3>
        <div className="space-y-3">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl">{sport.icon}</div>
                <div className="flex-1">
                  <h4 className="text-black mb-1">{sport.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-[#8E8E8E] mb-1">
                    <MapPin className="w-4 h-4" />
                    {sport.location}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#8E8E8E]">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {sport.minPlayers}-{sport.maxPlayers} players
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {sport.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-amber-800">
                  Minimum {sport.minPlayers} players required. Reservation will be cancelled if minimum not reached.
                </p>
              </div>

              <div className="space-y-2 mb-3">
                <div className="text-sm text-black mb-2">Available Facilities:</div>
                {sport.facilities.map((facility, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-white rounded-lg"
                  >
                    <span className="text-sm text-black">{facility.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#8E8E8E]">{facility.available}</span>
                      {facility.status === 'available' ? (
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                      ) : (
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBookSport(sport)}
                className="w-full py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Book {sport.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedSport && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 max-w-md mx-auto">
          <div className="bg-white rounded-t-3xl w-full p-6 animate-slide-up">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
            <h3 className="text-xl mb-4 text-black">Book {selectedSport.name}</h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm text-[#8E8E8E] mb-2 block">Select Facility</label>
                <select className="w-full p-3 bg-white rounded-lg outline-none">
                  {selectedSport.facilities.map((facility: any, idx: number) => (
                    <option key={idx} disabled={facility.status === 'occupied'}>
                      {facility.name} - {facility.available}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-[#8E8E8E] mb-2 block">Date</label>
                <input
                  type="date"
                  className="w-full p-3 bg-white rounded-lg outline-none"
                  defaultValue="2025-12-01"
                />
              </div>

              <div>
                <label className="text-sm text-[#8E8E8E] mb-2 block">Time Slot</label>
                <select className="w-full p-3 bg-white rounded-lg outline-none">
                  <option>4:00 PM - 5:30 PM</option>
                  <option>5:00 PM - 6:30 PM</option>
                  <option>6:00 PM - 7:30 PM</option>
                  <option>7:00 PM - 8:30 PM</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-[#8E8E8E] mb-2 block">
                  Expected Players ({selectedSport.minPlayers}-{selectedSport.maxPlayers})
                </label>
                <input
                  type="number"
                  min={selectedSport.minPlayers}
                  max={selectedSport.maxPlayers}
                  defaultValue={selectedSport.minPlayers}
                  className="w-full p-3 bg-white rounded-lg outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 py-3 border border-[#EFEFEF] rounded-lg hover:bg-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
