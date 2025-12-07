import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, Wifi, MapPin } from 'lucide-react';

interface ClubManagerScheduleSessionProps {
  onBack: () => void;
}

export default function ClubManagerScheduleSession({ onBack }: ClubManagerScheduleSessionProps) {
  const [sessionName, setSessionName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [description, setDescription] = useState('');
  const [maxRegistrations, setMaxRegistrations] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle session creation logic here
    console.log({ sessionName, date, startTime, endTime, isOnline, description, maxRegistrations });
    // Show success message and go back
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Schedule Session</h1>
            <p className="text-pink-100 text-sm">Create a new session</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        {/* Session Name */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block font-medium">Session Name</label>
          <input
            type="text"
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
            placeholder="Enter session name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        {/* Date */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        {/* Time */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-3 block font-medium flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Time
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Online/Offline Toggle */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isOnline ? (
                <Wifi className="w-5 h-5 text-pink-600" />
              ) : (
                <MapPin className="w-5 h-5 text-pink-600" />
              )}
              <div>
                <span className="text-sm text-gray-700 font-medium block">Online Session</span>
                <span className="text-xs text-gray-500">
                  {isOnline ? 'Session will be conducted online' : 'Session will be in-person'}
                </span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isOnline}
                onChange={(e) => setIsOnline(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block font-medium">Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Session description"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 resize-none transition-colors"
          />
        </div>

        {/* Expected Max Registration */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block font-medium flex items-center gap-2">
            <Users className="w-4 h-4" />
            Expected Max Registration
          </label>
          <input
            type="number"
            value={maxRegistrations}
            onChange={(e) => setMaxRegistrations(e.target.value)}
            placeholder="Expected max registrations"
            required
            min="1"
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        {/* Submit Buttons */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg max-w-md mx-auto">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
              Create Session
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
