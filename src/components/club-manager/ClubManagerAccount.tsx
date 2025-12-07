import { User, Mail, LogOut, RefreshCw } from 'lucide-react';

interface ClubManagerAccountProps {
  onSwitchToStudent?: () => void;
}

export default function ClubManagerAccount({ onSwitchToStudent }: ClubManagerAccountProps) {
  const clubName = 'Tech Club';
  const clubDescription = 'Technology & Innovation';
  const clubFullDescription = 'A community for tech enthusiasts to learn, build, and innovate together. We organize workshops, hackathons, and tech talks.';
  const clubImage = '💻';
  const email = 'techclub@university.edu';
  const managerName = 'John Smith';

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
              {clubImage}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl mb-1">{clubName}</h2>
              <p className="text-purple-100 text-sm mb-1">{clubDescription}</p>
              <p className="text-purple-100 text-sm">245 Members</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-purple-100">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Manager: {managerName}</span>
          </div>
        </div>
      </div>

      {/* Club Description */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="mb-3 text-gray-700 font-semibold">About the Club</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{clubFullDescription}</p>
      </div>

      {/* Toggle to Student Mode Button */}
      {onSwitchToStudent && (
        <button
          onClick={onSwitchToStudent}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <RefreshCw className="w-5 h-5" />
          <span className="font-medium">Switch to Student Mode</span>
        </button>
      )}      {/* Account Actions */}
      <div>
        <h3 className="mb-3 text-gray-700 font-semibold">Account Actions</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
      </div>

      {/* App Info */}
      <div className="text-center text-sm text-gray-500 space-y-1 pt-4">
        <p>Club Manager Portal v1.0.0</p>
        <p>© 2025 University Campus App</p>
      </div>
    </div>
  );
}
