import { ArrowLeft, Calendar, Clock, MapPin, Users, Video } from 'lucide-react';

interface SessionDetailsProps {
  session: {
    id: number;
    title: string;
    instructor: string;
    date: string;
    time: string;
    location: string;
    category: string;
    attendees: number;
    capacity: number;
    image: string;
    color: string;
    description: string;
    isOnline: boolean;
    longDescription?: string;
  };
  isRegistered: boolean;
  onBack: () => void;
  onToggleRegistration: () => void;
}

export default function StudentSessionDetails({ session, isRegistered, onBack, onToggleRegistration }: SessionDetailsProps) {
  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500',
    };
    return colors[color] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-xl font-bold">Session Details</h1>
        </div>
      </div>

      <div className="pb-24">
        {/* Session Header */}
        <div className={`${getColorClasses(session.color)} p-6 text-white`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-5xl">{session.image}</span>
                <div className="flex flex-col gap-1">
                  {isRegistered && (
                    <span className="px-3 py-1 bg-white/20 rounded-lg text-sm flex items-center gap-1 w-fit">
                      ✓ Registered
                    </span>
                  )}
                  {session.isOnline && (
                    <span className="px-3 py-1 bg-white/20 rounded-lg text-sm flex items-center gap-1 w-fit">
                      <Video className="w-3 h-3" />
                      Online
                    </span>
                  )}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">{session.title}</h2>
              <p className="text-white/90">Instructor: {session.instructor}</p>
            </div>
          </div>
        </div>

        {/* Session Info Cards */}
        <div className="p-4 space-y-4">
          {/* Quick Info */}
          <div className="bg-white rounded-xl p-4 shadow-md space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-medium">{session.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium">{session.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium">{session.location}</p>
              </div>
            </div>
          </div>

          {/* Attendance Info */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Enrollment</span>
              </div>
              <span className="text-sm text-gray-600">
                {isRegistered ? session.attendees + 1 : session.attendees}/{session.capacity}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getColorClasses(session.color)}`}
                style={{ width: `${((isRegistered ? session.attendees + 1 : session.attendees) / session.capacity) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {session.capacity - (isRegistered ? session.attendees + 1 : session.attendees)} spots remaining
            </p>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">About This Session</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {session.longDescription || session.description + '. This interactive session provides an excellent opportunity to learn from an experienced instructor and engage with fellow learners. You will gain practical knowledge and skills that you can apply immediately.'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg max-w-md mx-auto">
          {isRegistered ? (
            <div className="flex gap-2">
              <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold">
                {session.isOnline ? 'Join Session' : 'Add to Calendar'}
              </button>
              <button 
                onClick={onToggleRegistration}
                className="flex-1 py-3 border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors font-semibold"
              >
                Cancel Registration
              </button>
            </div>
          ) : (
            <button 
              onClick={onToggleRegistration}
              className={`w-full py-3 ${getColorClasses(session.color)} text-white rounded-xl hover:opacity-90 transition-opacity font-semibold`}
            >
              Register Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
