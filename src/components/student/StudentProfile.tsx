import { LogOut, ChevronRight, Mail, Phone, ArrowLeft } from 'lucide-react';

interface StudentProfileProps {
  onBack?: () => void;
}

export default function StudentProfile({ onBack }: StudentProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      {onBack && (
        <div 
          className="text-white p-4 sticky top-0 z-10 shadow-md"
          style={{ background: 'linear-gradient(to right, #2563eb, #4f46e5)' }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
        </div>
      )}

      <div className="p-4 space-y-6 pb-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
            👩‍🎓
          </div>
          <div className="flex-1">
            <h2 className="text-2xl mb-1">Sarah Johnson</h2>
            <p className="text-blue-100 text-sm mb-1">Computer Science • Junior</p>
            <p className="text-blue-100 text-sm">ID: CS2023-1234</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>sarah.johnson@university.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">My QR Code</h3>
        <div className="flex justify-center mb-3">
          <div className="bg-white p-4 rounded-xl shadow-inner border-2 border-gray-100">
            <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-auto">
              {/* QR Code pattern - simplified representation */}
              <rect width="200" height="200" fill="white"/>
              
              {/* Corner markers */}
              <g fill="black">
                {/* Top-left corner */}
                <rect x="10" y="10" width="50" height="50"/>
                <rect x="20" y="20" width="30" height="30" fill="white"/>
                <rect x="25" y="25" width="20" height="20" fill="black"/>
                
                {/* Top-right corner */}
                <rect x="140" y="10" width="50" height="50"/>
                <rect x="150" y="20" width="30" height="30" fill="white"/>
                <rect x="155" y="25" width="20" height="20" fill="black"/>
                
                {/* Bottom-left corner */}
                <rect x="10" y="140" width="50" height="50"/>
                <rect x="20" y="150" width="30" height="30" fill="white"/>
                <rect x="25" y="155" width="20" height="20" fill="black"/>
                
                {/* Data pattern - random pattern for visual effect */}
                <rect x="70" y="10" width="10" height="10"/>
                <rect x="90" y="10" width="10" height="10"/>
                <rect x="110" y="10" width="10" height="10"/>
                <rect x="80" y="20" width="10" height="10"/>
                <rect x="100" y="20" width="10" height="10"/>
                <rect x="120" y="20" width="10" height="10"/>
                
                <rect x="10" y="70" width="10" height="10"/>
                <rect x="20" y="80" width="10" height="10"/>
                <rect x="30" y="90" width="10" height="10"/>
                <rect x="40" y="100" width="10" height="10"/>
                <rect x="50" y="110" width="10" height="10"/>
                
                <rect x="70" y="70" width="10" height="10"/>
                <rect x="90" y="70" width="10" height="10"/>
                <rect x="110" y="70" width="10" height="10"/>
                <rect x="130" y="70" width="10" height="10"/>
                <rect x="150" y="70" width="10" height="10"/>
                <rect x="170" y="70" width="10" height="10"/>
                
                <rect x="80" y="90" width="10" height="10"/>
                <rect x="100" y="90" width="10" height="10"/>
                <rect x="120" y="90" width="10" height="10"/>
                <rect x="140" y="90" width="10" height="10"/>
                <rect x="160" y="90" width="10" height="10"/>
                <rect x="180" y="90" width="10" height="10"/>
                
                <rect x="70" y="110" width="10" height="10"/>
                <rect x="90" y="110" width="10" height="10"/>
                <rect x="110" y="110" width="10" height="10"/>
                <rect x="130" y="110" width="10" height="10"/>
                <rect x="150" y="110" width="10" height="10"/>
                <rect x="170" y="110" width="10" height="10"/>
                
                <rect x="80" y="130" width="10" height="10"/>
                <rect x="100" y="130" width="10" height="10"/>
                <rect x="120" y="130" width="10" height="10"/>
                <rect x="140" y="130" width="10" height="10"/>
                <rect x="160" y="130" width="10" height="10"/>
                <rect x="180" y="130" width="10" height="10"/>
                
                <rect x="70" y="150" width="10" height="10"/>
                <rect x="90" y="150" width="10" height="10"/>
                <rect x="110" y="150" width="10" height="10"/>
                <rect x="130" y="150" width="10" height="10"/>
                <rect x="150" y="150" width="10" height="10"/>
                <rect x="170" y="150" width="10" height="10"/>
                
                <rect x="80" y="170" width="10" height="10"/>
                <rect x="100" y="170" width="10" height="10"/>
                <rect x="120" y="170" width="10" height="10"/>
                <rect x="140" y="170" width="10" height="10"/>
                <rect x="160" y="170" width="10" height="10"/>
                <rect x="180" y="170" width="10" height="10"/>
              </g>
            </svg>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mb-2">Student ID: CS2023-1234</p>
        <p className="text-center text-xs text-gray-400">Show this code for attendance and facility access</p>
      </div>

      {/* Settings Menu - Log Out Only */}
      <div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <button className="w-full p-4 flex items-center justify-between hover:bg-red-50 transition-colors text-red-600">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Log Out</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
