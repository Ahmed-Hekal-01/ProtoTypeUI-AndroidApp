import { useState } from 'react';
import { Home, Calendar, Users, User, Bell } from 'lucide-react';
import StudentHome from './student/StudentHome';
import StudentStudyRooms from './student/StudentStudyRooms';
import StudentSports from './student/StudentSports';
import StudentEvents from './student/StudentEvents';
import StudentClubs from './student/StudentClubs';
import StudentProfile from './student/StudentProfile';
import StudentReportIssue from './student/StudentReportIssue';
import StudentNotifications from './student/StudentNotifications';
import StudentReservations from './student/StudentReservations';
import StudentClubProfile from './student/StudentClubProfile';

type Tab = 'home' | 'study-rooms' | 'sports' | 'events' | 'clubs' | 'profile' | 'report-issue' | 'notifications' | 'reservations' | 'club-profile';

interface StudentAppProps {
  onBack: () => void;
}

export default function StudentApp({ onBack }: StudentAppProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [notificationCount, setNotificationCount] = useState(3);

  const tabs = [
    { id: 'home' as Tab, icon: Home, label: 'Home' },
    { id: 'events' as Tab, icon: Calendar, label: 'Events' },
    { id: 'clubs' as Tab, icon: Users, label: 'Clubs' },
    { id: 'profile' as Tab, icon: User, label: 'Profile' },
  ];

  const handleNavigate = (page: string) => {
    setActiveTab(page as Tab);
  };

  const handleBackToHome = () => {
    setActiveTab('home');
  };

  // Check if current tab is a subscreen (not in main nav)
  const isSubscreen = !tabs.some(tab => tab.id === activeTab);
  
  // Only show top bar for home page
  const showTopBar = activeTab === 'home';

  return (
    <div className="min-h-screen bg-gray-50 pb-20 max-w-md mx-auto">
      {/* Top Bar - Only show for home */}
      {showTopBar && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sticky top-0 z-10 shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Cursor Park</h1>
            <button
              onClick={() => setActiveTab('notifications')}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
            >
              <Bell className="w-6 h-6" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="pb-4">
        {activeTab === 'home' && <StudentHome onNavigate={handleNavigate} />}
        {activeTab === 'study-rooms' && <StudentStudyRooms onBack={handleBackToHome} />}
        {activeTab === 'sports' && <StudentSports onBack={handleBackToHome} />}
        {activeTab === 'events' && <StudentEvents onBack={handleBackToHome} />}
        {activeTab === 'clubs' && <StudentClubs onBack={handleBackToHome} />}
        {activeTab === 'profile' && <StudentProfile onBack={handleBackToHome} />}
        {activeTab === 'report-issue' && <StudentReportIssue onBack={handleBackToHome} />}
        {activeTab === 'notifications' && <StudentNotifications onBack={handleBackToHome} />}
        {activeTab === 'reservations' && <StudentReservations onBack={handleBackToHome} />}
        {activeTab === 'club-profile' && <StudentClubProfile onBack={handleBackToHome} />}
      </div>

      {/* Bottom Navigation - Only show for main screens */}
      {!isSubscreen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg max-w-md mx-auto">
          <div className="grid grid-cols-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center py-3 px-2 transition-colors ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-blue-600/20' : ''}`} />
                  <span className="text-xs">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
