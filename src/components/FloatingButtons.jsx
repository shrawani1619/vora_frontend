import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { CONTACT } from "../data/content";

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3 md:right-8 md:bottom-8">
      <motion.a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <FaWhatsapp size={24} />
      </motion.a>
      <motion.a
        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
        aria-label="Call"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white shadow-lg"
      >
        <HiOutlinePhone size={22} strokeWidth={1} />
      </motion.a>
    </div>
  );
}
