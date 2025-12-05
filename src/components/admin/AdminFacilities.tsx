import { Building2, BookOpen, Dumbbell, Home, Plus, Settings, AlertCircle } from 'lucide-react';

export default function AdminFacilities() {
  const facilities = [
    {
      category: 'Study Rooms',
      icon: BookOpen,
      color: 'bg-blue-500',
      items: [
        { name: 'Private Study Room B-204', status: 'available', capacity: 6, floor: '2nd Floor - Library' },
        { name: 'Private Study Room B-205', status: 'occupied', capacity: 8, floor: '2nd Floor - Library' },
        { name: 'Private Study Room C-301', status: 'available', capacity: 4, floor: '3rd Floor - Library' },
        { name: 'Open Study Hall A', status: 'available', capacity: 50, floor: '1st Floor - Library' },
        { name: 'Silent Study Area', status: 'full', capacity: 30, floor: '3rd Floor - Library' },
      ],
    },
    {
      category: 'Sports Facilities',
      icon: Dumbbell,
      color: 'bg-green-500',
      items: [
        { name: 'Basketball Court A', status: 'occupied', capacity: 10, floor: 'Sports Complex' },
        { name: 'Basketball Court B', status: 'available', capacity: 10, floor: 'Sports Complex' },
        { name: 'Tennis Court 1', status: 'available', capacity: 4, floor: 'Sports Complex' },
        { name: 'Football Field', status: 'occupied', capacity: 22, floor: 'Outdoor' },
        { name: 'Gym', status: 'available', capacity: 30, floor: 'Sports Complex' },
        { name: 'Volleyball Court', status: 'maintenance', capacity: 12, floor: 'Sports Complex' },
      ],
    },
    {
      category: 'Event Halls',
      icon: Home,
      color: 'bg-purple-500',
      items: [
        { name: 'Main Auditorium', status: 'occupied', capacity: 500, floor: 'Main Building' },
        { name: 'Conference Room A', status: 'available', capacity: 60, floor: 'Business School' },
        { name: 'Conference Room B', status: 'available', capacity: 40, floor: 'Engineering Building' },
        { name: 'Campus Plaza', status: 'maintenance', capacity: 1000, floor: 'Outdoor' },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-700';
      case 'occupied': return 'bg-blue-100 text-blue-700';
      case 'full': return 'bg-red-100 text-red-700';
      case 'maintenance': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2 text-gray-800">Facilities Management</h1>
          <p className="text-gray-600">Monitor and manage all campus facilities</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md">
          <Plus className="w-5 h-5" />
          Add Facility
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm">5 available</span>
          </div>
          <p className="text-2xl text-gray-800 mb-1">12</p>
          <p className="text-sm text-gray-600">Study Rooms</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-green-600 text-sm">3 available</span>
          </div>
          <p className="text-2xl text-gray-800 mb-1">8</p>
          <p className="text-sm text-gray-600">Sports Facilities</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm">2 available</span>
          </div>
          <p className="text-2xl text-gray-800 mb-1">5</p>
          <p className="text-sm text-gray-600">Event Halls</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-orange-600 text-sm">Needs attention</span>
          </div>
          <p className="text-2xl text-gray-800 mb-1">2</p>
          <p className="text-sm text-gray-600">In Maintenance</p>
        </div>
      </div>

      {/* Facilities List */}
      {facilities.map((category) => {
        const Icon = category.icon;
        return (
          <div key={category.category} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl text-gray-800">{category.category}</h2>
                  <p className="text-sm text-gray-600">{category.items.length} facilities</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {category.items.map((item, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-800">{item.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Capacity: {item.capacity}</span>
                        <span>•</span>
                        <span>{item.floor}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Settings className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
