import React from 'react';
import { Link } from 'react-router-dom';
// Using Lucide for reliable, clean icons
import { Cloud, MessageSquare, Play, FileText, Share2, Star, ArrowRight } from 'lucide-react';

// Standard Assets
import Image from '../../assets/image.png';
import Column1 from '../../assets/column1.png';
import Column2 from '../../assets/column2.png'; 
import Column3 from '../../assets/column3.png'; 
import Column4 from '../../assets/column4.png';

function Hero() {
  return (
    <div className="w-full font-sans">
      {/* --- 1. HERO SECTION --- */}
      <section className='overflow-hidden relative bg-white'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px] items-center py-10 px-6 gap-10">
          <div className="flex flex-col justify-center z-30"> 
            <h1 className="text-5xl font-bold text-[#2F327D] leading-tight">
              <span className="text-orange-400">Studying</span> 
              <span> Online is much easier</span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-[450px]">
              Skilline is an interesting platform that will teach you in more an interactive way.
            </p>
            <div className="mt-8 flex flex-row items-center gap-6">
              <Link to="/login">
                <button className="px-8 py-4 rounded-full shadow-lg bg-[#F48C06] text-white font-bold hover:bg-[#e07b05] transition-all">
                  Join for free
                </button>
              </Link>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-12 h-12 transition-transform group-hover:scale-110">
                  <svg className="absolute inset-0 w-full h-full drop-shadow-md" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="white" />
                  </svg>
                  <Play className="relative w-5 h-5 text-[#23BDEE] ml-1 fill-current" />
                </div>
                <span className="text-[#F48C06] font-semibold">Watch how it works</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center w-full">
            <img src={Image} alt="Hero Illustration" className="w-full h-auto max-w-[550px] z-10 drop-shadow-xl object-contain" />
            <img src={Column1} className="absolute top-0 -left-4 w-32 md:w-44 z-20 animate-float" alt="Badge 1" />
            <img src={Column2} className="absolute top-20 -right-4 w-28 md:w-36 z-20 animate-float-delayed" alt="Badge 2" />
            <img src={Column3} className="absolute bottom-20 -right-10 w-32 md:w-44 z-20 animate-float" alt="Badge 3" />
            <img src={Column4} className="absolute bottom-4 left-0 w-36 md:w-52 z-20 animate-float-delayed" alt="Badge 4" />
          </div>
        </div>
      </section>

      {/* --- 2. TRUSTED BY SECTION --- */}
      <section className="py-12 bg-white border-b border-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl text-gray-400 mb-8">Trusted by 5,000+ Companies Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale">
             <span className="text-2xl font-bold">Google</span>
             <span className="text-2xl font-bold">Netflix</span>
             <span className="text-2xl font-bold">Airbnb</span>
             <span className="text-2xl font-bold">Amazon</span>
             <span className="text-2xl font-bold">Facebook</span>
          </div>
        </div>
      </section>

      {/* --- 3. WHAT IS SKILLINE SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-[#2F327D] mb-6">What is <span className="text-[#F48C06]">Skilline?</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Skilline is a platform that allows educators to create online classes whereby they can store materials, manage assignments, and monitor results all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group overflow-hidden rounded-3xl h-[300px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center transition-transform hover:scale-[1.01]" 
                 style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000')` }}>
              <h3 className="text-white text-2xl font-bold mb-4 uppercase tracking-wider">For Instructors</h3>
              <Link to="/signup"><button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all">Start a class today</button></Link>
            </div>
            <div className="relative group overflow-hidden rounded-3xl h-[300px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center transition-transform hover:scale-[1.01]" 
                 style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000')` }}>
              <h3 className="text-white text-2xl font-bold mb-4 uppercase tracking-wider">For Students</h3>
              <Link to="/login"><button className="px-8 py-3 bg-[#23BDEE] text-white rounded-full font-semibold hover:bg-[#1da8d6] transition-all">Enter access code</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. VIRTUAL CLASSROOM SECTION --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] leading-tight">
              Everything you can do in a <span className="text-[#F48C06]">physical classroom</span>, you can do with <span className="text-[#F48C06]">Skilline</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            <button className="text-[#F48C06] font-semibold text-lg border-b-2 border-[#F48C06] hover:text-[#2F327D] transition-all">Learn more</button>
          </div>
          <div className="flex-1 relative">
            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000" alt="Classroom" className="rounded-3xl shadow-2xl z-10 relative rotate-1" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#23BDEE] rounded-full opacity-20"></div>
          </div>
        </div>
      </section>

      {/* --- 5. DETAILED FEATURES SECTION --- */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="container mx-auto px-6 space-y-32">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-[#2F327D] mb-4">Our <span className="text-[#F48C06]">Features</span></h2>
            <p className="text-gray-500 text-lg">This very extraordinary feature, can make learning activities more efficient</p>
          </div>

          {/* Podium View */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 relative">
               <div className="bg-[#E9F8FF] rounded-3xl p-8 border border-blue-100 shadow-sm">
                  <div className="grid grid-cols-3 gap-4">
                     <div className="bg-white p-2 rounded-xl text-center shadow-md">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" alt="Tamara" className="w-full h-24 object-cover rounded-lg mb-2" />
                        <p className="text-[10px] font-bold">Tamara Clarke</p>
                     </div>
                     <div className="bg-white p-2 rounded-xl text-center shadow-md border-2 border-[#F48C06]">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Adam" className="w-full h-24 object-cover rounded-lg mb-2" />
                        <p className="text-[10px] font-bold text-[#F48C06]">Adam Levin</p>
                     </div>
                     <div className="bg-white p-2 rounded-xl text-center shadow-md">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" alt="Humbert" className="w-full h-24 object-cover rounded-lg mb-2" />
                        <p className="text-[10px] font-bold">Humbert Holland</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-[#2F327D]">A user interface designed for the classroom</h3>
              <p className="text-gray-500 text-lg leading-relaxed">Teachers don’t get lost in the grid view and have a dedicated Podium space. TA’s and presenters can be moved to the front of the class. Teachers can easily see all students and class data at one time.</p>
            </div>
          </div>

          {/* Private Discussion (Patricia and Eveny) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 bg-[#EEF2FF] p-8 rounded-3xl border border-blue-50">
               <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" alt="Patricia" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="font-bold text-sm">Patricia Mendoza</p>
                      <p className="text-[10px] text-green-500 font-semibold">Discussion Active</p>
                    </div>
                    <button className="bg-[#23BDEE] text-white text-[10px] px-3 py-1 rounded-full">Call</button>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 ml-6 border-l-4 border-[#F48C06]">
                    <img src="https://images.unsplash.com/photo-1544005313-94ff907c3ce3?auto=format&fit=crop&q=80&w=400" alt="Eveny" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="font-bold text-sm">Eveny Howard</p>
                      <p className="text-[10px] text-[#F48C06] font-semibold">Private Discussion</p>
                    </div>
                    <button className="bg-red-500 text-white text-[10px] px-3 py-1 rounded-full">End</button>
                  </div>
               </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-[#2F327D]">One-on-One Discussions</h3>
              <p className="text-gray-500 text-lg">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
              <button className="px-10 py-4 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-bold hover:bg-[#F48C06] hover:text-white transition-all">See more features</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. INTEGRATIONS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
                {/* Fixed Lucide Icons for guaranteed loading */}
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform group">
                  <Cloud className="w-10 h-10 text-blue-500" />
                </div>
                <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform group">
                  <MessageSquare className="w-10 h-10 text-yellow-600" />
                </div>
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform group">
                  <Play className="w-10 h-10 text-red-500 fill-red-500/10" />
                </div>
                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform group">
                  <FileText className="w-10 h-10 text-green-500" />
                </div>
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform group">
                  <Share2 className="w-10 h-10 text-purple-500" />
                </div>
                <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm border-2 border-dashed border-orange-200">
                   <span className="text-[#F48C06] font-bold text-xl">200+</span>
                </div>
              </div>
            </div>

            <div className="flex-1 order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gray-400"></div>
                <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Integrations</span>
              </div>
              <h2 className="text-4xl font-bold text-[#2F327D] leading-tight">
                200+ educational tools and platform <span className="text-[#F48C06]">integrations</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
              </p>
              <div className="pt-4">
                <button className="px-8 py-3 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-bold hover:bg-[#F48C06] hover:text-white transition-all">
                  See All Integrations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. TESTIMONIAL SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Featured Image with Overlay Card */}
            <div className="flex-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b33979d7?auto=format&fit=crop&q=80&w=800" 
                  alt="Testimonial Student" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-10 -right-4 md:right-10 bg-white p-6 rounded-2xl shadow-2xl max-w-sm border-l-8 border-[#F48C06] z-20">
                <p className="text-gray-500 text-sm italic leading-relaxed">
                  "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-[#2F327D]">Gloria Rose</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#F48C06] text-[#F48C06]" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gray-400"></div>
                <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Testimonial</span>
              </div>
              <h2 className="text-5xl font-bold text-[#2F327D]">What They Say?</h2>
              <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
                <p>Skilline has got more than 100,000 positive ratings from our users around the world.</p>
                <p>Some of the students and teachers were helpful enough to leave us a review of their experience with our platform.</p>
                <p>But please take a look for yourself.</p>
              </div>
              <button className="group flex items-center gap-4 px-8 py-4 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-bold hover:bg-[#F48C06] hover:text-white transition-all">
                Write your assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;