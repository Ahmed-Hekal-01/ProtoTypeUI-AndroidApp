import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users } from 'lucide-react';

interface ClubManagerScheduleEventProps {
  onBack: () => void;
}

export default function ClubManagerScheduleEvent({ onBack }: ClubManagerScheduleEventProps) {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [maxRegistrations, setMaxRegistrations] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle event creation logic here
    console.log({ eventName, date, startTime, endTime, description, maxRegistrations });
    // Show success message and go back
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Schedule Event</h1>
            <p className="text-blue-100 text-sm">Create a new event</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        {/* Event Name */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block font-medium">Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
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
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
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
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block font-medium">Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event description"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 resize-none transition-colors"
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
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
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
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
