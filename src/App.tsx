import { useState } from 'react';
import { Users, Building2, Shield } from 'lucide-react';
import StudentApp from './components/StudentApp';
import ClubManagerApp from './components/ClubManagerApp';
import AdminDashboard from './components/AdminDashboard';

type UserRole = 'student' | 'club-manager' | 'admin' | null;

export default function App() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);

  if (selectedRole === 'student') {
    return <StudentApp onBack={() => setSelectedRole(null)} onSwitchToClubManager={() => setSelectedRole('club-manager')} />;
  }

  if (selectedRole === 'club-manager') {
    return <ClubManagerApp onBack={() => setSelectedRole(null)} onSwitchToStudent={() => setSelectedRole('student')} />;
  }

  if (selectedRole === 'admin') {
    return <AdminDashboard onBack={() => setSelectedRole(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Cursor Park
          </h1>
          <p className="text-gray-600">
            Campus Facility & Event Management System
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Student Card */}
          <button
            onClick={() => setSelectedRole('student')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border-2 border-transparent hover:border-blue-500"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl mb-3">Student</h2>
            <p className="text-gray-600 text-sm">
              Reserve study rooms, book sports facilities, join events and clubs
            </p>
          </button>

          {/* Club Manager Card */}
          <button
            onClick={() => setSelectedRole('club-manager')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border-2 border-transparent hover:border-purple-500"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl mb-3">Club Manager</h2>
            <p className="text-gray-600 text-sm">
              Create events, manage sessions, engage with club members
            </p>
          </button>

          {/* Admin Card */}
          <button
            onClick={() => setSelectedRole('admin')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border-2 border-transparent hover:border-indigo-500"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl mb-3">System Admin</h2>
            <p className="text-gray-600 text-sm">
              Approve events, manage facilities, view analytics and reports
            </p>
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Select your role to view the interface</p>
        </div>
      </div>
    </div>
  );
}
