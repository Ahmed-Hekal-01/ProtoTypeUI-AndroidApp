import { useState } from 'react';
import { Send, Image, Calendar, Users, Eye, Heart, MessageCircle, Share2, Clock } from 'lucide-react';

export default function ClubManagerHome() {  const [postType, setPostType] = useState<'all' | 'event' | 'general'>('all');

  const announcements = [
    {
      id: 1,
      type: 'event',
      content: 'Excited to announce our AI workshop! Registration is now open. Don\'t miss this opportunity to learn from industry experts! 🚀',
      eventName: 'AI & Machine Learning Workshop',
      date: '2 hours ago',
      views: 230,
      likes: 45,
      comments: 12,
      shares: 8,
      audience: 'All Members + Engineering Faculty',
      socialMedia: true,
    },
    {
      id: 2,
      type: 'general',
      content: 'Thank you to everyone who attended last week\'s coding session! Your participation and enthusiasm made it a huge success. See you at the next one! 💻',
      date: '1 day ago',
      views: 340,
      likes: 67,
      comments: 18,
      shares: 5,
      audience: 'Club Members Only',
      socialMedia: true,
    },
    {
      id: 3,
      type: 'event',
      content: 'Reminder: Web Development session starts tomorrow at 4 PM. Make sure you bring your laptop!',
      eventName: 'Web Development Basics',
      date: '2 days ago',
      views: 180,
      likes: 32,
      comments: 7,
      shares: 3,
      audience: 'Registered Attendees',
      socialMedia: false,
    },
  ];

  const filteredAnnouncements = announcements.filter(
    a => postType === 'all' || a.type === postType
  );

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-2 text-gray-800">Announcements</h2>
        <p className="text-gray-600">Create and manage club announcements</p>
      </div>

      {/* Create New Post Card */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg mb-4">Create New Post</h3>

        <textarea
          rows={4}
          placeholder="What's new with your club?"
          className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl outline-none placeholder-white/60 text-white resize-none mb-4 border border-white/20"
        />

        {/* Post Options */}
        <div className="space-y-3 mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <label className="text-sm mb-2 block">Target Audience</label>
            <select className="w-full p-2 bg-white/10 backdrop-blur-sm rounded-lg outline-none border border-white/20">
              <option className="text-gray-800">All Club Members</option>
              <option className="text-gray-800">Event Attendees Only</option>
              <option className="text-gray-800">Members + Engineering Faculty</option>
              <option className="text-gray-800">Members + Business Faculty</option>
            </select>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Link to Event (Optional)</span>
              <input type="checkbox" className="w-4 h-4" />
            </label>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Post to Social Media</span>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
            <Image className="w-4 h-4" />
            <span className="text-sm">Image</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Event</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-purple-600 hover:bg-white/90 rounded-lg transition-colors">
            <Send className="w-4 h-4" />
            <span className="text-sm">Publish</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setPostType('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
            postType === 'all'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          All Posts
        </button>
        <button
          onClick={() => setPostType('event')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
            postType === 'event'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          Event Posts
        </button>
        <button
          onClick={() => setPostType('general')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
            postType === 'general'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          General Posts
        </button>
      </div>

      {/* Announcements List */}
      <div>
        <h3 className="mb-3 text-gray-700">Recent Announcements</h3>
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                      💻
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-800">Tech Club</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{announcement.date}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    announcement.type === 'event'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {announcement.type}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-3">{announcement.content}</p>

                {announcement.eventName && (
                  <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <Calendar className="w-4 h-4" />
                      <span>Linked to: {announcement.eventName}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-600">{announcement.audience}</span>
                  {announcement.socialMedia && (
                    <>
                      <span className="text-xs text-gray-400">•</span>
                      <Share2 className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600">Posted on social media</span>
                    </>
                  )}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-4 py-3 border-t border-gray-100">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{announcement.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{announcement.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">{announcement.shares}</span>
                  </button>
                  <div className="flex items-center gap-1 text-gray-500 ml-auto">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{announcement.views}</span>
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="p-3 bg-gray-50 flex gap-2">
                <button className="flex-1 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  View Comments
                </button>
                <button className="flex-1 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Edit
                </button>
                <button className="flex-1 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Summary */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="text-gray-700 mb-4">This Week's Engagement</h3>
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-lg text-gray-800">750</p>
            <p className="text-xs text-gray-600">Views</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Heart className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-lg text-gray-800">144</p>
            <p className="text-xs text-gray-600">Likes</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <MessageCircle className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-lg text-gray-800">37</p>
            <p className="text-xs text-gray-600">Comments</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Share2 className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-lg text-gray-800">16</p>
            <p className="text-xs text-gray-600">Shares</p>
          </div>
        </div>
      </div>
    </div>
  );
}
