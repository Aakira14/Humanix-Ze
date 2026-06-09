import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AIAssistant from "./pages/AIAssistant";
import Analytics from "./pages/Analytics";
import Resources from "./pages/Resources";

function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
          <Navbar isAuthenticated={isAuthenticated} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/dashboard" element={<ProtectedRoute isAuth={isAuthenticated}><Dashboard /></ProtectedRoute>} />
            <Route path="/ai-assistant" element={<ProtectedRoute isAuth={isAuthenticated}><AIAssistant /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute isAuth={isAuthenticated}><Analytics /></ProtectedRoute>} />
            <Route path="/resources" element={<ProtectedRoute isAuth={isAuthenticated}><Resources /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
