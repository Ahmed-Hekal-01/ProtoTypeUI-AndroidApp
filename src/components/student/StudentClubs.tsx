import { useState } from 'react';
import { Search, Users, Calendar, TrendingUp, Check, ArrowLeft } from 'lucide-react';
import StudentClubProfile from './StudentClubProfile';

interface StudentClubsProps {
  onBack?: () => void;
}

export default function StudentClubs({ onBack }: StudentClubsProps) {
  const [selectedTab, setSelectedTab] = useState<'discover' | 'joined'>('discover');
  const [followedClubs, setFollowedClubs] = useState<number[]>([1, 3]);
  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);
  const [registeredSessions, setRegisteredSessions] = useState<string[]>([]);

  // If a club is selected, show its profile
  if (selectedClubId !== null) {
    return <StudentClubProfile clubId={selectedClubId} onBack={() => setSelectedClubId(null)} />;
  }

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

  const joinedClubs = clubs.filter(club => followedClubs.includes(club.id));
  const discoverClubs = clubs; // Show all clubs in discover tab

  const toggleFollow = (clubId: number) => {
    setFollowedClubs(prev =>
      prev.includes(clubId)
        ? prev.filter(id => id !== clubId)
        : [...prev, clubId]
    );
  };

  const toggleSessionRegistration = (clubId: number, sessionTitle: string) => {
    const sessionKey = `${clubId}-${sessionTitle}`;
    setRegisteredSessions(prev =>
      prev.includes(sessionKey)
        ? prev.filter(key => key !== sessionKey)
        : [...prev, sessionKey]
    );
  };

  const isSessionRegistered = (clubId: number, sessionTitle: string) => {
    return registeredSessions.includes(`${clubId}-${sessionTitle}`);
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
            <h1 className="text-xl font-bold">Clubs</h1>
          </div>
        </div>
      )}

      <div className="p-4 space-y-4">
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
          className={`flex-1 py-2.5 rounded-lg transition-all ${
            selectedTab === 'joined'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          My Clubs
        </button>
      </div>

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

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleFollow(club.id)}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                        followedClubs.includes(club.id)
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : `${getColorClasses(club.color)} text-white hover:opacity-90`
                      }`}
                    >
                      {followedClubs.includes(club.id) && <Check className="w-4 h-4" />}
                      {followedClubs.includes(club.id) ? 'Following' : 'Join Club'}
                    </button>
                    <button
                      onClick={() => setSelectedClubId(club.id)}
                      className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                    >
                      View
                    </button>
                  </div>
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
              </div>            ) : (
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

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFollow(club.id)}
                        className={`flex-1 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                          followedClubs.includes(club.id)
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : `${getColorClasses(club.color)} text-white hover:opacity-90`
                        }`}
                      >
                        {followedClubs.includes(club.id) && <Check className="w-4 h-4" />}
                        {followedClubs.includes(club.id) ? 'Following' : 'Join Club'}
                      </button>
                      <button
                        onClick={() => setSelectedClubId(club.id)}
                        className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                      >
                        View
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
    </div>
  );
}
