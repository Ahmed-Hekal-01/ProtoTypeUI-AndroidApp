import { useState } from 'react';
import { Home, Users, UserCircle } from 'lucide-react';
import ClubManagerHome from './club-manager/ClubManagerHome';
import ClubManagerAttendees from './club-manager/ClubManagerAttendees';
import ClubManagerAccount from './club-manager/ClubManagerAccount';

type Tab = 'home' | 'attendees' | 'account';

interface ClubManagerAppProps {
  onBack: () => void;
  onSwitchToStudent?: () => void;
}

export default function ClubManagerApp({ onBack, onSwitchToStudent }: ClubManagerAppProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const tabs = [
    { id: 'home' as Tab, icon: Home, label: 'Home' },
    { id: 'attendees' as Tab, icon: Users, label: 'Attendees' },
    { id: 'account' as Tab, icon: UserCircle, label: 'Account' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 max-w-md mx-auto">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <h1 className="text-xl">Tech Club</h1>
            <p className="text-purple-100 text-sm">Club Manager Portal</p>
          </div>
        </div>
      </div>      {/* Content */}
      <div className="pb-4">
        {activeTab === 'home' && <ClubManagerHome />}
        {activeTab === 'attendees' && <ClubManagerAttendees />}
        {activeTab === 'account' && <ClubManagerAccount onSwitchToStudent={onSwitchToStudent} />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg max-w-md mx-auto">
        <div className="grid grid-cols-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-3 px-2 transition-colors ${
                  isActive
                    ? 'text-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1 ${isActive ? 'fill-purple-600/20' : ''}`} />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
