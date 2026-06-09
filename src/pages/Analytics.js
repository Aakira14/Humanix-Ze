import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, AreaChart, Area
} from "recharts";
import { mockSubjectPerformance, mockWeeklyHours, mockProgressTrend } from "../data/mockData";
import { TrendingUp, Award, Clock, Target } from "lucide-react";

const statCards = [
  { label: "Overall GPA", value: "3.7", delta: "+0.4", icon: Award, color: "blue" },
  { label: "Weekly Study Hours", value: "23.5h", delta: "+2.5h", icon: Clock, color: "green" },
  { label: "Goals Achieved", value: "8/10", delta: "80%", icon: Target, color: "purple" },
  { label: "Improvement Rate", value: "+32%", delta: "vs last month", icon: TrendingUp, color: "orange" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 shadow-lg text-xs">
      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>{p.name}: {p.value}{typeof p.value === "number" && p.value <= 100 && p.name !== "hours" ? "%" : ""}</p>
      ))}
    </div>
  );
};

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Analytics</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Track your academic performance and study patterns.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map(({ label, value, delta, icon: Icon, color }) => (
            <div key={label} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
              <div className={`w-9 h-9 rounded-xl mb-3 flex items-center justify-center ${
                color === "blue" ? "bg-blue-100 dark:bg-blue-900/30" :
                color === "green" ? "bg-green-100 dark:bg-green-900/30" :
                color === "purple" ? "bg-purple-100 dark:bg-purple-900/30" :
                "bg-orange-100 dark:bg-orange-900/30"
              }`}>
                <Icon size={16} className={color === "blue" ? "text-blue-600" : color === "green" ? "text-green-600" : color === "purple" ? "text-purple-600" : "text-orange-600"} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">{delta}</div>
            </div>
          ))}
        </div>

        {/* Charts row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="font-bold text-gray-900 dark:text-white mb-1">Subject Performance</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">Your score vs class average</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={mockSubjectPerformance} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="score" name="Your Score" fill="#6366f1" radius={[6, 6, 0, 0]} />
                <Bar dataKey="average" name="Class Avg" fill="#a5b4fc" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="font-bold text-gray-900 dark:text-white mb-1">Weekly Study Hours</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">Hours studied per day this week</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={mockWeeklyHours}>
                <defs>
                  <linearGradient id="hoursGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="hours" name="Hours" stroke="#8b5cf6" fill="url(#hoursGrad)" strokeWidth={2} dot={{ r: 4, fill: "#8b5cf6" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart row 2 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="font-bold text-gray-900 dark:text-white mb-1">Learning Progress Over Time</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">6-week progress trend across top subjects</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={mockProgressTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis domain={[40, 100]} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="math" name="Mathematics" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="science" name="Science" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="programming" name="Programming" stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
