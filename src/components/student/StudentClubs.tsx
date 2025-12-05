import { useState } from 'react';
import { Search, Users, Calendar, Bell, Heart, MessageCircle, TrendingUp } from 'lucide-react';

export default function StudentClubs() {
  const [selectedTab, setSelectedTab] = useState<'discover' | 'joined'>('discover');
  const [followedClubs, setFollowedClubs] = useState<number[]>([1, 3]);

  const clubs = [
    {
      id: 1,
      name: 'Tech Club',
      icon: '💻',
      category: 'Technology',
      members: 245,
      events: 12,
      description: 'Explore cutting-edge technology, coding, and innovation',
      color: 'blue',
      upcomingSessions: [
        { title: 'Web Development Basics', date: 'Dec 3', time: '4:00 PM' },
        { title: 'AI Workshop', date: 'Dec 5', time: '3:00 PM' },
      ],
    },
    {
      id: 2,
      name: 'Arts Club',
      icon: '🎨',
      category: 'Arts',
      members: 180,
      events: 8,
      description: 'Express creativity through various art forms',
      color: 'pink',
      upcomingSessions: [
        { title: 'Watercolor Basics', date: 'Dec 4', time: '2:00 PM' },
      ],
    },
    {
      id: 3,
      name: 'Entrepreneurship Club',
      icon: '🚀',
      category: 'Business',
      members: 320,
      events: 15,
      description: 'Build and scale your startup ideas',
      color: 'green',
      upcomingSessions: [
        { title: 'Pitch Practice', date: 'Dec 6', time: '5:00 PM' },
        { title: 'Investor Meeting Tips', date: 'Dec 8', time: '4:00 PM' },
      ],
    },
    {
      id: 4,
      name: 'Photography Club',
      icon: '📸',
      category: 'Media',
      members: 150,
      events: 6,
      description: 'Capture moments and learn photography skills',
      color: 'purple',
      upcomingSessions: [],
    },
    {
      id: 5,
      name: 'Sports Society',
      icon: '⚽',
      category: 'Sports',
      members: 420,
      events: 20,
      description: 'Stay active and compete in various sports',
      color: 'orange',
      upcomingSessions: [
        { title: 'Basketball Tournament', date: 'Dec 7', time: '6:00 PM' },
      ],
    },
  ];

  const announcements = [
    {
      club: 'Tech Club',
      icon: '💻',
      message: 'New AI workshop registration is now open!',
      time: '2 hours ago',
      color: 'blue',
    },
    {
      club: 'Entrepreneurship Club',
      icon: '🚀',
      message: 'Pitch competition winners announced! Congratulations to all participants.',
      time: '5 hours ago',
      color: 'green',
    },
  ];

  const joinedClubs = clubs.filter(club => followedClubs.includes(club.id));
  const discoverClubs = clubs.filter(club => !followedClubs.includes(club.id));

  const toggleFollow = (clubId: number) => {
    setFollowedClubs(prev =>
      prev.includes(clubId)
        ? prev.filter(id => id !== clubId)
        : [...prev, clubId]
    );
  };

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: 'bg-blue-500',
      pink: 'bg-pink-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
    };
    return colors[color] || 'bg-gray-500';
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-2 text-gray-800">Clubs</h2>
        <p className="text-gray-600">Join clubs and attend exclusive sessions</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search clubs..."
          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none shadow-sm"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm">
        <button
          onClick={() => setSelectedTab('discover')}
          className={`flex-1 py-2.5 rounded-lg transition-all ${
            selectedTab === 'discover'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Discover
        </button>
        <button
          onClick={() => setSelectedTab('joined')}
          className={`flex-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${
            selectedTab === 'joined'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          My Clubs
          {joinedClubs.length > 0 && (
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              selectedTab === 'joined' ? 'bg-white/20' : 'bg-indigo-100 text-indigo-600'
            }`}>
              {joinedClubs.length}
            </span>
          )}
        </button>
      </div>

      {/* Joined Clubs - Announcements */}
      {selectedTab === 'joined' && announcements.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-5 h-5 text-gray-700" />
            <h3 className="text-gray-700">Recent Announcements</h3>
          </div>
          <div className="space-y-2">
            {announcements.map((announcement, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-sm border-l-4"
                style={{ borderLeftColor: announcement.color === 'blue' ? '#3b82f6' : '#10b981' }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{announcement.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-gray-800">{announcement.club}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{announcement.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{announcement.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clubs List */}
      <div className="space-y-4">
        {selectedTab === 'discover' && (
          <>
            <h3 className="text-gray-700">Explore Clubs</h3>
            {discoverClubs.map((club) => (
              <div
                key={club.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className={`${getColorClasses(club.color)} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{club.icon}</span>
                      <div>
                        <h3 className="text-xl mb-1">{club.name}</h3>
                        <span className="text-sm text-white/80">{club.category}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm">{club.description}</p>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{club.members} members</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{club.events} events</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>Active</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFollow(club.id)}
                    className={`w-full py-3 ${getColorClasses(club.color)} text-white rounded-xl hover:opacity-90 transition-opacity`}
                  >
                    Join Club
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {selectedTab === 'joined' && (
          <>
            <h3 className="text-gray-700">Your Clubs</h3>
            {joinedClubs.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 mb-1">No clubs joined yet</p>
                <button
                  onClick={() => setSelectedTab('discover')}
                  className="text-indigo-600 text-sm hover:underline"
                >
                  Discover clubs to join
                </button>
              </div>
            ) : (
              joinedClubs.map((club) => (
                <div
                  key={club.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <div className={`${getColorClasses(club.color)} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{club.icon}</span>
                        <div>
                          <h3 className="text-xl mb-1">{club.name}</h3>
                          <span className="text-sm text-white/80">{club.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    {club.upcomingSessions.length > 0 ? (
                      <>
                        <h4 className="text-sm text-gray-700 mb-3">Upcoming Sessions</h4>
                        <div className="space-y-2 mb-4">
                          {club.upcomingSessions.map((session, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div>
                                <p className="text-sm text-gray-800 mb-1">{session.title}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                  <Calendar className="w-3 h-3" />
                                  <span>{session.date} at {session.time}</span>
                                </div>
                              </div>
                              <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs hover:bg-indigo-700 transition-colors">
                                Register
                              </button>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500 mb-4 text-center py-2">
                        No upcoming sessions
                      </p>
                    )}

                    <div className="flex gap-2">
                      <button className="flex-1 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm">
                        <MessageCircle className="w-4 h-4" />
                        Discussion
                      </button>
                      <button className="flex-1 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
