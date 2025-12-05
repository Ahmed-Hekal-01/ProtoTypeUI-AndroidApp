import { useState } from 'react';
import { LayoutDashboard, CheckSquare, Building2, Users, FileText, AlertCircle, ArrowLeft, LogOut } from 'lucide-react';
import AdminOverview from './admin/AdminOverview';
import AdminApprovals from './admin/AdminApprovals';
import AdminFacilities from './admin/AdminFacilities';
import AdminUsers from './admin/AdminUsers';
import AdminReports from './admin/AdminReports';
import AdminComplaints from './admin/AdminComplaints';

type Tab = 'overview' | 'approvals' | 'facilities' | 'users' | 'reports' | 'complaints';

interface AdminDashboardProps {
  onBack: () => void;
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const menuItems = [
    { id: 'overview' as Tab, icon: LayoutDashboard, label: 'Overview' },
    { id: 'approvals' as Tab, icon: CheckSquare, label: 'Approvals', badge: 5 },
    { id: 'facilities' as Tab, icon: Building2, label: 'Facilities' },
    { id: 'users' as Tab, icon: Users, label: 'Users' },
    { id: 'reports' as Tab, icon: FileText, label: 'Reports' },
    { id: 'complaints' as Tab, icon: AlertCircle, label: 'Complaints', badge: 3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg">Cursor Park</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Admin Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white">
              A
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Role Selection</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'overview' && <AdminOverview />}
        {activeTab === 'approvals' && <AdminApprovals />}
        {activeTab === 'facilities' && <AdminFacilities />}
        {activeTab === 'users' && <AdminUsers />}
        {activeTab === 'reports' && <AdminReports />}
        {activeTab === 'complaints' && <AdminComplaints />}
      </div>
    </div>
  );
}
