import { Link } from "react-router-dom";
import { Flame, Trophy, Clock, BookOpen, ArrowRight, AlertCircle } from "lucide-react";
import { mockUser, mockProgressCards, mockActivities, mockTasks } from "../data/mockData";

const priorityColor = { high: "text-red-500 bg-red-50 dark:bg-red-900/20", medium: "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20", low: "text-green-600 bg-green-50 dark:bg-green-900/20" };
const progressColor = { blue: "bg-blue-500", green: "bg-green-500", purple: "bg-purple-500", orange: "bg-orange-500" };
const subjectBadge = { Math: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", Science: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", Programming: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", Career: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" };

export default function Dashboard() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{greeting}, {mockUser.name.split(" ")[0]}! 👋</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">Here's your learning overview for today.</p>
          </div>
          <Link to="/ai-assistant"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
            Ask AI Assistant <ArrowRight size={16} />
          </Link>
        </div>

        {/* Profile + Streak */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                {mockUser.avatar}
              </div>
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white">{mockUser.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{mockUser.grade}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{mockUser.school}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-orange-500 mb-1"><Flame size={14} /></div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{mockUser.streak}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1"><Trophy size={14} /></div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{mockUser.totalPoints.toLocaleString()}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Points</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-blue-500 mb-1"><Trophy size={14} /></div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">#{mockUser.rank}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Rank</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {[
              { label: "Study Hours This Week", value: "23.5h", icon: Clock, color: "blue", sub: "+2.5h vs last week" },
              { label: "Lessons Completed", value: "18", icon: BookOpen, color: "green", sub: "This month" },
              { label: "Average Score", value: "83%", icon: Trophy, color: "purple", sub: "Across all subjects" },
              { label: "Learning Streak", value: `${mockUser.streak} days`, icon: Flame, color: "orange", sub: "Keep it up! 🔥" },
            ].map(({ label, value, icon: Icon, color, sub }) => (
              <div key={label} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
                <div className={`w-9 h-9 rounded-xl mb-3 flex items-center justify-center ${
                  color === "blue" ? "bg-blue-100 dark:bg-blue-900/30" :
                  color === "green" ? "bg-green-100 dark:bg-green-900/30" :
                  color === "purple" ? "bg-purple-100 dark:bg-purple-900/30" :
                  "bg-orange-100 dark:bg-orange-900/30"
                }`}>
                  <Icon size={16} className={
                    color === "blue" ? "text-blue-600" : color === "green" ? "text-green-600" : color === "purple" ? "text-purple-600" : "text-orange-600"
                  } />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="font-bold text-gray-900 dark:text-white mb-5">Subject Progress</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockProgressCards.map(({ subject, progress, color, grade, hours }) => (
              <div key={subject} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{subject}</span>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{grade}</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>{progress}%</span><span>{hours}h</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full ${progressColor[color]} rounded-full transition-all duration-500`} style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities + Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="font-bold text-gray-900 dark:text-white mb-4">Recent Activities</h2>
            <div className="space-y-3">
              {mockActivities.map(({ id, title, time, icon, subject }) => (
                <div key={id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <span className="text-xl">{icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{title}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{time}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${subjectBadge[subject]}`}>{subject}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="font-bold text-gray-900 dark:text-white mb-4">Upcoming Tasks</h2>
            <div className="space-y-3">
              {mockTasks.map(({ id, title, due, priority, subject }) => (
                <div key={id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <AlertCircle size={16} className={priority === "high" ? "text-red-500" : priority === "medium" ? "text-yellow-500" : "text-green-500"} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{title}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Due: {due}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityColor[priority]}`}>{priority}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
