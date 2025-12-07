import { useState } from 'react';
import { Send, Image, Calendar, Users, Eye, Heart, MessageCircle, Share2, Clock, Plus, X } from 'lucide-react';

type PostLinkType = 'none' | 'event' | 'session';

export default function ClubManagerHome() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [modalType, setModalType] = useState<'post' | 'event' | 'session'>('post');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState<string>('');
  const [eventImage, setEventImage] = useState<string>('');
  const [sessionImage, setSessionImage] = useState<string>('');
  const [linkType, setLinkType] = useState<PostLinkType>('none');
  const [selectedEventOrSession, setSelectedEventOrSession] = useState('');
  const [postType, setPostType] = useState<'all' | 'event' | 'general'>('all');

  const events = [
    { id: 1, name: 'AI & Machine Learning Workshop' },
    { id: 2, name: 'Web Development Basics' },
    { id: 3, name: 'Mobile App Development' },
  ];

  const sessions = [
    { id: 101, name: 'Python Programming Session' },
    { id: 102, name: 'React.js Fundamentals' },
    { id: 103, name: 'Database Design' },
  ];

  const handleOpenModal = (type: 'post' | 'event' | 'session') => {
    setModalType(type);
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setPostContent('');
    setPostImage('');
    setEventImage('');
    setSessionImage('');
    setLinkType('none');
    setSelectedEventOrSession('');
  };

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
    <div className="flex flex-col h-screen">
      {/* Fixed Header and Quick Actions */}
      <div className="flex-shrink-0 p-4 space-y-4 bg-gray-50">
        {/* Header */}
        <div>
          <h2 className="text-2xl mb-2 text-gray-800">Club Manager</h2>
          <p className="text-gray-600">Manage your club activities</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleOpenModal('post')}
            className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Create Post</span>
            </div>
          </button>

          <button
            onClick={() => handleOpenModal('event')}
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Schedule Event</span>
            </div>
          </button>

          <button
            onClick={() => handleOpenModal('session')}
            className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Schedule Session</span>
            </div>
          </button>
        </div>
      </div>

      {/* Scrollable Announcements List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div>
          <h3 className="mb-3 text-gray-700">Recent Announcements</h3>
          <div className="space-y-4 pb-20">
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
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md flex flex-col max-h-[85vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex-shrink-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                {modalType === 'post' && 'Create Post'}
                {modalType === 'event' && 'Schedule Event'}
                {modalType === 'session' && 'Schedule Session'}
              </h3>
              <button onClick={handleCloseModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {modalType === 'post' && (
                <>
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Post Content</label>
                    <textarea
                      rows={4}
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder="What's new with your club?"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-purple-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Post Image</label>
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setPostImage(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                      />
                      {postImage && (
                        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300">
                          <img src={postImage} alt="Post preview" className="w-full h-full object-cover" />
                          <button
                            onClick={() => setPostImage('')}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Link to (Optional)</label>
                    <select 
                      value={linkType}
                      onChange={(e) => setLinkType(e.target.value as PostLinkType)}
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
                    >
                      <option value="none">No Link</option>
                      <option value="event">Link to Event</option>
                      <option value="session">Link to Session</option>
                    </select>
                  </div>

                  {linkType !== 'none' && (
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">
                        Select {linkType === 'event' ? 'Event' : 'Session'}
                      </label>
                      <select 
                        value={selectedEventOrSession}
                        onChange={(e) => setSelectedEventOrSession(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
                      >
                        <option value="">Select...</option>
                        {(linkType === 'event' ? events : sessions).map((item) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Post to Social Media</span>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                  </div>
                </>
              )}

              {modalType === 'event' && (
                <>
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Event Name</label>
                    <input
                      type="text"
                      placeholder="Enter event name"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">Start Time</label>
                      <input
                        type="time"
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">End Time</label>
                      <input
                        type="time"
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Description</label>
                    <textarea
                      rows={3}
                      placeholder="Event description"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Expected Max Registration</label>
                    <input
                      type="number"
                      placeholder="Expected max registrations"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {modalType === 'session' && (
                <>
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Session Name</label>
                    <input
                      type="text"
                      placeholder="Enter session name"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">Start Time</label>
                      <input
                        type="time"
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">End Time</label>
                      <input
                        type="time"
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Online Session</span>
                    <input type="checkbox" className="w-4 h-4" />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Description</label>
                    <textarea
                      rows={3}
                      placeholder="Session description"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">Expected Max Registration</label>
                    <input
                      type="number"
                      placeholder="Expected max registrations"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Modal Actions - Fixed Footer */}
            <div className="flex-shrink-0 border-t border-gray-200 p-4 bg-white">
              <div className="flex gap-2">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  className={`flex-1 py-3 text-white rounded-lg hover:opacity-90 transition-opacity font-medium ${
                    modalType === 'post' ? 'bg-purple-600' :
                    modalType === 'event' ? 'bg-blue-600' : 'bg-pink-600'
                  }`}
                >
                  {modalType === 'post' && 'Publish Post'}
                  {modalType === 'event' && 'Create Event'}
                  {modalType === 'session' && 'Create Session'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
