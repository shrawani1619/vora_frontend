import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePaperAirplane, HiOutlineX, HiOutlineChatAlt2 } from "react-icons/hi";
import {
  CHATBOT_QUICK_REPLIES,
  CHATBOT_RESPONSES,
  getChatbotReply,
} from "../data/chatbot";
import Logo from "./ui/Logo";

function MessageBubble({ role, text }) {
  const isBot = role === "bot";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[88%] rounded-sm px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
          isBot
            ? "glass-card text-white/85"
            : "border border-gold/30 bg-gold/15 text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: 1, role: "bot", text: CHATBOT_RESPONSES.greeting }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (!open) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const sendBotReply = (replyText, userText) => {
    if (userText) {
      setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: userText }]);
    }
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", text: replyText },
      ]);
      setTyping(false);
    }, 600);
  };

  const handleQuickReply = (id) => {
    const reply = CHATBOT_RESPONSES[id];
    const label = CHATBOT_QUICK_REPLIES.find((q) => q.id === id)?.label;
    if (reply && label) sendBotReply(reply, label);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || typing) return;
    setInput("");
    sendBotReply(getChatbotReply(trimmed), trimmed);
  };

  const goToEnquiry = () => {
    onClose();
    document.querySelector("#enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:bg-black/40"
            aria-label="Close chat"
          />

          <motion.div
            role="dialog"
            aria-label="Vora Realtors chat assistant"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-3 bottom-[5.5rem] z-[60] flex max-h-[min(72dvh,560px)] flex-col overflow-hidden rounded-sm border border-white/10 bg-charcoal shadow-2xl shadow-black/60 sm:inset-x-auto sm:right-5 sm:bottom-24 sm:w-[min(100vw-2rem,400px)] md:right-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-charcoal-light px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <HiOutlineChatAlt2 className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Vora Concierge</p>
                  <p className="flex items-center gap-1.5 text-[10px] text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center text-white/60 transition-colors hover:text-gold"
                aria-label="Close chat"
              >
                <HiOutlineX size={22} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-3 overflow-y-auto p-4"
            >
              <div className="mb-2 flex justify-center">
                <Logo className="h-10 w-auto opacity-90" />
              </div>

              {messages.map((msg) => (
                <MessageBubble key={msg.id} role={msg.role} text={msg.text} />
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="glass-card flex gap-1 rounded-sm px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gold/60 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gold/60 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gold/60 [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            <div className="hide-scrollbar flex gap-2 overflow-x-auto border-t border-white/5 px-3 py-2">
              {CHATBOT_QUICK_REPLIES.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleQuickReply(q.id)}
                  disabled={typing}
                  className="shrink-0 rounded-sm border border-white/10 px-3 py-1.5 text-[10px] tracking-wider uppercase text-white/70 transition-colors hover:border-gold/40 hover:text-gold disabled:opacity-50"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* CTA strip */}
            <button
              type="button"
              onClick={goToEnquiry}
              className="border-t border-gold/20 bg-gold/5 px-4 py-2.5 text-center text-[10px] tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold/10"
            >
              Book Site Visit →
            </button>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="min-w-0 flex-1 border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-gold/40"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold text-charcoal transition-opacity disabled:opacity-40"
                aria-label="Send message"
              >
                <HiOutlinePaperAirplane size={18} />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
