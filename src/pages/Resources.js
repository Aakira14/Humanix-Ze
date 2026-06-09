import { useState } from "react";
import { Search, Star, Clock, BookOpen, Filter } from "lucide-react";
import { mockResources } from "../data/mockData";

const categories = ["All", "Mathematics", "Science", "Programming", "Career Guidance"];
const levelColor = { Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", Advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300", "All Levels": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" };
const typeColor = { Video: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", Course: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", Interactive: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300", Quiz: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", "Lab Sim": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", Guide: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300", Workshop: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300" };

export default function Resources() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = mockResources.filter((r) => {
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Resources</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Curated content to accelerate your learning journey.</p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-2.5 rounded-xl">
            <Filter size={14} />
            <span>{filtered.length} resources</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-xl transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <BookOpen size={40} className="mx-auto mb-3 opacity-40" />
            <p>No resources found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(({ id, title, category, type, rating, duration, level, icon }) => (
              <div key={id}
                className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:shadow-lg hover:-translate-y-1 transform transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-2xl">
                    {icon}
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColor[type] || "bg-gray-100 text-gray-600"}`}>{type}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-snug group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={12} className="fill-yellow-400" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock size={11} />
                    <span className="text-xs">{duration}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColor[level]}`}>{level}</span>
                </div>
                <button className="mt-4 w-full text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Start Learning →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
