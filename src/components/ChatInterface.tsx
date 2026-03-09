"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAIResponse } from "@/lib/ai-responses";

interface Message {
  role: "user" | "ai";
  content: string;
}

const suggestions = [
  { label: "Experience", query: "Tell me about your work experience" },
  { label: "About", query: "Who are you? Tell me about yourself" },
  { label: "Skills", query: "What are your skills and tech stack?" },
  { label: "Voice Agents", query: "Tell me about your AI voice agents" },
  { label: "Contact", query: "How can I contact you?" },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll ONLY the chat container, not the page
  const scrollChatToBottom = useCallback(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    scrollChatToBottom();
  }, [messages, isThinking, scrollChatToBottom]);

  const send = (text: string) => {
    if (!text.trim() || isThinking) return;
    setMessages((prev) => [...prev, { role: "user", content: text.trim() }]);
    setInput("");
    setIsThinking(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", content: getAIResponse(text) }]);
      setIsThinking(false);
    }, 800 + Math.random() * 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-xl shadow-accent/5">
        {/* Chat area — scrolls internally only */}
        <div
          ref={chatContainerRef}
          className="h-[250px] sm:h-[320px] overflow-y-auto overscroll-contain p-3 sm:p-5 space-y-3"
        >
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
              </div>
              <p className="text-fg-secondary text-sm">Ask my AI anything about me</p>
            </div>
          )}

          <AnimatePresence mode="popLayout">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "ai" && (
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-fg text-bg rounded-br-md"
                      : "bg-bg-secondary border border-border rounded-bl-md"
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: msg.content
                        .replace(/\*\*(.*?)\*\*/g, "<strong class='text-accent'>$1</strong>")
                        .replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isThinking && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <div className="bg-bg-secondary border border-border rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2.5">
                <div className="flex gap-1">
                  <span className="dot-1 w-2 h-2 bg-accent rounded-full inline-block" />
                  <span className="dot-2 w-2 h-2 bg-accent rounded-full inline-block" />
                  <span className="dot-3 w-2 h-2 bg-accent rounded-full inline-block" />
                </div>
                <span className="text-fg-secondary text-xs">Thinking...</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Suggestions */}
        <div className="px-5 pb-2 flex flex-wrap gap-1.5 justify-center">
          {suggestions.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); send(s.query); }}
              disabled={isThinking}
              className="px-3 py-1 text-[11px] font-medium border border-border rounded-full text-fg-secondary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all disabled:opacity-30"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-3 pt-1">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Huzaifa..."
              disabled={isThinking}
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 pr-11 text-sm placeholder-fg-secondary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isThinking || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-lg bg-fg text-bg hover:opacity-80 transition-opacity disabled:opacity-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
