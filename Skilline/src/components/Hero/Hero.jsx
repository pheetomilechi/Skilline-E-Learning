import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, Users, Layout } from 'lucide-react';

import Image from '../../assets/image.png';
import Column1 from '../../assets/column1.png';
import Column2 from '../../assets/column2.png'; 
import Column3 from '../../assets/column3.png'; 
import Column4 from '../../assets/column4.png';

function Hero() {
  return (
    <div className="w-full font-sans bg-[#ecdec6] overflow-x-hidden scroll-smooth">
      {/* 1. HERO BANNER */}
      {/* 1. HERO SECTION WITH CURVED BOTTOM */}
<section 
  id="home" 
  className='relative pt-10 pb-32 overflow-hidden' 
  style={{ 
    // This creates the curved bottom edge
    clipPath: 'ellipse(150% 100% at 50% 0%)',
    // We add a soft gradient so the curve is visible
    background: 'linear-gradient(180deg, #FFFFFF 0%, #E9F8FF 100%)' 
  }}
>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px] items-center px-6 gap-10">
    <div className="z-30"> 
      <h1 className="text-5xl md:text-6xl font-bold text-[#2F327D] leading-tight">
        <span className="text-orange-400">Studying</span> Online is much easier
      </h1>
      <p className="text-lg text-gray-600 mt-6 max-w-[450px]">
        Skillearn is an interesting platform that will teach you in more an interactive way.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
        <Link to="/signup" className="w-full sm:w-auto text-center px-8 py-4 rounded-full shadow-lg bg-[#F48C06] text-white font-bold hover:bg-[#e07b05] transition-all">Join for free</Link>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-[#23BDEE] fill-[#23BDEE]" />
          </div>
          <span className="text-[#F48C06] font-semibold">Watch how it works</span>
        </div>
      </div>
    </div>

    {/* HERO IMAGES */}
    <div className="relative flex justify-center mt-10 md:mt-0">
      <img src={Image} alt="Hero" className="w-full max-w-[550px] z-10" />
      <img src={Column1} className="absolute top-0 -left-4 w-32 md:w-44 z-20" alt="" />
      <img src={Column2} className="absolute top-20 -right-4 w-28 md:w-36 z-20" alt="" />
      <img src={Column3} className="absolute bottom-20 -right-10 w-32 md:w-44 z-20" alt="" />
      <img src={Column4} className="absolute bottom-4 left-0 w-36 md:w-52 z-20" alt="" />
    </div>
  </div>
</section>

      {/* 2. FEATURES SECTION (Renamed ID) */}
      <section id="features" className="py-24 scroll-mt-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F327D]">Our <span className="text-[#F48C06]">Features</span></h2>
            <p className="text-gray-500 mt-4">Extraordinary features to make learning activities more efficient</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative bg-[#E9F8FF] rounded-3xl p-8 shadow-inner">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-center">
                  <img src="https://i.pravatar.cc/150?u=1" className="w-full h-32 object-cover rounded-lg mb-2" alt="Tutor" />
                  <p className="font-bold text-[#2F327D] text-sm">Expert Tutors</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm text-center border-2 border-[#F48C06]">
                  <img src="https://i.pravatar.cc/150?u=2" className="w-full h-32 object-cover rounded-lg mb-2" alt="Tutor" />
                  <p className="font-bold text-[#F48C06] text-sm">Interactive Class</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#2F327D]">Designed for the classroom</h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex gap-4"><Layout className="text-[#F48C06] shrink-0" /> Dedicated Podium space for instructors.</li>
                <li className="flex gap-4"><Users className="text-[#23BDEE] shrink-0" /> Real-time student data and engagement metrics.</li>
                <li className="flex gap-4"><CheckCircle className="text-green-500 shrink-0" /> Automated grading and assessment tools.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;