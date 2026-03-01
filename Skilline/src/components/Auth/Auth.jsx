import React, { useState } from 'react';

const AuthForm = () => {
  const [role, setRole] = useState('instructor'); 
  const [isLogin, setIsLogin] = useState(true);

  // Common Tailwind classes to keep the code clean and prevent errors
  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#F48C06] focus:ring-2 focus:ring-[#F48C06]/20 transition-all";

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-4 py-10">
      <div className={`bg-white shadow-2xl rounded-3xl p-8 transition-all duration-500 border border-gray-100 w-full ${isLogin ? 'max-w-md' : 'max-w-2xl'}`}>
        
        {/* Role Switcher */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-8 max-w-xs mx-auto">
          <button
            type="button"
            onClick={() => setRole('instructor')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              role === 'instructor' ? 'bg-white shadow-sm text-[#F48C06]' : 'text-gray-500'
            }`}
          >
            Instructor
          </button>
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              role === 'student' ? 'bg-white shadow-sm text-[#F48C06]' : 'text-gray-500'
            }`}
          >
            Student
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#F48C06]">
            {isLogin ? 'Welcome Back!' : `${role.charAt(0).toUpperCase() + role.slice(1)} Signup`}
          </h2>
          <p className="text-gray-500 mt-2 capitalize">
            {isLogin ? `Log in as ${role === 'instructor' ? 'an' : 'a'} ${role}` : `Join us as ${role === 'instructor' ? 'an' : 'a'} ${role}`}
          </p>
        </div>

        <form className="space-y-5">
          {/* SIGNUP ONLY: Personal Info */}
          {!isLogin && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className={inputClass} placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className={inputClass} placeholder="Doe" />
              </div>
            </div>
          )}

          {/* SHARED: Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input type="text" className={inputClass} placeholder="johndoe1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className={inputClass} placeholder="name@example.com" />
            </div>
          </div>

          {/* SIGNUP ONLY: Professional/Academic details */}
          {!isLogin && (
            <div className="space-y-5 pt-2 border-t border-gray-100">
              {role === 'instructor' ? (
                /* INSTRUCTOR FIELDS */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input type="date" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <input type="text" className={inputClass} placeholder="e.g. IT" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Yrs)</label>
                    <input type="number" className={inputClass} placeholder="2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                    <input type="file" className="text-xs file:bg-orange-50 file:text-orange-600 file:rounded-lg file:border-0 file:px-3 file:py-2" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expertise</label>
                    <textarea className={inputClass + " h-20"} placeholder="Qualifications..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF)</label>
                    <input type="file" accept=".pdf" className="text-xs file:bg-orange-50 file:text-orange-600 file:rounded-lg file:border-0 file:px-3 file:py-2" />
                  </div>
                </div>
              ) : (
                /* STUDENT FIELDS */
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Matriculation Number</label>
                  <input type="text" className={inputClass} placeholder="ABC-123-456" />
                </div>
              )}
            </div>
          )}

          {/* PASSWORDS */}
          <div className={`grid gap-4 ${isLogin ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" className={inputClass} placeholder="••••••••" />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input type="password" className={inputClass} placeholder="••••••••" />
              </div>
            )}
          </div>

          <button type="submit" className="w-full bg-[#F48C06] text-white py-4 rounded-xl font-bold shadow-lg hover:brightness-95 active:scale-[0.98] transition-all">
            {isLogin ? 'Sign In' : `Register as ${role}`}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-[#F48C06] font-semibold hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;