import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setIsOpen(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-md">
      <div className='container py-4 flex items-center justify-between mx-auto px-6'>
        
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl text-[#113C49] hover:opacity-80">
          Skillearn
        </Link>

        {/* Desktop Links */}
        <div className='hidden lg:flex items-center gap-8'>
          <ul className='flex items-center gap-6'>
            <li><Link to="/" className="font-semibold text-gray-600 hover:text-[#F48C06]">Home</Link></li>
            <li><Link to="/courses" className="font-semibold text-gray-600 hover:text-[#F48C06]">Courses</Link></li>
            <li><a href="/#blog" className="font-semibold text-gray-600 hover:text-[#F48C06]">Blog</a></li>
            <li><a href="/#about" className="font-semibold text-gray-600 hover:text-[#F48C06]">About</a></li>
          </ul>

          <div className='flex items-center gap-4 border-l pl-6 border-gray-200'>
            {user ? (
              <>
                <Link to={`/dashboard/${user.role}`} className="font-bold text-[#23BDEE]">Dashboard</Link>
                <button onClick={handleLogout} className='px-5 py-2 bg-red-500 text-white rounded-full font-bold text-sm'>Logout</button>
              </>
            ) : (
              <>
                {/* LOGIN BUTTON FIX */}
                <Link 
                  to="/login" 
                  className='font-bold text-gray-500 hover:text-[#113C49] px-4 py-2 transition-colors'
                >
                  Login
                </Link>
                
                {/* SIGNUP BUTTON FIX */}
                <Link to="/signup">
                  <button className='px-7 py-3 bg-[#F48C06] text-white rounded-full shadow-lg font-bold text-sm hover:bg-[#e07b05] transition-all transform active:scale-95'>
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-10 flex flex-col items-center gap-6 animate-in slide-in-from-top">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-bold">Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="text-xl font-bold">Courses</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-xl font-bold text-gray-500">Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="px-10 py-3 bg-[#F48C06] text-white rounded-full font-bold">Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;