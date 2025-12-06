import { TrendingUp, Users, Calendar, Eye, Heart, MessageCircle, BarChart3, Clock } from 'lucide-react';

export default function ClubManagerHome() {
  const stats = [
    { label: 'Total Members', value: '245', change: '+12', icon: Users, color: 'bg-blue-500' },
    { label: 'Active Events', value: '4', change: '+1', icon: Calendar, color: 'bg-purple-500' },
    { label: 'Total Registrations', value: '156', change: '+28', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Engagement Rate', value: '78%', change: '+5%', icon: Heart, color: 'bg-pink-500' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI & Machine Learning Workshop',
      date: 'Dec 5, 2025',
      time: '3:00 PM',
      registered: 45,
      capacity: 60,
      status: 'approved',
    },
    {
      id: 2,
      title: 'Web Development Basics',
      date: 'Dec 3, 2025',
      time: '4:00 PM',
      registered: 32,
      capacity: 40,
      status: 'pending',
    },
  ];

  const recentPosts = [
    {
      id: 1,
      content: 'Excited to announce our AI workshop! Registration open now 🚀',
      likes: 45,
      comments: 12,
      views: 230,
      time: '2 hours ago',
    },
    {
      id: 2,
      content: 'Thank you to everyone who attended last week\'s coding session!',
      likes: 67,
      comments: 18,
      views: 340,
      time: '1 day ago',
    },
  ];

  const quickActions = [
    { label: 'Create Event', icon: '📅', color: 'bg-blue-500' },
    { label: 'New Session', icon: '🎓', color: 'bg-purple-500' },
    { label: 'Post Update', icon: '📢', color: 'bg-pink-500' },
    { label: 'View Analytics', icon: '📊', color: 'bg-green-500' },
  ];
  return (
    <div className="p-4 space-y-6">
      {/* Quick Actions */}
      <div>
        <h3 className="mb-3 text-gray-700">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all active:scale-95 flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-2xl`}>
                {action.icon}
              </div>
              <span className="text-sm text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div>
        <h3 className="mb-3 text-gray-700 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Club Statistics
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl text-gray-800 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-700">Upcoming Events</h3>
          <button className="text-sm text-purple-600">View All</button>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-gray-800 mb-2">{event.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  event.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {event.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{event.registered}/{event.capacity} registered</span>
                </div>
                <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600"
                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts Performance */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-700">Recent Posts</h3>
          <button className="text-sm text-purple-600">View All</button>
        </div>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <p className="text-sm text-gray-800 mb-3">{post.content}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {post.views}
                </span>
                <span className="ml-auto text-xs text-gray-400">{post.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Activity */}
      <div>
        <h3 className="mb-3 text-gray-700">Member Activity (Last 7 Days)</h3>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-end justify-between h-32 gap-2">
            {[45, 62, 38, 75, 55, 82, 68].map((value, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg"
                  style={{ height: `${value}%` }}
                />
                <span className="text-xs text-gray-500">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
