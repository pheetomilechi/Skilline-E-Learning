import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom'; // 1. Use Link instead of href

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Courses", path: "/courses" },
  { id: 3, title: "Blog", path: "/blog" },
  { id: 4, title: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className='container py-12 flex items-center justify-between'>
        
        {/* Logo Section */}
        <Link to="/" className="relative inline-block">
          <svg width="40" height="40" viewBox="0 0 79 79" fill="none" className="absolute -left-3 -top-2 z-0 opacity-90">
            <path d="M34.7721 1.75735C37.1152 -0.585792 40.9142 -0.585795 43.2574 1.75735L76.2721 34.7721C78.6152 37.1152 78.6152 40.9142 76.2721 43.2574L43.2574 76.2721C40.9142 78.6152 37.1152 78.6152 34.7721 76.2721L1.75735 43.2574C-0.585792 40.9142 -0.585795 37.1152 1.75735 34.7721L34.7721 1.75735Z" fill="#65DAFF"/>
          </svg>
          <h1 className="relative z-10 font-bold text-2xl text-[#113C49]">Skillearn</h1>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-6'>
          <ul className='flex items-center gap-3'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path} className='inline-block px-4 py-2 text-gray-600 hover:text-secondary relative group transition-all'>
                  {menu.title}
                  <div className='w-2 h-2 absolute bg-secondary bottom-[-8px] rounded-full left-1/2 transform -translate-x-1/2 hidden group-hover:block'></div>
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4'>
            {/* Wrap buttons in Link to navigate to the Auth page */}
            <Link to="/login">
              <button className='secondary-btn font-semibold text-gray-500 px-4 py-2'>Login</button>
            </Link>
            <Link to="/login">
              <button className='primary-btn px-6 py-2 bg-[#F48C06] text-white rounded-full'>Signup</button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden cursor-pointer text-3xl z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>

      {/* Slide-in Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
        <ul className='flex flex-col items-center justify-center h-full gap-8'>
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <Link to={menu.path} className='text-xl font-medium text-gray-700' onClick={() => setIsOpen(false)}>
                {menu.title}
              </Link>
            </li>
          ))}
          <div className='flex flex-col gap-4 w-full px-10'>
             <Link to="/login" onClick={() => setIsOpen(false)} className="w-full">
               <button className='secondary-btn w-full py-3 border border-gray-300 rounded-xl'>Login</button>
             </Link>
             <Link to="/login" onClick={() => setIsOpen(false)} className="w-full">
               <button className='primary-btn w-full py-3 bg-[#545AE8] text-white rounded-xl'>Signup</button>
             </Link>
          </div>
        </ul>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;