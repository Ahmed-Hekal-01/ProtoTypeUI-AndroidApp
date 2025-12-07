import { Users, Calendar, MapPin, Heart, MessageCircle, Clock, ArrowLeft, X } from 'lucide-react';
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
  const [showComments, setShowComments] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  const [postComments, setPostComments] = useState<{ [key: number]: any[] }>({
    1: [
      { id: 1, user: 'Sarah Johnson', avatar: '👩‍🎓', text: 'Great post! Very informative 🎉', time: '1h ago', likes: 5, liked: false },
      { id: 2, user: 'Michael Chen', avatar: '👨', text: 'Thanks for sharing!', time: '2h ago', likes: 3, liked: false },
    ],
    2: [
      { id: 1, user: 'Emma Williams', avatar: '👧', text: 'I attended this session, it was amazing!', time: '1d ago', likes: 8, liked: true },
    ],
  });

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

  const openComments = (postId: number) => {
    setSelectedPostId(postId);
    setShowComments(true);
  };

  const handleAddComment = () => {
    if (newComment.trim() && selectedPostId !== null) {
      const comment = {
        id: (postComments[selectedPostId]?.length || 0) + 1,
        user: 'Sarah Johnson',
        avatar: '👩‍🎓',
        text: newComment,
        time: 'Just now',
        likes: 0,
        liked: false,
      };
      setPostComments(prev => ({
        ...prev,
        [selectedPostId]: [comment, ...(prev[selectedPostId] || [])],
      }));
      setNewComment('');
    }
  };

  const toggleCommentLike = (commentId: number) => {
    if (selectedPostId === null) return;
    setPostComments(prev => ({
      ...prev,
      [selectedPostId]: prev[selectedPostId]?.map(comment =>
        comment.id === commentId
          ? { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 }
          : comment
      ) || [],
    }));
  };

  const currentComments = selectedPostId !== null ? (postComments[selectedPostId] || []) : [];
  const selectedPost = posts.find(p => p.id === selectedPostId);

  const getColorClasses = () => {
    return {
      bg: 'bg-blue-500',
      bgLight: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-500',
      gradient: 'from-white to-white',
    };
  };

  const colors = getColorClasses();

  return (
    <div className="min-h-screen bg-white">
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
              ? 'bg-[#0095F6] text-white shadow-md'
              : 'text-[#8E8E8E]'
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab('sessions')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'sessions'
              ? 'bg-[#0095F6] text-white shadow-md'
              : 'text-[#8E8E8E]'
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
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#EFEFEF]"
            >
              {/* Header with Icon */}
              <div className="bg-white p-6 border-b border-[#EFEFEF] relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-4xl">📚</span>
                      {registeredSessions.includes(session.id) && (
                        <span className="px-2 py-1 bg-[#0095F6] text-white rounded-lg text-xs flex items-center gap-1">
                          ✓ Registered
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl mb-2 text-black">{session.title}</h3>
                    <p className="text-[#8E8E8E] text-sm">{club.name}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-[#8E8E8E]">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#8E8E8E]">
                    <Clock className="w-4 h-4" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#8E8E8E]">
                    <MapPin className="w-4 h-4" />
                    <span>{session.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#8E8E8E]" />
                    <span className="text-sm text-[#8E8E8E]">
                      {registeredSessions.includes(session.id) ? session.attendees + 1 : session.attendees}/{session.maxAttendees} Registered
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[#0095F6]">
                    {registeredSessions.includes(session.id)
                      ? session.maxAttendees - session.attendees - 1
                      : session.maxAttendees - session.attendees} spots left
                  </span>
                </div>

                <button
                  onClick={() => toggleRegistration(session.id)}
                  className={`w-full py-3 rounded-xl transition-colors font-semibold ${
                    registeredSessions.includes(session.id)
                      ? 'bg-[#0095F6] text-white hover:bg-[#0081D6]'
                      : 'bg-[#0095F6] text-white hover:bg-[#0081D6]'
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
                        <h4 className="text-sm font-semibold text-black">{club.name}</h4>
                        <span className="px-2 py-0.5 bg-gray-100 text-[#8E8E8E] text-xs rounded-full font-medium">
                          Club
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-sm text-black mb-3">{post.content}</p>
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
                )}                {/* Post Actions */}
                <div className="border-t border-gray-100 px-4 py-3">
                  <div className="flex items-center gap-6 text-[#8E8E8E]">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 transition-colors ${
                        likedPosts.includes(post.id) ? 'text-red-500' : 'hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-red-500' : ''}`} />
                      <span className="text-sm">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                    </button>
                    <button
                      onClick={() => openComments(post.id)}
                      className="flex items-center gap-2 hover:text-[#0095F6] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{postComments[post.id]?.length || post.comments}</span>
                    </button>
                  </div>
                </div>
              </div>          ))}
          </div>
        )}
      </div>

      {/* Comments Modal - Instagram Style */}
      {showComments && selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full max-w-md h-[85vh] md:h-[600px] md:rounded-2xl flex flex-col animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#EFEFEF]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0095F6] to-[#0095F6] rounded-full flex items-center justify-center text-lg">
                  {club.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-black">{club.name}</h3>
                  <p className="text-xs text-gray-500">{selectedPost.time}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowComments(false);
                  setSelectedPostId(null);
                }}
                className="text-gray-400 hover:text-[#8E8E8E] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto">
              {/* Original Post */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0095F6] to-[#0095F6] rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    {club.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold text-black">{club.name}</span>
                      {' '}
                      <span className="text-black">{selectedPost.content}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">{selectedPost.time}</p>
                  </div>
                </div>
              </div>

              {/* Comments */}
              {currentComments.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                  <MessageCircle className="w-12 h-12 mb-2 opacity-50" />
                  <p className="text-sm">No comments yet</p>
                  <p className="text-xs">Be the first to comment</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {currentComments.map((comment) => (
                    <div key={comment.id} className="p-4 hover:bg-white transition-colors">
                      <div className="flex gap-3">
                        {/* Avatar */}
                        <div className="w-8 h-8 bg-gradient-to-br from-[#0095F6] to-[#0095F6] rounded-full flex items-center justify-center text-lg flex-shrink-0">
                          {comment.avatar}
                        </div>

                        {/* Comment Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-semibold text-black">{comment.user}</span>
                                {' '}
                                <span className="text-black">{comment.text}</span>
                              </p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span>{comment.time}</span>
                                {comment.likes > 0 && (
                                  <span className="font-medium">{comment.likes} {comment.likes === 1 ? 'like' : 'likes'}</span>
                                )}
                                <button className="font-medium hover:text-black">Reply</button>
                              </div>
                            </div>

                            {/* Like Button */}
                            <button
                              onClick={() => toggleCommentLike(comment.id)}
                              className="flex-shrink-0 mt-1"
                            >
                              <Heart
                                className={`w-4 h-4 transition-all ${
                                  comment.liked
                                    ? 'fill-red-500 text-red-500'
                                    : 'text-gray-400 hover:text-[#8E8E8E]'
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Add Comment Input */}
            <div className="border-t border-[#EFEFEF] p-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center text-lg flex-shrink-0">
                  👩‍🎓
                </div>

                {/* Input */}
                <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                    placeholder="Add a comment..."
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
                  />
                  {newComment.trim() && (
                    <button
                      onClick={handleAddComment}
                      className="text-[#0095F6] hover:text-[#0081D6] font-semibold text-sm transition-colors"
                    >
                      Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
