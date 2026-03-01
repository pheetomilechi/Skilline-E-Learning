import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, Star, ArrowRight, CheckCircle, Users, Layout, 
  Calendar, User, MessageSquare, BookOpen 
} from 'lucide-react';

// Replace these with your actual local paths
import Image from '../../assets/image.png';
import Column1 from '../../assets/column1.png';
import Column2 from '../../assets/column2.png'; 
import Column3 from '../../assets/column3.png'; 
import Column4 from '../../assets/column4.png';

function Hero() {
  return (
    <div className="w-full font-sans bg-white overflow-x-hidden scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section id="home" className='relative bg-white py-10'>
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
          <div className="relative flex justify-center mt-10 md:mt-0">
            <img src={Image} alt="Hero" className="w-full max-w-[550px] z-10" />
            <img src={Column1} className="absolute top-0 -left-4 w-32 md:w-44 z-20" alt="" />
            <img src={Column2} className="absolute top-20 -right-4 w-28 md:w-36 z-20" alt="" />
            <img src={Column3} className="absolute bottom-20 -right-10 w-32 md:w-44 z-20" alt="" />
            <img src={Column4} className="absolute bottom-4 left-0 w-36 md:w-52 z-20" alt="" />
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-24 scroll-mt-24">
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

      {/* 4. BLOG SECTION */}
      <section id="blog" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-[#2F327D] mb-4">Latest From Our <span className="text-[#F48C06]">Blog</span></h2>
              <p className="text-gray-500">Stay updated with the latest trends in educational technology and online learning strategies.</p>
            </div>
            <button className="px-8 py-3 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-bold hover:bg-[#F48C06] hover:text-white transition-all">View All Posts</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "How to Keep Students Engaged in a Virtual Classroom",
                category: "Teaching Tips",
                date: "Oct 12, 2025",
                author: "Dr. Sarah Jenkins",
                image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
                desc: "Discover 5 proven strategies to boost student participation and minimize distractions during live online sessions."
              },
              {
                title: "The Future of AI in Modern Higher Education",
                category: "Technology",
                date: "Nov 05, 2025",
                author: "James Wilson",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
                desc: "Exploring how Large Language Models are reshaping curriculum design and personalized student feedback loops."
              },
              {
                title: "Top 10 Tools Every Online Tutor Needs in 2026",
                category: "Resources",
                date: "Jan 20, 2026",
                author: "Maria Garcia",
                image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=600",
                desc: "From digital whiteboards to AI scheduling, we review the essential toolkit for the modern remote educator."
              }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#F48C06] px-4 py-1 rounded-full text-xs font-bold text-white shadow-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2F327D] leading-tight group-hover:text-[#F48C06] transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {post.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#F48C06] font-bold text-sm">
                    Read Full Article <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#2F327D] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 text-white">
              <h2 className="text-4xl font-bold mb-6 text-[#F48C06]">Get In Touch</h2>
              <p className="text-blue-100 mb-8">Have a question? We're here to help you on your learning journey.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><MessageSquare className="text-[#F48C06]"/> support@skillearn.com</div>
                <div className="flex items-center gap-4"><Users className="text-[#23BDEE]"/> Community Discord</div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <form className="bg-white p-8 rounded-3xl space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border outline-none focus:border-[#F48C06]" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border outline-none focus:border-[#F48C06]" />
                <textarea placeholder="Message" className="w-full px-4 py-3 rounded-xl border outline-none focus:border-[#F48C06] h-32"></textarea>
                <button className="w-full bg-[#F48C06] text-white py-4 rounded-xl font-bold">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#252641] py-12 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Skillearn</h2>
          <p className="text-gray-400 text-sm">© 2026 Skillearn Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;