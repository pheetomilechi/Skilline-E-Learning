import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Auth from './components/Auth/Auth';

// --- DASHBOARD COMPONENTS ---
// (You can move these to their own files later, but they are here for immediate use)

const StudentDashboard = ({ user }) => (
  <div className="min-h-screen bg-gray-50 p-8">
    <h1 className="text-3xl font-bold">Welcome, {user?.name || 'Student'}! 🎓</h1>
    <p className="text-gray-600 mt-2">Ready to continue your learning journey?</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold">My Courses</h3>
        <p className="text-sm text-gray-500">3 Courses in progress</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold">Achievements</h3>
        <p className="text-sm text-gray-500">12 Badges earned</p>
      </div>
    </div>
  </div>
);

const InstructorDashboard = ({ user }) => (
  <div className="min-h-screen bg-slate-50 p-8">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-dark">Instructor Portal 🛠️</h1>
      <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">
        + New Course
      </button>
    </div>
    <p className="text-gray-600 mt-2">Hello, {user?.name}. Here is your teaching overview.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-gray-400 text-xs font-bold uppercase">Total Students</h3>
        <p className="text-2xl font-bold">1,402</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-gray-400 text-xs font-bold uppercase">Course Rating</h3>
        <p className="text-2xl font-bold text-yellow-500">4.8 / 5.0</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-gray-400 text-xs font-bold uppercase">Earnings</h3>
        <p className="text-2xl font-bold text-green-600">$3,240</p>
      </div>
    </div>
  </div>
);

// --- PROTECTED ROUTE BOUNCER ---
const ProtectedRoute = ({ user, allowedRole, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== allowedRole) return <Navigate to="/" replace />;
  return children;
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [user, setUser] = useState(null); 

  return (
    <Router>
      <main className="overflow-x-hidden bg-secondary text-dark min-h-screen">
        {/* Pass user to Navbar to show/hide Login/Logout buttons */}
        <Navbar user={user} setUser={setUser} /> 
        
        <Routes>
          <Route path="/" element={<Hero />} />
          
          {/* Auth handles both Login and Signup */}
          <Route path="/login" element={<Auth setUser={setUser} initialMode="login" />} />
          <Route path="/signup" element={<Auth setUser={setUser} initialMode="signup" />} />

          {/* Student Protected Route */}
          <Route 
            path="/dashboard/student" 
            element={
              <ProtectedRoute user={user} allowedRole="student">
                <StudentDashboard user={user} />
              </ProtectedRoute>
            } 
          />

          {/* Instructor Protected Route */}
          <Route 
            path="/dashboard/instructor" 
            element={
              <ProtectedRoute user={user} allowedRole="instructor">
                <InstructorDashboard user={user} />
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;