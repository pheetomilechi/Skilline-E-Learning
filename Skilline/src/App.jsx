import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Auth from './components/Auth/Auth';

// Icons
import { 
  BookOpen, Clock, Layout, Users, Settings, 
  LogOut, User, Bell, ChevronRight, CheckCircle,
  Facebook, Twitter, Instagram, Linkedin, Mail, Calendar, MessageSquare
} from 'lucide-react';

// --- 1. COURSES PAGE ---
const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const allCourses = [
    { id: 1, title: "Full Stack Web Development", category: "Development", price: "$89.99", lessons: 42, duration: "12h", img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, title: "Advanced Graphic Design", category: "Design", price: "$59.99", lessons: 28, duration: "8h", img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, title: "Digital Marketing Masterclass", category: "Marketing", price: "$49.99", lessons: 35, duration: "10h", img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, title: "Python for Data Science", category: "Data Science", price: "$74.99", lessons: 50, duration: "15h", img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, title: "UI/UX Foundations", category: "Design", price: "$64.99", lessons: 22, duration: "6h", img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, title: "Mobile App Dev with Flutter", category: "Development", price: "$79.99", lessons: 38, duration: "11h", img: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  const filtered = activeCategory === "All" ? allCourses : allCourses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2F327D] mb-8 text-center">Explore <span className="text-[#F48C06]">Courses</span></h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Development", "Design", "Marketing", "Data Science"].map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-6 py-2 rounded-full font-semibold transition-all ${activeCategory === cat ? "bg-[#F48C06] text-white shadow-md" : "bg-white text-gray-600 border hover:border-[#F48C06]"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(course => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <img src={course.img} alt={course.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2F327D] mb-4 h-14 overflow-hidden">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><BookOpen size={16}/> {course.lessons} Lessons</span>
                  <span className="flex items-center gap-1"><Clock size={16}/> {course.duration}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-2xl font-bold text-[#F48C06]">{course.price}</span>
                  <button className="bg-[#23BDEE] text-white px-5 py-2 rounded-xl font-bold hover:bg-sky-500">Enroll</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 2. ABOUT US SECTION ---
const AboutUs = () => (
  <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-24">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="About Skillearn" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-2 bg-[#F48C06]/10 rounded-full text-[#F48C06] font-bold text-sm uppercase">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F327D]">
            Everything you can do in a classroom, <span className="text-[#F48C06]">you can do with Skillearn</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Interactive Live Classrooms", "Expert-Led Video Courses", "Student Discussion Forums", "Instant Certification"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-semibold text-[#113C49] bg-gray-50 p-4 rounded-2xl">
                <CheckCircle className="text-[#23BDEE]" size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// --- 3. BLOG SECTION ---
const Blog = () => (
  <section id="blog" className="py-24 bg-white scroll-mt-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-[#2F327D] mb-12 text-center">Latest From Our <span className="text-[#F48C06]">Blog</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { title: "Virtual Classroom Engagement", author: "Dr. Jenkins", date: "Oct 12, 2025", img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { title: "AI in Higher Education", author: "James Wilson", date: "Nov 05, 2025", img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { title: "Top Tutor Tools 2026", author: "Maria Garcia", date: "Jan 20, 2026", img: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=600" }
        ].map((post, i) => (
          <div key={i} className="rounded-3xl shadow-lg overflow-hidden border bg-white group hover:shadow-xl transition-all">
            <img src={post.img} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" alt="" />
            <div className="p-6">
              <div className="flex gap-4 text-xs text-gray-400 mb-2">
                <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                <span>By {post.author}</span>
              </div>
              <h3 className="font-bold text-[#2F327D] group-hover:text-[#F48C06] transition-colors">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 4. CONTACT SECTION ---
const Contact = () => (
  <section id="contact" className="py-24 bg-gray-50 scroll-mt-24">
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
);

// --- 5. FOOTER SECTION ---
const Footer = () => (
  <footer className="bg-[#2F327D] text-white pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Skillearn</h2>
          <p className="text-gray-300">Empowering learners worldwide through accessible education.</p>
          <div className="flex gap-4">
            <Facebook className="cursor-pointer hover:text-[#F48C06]" />
            <Twitter className="cursor-pointer hover:text-[#F48C06]" />
            <Instagram className="cursor-pointer hover:text-[#F48C06]" />
            <Linkedin className="cursor-pointer hover:text-[#F48C06]" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><Link to="/signup" className="hover:text-white">Get Started</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Support</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Newsletter</h3>
          <div className="flex">
            <input type="email" placeholder="Email Address" className="bg-white/10 p-3 rounded-l-xl outline-none w-full border border-white/20" />
            <button className="bg-[#F48C06] p-3 rounded-r-xl font-bold text-white">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Skillearn. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

// --- DASHBOARD COMPONENTS (Protected) ---
const DashboardLayout = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => { setUser(null); navigate('/'); };
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-[#2F327D] text-white hidden lg:flex flex-col fixed h-full z-50">
        <div className="p-8 text-2xl font-bold border-b border-white/10">Skillearn</div>
        <nav className="flex-1 p-6 space-y-2">
          <Link to={`/dashboard/${user?.role}`} className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl"><Layout size={20} /> Dashboard</Link>
          <Link to="/courses" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl"><BookOpen size={20} /> My Courses</Link>
        </nav>
        <button onClick={handleLogout} className="p-8 flex items-center gap-3 text-red-300 hover:text-red-100 border-t border-white/10"><LogOut size={20} /> Logout</button>
      </aside>
      <main className="flex-1 lg:ml-64">
        <header className="bg-white h-20 border-b flex items-center justify-between px-8 sticky top-0 z-40">
           <h2 className="font-bold text-[#2F327D] text-xl capitalize">{user?.role} Portal</h2>
           <div className="w-10 h-10 bg-[#F48C06] rounded-full flex items-center justify-center text-white font-bold">{user?.name?.charAt(0) || "U"}</div>
        </header>
        <div className="p-8 max-w-7xl mx-auto"><Outlet /></div>
      </main>
    </div>
  );
};

const StudentHome = ({ user }) => (
  <div className="animate-in fade-in duration-500">
    <h1 className="text-3xl font-bold text-[#113C49]">Welcome, {user?.name || 'Student'}! 🎓</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"><h3>Active Courses</h3><p className="text-3xl font-bold mt-2">3</p></div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"><h3>Completed</h3><p className="text-3xl font-bold mt-2">12</p></div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"><h3>Points</h3><p className="text-3xl font-bold mt-2">1,250</p></div>
    </div>
  </div>
);

const InstructorHome = ({ user }) => (
  <div className="animate-in fade-in duration-500">
    <h1 className="text-3xl font-bold text-[#113C49]">Instructor Portal 🛠️</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"><h2>1.2k</h2><p>Total Students</p></div>
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"><h2>$4,500</h2><p>Revenue</p></div>
    </div>
  </div>
);

const ProtectedRoute = ({ user, allowedRole, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== allowedRole) return <Navigate to="/" replace />;
  return children;
};

// --- MAIN APP CONTENT (Routing Logic) ---
const AppContent = ({ user, setUser }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar user={user} setUser={setUser} />}
      <main className={`overflow-x-hidden bg-white text-[#113C49] min-h-screen ${!isDashboard ? "pt-20" : ""}`}>
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col">
              <Hero />      {/* Contains Banner + Features (id="features") */}
              <AboutUs />   {/* Classroom features (id="about") */}
              <Blog />      {/* Latest news (id="blog") */}
              <Contact />   {/* Contact form (id="contact") */}
              <Footer />    {/* Legal Footer */}
            </div>
          } />
          <Route path="/courses" element={<><Courses /><Footer /></>} />
          <Route path="/login" element={<Auth setUser={setUser} initialMode="login" />} />
          <Route path="/signup" element={<Auth setUser={setUser} initialMode="signup" />} />

          <Route path="/dashboard/student" element={
            <ProtectedRoute user={user} allowedRole="student">
              <DashboardLayout user={user} setUser={setUser} />
            </ProtectedRoute>
          }>
            <Route index element={<StudentHome user={user} />} />
          </Route>

          <Route path="/dashboard/instructor" element={
            <ProtectedRoute user={user} allowedRole="instructor">
              <DashboardLayout user={user} setUser={setUser} />
            </ProtectedRoute>
          }>
            <Route index element={<InstructorHome user={user} />} />
          </Route>

          <Route path="*" element={<div className="p-20 text-center text-2xl font-bold">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </>
  );
};

// --- FINAL APP EXPORT ---
const App = () => {
  const [user, setUser] = useState(null); 
  return (
    <Router>
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
};

export default App;