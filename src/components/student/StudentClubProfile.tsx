import { ArrowLeft, Users, Calendar, MapPin, Bell, Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

interface StudentClubProfileProps {
  onBack?: () => void;
  clubId?: number;
}

export default function StudentClubProfile({ onBack }: StudentClubProfileProps) {
  const [isFollowing, setIsFollowing] = useState(true);
  const [likedPosts, setLikedPosts] = useState<number[]>([1, 3]);

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
      {/* Header with Back Button */}
      <div className={`bg-gradient-to-r ${colors.gradient} text-white p-4 sticky top-0 z-10 shadow-md`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{club.name}</h1>
            <p className="text-blue-100 text-xs">{club.category}</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="pb-8">
        {/* Cover Image */}
        {club.coverImage && (
          <div className="w-full h-48 overflow-hidden">
            <img
              src={club.coverImage}
              alt={club.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Club Info */}
        <div className="px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}>
                {club.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{club.name}</h2>
                <p className="text-sm text-gray-600 mb-3">{club.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {club.members} members
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {club.events} events
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                  isFollowing
                    ? `${colors.bg} text-white hover:opacity-90`
                    : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              <button className={`p-3 border-2 ${colors.border} ${colors.text} rounded-xl hover:${colors.bgLight} transition-colors`}>
                <Bell className="w-5 h-5" />
              </button>
              <button className={`p-3 border-2 ${colors.border} ${colors.text} rounded-xl hover:${colors.bgLight} transition-colors`}>
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="px-4 mt-6">
          <h3 className="text-gray-700 font-semibold mb-3">Upcoming Sessions</h3>
          <div className="space-y-3">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className={`bg-white rounded-xl p-4 shadow-md border-l-4 ${colors.border}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-gray-800 font-medium mb-1">{session.title}</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Calendar className="w-3 h-3" />
                        <span>{session.date}</span>
                        <span>•</span>
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">
                      {session.attendees}/{session.maxAttendees}
                    </div>
                    <div className={`px-2 py-1 ${colors.bgLight} ${colors.text} rounded text-xs font-medium`}>
                      {session.maxAttendees - session.attendees} spots
                    </div>
                  </div>
                </div>
                <button className={`w-full py-2.5 mt-3 ${colors.bg} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}>
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="px-4 mt-6">
          <h3 className="text-gray-700 font-semibold mb-3">Recent Posts</h3>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                {/* Post Header */}
                <div className="p-4 pb-3">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center text-xl flex-shrink-0`}>
                      {club.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-gray-800">{club.name}</h4>
                        <span className={`px-2 py-0.5 ${colors.bgLight} ${colors.text} text-xs rounded-full font-medium`}>
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
        </div>

        {/* About Section */}
        <div className="px-4 mt-6">
          <div className="bg-white rounded-xl p-5 shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">About</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Founded in {club.founded}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{club.members} members</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{club.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
