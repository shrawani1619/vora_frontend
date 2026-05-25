import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChatAlt2, HiOutlinePhone } from "react-icons/hi";
import { CONTACT } from "../data/content";
import Chatbot from "./Chatbot";

export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3 md:right-8 md:bottom-8">
        <motion.button
          type="button"
          onClick={() => setChatOpen(true)}
          aria-label="Open chat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white shadow-[0_8px_28px_rgba(13,71,161,0.35)]"
        >
          <HiOutlineChatAlt2 size={24} strokeWidth={1.5} />
        </motion.button>

        <motion.a
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          aria-label="Call"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-white text-blue shadow-lg"
        >
          <HiOutlinePhone size={22} strokeWidth={1.5} />
        </motion.a>
      </div>

      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
