import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setUser, initialMode = "login" }) => {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [isStudent, setIsStudent] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation for Signup
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create User Object
    const role = isStudent ? 'student' : 'instructor';
    const loggedInUser = {
      name: formData.name || (isStudent ? "New Student" : "New Instructor"),
      email: formData.email,
      role: role,
    };

    // Sync Global State
    setUser(loggedInUser);

    // Redirect
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 py-10">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        
        {/* Toggle between Login and Signup */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-500 mt-2">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary font-semibold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button 
            onClick={() => setIsStudent(true)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${isStudent ? 'bg-white text-primary shadow-sm' : 'text-gray-500'}`}
          >
            Student
          </button>
          <button 
            onClick={() => setIsStudent(false)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${!isStudent ? 'bg-white text-primary shadow-sm' : 'text-gray-500'}`}
          >
            Instructor
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input 
                name="name"
                type="text" 
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="John Doe"
                onChange={handleInputChange}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input 
              name="email"
              type="email" 
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              placeholder="name@email.com"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              name="password"
              type="password" 
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              placeholder="••••••••"
              onChange={handleInputChange}
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input 
                name="confirmPassword"
                type="password" 
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="••••••••"
                onChange={handleInputChange}
              />
            </div>
          )}

          <button 
            type="submit" 
            className="w-full py-3 mt-4 font-bold text-white bg-primary rounded-lg hover:bg-opacity-90 transform active:scale-[0.98] transition-all shadow-lg shadow-primary/30"
          >
            {isLogin ? 'Login' : 'Join'} as {isStudent ? 'Student' : 'Instructor'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;