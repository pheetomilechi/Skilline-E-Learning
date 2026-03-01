import React, { useState } from 'react';
import { Search, BookOpen, Clock, Star, Filter } from 'lucide-react';

const allCourses = [
  { id: 1, title: "Full Stack Web Development", category: "Development", price: "$89.99", rating: 4.8, lessons: 42, duration: "12h 30m", img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, title: "Advanced Graphic Design", category: "Design", price: "$59.99", rating: 4.9, lessons: 28, duration: "8h 15m", img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, title: "Digital Marketing Masterclass", category: "Marketing", price: "$49.99", rating: 4.7, lessons: 35, duration: "10h 00m", img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, title: "Python for Data Science", category: "Data Science", price: "$74.99", rating: 4.9, lessons: 50, duration: "15h 45m", img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, title: "UI/UX Foundations", category: "Design", price: "$64.99", rating: 4.6, lessons: 22, duration: "6h 20m", img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, title: "Mobile App Dev with Flutter", category: "Development", price: "$79.99", rating: 4.8, lessons: 38, duration: "11h 10m", img: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, title: "Business Strategy 101", category: "Business", price: "$39.99", rating: 4.5, lessons: 15, duration: "4h 50m", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, title: "Ethical Hacking & Cyber Security", category: "Development", price: "$99.99", rating: 4.9, lessons: 60, duration: "20h 30m", img: "https://images.pexels.com/photos/5475783/pexels-photo-5475783.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, title: "Social Media Management", category: "Marketing", price: "$29.99", rating: 4.4, lessons: 12, duration: "3h 15m", img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 10, title: "Introduction to Machine Learning", category: "Data Science", price: "$84.99", rating: 4.7, lessons: 45, duration: "14h 00m", img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const Categories = ["All", "Development", "Design", "Marketing", "Data Science", "Business"];

function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-[#2F327D]">Online <span className="text-[#F48C06]">Courses</span></h1>
            <p className="text-gray-500 mt-2">Pick from our best curated professional courses.</p>
          </div>

          <div className="relative group max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F48C06] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for courses..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 outline-none focus:border-[#F48C06] shadow-sm transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat 
                ? "bg-[#F48C06] text-white shadow-lg shadow-orange-200" 
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col border border-gray-50">
                <div className="relative overflow-hidden h-48">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={14} className="text-[#F48C06] fill-[#F48C06]" />
                    <span className="text-xs font-bold text-[#2F327D]">{course.rating}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{course.category}</span>
                  <h3 className="text-lg font-bold text-[#2F327D] mb-4 line-clamp-2 hover:text-[#F48C06] transition-colors cursor-pointer">
                    {course.title}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                      <div className="flex items-center gap-1"><BookOpen size={16} /> {course.lessons} Lessons</div>
                      <div className="flex items-center gap-1"><Clock size={16} /> {course.duration}</div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xl font-bold text-[#2F327D]">{course.price}</span>
                      <button className="bg-[#23BDEE] hover:bg-[#1ca8d6] text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 text-xl font-medium">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;