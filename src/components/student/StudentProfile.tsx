import { LogOut, ChevronRight, Mail, Phone, ArrowLeft, MessageCircle, Heart, X } from 'lucide-react';
import { useState } from 'react';

interface StudentProfileProps {
  onBack?: () => void;
}

export default function StudentProfile({ onBack }: StudentProfileProps) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Tech Club',
      avatar: '💻',
      text: 'Thanks for joining our workshop! Hope to see you at the next one 🚀',
      time: '3h ago',
      likes: 15,
      liked: false,
    },
    {
      id: 2,
      user: 'Sports Club',
      avatar: '⚽',
      text: 'Great game yesterday! You were amazing!',
      time: '1d ago',
      likes: 8,
      liked: true,
    },
    {
      id: 3,
      user: 'Emma Williams',
      avatar: '👧',
      text: 'See you at the study group tomorrow!',
      time: '2d ago',
      likes: 3,
      liked: false,
    },
  ]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: 'Sarah Johnson',
        avatar: '👩‍🎓',
        text: newComment,
        time: 'Just now',
        likes: 0,
        liked: false,
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const toggleLike = (commentId: number) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 }
        : comment
    ));
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
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
        </div>
      )}

      <div className="p-4 space-y-6 pb-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
            👩‍🎓
          </div>
          <div className="flex-1">
            <h2 className="text-2xl mb-1">Sarah Johnson</h2>
            <p className="text-blue-100 text-sm mb-1">Computer Science • Junior</p>
            <p className="text-blue-100 text-sm">ID: CS2023-1234</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>sarah.johnson@university.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">My QR Code</h3>
        <div className="flex justify-center mb-3">
          <div className="bg-white p-4 rounded-xl shadow-inner border-2 border-gray-100">
            <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-auto">
              {/* QR Code pattern - simplified representation */}
              <rect width="200" height="200" fill="white"/>

              {/* Corner markers */}
              <g fill="black">
                {/* Top-left corner */}
                <rect x="10" y="10" width="50" height="50"/>
                <rect x="20" y="20" width="30" height="30" fill="white"/>
                <rect x="25" y="25" width="20" height="20" fill="black"/>

                {/* Top-right corner */}
                <rect x="140" y="10" width="50" height="50"/>
                <rect x="150" y="20" width="30" height="30" fill="white"/>
                <rect x="155" y="25" width="20" height="20" fill="black"/>

                {/* Bottom-left corner */}
                <rect x="10" y="140" width="50" height="50"/>
                <rect x="20" y="150" width="30" height="30" fill="white"/>
                <rect x="25" y="155" width="20" height="20" fill="black"/>

                {/* Data pattern - random pattern for visual effect */}
                <rect x="70" y="10" width="10" height="10"/>
                <rect x="90" y="10" width="10" height="10"/>
                <rect x="110" y="10" width="10" height="10"/>
                <rect x="80" y="20" width="10" height="10"/>
                <rect x="100" y="20" width="10" height="10"/>
                <rect x="120" y="20" width="10" height="10"/>

                <rect x="10" y="70" width="10" height="10"/>
                <rect x="20" y="80" width="10" height="10"/>
                <rect x="30" y="90" width="10" height="10"/>
                <rect x="40" y="100" width="10" height="10"/>
                <rect x="50" y="110" width="10" height="10"/>

                <rect x="70" y="70" width="10" height="10"/>
                <rect x="90" y="70" width="10" height="10"/>
                <rect x="110" y="70" width="10" height="10"/>
                <rect x="130" y="70" width="10" height="10"/>
                <rect x="150" y="70" width="10" height="10"/>
                <rect x="170" y="70" width="10" height="10"/>

                <rect x="80" y="90" width="10" height="10"/>
                <rect x="100" y="90" width="10" height="10"/>
                <rect x="120" y="90" width="10" height="10"/>
                <rect x="140" y="90" width="10" height="10"/>
                <rect x="160" y="90" width="10" height="10"/>
                <rect x="180" y="90" width="10" height="10"/>

                <rect x="70" y="110" width="10" height="10"/>
                <rect x="90" y="110" width="10" height="10"/>
                <rect x="110" y="110" width="10" height="10"/>
                <rect x="130" y="110" width="10" height="10"/>
                <rect x="150" y="110" width="10" height="10"/>
                <rect x="170" y="110" width="10" height="10"/>

                <rect x="80" y="130" width="10" height="10"/>
                <rect x="100" y="130" width="10" height="10"/>
                <rect x="120" y="130" width="10" height="10"/>
                <rect x="140" y="130" width="10" height="10"/>
                <rect x="160" y="130" width="10" height="10"/>
                <rect x="180" y="130" width="10" height="10"/>

                <rect x="70" y="150" width="10" height="10"/>
                <rect x="90" y="150" width="10" height="10"/>
                <rect x="110" y="150" width="10" height="10"/>
                <rect x="130" y="150" width="10" height="10"/>
                <rect x="150" y="150" width="10" height="10"/>
                <rect x="170" y="150" width="10" height="10"/>

                <rect x="80" y="170" width="10" height="10"/>
                <rect x="100" y="170" width="10" height="10"/>
                <rect x="120" y="170" width="10" height="10"/>
                <rect x="140" y="170" width="10" height="10"/>
                <rect x="160" y="170" width="10" height="10"/>
                <rect x="180" y="170" width="10" height="10"/>
              </g>
            </svg>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mb-2">Student ID: CS2023-1234</p>
        <p className="text-center text-xs text-gray-400">Show this code for attendance and facility access</p>
      </div>      {/* Settings Menu - Log Out Only */}
      <div>
        <h3 className="mb-3 text-gray-700 font-semibold">Settings</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <button
            onClick={() => setShowComments(true)}
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-medium text-sm">View Comments</p>
                <p className="text-xs text-gray-500">{comments.length} comments</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-red-50 transition-colors text-red-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <LogOut className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Log Out</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>      </div>

      {/* Comments Modal - Instagram Style */}
      {showComments && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full max-w-md h-[85vh] md:h-[600px] md:rounded-2xl flex flex-col animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
              <button
                onClick={() => setShowComments(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto">
              {comments.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <MessageCircle className="w-16 h-16 mb-3 opacity-50" />
                  <p className="text-lg font-medium">No comments yet</p>
                  <p className="text-sm">Be the first to comment</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {comments.map((comment) => (
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
                              onClick={() => toggleLike(comment.id)}
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
    </div>
  );
}
