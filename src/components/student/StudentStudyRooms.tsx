import { useState, FormEvent } from 'react';
import { Users, Clock, Calendar, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface StudentStudyRoomsProps {
  onBack?: () => void;
}

export default function StudentStudyRooms({ onBack }: StudentStudyRoomsProps) {
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
            <h1 className="text-xl font-bold">Study Rooms</h1>
            <p className="text-blue-100 text-xs">Find and reserve your study space</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
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
              <label className="text-sm text-black mb-2 block font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full p-3 bg-white rounded-xl border border-[#EFEFEF] focus:border-blue-500 focus:outline-none"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time Slot */}
            <div>
              <label className="text-sm text-black mb-2 block font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full p-3 bg-white rounded-xl border border-[#EFEFEF] focus:border-blue-500 focus:outline-none"
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
              <label className="text-sm text-black mb-2 block font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                Number of People
              </label>
              <input
                type="number"
                min="1"
                max="8"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="w-full p-3 bg-white rounded-xl border border-[#EFEFEF] focus:border-blue-500 focus:outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Maximum 8 people per room</p>
            </div>

            {/* Purpose */}
            <div>
              <label className="text-sm text-black mb-2 block font-semibold">
                Purpose (Optional)
              </label>
              <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="e.g., Group study session, project discussion..."
                className="w-full p-3 bg-white rounded-xl border border-[#EFEFEF] focus:border-blue-500 focus:outline-none resize-none"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!bookingDate || !timeSlot || !numberOfPeople}
              className="w-full py-4 bg-[#0095F6] text-white rounded-xl hover:bg-[#0081D6] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold shadow-lg"
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
    </div>
  );
}
