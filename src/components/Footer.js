import { Link } from "react-router-dom";
import { Zap, GitFork, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">Humanix-Ze</span>
            </div>
            <p className="text-sm leading-relaxed">AI-powered learning for the next generation of students.</p>
            <div className="flex gap-3 mt-4">
              {[GitFork, Globe, Mail].map((Icon, i) => (
                <button key={i} className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {[
            { title: "Platform", links: ["Dashboard", "AI Assistant", "Analytics", "Resources"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
            { title: "Support", links: ["Help Center", "Privacy Policy", "Terms of Service", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-3 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/login" className="text-sm hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>© 2024 Humanix-Ze. All rights reserved. Built with ❤️ for learners worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
