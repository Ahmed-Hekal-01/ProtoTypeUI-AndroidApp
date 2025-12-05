import { useState, FormEvent } from 'react';
import { Search, Users, Clock, MapPin, Wifi, Monitor, Coffee, Lock, Unlock, Calendar, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface StudentStudyRoomsProps {
  onBack?: () => void;
}

export default function StudentStudyRooms({ onBack }: StudentStudyRoomsProps) {
  const [selectedType, setSelectedType] = useState<'public' | 'private'>('public');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  // Private room booking form states
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('1');
  const [purpose, setPurpose] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePrivateRoomSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setBookingDate('');
      setTimeSlot('');
      setNumberOfPeople('1');
      setPurpose('');
    }, 3000);
  };

  const publicRooms = [
    {
      id: 1,
      name: 'Open Study Hall A',
      building: 'Library - Floor 1',
      capacity: 50,
      available: 12,
      amenities: ['Wifi', 'Power Outlets', 'Whiteboard'],
      status: 'available',
    },
    {
      id: 2,
      name: 'Open Study Hall B',
      building: 'Library - Floor 2',
      capacity: 40,
      available: 8,
      amenities: ['Wifi', 'Power Outlets', 'Computers'],
      status: 'available',
    },
    {
      id: 3,
      name: 'Silent Study Area',
      building: 'Library - Floor 3',
      capacity: 30,
      available: 0,
      amenities: ['Wifi', 'Power Outlets'],
      status: 'full',
    },
  ];

  const privateRooms = [
    {
      id: 4,
      name: 'Private Study Room B-204',
      building: 'Library - Floor 2',
      capacity: 6,
      amenities: ['Wifi', 'Whiteboard', 'TV Screen', 'AC'],
      nextAvailable: '2:00 PM',
      status: 'available',
    },
    {
      id: 5,
      name: 'Private Study Room B-205',
      building: 'Library - Floor 2',
      capacity: 8,
      amenities: ['Wifi', 'Whiteboard', 'TV Screen', 'Projector', 'AC'],
      nextAvailable: '4:00 PM',
      status: 'available',
    },
    {
      id: 6,
      name: 'Private Study Room C-301',
      building: 'Library - Floor 3',
      capacity: 4,
      amenities: ['Wifi', 'Whiteboard', 'AC'],
      nextAvailable: 'Tomorrow 9:00 AM',
      status: 'occupied',
    },
  ];

  const amenityIcons: any = {
    'Wifi': Wifi,
    'Whiteboard': Monitor,
    'TV Screen': Monitor,
    'Projector': Monitor,
    'Computers': Monitor,
    'Power Outlets': Coffee,
    'AC': Coffee,
  };

  const handleBookRoom = (room: any) => {
    setSelectedRoom(room);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold">Study Rooms</h1>
            <p className="text-blue-100 text-xs">Find and reserve your study space</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search study rooms..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none shadow-sm"
          />
        </div>

      {/* Type Selector */}
      <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm">
        <button
          onClick={() => setSelectedType('public')}
          className={`flex-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${
            selectedType === 'public'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Unlock className="w-4 h-4" />
          Public Rooms
        </button>
        <button
          onClick={() => setSelectedType('private')}
          className={`flex-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${
            selectedType === 'private'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Lock className="w-4 h-4" />
          Private Rooms
        </button>
      </div>

      {/* Public Rooms */}
      {selectedType === 'public' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700">Available Public Rooms</h3>
            <span className="text-sm text-gray-500">Check-in required</span>
          </div>
          {publicRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-gray-800 mb-1">{room.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {room.building}
                  </div>
                </div>
                {room.status === 'available' ? (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    Available
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                    Full
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>
                    {room.available}/{room.capacity} seats
                  </span>
                </div>
                <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${room.available > 0 ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{ width: `${(room.available / room.capacity) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {room.amenities.map((amenity, idx) => {
                  const Icon = amenityIcons[amenity] || Coffee;
                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-700"
                    >
                      <Icon className="w-3 h-3" />
                      {amenity}
                    </span>
                  );
                })}
              </div>

              {room.status === 'available' && (
                <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Check In Now
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Private Rooms - Booking Form */}
      {selectedType === 'private' && (
        <div className="space-y-4">
          {/* Success Message */}
          {submitted && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-green-800 font-semibold mb-1">Room Reserved Successfully!</h4>
                <p className="text-green-700 text-sm">We'll assign you a private room and send confirmation shortly.</p>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-blue-800 font-semibold mb-2">📚 Private Room Reservation</h3>
            <p className="text-sm text-blue-700">
              Fill out the form below and we'll automatically assign the best available private room for you.
            </p>
          </div>

          <form onSubmit={handlePrivateRoomSubmit} className="bg-white rounded-xl p-5 shadow-md space-y-4">
            {/* Date */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time Slot */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                required
              >
                <option value="">Select a time slot</option>
                <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
              </select>
            </div>

            {/* Number of People */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                Number of People
              </label>
              <input
                type="number"
                min="1"
                max="8"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Maximum 8 people per room</p>
            </div>

            {/* Purpose */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block font-semibold">
                Purpose (Optional)
              </label>
              <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="e.g., Group study session, project discussion..."
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!bookingDate || !timeSlot || !numberOfPeople}
              className="w-full py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold shadow-lg"
            >
              <Send className="w-5 h-5" />
              Reserve Private Room
            </button>
          </form>

          {/* Info Card */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h4 className="text-purple-800 font-semibold mb-2">How it works</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Submit your reservation request</li>
              <li>• System automatically assigns best available room</li>
              <li>• Confirmation sent via email and notification</li>
              <li>• Room details will include amenities and location</li>
            </ul>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}
