import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, DollarSign, Image, FileText, Send, Info } from 'lucide-react';

export default function ClubManagerCreate() {
  const [createType, setCreateType] = useState<'event' | 'session'>('event');

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-2 text-gray-800">Create New</h2>
        <p className="text-gray-600">Create events or sessions for your club</p>
      </div>

      {/* Type Selector */}
      <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm">
        <button
          onClick={() => setCreateType('event')}
          className={`flex-1 py-2.5 rounded-lg transition-all ${
            createType === 'event'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Create Event
        </button>
        <button
          onClick={() => setCreateType('session')}
          className={`flex-1 py-2.5 rounded-lg transition-all ${
            createType === 'session'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Create Session
        </button>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800">
          {createType === 'event' ? (
            <p><span className="font-medium">Events</span> are open to selected faculties and all club members. Requires admin approval.</p>
          ) : (
            <p><span className="font-medium">Sessions</span> are exclusive to club members only. Also requires admin approval.</p>
          )}
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Title */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <FileText className="w-4 h-4" />
            {createType === 'event' ? 'Event' : 'Session'} Title
          </label>
          <input
            type="text"
            placeholder={createType === 'event' ? 'e.g., AI & Machine Learning Workshop' : 'e.g., Weekly Coding Session'}
            className="w-full p-3 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-purple-500"
          />
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block">Description</label>
          <textarea
            rows={4}
            placeholder="Describe your event/session..."
            className="w-full p-3 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-purple-500 resize-none"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Date
            </label>
            <input
              type="date"
              className="w-full p-3 bg-gray-50 rounded-lg outline-none"
              defaultValue="2025-12-05"
            />
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md">
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              Time
            </label>
            <input
              type="time"
              className="w-full p-3 bg-gray-50 rounded-lg outline-none"
              defaultValue="15:00"
            />
          </div>
        </div>

        {/* Duration */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="text-sm text-gray-700 mb-2 block">Duration (hours)</label>
          <input
            type="number"
            min="0.5"
            step="0.5"
            defaultValue="2"
            className="w-full p-3 bg-gray-50 rounded-lg outline-none"
          />
        </div>

        {/* Location */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <MapPin className="w-4 h-4" />
            Location
          </label>
          <select className="w-full p-3 bg-gray-50 rounded-lg outline-none">
            <option>Engineering Building - Room 201</option>
            <option>Business School Auditorium</option>
            <option>Sports Complex - Main Hall</option>
            <option>Library - Conference Room</option>
            <option>Arts Building - Studio 3</option>
            <option>Main Campus Plaza (Outdoor)</option>
          </select>
        </div>

        {/* Capacity */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <Users className="w-4 h-4" />
            Maximum Capacity
          </label>
          <input
            type="number"
            min="1"
            defaultValue="50"
            className="w-full p-3 bg-gray-50 rounded-lg outline-none"
          />
        </div>

        {/* Event-specific: Audience */}
        {createType === 'event' && (
          <div className="bg-white rounded-xl p-4 shadow-md">
            <label className="text-sm text-gray-700 mb-2 block">Target Audience</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-sm text-gray-700">All Club Members</span>
              </label>
              <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Engineering Faculty</span>
              </label>
              <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Business Faculty</span>
              </label>
              <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Science Faculty</span>
              </label>
            </div>
          </div>
        )}

        {/* Payment (Optional) */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <DollarSign className="w-4 h-4" />
              Paid Event (Optional)
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Price (USD)"
            className="w-full p-3 bg-gray-50 rounded-lg outline-none"
          />
        </div>

        {/* Cover Image */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <Image className="w-4 h-4" />
            Cover Image (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
            <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Click to upload image</p>
            <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
          </div>
        </div>

        {/* Social Media Posting */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Send className="w-4 h-4" />
              <span>Post to club social media</span>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-98">
          Submit for Approval
        </button>

        {/* Info Note */}
        <p className="text-center text-sm text-gray-500">
          Your {createType} will be reviewed by the admin within 24-48 hours
        </p>
      </div>
    </div>
  );
}
