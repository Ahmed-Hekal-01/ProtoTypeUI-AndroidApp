import { User, Mail, LogOut, Edit2, Check, X } from 'lucide-react';
import { useState } from 'react';

export default function ClubManagerAccount() {
  const [isEditing, setIsEditing] = useState(false);
  const [clubName, setClubName] = useState('Tech Club');
  const [email, setEmail] = useState('techclub@university.edu');
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
    setManagerName('John Smith');
  };

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
              💻
            </div>
            <div className="flex-1">
              <h2 className="text-2xl mb-1">{clubName}</h2>
              <p className="text-purple-100 text-sm mb-1">Technology & Innovation</p>
              <p className="text-purple-100 text-sm">245 Members</p>
            </div>
          </div>

          {/* Edit Button */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <Edit2 className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                <Check className="w-5 h-5" />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-purple-100">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 outline-none focus:bg-white/20 text-white placeholder-purple-200"
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {isEditing ? (
              <input
                type="text"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
                placeholder="Manager Name"
                className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 outline-none focus:bg-white/20 text-white placeholder-purple-200"
              />
            ) : (
              <span>Manager: {managerName}</span>
            )}
          </div>
        </div>
      </div>      {/* Account Actions */}
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
