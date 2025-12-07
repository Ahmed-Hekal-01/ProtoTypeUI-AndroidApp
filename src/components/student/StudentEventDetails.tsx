import { ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventDetailsProps {
  event: {
    id: number;
    title: string;
    club: string;
    date: string;
    time: string;
    location: string;
    category: string;
    attendees: number;
    capacity: number;
    image: string;
    color: string;
    description: string;
    longDescription?: string;
    organizer?: string;
  };
  isRegistered: boolean;
  onBack: () => void;
  onToggleRegistration: () => void;
}

export default function StudentEventDetails({ event, isRegistered, onBack, onToggleRegistration }: EventDetailsProps) {
  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500',
    };
    return colors[color] || 'bg-white0';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div 
        className="text-white p-4 sticky top-0 z-10 shadow-md"
        style={{ background: 'linear-gradient(to right, #2563eb, #4f46e5)' }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Event Details</h1>
        </div>
      </div>

      <div className="pb-8">
        {/* Event Header */}
        <div className={`${getColorClasses(event.color)} p-6 text-white`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-5xl">{event.image}</span>
                {isRegistered && (
                  <span className="px-3 py-1 bg-white/20 rounded-lg text-sm flex items-center gap-1">
                    ✓ Registered
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
              <p className="text-white/90">{event.club}</p>
            </div>
          </div>
        </div>

        {/* Event Info Cards */}
        <div className="p-4 space-y-4">
          {/* Quick Info */}
          <div className="bg-white rounded-xl p-4 shadow-md space-y-3">
            <div className="flex items-center gap-3 text-black">
              <Calendar className="w-5 h-5 text-[#0095F6]" />
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-medium">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-black">
              <Clock className="w-5 h-5 text-[#0095F6]" />
              <div>
                <p className="text-xs text-gray-500">Time</p>
                <p className="font-medium">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-black">
              <MapPin className="w-5 h-5 text-[#0095F6]" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
          </div>

          {/* Attendance Info */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#8E8E8E]" />
                <span className="font-medium text-black">Attendance</span>
              </div>
              <span className="text-sm text-[#8E8E8E]">
                {isRegistered ? event.attendees + 1 : event.attendees}/{event.capacity}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getColorClasses(event.color)}`}
                style={{ width: `${((isRegistered ? event.attendees + 1 : event.attendees) / event.capacity) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {event.capacity - (isRegistered ? event.attendees + 1 : event.attendees)} spots remaining
            </p>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="font-semibold text-black mb-2">About This Event</h3>
            <p className="text-[#8E8E8E] text-sm leading-relaxed">
              {event.longDescription || event.description + '. Join us for an exciting and informative session that will provide valuable insights and hands-on experience. This event is perfect for anyone interested in learning more about the topic and connecting with like-minded individuals.'}
            </p>
          </div>

          {/* Registration Button in Content */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            {isRegistered ? (
              <button 
                onClick={onToggleRegistration}
                className="w-full py-3 border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors font-semibold"
              >
                Cancel Registration
              </button>
            ) : (
              <button 
                onClick={onToggleRegistration}
                className={`w-full py-3 ${getColorClasses(event.color)} text-white rounded-xl hover:opacity-90 transition-opacity font-semibold`}
              >
                Register Now
              </button>
            )}
          </div>

          {/* Organizer Info */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="font-semibold text-black mb-2">Organized By</h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                {event.image}
              </div>
              <div>
                <p className="font-medium text-black">{event.club}</p>
                <p className="text-sm text-gray-500">{event.organizer || 'Event Organizer'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg max-w-md mx-auto">
          {isRegistered ? (
            <button 
              onClick={onToggleRegistration}
              className="w-full py-3 border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors font-semibold"
            >
              Cancel Registration
            </button>
          ) : (
            <button 
              onClick={onToggleRegistration}
              className={`w-full py-3 ${getColorClasses(event.color)} text-white rounded-xl hover:opacity-90 transition-opacity font-semibold`}
            >
              Register Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
