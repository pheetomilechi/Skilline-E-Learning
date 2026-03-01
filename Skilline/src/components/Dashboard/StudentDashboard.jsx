import React from 'react';

const StudentDashboard = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-dark">Welcome back, {user?.name || 'Scholar'}! 👋</h1>
        <p className="text-gray-600">You have 3 courses in progress this week.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Courses Completed</h3>
          <p className="text-2xl font-bold text-primary">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Average Grade</h3>
          <p className="text-2xl font-bold text-green-500">A- (92%)</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Hours Studied</h3>
          <p className="text-2xl font-bold text-purple-500">48h</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">My Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['React Fundamentals', 'Advanced Tailwind CSS'].map((course) => (
            <div key={course} className="bg-white p-4 rounded-lg flex justify-between items-center shadow-sm">
              <span className="font-medium">{course}</span>
              <button className="text-primary font-semibold hover:underline">Resume</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;