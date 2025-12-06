import { Bell, Calendar, Clock, MapPin, AlertCircle, CheckCircle, Heart, MessageCircle, BookOpen, Dumbbell, AlertTriangle, Pin, X } from 'lucide-react';
import { useState } from 'react';

interface StudentHomeProps {
  onNavigate?: (tab: string) => void;
  onViewEventDetails?: (eventId: number) => void;
}

export default function StudentHome({ onNavigate, onViewEventDetails }: StudentHomeProps) {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  const [postComments, setPostComments] = useState<{ [key: number]: any[] }>({
    1: [
      { id: 1, user: 'Sarah Johnson', avatar: '👩‍🎓', text: 'Can\'t wait to attend! 🎉', time: '1h ago', likes: 5, liked: false },
      { id: 2, user: 'Michael Chen', avatar: '👨', text: 'Will there be certificates?', time: '30m ago', likes: 2, liked: false },
    ],
    2: [
      { id: 1, user: 'Emma Williams', avatar: '👧', text: 'Thanks for the update!', time: '2h ago', likes: 3, liked: false },
    ],
  });
  const upcomingReservations = [
    {
      id: 1,
      type: 'Study Room',
      name: 'Private Study Room B-204',
      date: 'Today',
      time: '2:00 PM - 4:00 PM',
      status: 'active',
      color: 'blue',
    },
    {
      id: 2,
      type: 'Sports',
      name: 'Basketball Court A',
      date: 'Tomorrow',
      time: '5:00 PM - 6:30 PM',
      status: 'upcoming',
      color: 'green',
    },
    {
      id: 3,
      type: 'Event',
      name: 'Tech Club Workshop',
      date: 'Dec 5, 2025',
      time: '3:00 PM',
      status: 'registered',
      color: 'purple',
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Reminder: Study Room Today',
      message: 'Your reservation starts in 30 minutes',
      time: '30 min ago',
      type: 'reminder',
    },
    {
      id: 2,
      title: 'New Event: AI & Machine Learning',
      message: 'Tech Club is hosting a new event',
      time: '2 hours ago',
      type: 'event',
    },
    {
      id: 3,
      title: 'Basketball Game Confirmed',
      message: 'Minimum players reached',
      time: '5 hours ago',
      type: 'success',
    },
  ];

  const quickActions = [
    { label: 'Book Study Room', icon: '📚', color: 'bg-blue-500', page: 'study-rooms' },
    { label: 'Reserve Sports', icon: '⚽', color: 'bg-green-500', page: 'sports' },
    { label: 'Report Issue', icon: '⚠️', color: 'bg-orange-500', page: 'report-issue' },
  ];

  const posts = [
    {
      id: 1,
      author: 'Tech Club',
      authorType: 'club',
      avatar: '💻',
      time: '2 hours ago',
      content: 'Excited to announce our upcoming AI & Machine Learning Workshop! 🚀 Join us to learn the fundamentals and build your first ML model. Limited seats available!',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      likes: 45,
      comments: 12,
      shares: 8,
      isEvent: true,
      eventDate: 'Dec 10, 2025',
      eventTime: '3:00 PM - 5:00 PM',
    },
    {
      id: 2,
      author: 'University Admin',
      authorType: 'vip',
      avatar: '🎓',
      time: '5 hours ago',
      content: 'Reminder: Final exams schedule has been posted. Please check your student portal for details. Good luck to all students! 📚',
      image: null,
      likes: 128,
      comments: 34,
      shares: 15,
      isEvent: false,
    },
    {
      id: 3,
      author: 'Arts Club',
      authorType: 'club',
      avatar: '🎨',
      time: '1 day ago',
      content: 'Check out the amazing artwork from our recent exhibition! Special thanks to all the talented artists who participated. 🖼️✨',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop',
      likes: 92,
      comments: 23,
      shares: 19,
      isEvent: false,
    },
    {
      id: 4,
      author: 'Entrepreneurship Club',
      authorType: 'club',
      avatar: '🚀',
      time: '1 day ago',
      content: 'Congratulations to all the winners of our Startup Pitch Competition! Your ideas were incredible. Stay tuned for mentorship opportunities! 🏆',
      image: 'https://images.unsplash.com/photo-1559223607-a43c990c845f?w=800&auto=format&fit=crop',
      likes: 156,
      comments: 45,
      shares: 28,
      isEvent: true,
      eventDate: 'Dec 8, 2025',
      eventTime: '6:00 PM - 8:00 PM',
    },
    {
      id: 5,
      author: 'Campus News',
      authorType: 'vip',
      avatar: '📰',
      time: '2 days ago',
      content: 'New study spaces opening next week in the Engineering Building! More quiet zones and collaborative areas for students. 🎉',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop',
      likes: 203,
      comments: 56,
      shares: 42,
      isEvent: false,
    },
    {
      id: 6,
      author: 'Sports Club',
      authorType: 'club',
      avatar: '⚽',
      time: '3 days ago',
      content: 'Join us for the Inter-Department Football Tournament! Registration closes this Friday. Bring your A-game! ⚽🏆',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop',
      likes: 178,
      comments: 67,
      shares: 34,
      isEvent: true,
      eventDate: 'Dec 15, 2025',
      eventTime: '9:00 AM - 5:00 PM',
    },
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
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

  return (
    <div className="space-y-4 pb-4">
      {/* Quick Actions */}
      <div className="px-4 pt-4">
        <h3 className="mb-3 text-gray-700 font-semibold">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => onNavigate?.(action.page)}
              className="bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all active:scale-95 flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-2xl`}>
                {action.icon}
              </div>
              <span className="text-xs text-gray-700 text-center leading-tight">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Reservations - Horizontal Scroll */}
      {upcomingReservations.length > 0 && (
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-700 font-semibold">Upcoming Reservations</h3>
            <button
              onClick={() => onNavigate?.('reservations')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory scroll-smooth">
            {upcomingReservations.map((reservation) => (
              <div
                key={reservation.id}
                className="bg-white rounded-xl p-4 shadow-md border-l-4 min-w-[280px] flex-shrink-0 snap-start"
                style={{ borderLeftColor: reservation.color === 'blue' ? '#3b82f6' : reservation.color === 'green' ? '#10b981' : '#a855f7' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className={`inline-block px-2 py-1 rounded text-xs text-white mb-2 ${
                      reservation.color === 'blue' ? 'bg-blue-500' :
                      reservation.color === 'green' ? 'bg-green-500' : 'bg-purple-500'
                    }`}>
                      {reservation.type}
                    </span>
                    <h4 className="text-gray-800 text-sm font-medium">{reservation.name}</h4>
                  </div>
                  {reservation.status === 'active' && (
                    <span className="flex items-center gap-1 text-green-600 text-xs">
                      <CheckCircle className="w-4 h-4" />
                      Active
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {reservation.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {reservation.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Posts Feed */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-700 font-semibold">Latest Updates</h3>
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-4 pb-3">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-gray-800">{post.author}</h4>
                      {post.authorType === 'vip' && (
                        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                          VIP
                        </span>
                      )}
                      {post.authorType === 'club' && (
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          Club
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-sm text-gray-700 mb-3">{post.content}</p>

                {/* Event View Details Button */}
                {post.isEvent && (
                  <button
                    onClick={() => {
                      onViewEventDetails?.(post.id);
                      onNavigate?.('events');
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md mb-3"
                  >
                    View Details
                  </button>
                )}
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
              )}              {/* Post Actions */}
              <div className="border-t border-gray-100 px-4 py-2.5">
                <div className="flex items-center gap-6 text-gray-600">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-2 py-1 transition-colors ${
                      likedPosts.includes(post.id) ? 'text-red-500' : 'hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-red-500' : ''}`} />
                    <span className="text-sm">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                  </button>
                  <button
                    onClick={() => openComments(post.id)}
                    className="flex items-center gap-2 py-1 hover:text-blue-500 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{postComments[post.id]?.length || post.comments}</span>
                  </button>
                </div>
              </div>
            </div>          ))}
        </div>
      </div>

      {/* Comments Modal - Instagram Style */}
      {showComments && selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full max-w-md h-[85vh] md:h-[600px] md:rounded-2xl flex flex-col animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-lg">
                  {selectedPost.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">{selectedPost.author}</h3>
                  <p className="text-xs text-gray-500">{selectedPost.time}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowComments(false);
                  setSelectedPostId(null);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto">
              {/* Original Post */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    {selectedPost.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold text-gray-800">{selectedPost.author}</span>
                      {' '}
                      <span className="text-gray-700">{selectedPost.content}</span>
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
                    <div key={comment.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex gap-3">
                        {/* Avatar */}
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                          {comment.avatar}
                        </div>

                        {/* Comment Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-semibold text-gray-800">{comment.user}</span>
                                {' '}
                                <span className="text-gray-700">{comment.text}</span>
                              </p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span>{comment.time}</span>
                                {comment.likes > 0 && (
                                  <span className="font-medium">{comment.likes} {comment.likes === 1 ? 'like' : 'likes'}</span>
                                )}
                                <button className="font-medium hover:text-gray-700">Reply</button>
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
                                    : 'text-gray-400 hover:text-gray-600'
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
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">
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
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
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
