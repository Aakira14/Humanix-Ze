import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { Sun, Moon, Menu, X, Zap } from "lucide-react";

const navLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/ai-assistant", label: "AI Assistant" },
  { to: "/analytics", label: "Analytics" },
  { to: "/resources", label: "Resources" },
];

export default function Navbar({ isAuthenticated }) {
  const { dark, toggle } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Humanix-Ze</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated
              ? navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === l.to
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))
              : isLanding && (
                  <>
                    <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600">Features</a>
                    <a href="#stats" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600">About</a>
                  </>
                )}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggle} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600">Login</Link>
                <Link to="/login" className="hidden sm:block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Get Started
                </Link>
              </>
            ) : (
              <Link to="/" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500">Logout</Link>
            )}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-2">
          {isAuthenticated
            ? navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300 py-2">
                  {l.label}
                </Link>
              ))
            : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-gray-600 dark:text-gray-300 py-2">Login</Link>
                <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-blue-600 py-2">Get Started</Link>
              </>
            )}
        </div>
      )}
    </nav>
  );
}
