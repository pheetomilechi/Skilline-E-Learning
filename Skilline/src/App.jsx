import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Auth from './components/Auth/Auth'; // Make sure you created this file

const App = () => {
  return ( 
    <Router>
      <main className="overflow-x-hidden bg-secondary text-dark">
        {/* Navbar stays here so it shows on every page */}
        <Navbar /> 
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Hero />} />
          
          {/* Auth Page (Login/Signup) */}
          <Route path="/login" element={<Auth />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;