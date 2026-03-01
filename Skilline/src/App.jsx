import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Auth from './components/Auth/Auth';

// --- DASHBOARD COMPONENTS ---
const StudentDashboard = ({ user }) => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="container">
      <h1 className="text-3xl font-bold text-[#113C49]">Welcome, {user?.name || 'Student'}! 🎓</h1>
      <p className="text-gray-600 mt-2">Pick up where you left off in your courses.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-secondary">Active Courses</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-secondary">Completed</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-secondary">Points</h3>
          <p className="text-3xl font-bold mt-2">1,250</p>
        </div>
      </div>
    </div>
  </div>
);

const InstructorDashboard = ({ user }) => (
  <div className="min-h-screen bg-slate-50 p-8">
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#113C49]">Instructor Portal 🛠️</h1>
        <button className="bg-[#F48C06] text-white px-6 py-2 rounded-full font-semibold shadow-md">
          + Create Course
        </button>
      </div>
      <p className="text-gray-600 mt-2">Managing classes for {user?.name}.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-4xl font-bold text-primary">1.2k</h2>
          <p className="text-gray-500 font-medium">Total Students</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-4xl font-bold text-green-500">$4,500</h2>
          <p className="text-gray-500 font-medium">This Month's Revenue</p>
        </div>
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
      <main className="overflow-x-hidden bg-white text-dark min-h-screen">
        {/* 1. Navbar now receives user state to toggle Login/Logout buttons */}
        <Navbar user={user} setUser={setUser} /> 
        
        <Routes>
          <Route path="/" element={<Hero />} />
          
          {/* 2. Auth routes with initialMode to trigger correct form view */}
          <Route path="/login" element={<Auth setUser={setUser} initialMode="login" />} />
          <Route path="/signup" element={<Auth setUser={setUser} initialMode="signup" />} />

          {/* 3. Role-Based Protected Routes */}
          <Route 
            path="/dashboard/student" 
            element={
              <ProtectedRoute user={user} allowedRole="student">
                <StudentDashboard user={user} />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/dashboard/instructor" 
            element={
              <ProtectedRoute user={user} allowedRole="instructor">
                <InstructorDashboard user={user} />
              </ProtectedRoute>
            } 
          />

          {/* 4. Global 404 handler */}
          <Route path="*" element={<div className="p-20 text-center text-2xl font-bold">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;