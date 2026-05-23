import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChatAlt2, HiOutlinePhone } from "react-icons/hi";
import { CONTACT } from "../data/content";
import Chatbot from "./Chatbot";

export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />

      <div
        className={`fixed right-4 z-50 flex flex-col gap-3 sm:right-5 md:right-8 ${
          chatOpen ? "bottom-4 opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto" : "bottom-4 sm:bottom-5 md:bottom-8"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <motion.button
          type="button"
          onClick={() => setChatOpen((prev) => !prev)}
          aria-label={chatOpen ? "Close chat" : "Open chat assistant"}
          aria-expanded={chatOpen}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 260 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors ${
            chatOpen
              ? "border border-white/20 bg-charcoal text-white"
              : "border border-gold/40 bg-gold text-charcoal shadow-gold/20"
          }`}
        >
          <HiOutlineChatAlt2 size={24} />
        </motion.button>

        <motion.a
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          aria-label="Call us"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.7, type: "spring", stiffness: 260 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-charcoal text-gold shadow-lg shadow-black/40"
        >
          <HiOutlinePhone size={24} />
        </motion.a>
      </div>
    </>
  );
}
