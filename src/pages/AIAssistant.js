import { useState, useRef, useEffect } from "react";
import { Send, Zap, RefreshCw } from "lucide-react";
import { mockChatMessages, mockUser } from "../data/mockData";

const suggestions = [
  "Explain the Pythagorean theorem",
  "Help me with Python loops",
  "What career options suit me?",
  "Summarize Newton's 3 laws",
];

export default function AIAssistant() {
  const [messages, setMessages] = useState(mockChatMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: msg }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          text: `Great question! Here's what I know about "${msg}":\n\nThis is a demo response. In the full version, I'd provide a detailed, personalized explanation tailored to your current learning level and subject context.\n\nWould you like me to:\n• Break this down step by step?\n• Provide practice problems?\n• Suggest related resources? 📚`,
        },
      ]);
    }, 1500);
  };

  const handleKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Study Assistant</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Ask anything — I'm here to help you learn smarter.</p>
          </div>
          <button onClick={() => setMessages(mockChatMessages)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-xl transition-colors">
            <RefreshCw size={14} /> Reset Chat
          </button>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col" style={{ height: "calc(100vh - 220px)", minHeight: 500 }}>
          {/* Chat header */}
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Humanix AI</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /><span className="text-xs text-gray-500 dark:text-gray-400">Online — always ready</span></div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map(({ id, role, text }) => (
              <div key={id} className={`flex items-end gap-2 ${role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                  role === "user"
                    ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                    : "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                }`}>
                  {role === "user" ? mockUser.avatar : "AI"}
                </div>
                <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                  role === "user"
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-sm"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm"
                }`}>
                  {text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">AI</div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => <div key={i} className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />)}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-gray-100 dark:border-gray-800">
            {suggestions.map((s) => (
              <button key={s} onClick={() => sendMessage(s)}
                className="flex-shrink-0 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything about your studies..."
                rows={1}
                className="flex-1 resize-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || typing}
                className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
