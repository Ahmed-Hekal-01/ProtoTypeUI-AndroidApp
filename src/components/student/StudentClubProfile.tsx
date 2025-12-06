import { Users, Calendar, MapPin, Heart, MessageCircle, Clock, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface StudentClubProfileProps {
  onBack?: () => void;
  clubId?: number;
}

export default function StudentClubProfile({ onBack }: StudentClubProfileProps) {
  const [isFollowing, setIsFollowing] = useState(true);
  const [likedPosts, setLikedPosts] = useState<number[]>([1, 3]);
  const [activeTab, setActiveTab] = useState<'posts' | 'sessions'>('posts');
  const [registeredSessions, setRegisteredSessions] = useState<number[]>([]);

  // Mock club data - in real app, this would be fetched based on clubId
  const club = {
    id: 1,
    name: 'Tech Club',
    icon: '💻',
    category: 'Technology',
    members: 245,
    events: 12,
    description: 'Explore cutting-edge technology, coding, and innovation. Join us to learn, build, and connect with fellow tech enthusiasts.',
    color: 'blue',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
    founded: '2020',
    email: 'techclub@university.edu',
  };

  const upcomingSessions = [
    {
      id: 1,
      title: 'Web Development Basics',
      date: 'Dec 10, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Engineering Building - Room 301',
      attendees: 45,
      maxAttendees: 50,
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      date: 'Dec 15, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Computer Lab A',
      attendees: 38,
      maxAttendees: 40,
    },
    {
      id: 3,
      title: 'Hackathon 2025',
      date: 'Dec 20, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      attendees: 120,
      maxAttendees: 150,
    },
  ];

  const posts = [
    {
      id: 1,
      time: '2 hours ago',
      content: 'Excited to announce our upcoming AI & Machine Learning Workshop! 🚀 Join us to learn the fundamentals and build your first ML model. Limited seats available!',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      likes: 45,
      comments: 12,
    },
    {
      id: 2,
      time: '1 day ago',
      content: 'Thank you to everyone who attended our Web Development session! Check out the resources we shared in the discussion forum. 💻✨',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop',
      likes: 67,
      comments: 23,
    },
    {
      id: 3,
      time: '3 days ago',
      content: 'Registration for our annual Hackathon is now open! Team up with fellow students and build something amazing. Prizes worth $5000! 🏆',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop',
      likes: 128,
      comments: 45,
    },
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleRegistration = (sessionId: number) => {
    setRegisteredSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const getColorClasses = () => {
    return {
      bg: 'bg-blue-500',
      bgLight: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-500',
      gradient: 'from-blue-600 to-indigo-600',
    };
  };

  const colors = getColorClasses();

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
            <h1 className="text-xl font-bold">{club.name}</h1>
          </div>
        </div>
      )}

      <div className="p-4 space-y-4 pb-8">
      {/* Club Info Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div 
          className="p-6 text-white"
          style={{ background: 'linear-gradient(to right, #2563eb, #4f46e5)' }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
              {club.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{club.name}</h2>
              <div className="flex items-center gap-1 text-sm text-blue-100">
                <Users className="w-4 h-4" />
                <span>{club.members} members</span>
              </div>
            </div>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{club.description}</p>
        </div>
      </div>

      {/* Toggle Tabs */}
      <div className="bg-gray-100 p-1 rounded-2xl flex gap-1">
        <button
          onClick={() => setActiveTab('posts')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'posts'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600'
          }`}
        >
          Posts
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

      {/* Sessions Tab */}
      {activeTab === 'sessions' && (
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Header with Icon */}
              <div className="bg-blue-500 p-6 text-white relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-4xl">📚</span>
                      {registeredSessions.includes(session.id) && (
                        <span className="px-2 py-1 bg-white/20 rounded-lg text-xs flex items-center gap-1">
                          ✓ Registered
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl mb-2">{session.title}</h3>
                    <p className="text-white/90 text-sm">{club.name}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{session.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {registeredSessions.includes(session.id) ? session.attendees + 1 : session.attendees}/{session.maxAttendees} Registered
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    {registeredSessions.includes(session.id) 
                      ? session.maxAttendees - session.attendees - 1 
                      : session.maxAttendees - session.attendees} spots left
                  </span>
                </div>

                <button 
                  onClick={() => toggleRegistration(session.id)}
                  className={`w-full py-3 rounded-xl transition-colors font-semibold ${
                    registeredSessions.includes(session.id)
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {registeredSessions.includes(session.id) ? '✓ Registered' : 'Register'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Posts Tab */}
      {activeTab === 'posts' && (
        <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                {/* Post Header */}
                <div className="p-4 pb-3">
                  <div className="flex items-start gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: '#3b82f6' }}
                    >
                      {club.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-gray-800">{club.name}</h4>
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                          Club
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-sm text-gray-700 mb-3">{post.content}</p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="w-full">
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="border-t border-gray-100 px-4 py-3">
                  <div className="flex items-center gap-6 text-gray-600">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 transition-colors ${
                        likedPosts.includes(post.id) ? 'text-red-500' : 'hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-red-500' : ''}`} />
                      <span className="text-sm">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
