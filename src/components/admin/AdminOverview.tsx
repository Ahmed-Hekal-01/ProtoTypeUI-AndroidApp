import { TrendingUp, Users, Calendar, Building2, AlertCircle, CheckCircle, Clock, Activity } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    {
      label: 'Total Students',
      value: '2,845',
      change: '+12% from last month',
      icon: Users,
      color: 'bg-blue-500',
      trend: 'up',
    },
    {
      label: 'Active Clubs',
      value: '24',
      change: '+2 new this month',
      icon: Building2,
      color: 'bg-purple-500',
      trend: 'up',
    },
    {
      label: 'Total Events',
      value: '156',
      change: '+8 this week',
      icon: Calendar,
      color: 'bg-green-500',
      trend: 'up',
    },
    {
      label: 'Facility Usage',
      value: '87%',
      change: '+5% from last week',
      icon: TrendingUp,
      color: 'bg-orange-500',
      trend: 'up',
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: 'Event',
      title: 'AI & Machine Learning Workshop',
      club: 'Tech Club',
      date: 'Dec 5, 2025',
      priority: 'high',
    },
    {
      id: 2,
      type: 'Session',
      title: 'Weekly Coding Session',
      club: 'Tech Club',
      date: 'Dec 3, 2025',
      priority: 'medium',
    },
    {
      id: 3,
      type: 'Event',
      title: 'Cultural Festival',
      club: 'Arts Club',
      date: 'Dec 10, 2025',
      priority: 'high',
    },
  ];

  const recentActivity = [
    {
      action: 'Event Approved',
      details: 'Startup Pitch Competition by Entrepreneurship Club',
      time: '10 minutes ago',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      action: 'New Club Created',
      details: 'Photography Club added to the system',
      time: '1 hour ago',
      icon: Building2,
      color: 'text-blue-600',
    },
    {
      action: 'Complaint Resolved',
      details: 'AC issue in Study Room B-204 fixed',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      action: 'New Complaint',
      details: 'Basketball Court lighting reported',
      time: '3 hours ago',
      icon: AlertCircle,
      color: 'text-orange-600',
    },
  ];

  const facilitiesStatus = [
    { name: 'Study Rooms', total: 12, available: 5, occupied: 7, maintenance: 0 },
    { name: 'Sports Courts', total: 8, available: 3, occupied: 4, maintenance: 1 },
    { name: 'Event Halls', total: 5, available: 2, occupied: 2, maintenance: 1 },
    { name: 'Gym', total: 1, available: 1, occupied: 0, maintenance: 0 },
  ];

  const topClubs = [
    { name: 'Tech Club', members: 245, events: 12, engagement: 92 },
    { name: 'Entrepreneurship Club', members: 320, events: 15, engagement: 88 },
    { name: 'Sports Society', members: 420, events: 20, engagement: 85 },
    { name: 'Arts Club', members: 180, events: 8, engagement: 78 },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2 text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {stat.trend === 'up' && (
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                )}
              </div>
              <p className="text-3xl text-gray-800 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-800">Pending Approvals</h2>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
              {pendingApprovals.length} pending
            </span>
          </div>
          <div className="space-y-3">
            {pendingApprovals.map((item) => (
              <div
                key={item.id}
                className="p-4 border border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className={`inline-block px-2 py-1 rounded text-xs mb-2 ${
                      item.type === 'Event' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type}
                    </span>
                    <h3 className="text-sm text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.club} • {item.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.priority === 'high' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Approve
                  </button>
                  <button className="flex-1 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-800">Recent Activity</h2>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${activity.color} mt-0.5`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-600 mb-1">{activity.details}</p>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Facilities Status & Top Clubs */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Facilities Status */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl text-gray-800 mb-6">Facilities Status</h2>
          <div className="space-y-4">
            {facilitiesStatus.map((facility, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">{facility.name}</span>
                  <span className="text-sm text-gray-600">
                    {facility.available}/{facility.total} available
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full flex">
                    <div
                      className="bg-green-500"
                      style={{ width: `${(facility.available / facility.total) * 100}%` }}
                    />
                    <div
                      className="bg-blue-500"
                      style={{ width: `${(facility.occupied / facility.total) * 100}%` }}
                    />
                    <div
                      className="bg-orange-500"
                      style={{ width: `${(facility.maintenance / facility.total) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Available: {facility.available}
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Occupied: {facility.occupied}
                  </span>
                  {facility.maintenance > 0 && (
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      Maintenance: {facility.maintenance}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Clubs */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl text-gray-800 mb-6">Top Performing Clubs</h2>
          <div className="space-y-4">
            {topClubs.map((club, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm text-gray-800">{club.name}</h3>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                    {club.engagement}% engaged
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                  <div>
                    <p className="text-gray-500 mb-1">Members</p>
                    <p className="text-gray-800">{club.members}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Events</p>
                    <p className="text-gray-800">{club.events}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Activity Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-xl text-gray-800 mb-6">Weekly Activity</h2>
        <div className="flex items-end justify-between h-64 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
            const heights = [65, 78, 82, 70, 88, 75, 60];
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex flex-col items-center gap-1 flex-1 justify-end">
                  <span className="text-xs text-gray-600 mb-1">{heights[idx]}%</span>
                  <div
                    className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ height: `${heights[idx]}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
