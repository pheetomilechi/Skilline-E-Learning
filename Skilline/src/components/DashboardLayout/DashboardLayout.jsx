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
};