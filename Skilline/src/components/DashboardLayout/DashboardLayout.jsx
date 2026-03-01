import React, { useState } from "react";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* This stays visible */}
      <div className="content-area">
        <h1>Welcome to your Dashboard</h1>
        {/* The child routes (Profile/Settings) render right here! */}
        <Outlet /> 
      </div>
    </div>
  );
};import { Outlet, Link } from "react-router-dom";
import { Layout, User, Settings, BookOpen, LogOut } from "lucide-react";

const DashboardLayout = ({ user }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#2F327D] text-white hidden md:flex flex-col p-6 fixed h-full">
        <h2 className="text-2xl font-bold mb-10">Skillearn</h2>
        
        <nav className="flex-1 space-y-4">
          <Link to="/dashboard/student" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-all">
            <Layout size={20} /> Dashboard
          </Link>
          <Link to="/dashboard/student/profile" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-all">
            <User size={20} /> My Profile
          </Link>
          <Link to="/dashboard/student/settings" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-all">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <button className="flex items-center gap-3 p-3 text-red-300 hover:text-red-100 transition-colors mt-auto">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* This is where StudentHome, Profile, or Settings will render */}
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};