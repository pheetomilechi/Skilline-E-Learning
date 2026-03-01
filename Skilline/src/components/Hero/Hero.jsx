import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/image.png';
import Column1 from '../../assets/column1.png';
import Column2 from '../../assets/column2.png'; // Removed space in path
import Column3 from '../../assets/column3.png'; 
import Column4 from '../../assets/column4.png';


function Hero() {
  return (
    <section className='overflow-hidden relative bg-white'>
      {/* 1. Changed px-60 to px-6 and added mx-auto for better centering */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px] items-center py-10 px-6 gap-10">
        
        {/* Left Column Content */}
        <div className="flex flex-col justify-center z-30"> 
          <h1 className="text-5xl font-bold text-[#2F327D] leading-tight">
            <span className="text-orange-400">Studying</span> 
            <span> Online is much easier</span>
          </h1>
          
          <p className="text-lg text-gray-600 mt-6 max-w-[450px]">
            Skilline is an interesting platform that will
            teach you in more an interactive way
          </p>
          
          <div className="mt-8 flex flex-row items-center gap-6">
            <Link to="/login">
              <button className="primary-btn px-8 py-4 rounded-full shadow-lg bg-[#F48C06] text-white font-bold hover:bg-[#FFF2E1] transition-all">
                Join for free
              </button>
            </Link>
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-12 h-12 transition-transform group-hover:scale-110">
                <svg className="absolute inset-0 w-full h-full drop-shadow-md" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="white" />
                </svg>
                <svg className="relative w-5 h-5 text-[#23BDEE] ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[#F48C06] font-semibold">Watch how it works</span>
            </div>
          </div>
        </div>

        {/* Right Column (The Illustration + Floating Cards) */}
        {/* Removed mx-60 - it was pushing the image off-screen */}
        <div className="relative flex justify-center items-center w-full">
          
          {/* Main Hero Image */}
        <img 
            src={Image} 
            alt="Hero Illustration"
            className="w-full h-auto max-w-[550px] z-10 drop-shadow-xl object-contain"
          />

          {/* Floating Column 1 (Top Left) */}
          <img 
            src={Column1} 
            className="absolute top-0 -left-4 w-32 md:w-44 z-20 animate-float" 
            alt="Badge 1"
          />

          {/* Floating Column 2 (Top Right) */}
          <img 
            src={Column2} 
            className="absolute top-20 -right-4 w-28 md:w-36 z-20" 
            alt="Badge 2"
          />

          {/* Floating Column 3 (Center Right) */}
          <img 
            src={Column3} 
            className="absolute bottom-20 -right-10 w-32 md:w-44 z-20" 
            alt="Badge 3"
          />

          {/* Floating Column 4 (Bottom Left) */}
          <img 
            src={Column4} 
            className="absolute bottom-4 left-0 w-36 md:w-52 z-20" 
            alt="Badge 4"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;