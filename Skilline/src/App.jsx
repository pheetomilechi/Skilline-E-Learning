import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Auth from './components/Auth/Auth';

// Import all necessary icons
import { Search, BookOpen, Clock, Star, Layout, Users, CheckCircle, ArrowRight } from 'lucide-react';

// --- 1. COURSES PAGE COMPONENT ---
const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const allCourses = [
    { id: 1, title: "Full Stack Web Development", category: "Development", price: "$89.99", rating: 4.8, lessons: 42, duration: "12h", img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, title: "Advanced Graphic Design", category: "Design", price: "$59.99", rating: 4.9, lessons: 28, duration: "8h", img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, title: "Digital Marketing Masterclass", category: "Marketing", price: "$49.99", rating: 4.7, lessons: 35, duration: "10h", img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, title: "Python for Data Science", category: "Data Science", price: "$74.99", rating: 4.9, lessons: 50, duration: "15h", img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, title: "UI/UX Foundations", category: "Design", price: "$64.99", rating: 4.6, lessons: 22, duration: "6h", img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, title: "Mobile App Dev with Flutter", category: "Development", price: "$79.99", rating: 4.8, lessons: 38, duration: "11h", img: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, title: "Business Strategy 101", category: "Business", price: "$39.99", rating: 4.5, lessons: 15, duration: "4h", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, title: "Ethical Hacking & Cyber Security", category: "Development", price: "$99.99", rating: 4.9, lessons: 60, duration: "20h", img: "https://images.pexels.com/photos/5475783/pexels-photo-5475783.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 9, title: "Social Media Management", category: "Marketing", price: "$29.99", rating: 4.4, lessons: 12, duration: "3h", img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 10, title: "Introduction to AI", category: "Data Science", price: "$84.99", rating: 4.7, lessons: 45, duration: "14h", img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  const filtered = activeCategory === "All" ? allCourses : allCourses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#2F327D] mb-8 text-center">
          Explore <span className="text-[#F48C06]">Courses</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Development", "Design", "Marketing", "Business"].map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${activeCategory === cat ? "bg-[#F48C06] text-white shadow-md" : "bg-white text-gray-600 border hover:border-[#F48C06]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(course => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="overflow-hidden">
                <img src={course.img} alt={course.title} className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2F327D] mb-2 h-14 overflow-hidden">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><BookOpen size={16}/> {course.lessons} Lessons</span>
                  <span className="flex items-center gap-1"><Clock size={16}/> {course.duration}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-2xl font-bold text-[#F48C06]">{course.price}</span>
                  <button className="bg-[#23BDEE] text-white px-5 py-2 rounded-xl font-bold hover:bg-sky-500 transition-colors shadow-sm">Enroll</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 2. DASHBOARD COMPONENTS ---
const StudentDashboard = ({ user }) => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#113C49]">Welcome, {user?.name || 'Student'}! 🎓</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#23BDEE]">Active Courses</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#23BDEE]">Completed</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#23BDEE]">Points</h3>
          <p className="text-3xl font-bold mt-2">1,250</p>
        </div>
      </div>
    </div>
  </div>
);

const InstructorDashboard = ({ user }) => (
  <div className="min-h-screen bg-slate-50 p-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#113C49]">Instructor Portal 🛠️</h1>
        <button className="bg-[#F48C06] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#e07b05]">
          + Create Course
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-4xl font-bold text-[#23BDEE]">1.2k</h2>
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

// --- 3. PROTECTED ROUTE BOUNCER ---
const ProtectedRoute = ({ user, allowedRole, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== allowedRole) return <Navigate to="/" replace />;
  return children;
};

// --- 4. MAIN APP COMPONENT ---
const App = () => {
  const [user, setUser] = useState(null); 

  return (
    <Router>
      {/* Ensure Navbar is at a high z-index and main is pushed down.
        The "pt-20" here is the hero fix. 
      */}
      <Navbar user={user} setUser={setUser} /> 
      
      <main className="overflow-x-hidden bg-white text-[#113C49] min-h-screen">
        <div className="pt-20"> {/* This pushes the content below the fixed Navbar */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/courses" element={<Courses />} />
            
            {/* These initialMode props ensure the buttons open the right form */}
            <Route path="/login" element={<Auth setUser={setUser} initialMode="login" />} />
            <Route path="/signup" element={<Auth setUser={setUser} initialMode="signup" />} />

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

            <Route path="*" element={<div className="p-20 text-center text-2xl font-bold">404 - Page Not Found</div>} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;