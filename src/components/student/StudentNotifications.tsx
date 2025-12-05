import { Bell, Calendar, CheckCircle, AlertCircle, Info, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface StudentNotificationsProps {
  onBack?: () => void;
}

export default function StudentNotifications({ onBack }: StudentNotificationsProps) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Reminder: Study Room Today',
      message: 'Your reservation for Private Study Room B-204 starts in 30 minutes',
      time: '30 min ago',
      type: 'reminder',
      read: false,
      icon: '📚',
    },
    {
      id: 2,
      title: 'New Event: AI & Machine Learning',
      message: 'Tech Club is hosting a new workshop on December 10. Limited seats available!',
      time: '2 hours ago',
      type: 'event',
      read: false,
      icon: '🎉',
    },
    {
      id: 3,
      title: 'Basketball Game Confirmed',
      message: 'Minimum players reached for tomorrow\'s game at Basketball Court A',
      time: '5 hours ago',
      type: 'success',
      read: false,
      icon: '⚽',
    },
    {
      id: 4,
      title: 'Issue Update: AC Repair',
      message: 'Your reported issue in Study Room B-204 is now being addressed',
      time: '1 day ago',
      type: 'info',
      read: true,
      icon: '🔧',
    },
    {
      id: 5,
      title: 'New Post from Arts Club',
      message: 'Check out the amazing artwork from our recent exhibition!',
      time: '1 day ago',
      type: 'info',
      read: true,
      icon: '🎨',
    },
    {
      id: 6,
      title: 'Exam Schedule Posted',
      message: 'Final exams schedule has been posted. Check your student portal for details.',
      time: '2 days ago',
      type: 'info',
      read: true,
      icon: '📋',
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'reminder':
        return 'bg-blue-50 border-blue-200';
      case 'event':
        return 'bg-purple-50 border-purple-200';
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'info':
        return 'bg-gray-50 border-gray-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'reminder':
        return 'bg-blue-500';
      case 'event':
        return 'bg-purple-500';
      case 'success':
        return 'bg-green-500';
      case 'info':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Notifications</h1>
            {unreadCount > 0 && (
              <p className="text-blue-100 text-xs">{unreadCount} unread</p>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              Mark all read
            </button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="p-4 space-y-3">
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-600 font-semibold mb-2">No notifications</h3>
            <p className="text-gray-500 text-sm">You're all caught up!</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`rounded-xl border-2 overflow-hidden transition-all ${
                getNotificationColor(notification.type)
              } ${!notification.read ? 'shadow-md' : 'opacity-75'}`}
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className={`w-10 h-10 ${getIconColor(notification.type)} rounded-full flex items-center justify-center text-xl flex-shrink-0`}>
                    {notification.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={`text-sm font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notification.title}
                        {!notification.read && (
                          <span className="ml-2 inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </h4>
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">{notification.time}</p>
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
