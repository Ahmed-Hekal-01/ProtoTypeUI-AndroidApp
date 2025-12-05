import { useState } from 'react';
import { Search, Filter, Plus, Users as UsersIcon, Building2, Shield, Mail, Phone } from 'lucide-react';

export default function AdminUsers() {
  const [userType, setUserType] = useState<'all' | 'students' | 'clubs' | 'admins'>('all');

  const students = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@university.edu', faculty: 'Computer Science', year: 'Junior', joined: 'Sep 2023' },
    { id: 2, name: 'Michael Chen', email: 'michael.c@university.edu', faculty: 'Engineering', year: 'Senior', joined: 'Sep 2022' },
    { id: 3, name: 'Emma Williams', email: 'emma.w@university.edu', faculty: 'Business', year: 'Sophomore', joined: 'Sep 2024' },
  ];

  const clubs = [
    { id: 1, name: 'Tech Club', manager: 'John Doe', members: 245, events: 12, status: 'active' },
    { id: 2, name: 'Arts Club', manager: 'Jane Smith', members: 180, events: 8, status: 'active' },
    { id: 3, name: 'Entrepreneurship Club', manager: 'Mike Johnson', members: 320, events: 15, status: 'active' },
  ];

  const admins = [
    { id: 1, name: 'Admin User', email: 'admin@university.edu', role: 'Super Admin', permissions: 'Full Access' },
    { id: 2, name: 'Sports Admin', email: 'sports@university.edu', role: 'Sports Admin', permissions: 'Sports Facilities' },
    { id: 3, name: 'Study Admin', email: 'study@university.edu', role: 'Study Admin', permissions: 'Study Rooms' },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2 text-gray-800">User Management</h1>
          <p className="text-gray-600">Manage students, clubs, and administrators</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md">
          <Plus className="w-5 h-5" />
          Add User
        </button>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">2,845</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">24</p>
              <p className="text-sm text-gray-600">Active Clubs</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">8</p>
              <p className="text-sm text-gray-600">Administrators</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none shadow-sm"
          />
        </div>
        <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => setUserType('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              userType === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setUserType('students')}
            className={`px-4 py-2 rounded-lg transition-all ${
              userType === 'students'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setUserType('clubs')}
            className={`px-4 py-2 rounded-lg transition-all ${
              userType === 'clubs'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Clubs
          </button>
          <button
            onClick={() => setUserType('admins')}
            className={`px-4 py-2 rounded-lg transition-all ${
              userType === 'admins'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Admins
          </button>
        </div>
      </div>

      {/* Students Table */}
      {(userType === 'all' || userType === 'students') && (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl text-gray-800">Students</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Name</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Email</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Faculty</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Year</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Joined</th>
                  <th className="px-6 py-4 text-right text-sm text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                          {student.name.charAt(0)}
                        </div>
                        <span className="text-gray-800">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.faculty}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.year}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.joined}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Clubs Table */}
      {(userType === 'all' || userType === 'clubs') && (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl text-gray-800">Clubs</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Club Name</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Manager</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Members</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Events</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Status</th>
                  <th className="px-6 py-4 text-right text-sm text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {clubs.map((club) => (
                  <tr key={club.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-800">{club.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{club.manager}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{club.members}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{club.events}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {club.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Admins Table */}
      {(userType === 'all' || userType === 'admins') && (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl text-gray-800">Administrators</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Name</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Email</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Role</th>
                  <th className="px-6 py-4 text-left text-sm text-gray-600">Permissions</th>
                  <th className="px-6 py-4 text-right text-sm text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                          <Shield className="w-5 h-5" />
                        </div>
                        <span className="text-gray-800">{admin.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{admin.email}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                        {admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{admin.permissions}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
