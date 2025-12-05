import { Edit2, Users, Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Save, Image, ChevronRight } from 'lucide-react';

export default function ClubManagerSettings() {
  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Club Profile Card */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center text-3xl backdrop-blur-sm">
            💻
          </div>
          <div className="flex-1">
            <h2 className="text-2xl mb-1">Tech Club</h2>
            <p className="text-purple-100 text-sm mb-2">Technology & Innovation</p>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4" />
              <span>245 Members</span>
            </div>
          </div>
          <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <h3 className="mb-3 text-gray-700">Basic Information</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Club Name</label>
              <input
                type="text"
                defaultValue="Tech Club"
                className="w-full p-3 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">Category</label>
              <select className="w-full p-3 bg-gray-50 rounded-lg outline-none">
                <option>Technology</option>
                <option>Arts</option>
                <option>Business</option>
                <option>Sports</option>
                <option>Science</option>
                <option>Media</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">Description</label>
              <textarea
                rows={4}
                defaultValue="Explore cutting-edge technology, coding, and innovation with fellow tech enthusiasts"
                className="w-full p-3 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-purple-500 resize-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">Club Logo</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl">
                  💻
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  Change Logo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="mb-3 text-gray-700">Contact Information</h3>
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="club@university.edu"
              defaultValue="techclub@university.edu"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              defaultValue="+1 (555) 987-6543"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Office location"
              defaultValue="Student Center - Room 305"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Globe className="w-5 h-5 text-gray-400" />
            <input
              type="url"
              placeholder="Website URL"
              defaultValue="techclub.university.edu"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="mb-3 text-gray-700">Social Media</h3>
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Facebook className="w-5 h-5 text-blue-600" />
            <input
              type="text"
              placeholder="Facebook page URL"
              defaultValue="facebook.com/unitechclub"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Twitter className="w-5 h-5 text-blue-400" />
            <input
              type="text"
              placeholder="Twitter/X handle"
              defaultValue="@unitechclub"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Instagram className="w-5 h-5 text-pink-600" />
            <input
              type="text"
              placeholder="Instagram handle"
              defaultValue="@unitechclub"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Club Management */}
      <div>
        <h3 className="mb-3 text-gray-700">Club Management</h3>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">Manage Members</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">Co-Managers</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Edit2 className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">Club Guidelines</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Meeting Schedule */}
      <div>
        <h3 className="mb-3 text-gray-700">Regular Meeting Schedule</h3>
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-800 mb-1">Weekly General Meeting</p>
              <p className="text-xs text-gray-600">Every Wednesday, 5:00 PM</p>
            </div>
            <button className="text-purple-600 text-sm">Edit</button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-800 mb-1">Coding Session</p>
              <p className="text-xs text-gray-600">Every Friday, 4:00 PM</p>
            </div>
            <button className="text-purple-600 text-sm">Edit</button>
          </div>

          <button className="w-full py-2 text-sm text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
            + Add New Schedule
          </button>
        </div>
      </div>

      {/* Stats Visibility */}
      <div>
        <h3 className="mb-3 text-gray-700">Privacy Settings</h3>
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
            <span className="text-sm text-gray-700">Show member count publicly</span>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </label>

          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
            <span className="text-sm text-gray-700">Allow non-members to view events</span>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </label>

          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
            <span className="text-sm text-gray-700">Auto-approve join requests</span>
            <input type="checkbox" className="w-4 h-4" />
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
        <Save className="w-5 h-5" />
        Save Changes
      </button>
    </div>
  );
}
