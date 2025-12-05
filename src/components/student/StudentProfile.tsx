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
