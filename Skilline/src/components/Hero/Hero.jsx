import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, MessageSquare, Play, FileText, Share2, 
  Star, ArrowRight, CheckCircle, Users, Layout, VideoOff
} from 'lucide-react';

// Assets
import Image from '../../assets/image.png';
import Column1 from '../../assets/column1.png';
import Column2 from '../../assets/column2.png'; 
import Column3 from '../../assets/column3.png'; 
import Column4 from '../../assets/column4.png';

function Hero() {
  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className='relative bg-white py-10'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px] items-center px-6 gap-10">
          <div className="z-30"> 
            <h1 className="text-5xl font-bold text-[#2F327D] leading-tight">
              <span className="text-orange-400">Studying</span> Online is much easier
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-[450px]">
              Skilline is an interesting platform that will teach you in more an interactive way.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link to="/signup" className="px-8 py-4 rounded-full shadow-lg bg-[#F48C06] text-white font-bold hover:bg-[#e07b05] transition-all">Join for free</Link>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-[#23BDEE] fill-[#23BDEE]" />
                </div>
                <span className="text-[#F48C06] font-semibold">Watch how it works</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img src={Image} alt="Hero" className="w-full max-w-[550px] z-10" />
            <img src={Column1} className="absolute top-0 -left-4 w-32 md:w-44 z-20" alt="" />
            <img src={Column2} className="absolute top-20 -right-4 w-28 md:w-36 z-20" alt="" />
            <img src={Column3} className="absolute bottom-20 -right-10 w-32 md:w-44 z-20" alt="" />
            <img src={Column4} className="absolute bottom-4 left-0 w-36 md:w-52 z-20" alt="" />
          </div>
        </div>
      </section>

      {/* 1.5 TRUSTED BY SECTION (NEW) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-medium mb-8">Trusted by 5,000+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png" alt="Slack" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-6" />
          </div>
        </div>
      </section>

      {/* 2. OUR FEATURES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F327D]">Our <span className="text-[#F48C06]">Features</span></h2>
            <p className="text-gray-500 mt-4">This very extraordinary feature, can make learning activities more efficient</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative bg-[#E9F8FF] rounded-3xl p-8 shadow-inner">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-center">
                  <img src="https://i.pravatar.cc/150?u=tamara" className="w-full h-32 object-cover rounded-lg mb-2" alt="Tamara" />
                  <p className="font-bold text-[#2F327D] text-sm">Tamara Clarke</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm text-center border-2 border-[#F48C06]">
                  <img src="https://i.pravatar.cc/150?u=adam" className="w-full h-32 object-cover rounded-lg mb-2" alt="Adam" />
                  <p className="font-bold text-[#F48C06] text-sm">Adam Levin</p>
                  <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Instructor</span>
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm w-24 text-center">
                  <p className="text-[10px] font-bold">Humbert Holland</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm w-24 text-center">
                  <p className="text-[10px] font-bold">Patricia Mendoza</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#2F327D]">A user interface designed for the classroom</h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex gap-4"><Layout className="text-[#F48C06] shrink-0" /> Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
                <li className="flex gap-4"><Users className="text-[#23BDEE] shrink-0" /> TA’s and presenters can be moved to the front of the class.</li>
                <li className="flex gap-4"><CheckCircle className="text-green-500 shrink-0" /> Teachers can easily see all students and class data at one time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOOLS FOR TEACHERS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-4xl font-bold text-[#2F327D]">Tools For Teachers And Learners</h2>
            <p className="text-gray-500 leading-relaxed">Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500">
              <h4 className="font-bold text-[#2F327D] mb-2">Assessments, Quizzes, Tests</h4>
              <p className="text-sm text-gray-500">Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
             <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-[#2F327D]">Gradebook</h4>
                <button className="text-xs bg-gray-100 px-3 py-1 rounded-md text-gray-600">Export</button>
             </div>
             <div className="space-y-4">
                {[ {n: 'Tamara Clarke', s: 100}, {n: 'Adam Levin', s: 98}, {n: 'Humbert Holland', s: 75}, {n: 'Patricia Mendoza', s: 85} ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-2">
                    <span className="text-sm text-gray-600">{item.n}</span>
                    <span className={`font-bold ${item.s > 90 ? 'text-green-500' : 'text-[#F48C06]'}`}>{item.s}</span>
                  </div>
                ))}
             </div>
             <div className="mt-6 bg-green-50 p-3 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="text-xs text-green-700 font-medium">Your answer was sent successfully</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PRIVATE DISCUSSION FEATURE */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="bg-[#252641] rounded-3xl p-6 text-white overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Private Discussion</span>
                   </div>
                   <button className="bg-red-500 px-4 py-1 rounded-full text-[10px] font-bold">End Discussion</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="relative">
                      <img src="https://i.pravatar.cc/150?u=eveny" className="rounded-xl w-full h-32 object-cover" alt="Eveny" />
                      <span className="absolute bottom-2 left-2 text-[10px] bg-black/50 px-2 py-0.5 rounded">Eveny Howard</span>
                   </div>
                   <div className="relative bg-gray-800 rounded-xl flex items-center justify-center">
                      <VideoOff className="text-gray-500" />
                      <span className="absolute bottom-2 left-2 text-[10px] bg-black/50 px-2 py-0.5 rounded">Patricia Mendoza</span>
                   </div>
                </div>
                <p className="mt-4 text-[10px] text-gray-400 text-center italic">Your video can’t be seen by others</p>
             </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#2F327D]">One-on-One Discussions</h2>
            <p className="text-gray-500 text-lg">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
            <button className="px-10 py-4 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-bold hover:bg-[#F48C06] hover:text-white transition-all">See more features</button>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 grid grid-cols-3 gap-8 items-center justify-items-center">
            <div className="w-20 h-20 bg-[#E8F0FE] rounded-2xl flex items-center justify-center shadow-md border border-blue-100"><Cloud className="w-10 h-10 text-[#4285F4]" /></div>
            <div className="w-20 h-20 bg-[#F6F0FF] rounded-2xl flex items-center justify-center shadow-md border border-purple-100"><MessageSquare className="w-10 h-10 text-[#611f69]" /></div>
            <div className="w-20 h-20 bg-[#FFF0F0] rounded-2xl flex items-center justify-center shadow-md border border-red-100"><Play className="w-10 h-10 text-[#FF0000] fill-red-600/10" /></div>
            <div className="w-20 h-20 bg-[#E7F9ED] rounded-2xl flex items-center justify-center shadow-md border border-green-100"><FileText className="w-10 h-10 text-[#0F9D58]" /></div>
            <div className="w-20 h-20 bg-[#E8F4FD] rounded-2xl flex items-center justify-center shadow-md border border-blue-100"><Share2 className="w-10 h-10 text-[#0078D4]" /></div>
            <div className="w-20 h-20 bg-[#FFF8ED] rounded-2xl flex items-center justify-center shadow-md border-2 border-dashed border-[#F48C06]"><span className="text-[#F48C06] font-extrabold text-xl">200+</span></div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-[#2F327D]">200+ educational tools <span className="text-[#F48C06]">integrations</span></h2>
            <p className="text-gray-500 text-lg">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools.</p>
            <button className="px-8 py-3 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-bold hover:bg-[#F48C06] hover:text-white transition-all">See All Integrations</button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL (UPDATED IMAGE & STYLE) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 relative">
            {/* New High-Quality Professional Image */}
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Professional Woman Testimonial" 
              className="rounded-[40px] h-[600px] w-full object-cover shadow-2xl border-8 border-white" 
            />
            {/* Enhanced Floating Testimonial Card */}
            <div className="absolute -bottom-10 -right-8 bg-white p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-w-sm border-l-[12px] border-[#F48C06] z-20">
              <p className="text-gray-500 text-base italic leading-relaxed">
                "Thank you so much for your help. It's exactly what I've been looking for. Skilline is exactly what our business has been lacking."
              </p>
              <div className="mt-6 flex justify-between items-center">
                <div>
                    <h4 className="font-bold text-xl text-[#2F327D]">Daniel Mark</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Education Lead</p>
                </div>
                <div className="flex text-[#F48C06] gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-bold text-[#2F327D] leading-tight">What They <br/> Say?</h2>
            <p className="text-gray-500 text-xl">Skilline has got more than 100,000 positive ratings from our users around the world.</p>
            <p className="text-gray-400">Our platform is designed to make the transition between physical and virtual classrooms seamless and enjoyable for both parties.</p>
            <button className="flex items-center gap-4 px-10 py-5 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-bold hover:bg-[#F48C06] hover:text-white transition-all group">
              Write your assessment <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. LATEST NEWS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F327D] mb-4">Lastest News and Resources</h2>
            <p className="text-gray-500">See the developments that have occurred to Skillines in the world</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" alt="News" className="w-full h-[350px] object-cover rounded-3xl" />
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 bg-[#F48C06] text-white rounded-full text-xs font-bold uppercase tracking-wider">Press Release</span>
                <h3 className="text-2xl font-bold text-[#2F327D]">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h3>
                <p className="text-gray-500">Class Technologies Inc., the company that created Class, announced it has closed a $30 million Series A investment round...</p>
                <button className="text-gray-400 font-bold border-b border-gray-400 pb-1">Read more</button>
              </div>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Zoom’s earliest investors are betting millions on a better Zoom for schools', img: 'https://images.pexels.com/photos/7092456/pexels-photo-7092456.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms', img: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution', img: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400' }
              ].map((news, idx) => (
                <div key={idx} className="flex gap-6 items-center">
                  <div className="w-40 h-28 overflow-hidden rounded-2xl relative shrink-0">
                    <img src={news.img} className="w-full h-full object-cover" alt="" />
                    <span className="absolute bottom-2 right-2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold">NEWS</span>
                  </div>
                  <h4 className="font-bold text-[#2F327D] text-sm">{news.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#252641] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-[#23BDEE] rounded-lg flex items-center justify-center font-bold text-xl">S</div>
               <span className="text-2xl font-bold tracking-widest">Skilline</span>
               <div className="h-8 w-[1px] bg-gray-500 mx-4 hidden md:block"></div>
               <span className="text-base font-medium text-gray-300 hidden md:block">Virtual Class for Zoom</span>
            </div>
            <div className="w-full max-w-2xl space-y-6 mt-10">
              <h3 className="text-2xl font-semibold">Subscribe to get our Newsletter</h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <input type="email" placeholder="Your Email" className="px-6 py-4 rounded-full bg-transparent border border-gray-500 text-white w-full md:w-80 outline-none" />
                <button className="px-10 py-4 bg-[#23BDEE] hover:bg-[#1ca8d6] transition-colors rounded-full font-bold text-white">Subscribe</button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-400 text-sm">
               <Link to="#" className="hover:text-white transition-colors">Careers</Link>
               <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <p className="text-gray-500 mt-10 text-sm">© 2026 Class Technologies Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Hero;