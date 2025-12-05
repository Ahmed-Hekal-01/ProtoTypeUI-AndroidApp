import { User, Mail, Phone, Lock, Bell, Shield, LogOut, Camera, Edit2, Check, X } from 'lucide-react';
import { useState } from 'react';

export default function ClubManagerAccount() {
  const [isEditing, setIsEditing] = useState(false);
  const [clubName, setClubName] = useState('Tech Club');
  const [email, setEmail] = useState('techclub@university.edu');
  const [phone, setPhone] = useState('+1 (555) 987-6543');
  const [managerName, setManagerName] = useState('John Smith');

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values
    setClubName('Tech Club');
    setEmail('techclub@university.edu');
    setPhone('+1 (555) 987-6543');
    setManagerName('John Smith');
  };

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
              💻
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-50 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-1">{clubName}</h2>
          <p className="text-purple-100 text-sm mb-3">Technology & Innovation Club</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>245 Members</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div>
              <span>Since 2020</span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-700 font-semibold">Account Information</h3>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
              >
                <Check className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="divide-y divide-gray-100">
            {/* Club Name */}
            <div className="p-4">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                <User className="w-4 h-4" />
                Club Name
              </label>
              <input
                type="text"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg outline-none border ${
                  isEditing
                    ? 'bg-gray-50 border-gray-200 focus:border-purple-500'
                    : 'bg-gray-100 border-transparent cursor-not-allowed'
                }`}
              />
            </div>

            {/* Manager Name */}
            <div className="p-4">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                <User className="w-4 h-4" />
                Manager Name
              </label>
              <input
                type="text"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg outline-none border ${
                  isEditing
                    ? 'bg-gray-50 border-gray-200 focus:border-purple-500'
                    : 'bg-gray-100 border-transparent cursor-not-allowed'
                }`}
              />
            </div>

            {/* Email */}
            <div className="p-4">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg outline-none border ${
                  isEditing
                    ? 'bg-gray-50 border-gray-200 focus:border-purple-500'
                    : 'bg-gray-100 border-transparent cursor-not-allowed'
                }`}
              />
            </div>

            {/* Phone */}
            <div className="p-4">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg outline-none border ${
                  isEditing
                    ? 'bg-gray-50 border-gray-200 focus:border-purple-500'
                    : 'bg-gray-100 border-transparent cursor-not-allowed'
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div>
        <h3 className="mb-3 text-gray-700 font-semibold">Security</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-medium">Change Password</p>
                <p className="text-sm text-gray-500">Update your account password</p>
              </div>
            </div>
            <span className="text-gray-400">›</span>
          </button>

          <div className="border-t border-gray-100"></div>

          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add extra security to your account</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Off</span>
              <span className="text-gray-400">›</span>
            </div>
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div>
        <h3 className="mb-3 text-gray-700 font-semibold">Notifications</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-medium">Notification Settings</p>
                <p className="text-sm text-gray-500">Manage push notifications and emails</p>
              </div>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>

      {/* Account Actions */}
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
