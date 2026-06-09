import { Link } from "react-router-dom";
import { ArrowRight, Brain, TrendingUp, Star, Zap, BookOpen, CheckCircle } from "lucide-react";
import { mockStats } from "../data/mockData";
import Footer from "../components/Footer";

const features = [
  { icon: Brain, title: "Personalized Learning", desc: "AI adapts content to your unique learning style, pace, and goals for maximum retention.", color: "blue" },
  { icon: Zap, title: "AI Study Assistant", desc: "Get instant explanations, summaries, and answers 24/7 from your intelligent tutor.", color: "purple" },
  { icon: TrendingUp, title: "Progress Tracking", desc: "Visual dashboards show your growth across subjects with actionable insights.", color: "green" },
  { icon: Star, title: "Smart Recommendations", desc: "Curated resources and next steps tailored to close your knowledge gaps.", color: "orange" },
];

const colorMap = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  green: "from-green-500 to-green-600",
  orange: "from-orange-500 to-orange-600",
};

const testimonials = [
  { name: "Sarah K.", grade: "Grade 11", text: "My GPA went from 2.8 to 3.7 in one semester using Humanix-Ze!", avatar: "SK" },
  { name: "Marcus T.", grade: "Grade 10", text: "The AI assistant explains things better than any textbook I've used.", avatar: "MT" },
  { name: "Priya M.", grade: "Grade 12", text: "Finally a platform that makes studying fun and actually effective.", avatar: "PM" },
];

export default function Landing() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <Zap size={12} /> AI-Powered Education Platform
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Learn Smarter with{" "}
            <span className="gradient-text">Humanix-Ze</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            An AI-powered learning companion designed to personalize education and improve student performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transform transition-all shadow-lg shadow-blue-500/25">
              Get Started <ArrowRight size={18} />
            </Link>
            <a href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold px-8 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:scale-105 transform transition-all">
              <BookOpen size={18} /> Learn More
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            {["No credit card required", "Free 30-day trial", "Cancel anytime"].map((t) => (
              <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Humanix-Ze?</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Everything you need to excel academically, powered by cutting-edge AI.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title}
                className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transform transition-all cursor-default">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Trusted by Students Worldwide</h2>
            <p className="text-blue-100">Real results from real learners.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {mockStats.map(({ label, value, icon }) => (
              <div key={label} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                <div className="text-blue-100 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Learning?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Join 50,000+ students already learning smarter with Humanix-Ze.</p>
          <Link to="/login"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 hover:scale-105 transform transition-all shadow-lg shadow-blue-500/25">
            Start for Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
