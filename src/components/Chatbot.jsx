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
            ? "border border-charcoal/8 bg-beige text-charcoal/90 shadow-sm"
            : "bg-blue text-white shadow-[0_6px_20px_rgba(13,71,161,0.25)]"
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
  }, [open]);

  useEffect(() => {
    if (!open) {
      setMessages([]);
      setInput("");
      setTyping(false);
    }
  }, [open]);

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
            className="fixed inset-0 z-[55] bg-charcoal/25 backdrop-blur-[2px]"
            aria-label="Close chat"
          />

          <motion.div
            role="dialog"
            aria-label="Vora Realtors chat assistant"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-3 bottom-[5.5rem] z-[60] flex max-h-[min(72dvh,560px)] flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-warm-white shadow-[0_24px_64px_rgba(13,71,161,0.18)] sm:inset-x-auto sm:right-5 sm:bottom-24 sm:w-[min(100vw-2rem,400px)] md:right-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-charcoal/8 bg-gradient-to-r from-blue to-blue-dark px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15">
                  <HiOutlineChatAlt2 className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Vora Concierge</p>
                  <p className="flex items-center gap-1.5 text-[10px] font-medium text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-bright" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center text-white/80 transition-colors hover:text-white"
                aria-label="Close chat"
              >
                <HiOutlineX size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-3 overflow-y-auto bg-white p-4"
            >
              <div className="mb-1 flex justify-center border-b border-charcoal/6 pb-3">
                <Logo className="h-10 w-auto" />
              </div>

              {messages.map((msg) => (
                <MessageBubble key={msg.id} role={msg.role} text={msg.text} />
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-sm border border-charcoal/8 bg-beige px-4 py-3 shadow-sm">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue/50 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue/50 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue/50 [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            <div className="relative border-t border-charcoal/8 bg-warm-white/80">
              <p className="px-3 pt-2 text-[9px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
                Quick questions — scroll for more
              </p>
              <div className="h-scroll w-full min-w-0">
                <div className="h-scroll-inner gap-2 px-3 py-1">
                  {CHATBOT_QUICK_REPLIES.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleQuickReply(q.id)}
                      disabled={typing}
                      className="inline-flex min-h-[34px] shrink-0 items-center justify-center rounded-full border border-charcoal/12 bg-white px-3.5 py-2 text-[10px] font-semibold leading-none tracking-[0.12em] text-charcoal/75 uppercase transition-all hover:border-blue hover:text-blue disabled:opacity-50"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>
              <div
                className="pointer-events-none absolute top-6 right-0 bottom-2 w-10 bg-gradient-to-l from-warm-white to-transparent"
                aria-hidden
              />
            </div>

            {/* CTA strip */}
            <button
              type="button"
              onClick={goToEnquiry}
              className="border-t border-gold-bright/30 bg-gold-bright/10 px-4 py-2.5 text-center text-[10px] font-semibold tracking-[0.2em] text-gold-dark uppercase transition-colors hover:bg-gold-bright/20"
            >
              Book Site Visit →
            </button>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border-t border-charcoal/8 bg-white p-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about floor plans, pricing..."
                className="min-w-0 flex-1 rounded-sm border border-charcoal/12 bg-warm-white px-3 py-2.5 text-sm text-charcoal placeholder-charcoal/40 outline-none transition-colors focus:border-blue"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-blue text-white shadow-md transition-all hover:bg-blue-dark disabled:opacity-40"
                aria-label="Send message"
              >
                <HiOutlinePaperAirplane size={18} strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
