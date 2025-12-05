import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, CheckCircle, Video, ArrowLeft } from 'lucide-react';

interface StudentEventsProps {
  onBack?: () => void;
}

export default function StudentEvents({ onBack }: StudentEventsProps) {
  const [activeTab, setActiveTab] = useState<'events' | 'sessions'>('events');
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([1, 3]);
  const [registeredSessions, setRegisteredSessions] = useState<number[]>([101, 103]);

  const events = [
    {
      id: 1,
      title: 'AI & Machine Learning Workshop',
      club: 'Tech Club',
      date: 'Dec 5, 2025',
      time: '3:00 PM - 6:00 PM',
      location: 'Engineering Building - Room 201',
      category: 'Workshop',
      attendees: 45,
      capacity: 60,
      registered: true,
      image: '💻',
      color: 'blue',
      description: 'Learn the fundamentals of AI and build your first ML model',
    },
    {
      id: 2,
      title: 'Annual Cultural Festival',
      club: 'University Events',
      date: 'Dec 10, 2025',
      time: '10:00 AM - 8:00 PM',
      location: 'Main Campus Plaza',
      category: 'Festival',
      attendees: 230,
      capacity: 500,
      registered: false,
      image: '🎭',
      color: 'purple',
      description: 'Celebrate diversity with performances, food, and activities',
    },
    {
      id: 3,
      title: 'Startup Pitch Competition',
      club: 'Entrepreneurship Club',
      date: 'Dec 8, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Business School Auditorium',
      category: 'Competition',
      attendees: 28,
      capacity: 100,
      registered: true,
      image: '🚀',
      color: 'green',
      description: 'Present your startup idea and win funding opportunities',
    },
    {
      id: 4,
      title: 'Photography Masterclass',
      club: 'Arts Club',
      date: 'Dec 12, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Arts Building - Studio 3',
      category: 'Workshop',
      attendees: 15,
      capacity: 25,
      registered: false,
      image: '📸',
      color: 'pink',
      description: 'Learn advanced photography techniques from professionals',
    },
    {
      id: 5,
      title: 'Career Fair 2025',
      club: 'Career Services',
      date: 'Dec 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Sports Complex - Main Hall',
      category: 'Career',
      attendees: 180,
      capacity: 300,
      registered: false,
      image: '💼',
      color: 'indigo',
      description: 'Meet with top employers and explore career opportunities',
    },
  ];

  const sessions = [
    {
      id: 101,
      title: 'Introduction to React Hooks',
      instructor: 'Dr. Sarah Johnson',
      date: 'Dec 6, 2025',
      time: '2:00 PM - 3:30 PM',
      location: 'Online - Zoom',
      category: 'Tech',
      attendees: 35,
      capacity: 50,
      registered: true,
      image: '⚛️',
      color: 'blue',
      description: 'Deep dive into React Hooks and modern state management',
      isOnline: true,
    },
    {
      id: 102,
      title: 'Entrepreneurship 101',
      instructor: 'Prof. Michael Chen',
      date: 'Dec 9, 2025',
      time: '4:00 PM - 5:30 PM',
      location: 'Business Building - Room 305',
      category: 'Business',
      attendees: 22,
      capacity: 30,
      registered: false,
      image: '💡',
      color: 'green',
      description: 'Learn the basics of starting and running a successful startup',
      isOnline: false,
    },
    {
      id: 103,
      title: 'Digital Marketing Strategies',
      instructor: 'Emma Williams',
      date: 'Dec 11, 2025',
      time: '3:00 PM - 4:30 PM',
      location: 'Online - Google Meet',
      category: 'Marketing',
      attendees: 42,
      capacity: 60,
      registered: true,
      image: '📱',
      color: 'purple',
      description: 'Master social media marketing and content creation strategies',
      isOnline: true,
    },
    {
      id: 104,
      title: 'Data Science Fundamentals',
      instructor: 'Dr. James Rodriguez',
      date: 'Dec 13, 2025',
      time: '1:00 PM - 3:00 PM',
      location: 'Computer Lab - Floor 2',
      category: 'Tech',
      attendees: 18,
      capacity: 25,
      registered: false,
      image: '📊',
      color: 'indigo',
      description: 'Introduction to data analysis, visualization, and machine learning',
      isOnline: false,
    },
  ];

  const currentItems = activeTab === 'events' ? events : sessions;

  const toggleRegistration = (id: number) => {
    if (activeTab === 'events') {
      setRegisteredEvents(prev =>
        prev.includes(id)
          ? prev.filter(eventId => eventId !== id)
          : [...prev, id]
      );
    } else {
      setRegisteredSessions(prev =>
        prev.includes(id)
          ? prev.filter(sid => sid !== id)
          : [...prev, id]
      );
    }
  };

  const isRegistered = (id: number) => {
    return activeTab === 'events' 
      ? registeredEvents.includes(id) 
      : registeredSessions.includes(id);
  };

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
      {onBack && (
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
            <h1 className="text-xl font-bold">Events</h1>
          </div>
        </div>
      )}

      <div className="p-4 space-y-4 pb-8">
      {/* Toggle Tabs */}
      <div className="bg-gray-100 p-1 rounded-2xl flex gap-1">
        <button
          onClick={() => setActiveTab('events')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'events'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600'
          }`}
        >
          Events
        </button>
        <button
          onClick={() => setActiveTab('sessions')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'sessions'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600'
          }`}
        >
          Sessions
        </button>
      </div>

      {/* Events/Sessions List */}
      <div className="space-y-4">
        {currentItems.map((item: any) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Header with Icon */}
            <div className={`${getColorClasses(item.color)} p-6 text-white relative`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-4xl">{item.image}</span>
                    {isRegistered(item.id) && (
                      <span className="px-2 py-1 bg-white/20 rounded-lg text-xs flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Registered
                      </span>
                    )}
                    {activeTab === 'sessions' && item.isOnline && (
                      <span className="px-2 py-1 bg-white/20 rounded-lg text-xs flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        Online
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">
                    {activeTab === 'events' ? item.club : item.instructor}
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">
                    {isRegistered(item.id) ? item.attendees + 1 : item.attendees}/{item.capacity} registered
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{item.category}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getColorClasses(item.color)}`}
                    style={{ width: `${((isRegistered(item.id) ? item.attendees + 1 : item.attendees) / item.capacity) * 100}%` }}
                  />
                </div>
              </div>

              {/* Action Button */}
              {isRegistered(item.id) ? (
                <div className="flex gap-2">
                  <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                  <button 
                    onClick={() => toggleRegistration(item.id)}
                    className="flex-1 py-3 border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => toggleRegistration(item.id)}
                  className={`w-full py-3 ${getColorClasses(item.color)} text-white rounded-xl hover:opacity-90 transition-opacity font-semibold`}
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
