import { useState } from 'react';
import { Home, Plus, Users, Bell, Settings, ArrowLeft } from 'lucide-react';
import ClubManagerHome from './club-manager/ClubManagerHome';
import ClubManagerCreate from './club-manager/ClubManagerCreate';
import ClubManagerAttendees from './club-manager/ClubManagerAttendees';
import ClubManagerAnnouncements from './club-manager/ClubManagerAnnouncements';
import ClubManagerSettings from './club-manager/ClubManagerSettings';

type Tab = 'home' | 'create' | 'attendees' | 'announcements' | 'settings';

interface ClubManagerAppProps {
  onBack: () => void;
}

export default function ClubManagerApp({ onBack }: ClubManagerAppProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const tabs = [
    { id: 'home' as Tab, icon: Home, label: 'Home' },
    { id: 'create' as Tab, icon: Plus, label: 'Create' },
    { id: 'attendees' as Tab, icon: Users, label: 'Attendees' },
    { id: 'announcements' as Tab, icon: Bell, label: 'Announce' },
    { id: 'settings' as Tab, icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 max-w-md mx-auto">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl">Tech Club</h1>
            <p className="text-purple-100 text-sm">Club Manager Portal</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-4">
        {activeTab === 'home' && <ClubManagerHome />}
        {activeTab === 'create' && <ClubManagerCreate />}
        {activeTab === 'attendees' && <ClubManagerAttendees />}
        {activeTab === 'announcements' && <ClubManagerAnnouncements />}
        {activeTab === 'settings' && <ClubManagerSettings />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg max-w-md mx-auto">
        <div className="grid grid-cols-5">
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
