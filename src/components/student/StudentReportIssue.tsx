import { AlertTriangle, MapPin, Calendar, Clock, Camera, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

interface StudentReportIssueProps {
  onBack?: () => void;
}

export default function StudentReportIssue({ onBack }: StudentReportIssueProps) {
  const [reportType, setReportType] = useState<'sport' | 'room' | ''>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const issueCategories = [
    { id: 'equipment', label: 'Equipment' },
    { id: 'safety', label: 'Safety Concern' },
    { id: 'other', label: 'Other' },
  ];

  const sportLocations = [
    'Basketball Court A',
    'Basketball Court B',
    'Football Field 1',
    'Football Field 2',
    'Tennis Court 1',
    'Tennis Court 2',
    'Gym Area',
    'Swimming Pool',
    'Track and Field',
  ];

  const roomLocations = [
    'Study Room B-204',
    'Study Room B-205',
    'Study Room C-301',
    'Study Room C-302',
    'Study Room D-401',
    'Library - Floor 1',
    'Library - Floor 2',
    'Library - Floor 3',
    'Conference Room A',
    'Conference Room B',
  ];

  const locations = reportType === 'sport' ? sportLocations : reportType === 'room' ? roomLocations : [];
  const recentIssues = [
    {
      id: 1,
      title: 'AC not working in Study Room B-204',
      category: 'Equipment',
      status: 'In Progress',
      date: 'Nov 25, 2025',
      color: 'orange',
    },
    {
      id: 2,
      title: 'Broken whiteboard marker in Court A',
      category: 'Equipment',
      status: 'Resolved',
      date: 'Nov 20, 2025',
      color: 'green',
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReportType('');
      setSelectedLocation('');
      setSelectedCategories([]);
      setDescription('');
      setPhoto(null);
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold">Report Issue</h1>
            <p className="text-orange-100 text-xs">Help us improve campus facilities</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-8">
        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-green-800 font-semibold mb-1">Issue Reported Successfully!</h4>
              <p className="text-green-700 text-sm">We'll look into this and update you soon.</p>
            </div>
          </div>
        )}        {/* Report Form */}
        <form onSubmit={handleSubmit} className="space-y-6">          {/* Report Type Selection */}
          <div>
            <label className="text-sm text-gray-700 mb-3 block font-semibold">Report Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setReportType('sport');
                  setSelectedLocation('');
                }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  reportType === 'sport'
                    ? 'border-orange-500 bg-orange-50 shadow-md ring-2 ring-orange-200'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-2 mx-auto transition-all ${
                  reportType === 'sport' ? 'bg-orange-500 scale-110' : 'bg-orange-400'
                }`}>
                  ⚽
                </div>
                <span className={`text-xs text-center block transition-all ${
                  reportType === 'sport' ? 'text-orange-700 font-semibold' : 'text-gray-700'
                }`}>Sport Facilities</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setReportType('room');
                  setSelectedLocation('');
                }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  reportType === 'room'
                    ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-2 mx-auto transition-all ${
                  reportType === 'room' ? 'bg-blue-500 scale-110' : 'bg-blue-400'
                }`}>
                  📚
                </div>
                <span className={`text-xs text-center block transition-all ${
                  reportType === 'room' ? 'text-blue-700 font-semibold' : 'text-gray-700'
                }`}>Rooms</span>
              </button>
            </div>
          </div>

          {/* Location - Only show if report type is selected */}
          {reportType && (
            <div>
              <label className="text-sm text-gray-700 mb-2 block font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none shadow-sm"
                required
              >
                <option value="">Select a location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Issue Category Checkboxes - Only show if report type is selected */}
          {reportType && (
            <div>
              <label className="text-sm text-gray-700 mb-3 block font-semibold">
                Issue Category (Select all that apply)
              </label>
              <div className="space-y-2">
                {issueCategories.map((category) => (
                  <label
                    key={category.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedCategories.includes(category.id)
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-700">{category.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          {reportType && (
            <div>
              <label className="text-sm text-gray-700 mb-2 block font-semibold">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please describe the issue in detail..."
                className="w-full p-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none shadow-sm resize-none"
                rows={5}
                required
              />
            </div>
          )}

          {/* Photo Upload */}
          {reportType && (
            <div>
              <label className="text-sm text-gray-700 mb-2 block font-semibold flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Take a Photo
              </label>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoChange}
                className="hidden"
              />
              <label
                htmlFor="photo-upload"
                className="block border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-orange-500 transition-colors cursor-pointer"
              >
                {photo ? (
                  <div className="space-y-2">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                    <p className="text-sm text-gray-700 font-medium">{photo.name}</p>
                    <p className="text-xs text-gray-500">Click to change photo</p>
                  </div>
                ) : (
                  <>
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Click to take or upload photo</p>
                    <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
                  </>
                )}
              </label>
            </div>
          )}          {/* Submit Button - Only show if report type is selected */}
          {reportType && (
            <button
              type="submit"
              disabled={!selectedLocation || selectedCategories.length === 0 || !description}
              className="w-full py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold shadow-lg"
            >
              <Send className="w-5 h-5" />
              Submit Report
            </button>
          )}
        </form>

        {/* Recent Reports */}
        <div>
          <h3 className="mb-3 text-gray-700 font-semibold flex items-center justify-between">
            <span>Your Recent Reports</span>
            <span className="text-sm text-gray-500">({recentIssues.length})</span>
          </h3>
          <div className="space-y-3">
            {recentIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white rounded-xl p-4 shadow-md border-l-4"
                style={{ borderLeftColor: issue.color === 'orange' ? '#f97316' : '#10b981' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-800 font-medium mb-1">{issue.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{issue.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ml-2 ${issue.color === 'orange'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-green-100 text-green-700'
                    }`}>
                    {issue.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>Reported on {issue.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h4 className="text-blue-800 font-semibold mb-2 flex items-center gap-2">
            💡 Tips for Better Reports
          </h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Be specific about the location and problem</li>
            <li>• Include photos if possible</li>
            <li>• Report safety issues immediately</li>
            <li>• Check if the issue is already reported</li>        </ul>
        </div>
      </div>
    </div>
  );
}
