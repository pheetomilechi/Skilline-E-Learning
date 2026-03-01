import React from 'react';

const InstructorDashboard = ({ user }) => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-dark">Instructor Console</h1>
          <p className="text-gray-600">Manage your curriculum and students.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-primary/30">
          + Create New Course
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-wider font-bold">Total Students</h3>
          <p className="text-3xl font-black mt-2">1,204</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-1">
          <h3 className="text-gray-400 text-xs uppercase tracking-wider font-bold">Total Revenue</h3>
          <p className="text-3xl font-black mt-2">$4,250</p>
        </div>
        
        {/* Active Courses List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold mb-4">Live Courses</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm border-b pb-2">
              <span>Intro to UI/UX</span>
              <span className="text-green-600 font-bold">45 New Enrolls</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Mastering JavaScript</span>
              <span className="text-blue-600 font-bold">12 New Enrolls</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;