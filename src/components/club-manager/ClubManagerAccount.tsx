import { User, Mail, LogOut, Edit2, Check, X, MessageCircle, Heart, Send, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export default function ClubManagerAccount() {
  const [isEditing, setIsEditing] = useState(false);
  const [clubName, setClubName] = useState('Tech Club');
  const [email, setEmail] = useState('techclub@university.edu');
  const [managerName, setManagerName] = useState('John Smith');
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: '👩',
      text: 'Great session today! Looking forward to the next one 🚀',
      time: '2h ago',
      likes: 12,
      liked: false,
    },
    {
      id: 2,
      user: 'Michael Chen',
      avatar: '👨',
      text: 'Thanks for organizing this event!',
      time: '5h ago',
      likes: 8,
      liked: true,
    },
    {
      id: 3,
      user: 'Emma Williams',
      avatar: '👧',
      text: 'Can we get the presentation slides?',
      time: '1d ago',
      likes: 5,
      liked: false,
    },
  ]);
  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values
    setClubName('Tech Club');
    setEmail('techclub@university.edu');
    setManagerName('John Smith');
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: managerName,
        avatar: '💻',
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
    <div className="p-4 space-y-6 pb-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
              💻
            </div>
            <div className="flex-1">
              <h2 className="text-2xl mb-1">{clubName}</h2>
              <p className="text-purple-100 text-sm mb-1">Technology & Innovation</p>
              <p className="text-purple-100 text-sm">245 Members</p>
            </div>
          </div>

          {/* Edit Button */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <Edit2 className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                <Check className="w-5 h-5" />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-purple-100">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 outline-none focus:bg-white/20 text-white placeholder-purple-200"
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {isEditing ? (
              <input
                type="text"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
                placeholder="Manager Name"
                className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 outline-none focus:bg-white/20 text-white placeholder-purple-200"
              />
            ) : (
              <span>Manager: {managerName}</span>
            )}
          </div>
        </div>
      </div>      {/* Account Actions */}
      <div>
        <h3 className="mb-3 text-gray-700 font-semibold">Account Actions</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <button
            onClick={() => setShowComments(true)}
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-medium">View Comments</p>
                <p className="text-sm text-gray-500">{comments.length} comments</p>
              </div>
            </div>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <LogOut className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-left">
                <p className="text-red-600 font-medium">Log Out</p>
                <p className="text-sm text-gray-500">Sign out of your account</p>
              </div>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>      {/* App Info */}
      <div className="text-center text-sm text-gray-500 space-y-1 pt-4">
        <p>Club Manager Portal v1.0.0</p>
        <p>© 2025 University Campus App</p>
      </div>

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
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">
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

                      {/* More Options */}
                      <button className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full hidden">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Add Comment Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                  💻
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
                      className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
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
