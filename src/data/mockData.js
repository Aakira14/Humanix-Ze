export const mockUser = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  avatar: "AJ",
  grade: "Grade 10",
  school: "Lincoln High School",
  streak: 14,
  totalPoints: 2840,
  rank: 12,
};

export const mockStats = [
  { label: "Active Students", value: "50K+", icon: "👥" },
  { label: "Courses Available", value: "1,200+", icon: "📚" },
  { label: "AI Interactions/Day", value: "500K+", icon: "🤖" },
  { label: "Avg. Grade Improvement", value: "32%", icon: "📈" },
];

export const mockProgressCards = [
  { subject: "Mathematics", progress: 78, color: "blue", grade: "A-", hours: 24 },
  { subject: "Science", progress: 65, color: "green", grade: "B+", hours: 18 },
  { subject: "Programming", progress: 90, color: "purple", grade: "A+", hours: 35 },
  { subject: "Career Guidance", progress: 50, color: "orange", grade: "B", hours: 10 },
];

export const mockActivities = [
  { id: 1, type: "lesson", title: "Completed: Quadratic Equations", time: "2h ago", icon: "✅", subject: "Math" },
  { id: 2, type: "quiz", title: "Quiz Score: 92% — Newton's Laws", time: "5h ago", icon: "🎯", subject: "Science" },
  { id: 3, type: "ai", title: "AI Session: Python Loops", time: "Yesterday", icon: "🤖", subject: "Programming" },
  { id: 4, type: "resource", title: "Read: Career Pathways in Tech", time: "2d ago", icon: "📖", subject: "Career" },
];

export const mockTasks = [
  { id: 1, title: "Calculus Assignment", due: "Tomorrow", priority: "high", subject: "Math" },
  { id: 2, title: "Lab Report: Chemical Reactions", due: "Mar 25", priority: "medium", subject: "Science" },
  { id: 3, title: "Build a React Component", due: "Mar 27", priority: "low", subject: "Programming" },
  { id: 4, title: "Resume Workshop", due: "Mar 30", priority: "medium", subject: "Career" },
];

export const mockChatMessages = [
  { id: 1, role: "ai", text: "Hi Alex! 👋 I'm your AI study assistant. How can I help you today?" },
  { id: 2, role: "user", text: "Can you explain what a derivative is in calculus?" },
  { id: 3, role: "ai", text: "Great question! A derivative measures how a function changes as its input changes. Think of it as the instantaneous rate of change — like your car's speedometer showing speed at a specific moment.\n\nFormally: f'(x) = lim(h→0) [f(x+h) - f(x)] / h\n\nFor example, if f(x) = x², then f'(x) = 2x. At x=3, the slope is 6." },
  { id: 4, role: "user", text: "That makes sense! Can you give me a practice problem?" },
  { id: 5, role: "ai", text: "Sure! Try this:\n\nFind the derivative of f(x) = 3x³ + 2x² - 5x + 7\n\nHint: Use the power rule — d/dx[xⁿ] = n·xⁿ⁻¹\n\nTake your time and let me know your answer! 🎓" },
];

export const mockSubjectPerformance = [
  { subject: "Math", score: 78, average: 65 },
  { subject: "Science", score: 65, average: 60 },
  { subject: "Programming", score: 90, average: 72 },
  { subject: "Career", score: 50, average: 55 },
  { subject: "English", score: 72, average: 68 },
];

export const mockWeeklyHours = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 2.9 },
  { day: "Sat", hours: 5.1 },
  { day: "Sun", hours: 3.5 },
];

export const mockProgressTrend = [
  { week: "W1", math: 55, science: 50, programming: 70 },
  { week: "W2", math: 60, science: 55, programming: 75 },
  { week: "W3", math: 65, science: 58, programming: 80 },
  { week: "W4", math: 70, science: 62, programming: 85 },
  { week: "W5", math: 75, science: 63, programming: 88 },
  { week: "W6", math: 78, science: 65, programming: 90 },
];

export const mockResources = [
  { id: 1, title: "Algebra Fundamentals", category: "Mathematics", type: "Video", rating: 4.8, duration: "2h 30m", level: "Beginner", icon: "📐" },
  { id: 2, title: "Calculus Mastery Course", category: "Mathematics", type: "Course", rating: 4.9, duration: "12h", level: "Advanced", icon: "∫" },
  { id: 3, title: "Statistics & Probability", category: "Mathematics", type: "Interactive", rating: 4.7, duration: "5h", level: "Intermediate", icon: "📊" },
  { id: 4, title: "Physics: Forces & Motion", category: "Science", type: "Video", rating: 4.6, duration: "3h 15m", level: "Intermediate", icon: "⚛️" },
  { id: 5, title: "Biology Cell Structure", category: "Science", type: "Quiz", rating: 4.5, duration: "1h 45m", level: "Beginner", icon: "🧬" },
  { id: 6, title: "Chemistry Reactions", category: "Science", type: "Lab Sim", rating: 4.8, duration: "4h", level: "Intermediate", icon: "🔬" },
  { id: 7, title: "Python for Beginners", category: "Programming", type: "Course", rating: 4.9, duration: "8h", level: "Beginner", icon: "🐍" },
  { id: 8, title: "React & Modern JS", category: "Programming", type: "Course", rating: 4.8, duration: "15h", level: "Intermediate", icon: "⚛️" },
  { id: 9, title: "Data Structures & Algorithms", category: "Programming", type: "Course", rating: 4.7, duration: "20h", level: "Advanced", icon: "🔗" },
  { id: 10, title: "Tech Career Roadmap 2024", category: "Career Guidance", type: "Guide", rating: 4.6, duration: "3h", level: "All Levels", icon: "🗺️" },
  { id: 11, title: "Resume & Interview Prep", category: "Career Guidance", type: "Workshop", rating: 4.8, duration: "4h 30m", level: "All Levels", icon: "💼" },
  { id: 12, title: "Networking for Students", category: "Career Guidance", type: "Video", rating: 4.5, duration: "2h", level: "Beginner", icon: "🤝" },
];
