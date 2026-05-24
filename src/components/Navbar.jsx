import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../data/content";
import { useNavbarScroll } from "../hooks/useScrollReveal";
import Logo from "./ui/Logo";

export default function Navbar() {
  const scrolled = useNavbarScroll(40);
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 border-b border-charcoal/8 bg-white/98 text-charcoal shadow-[0_8px_40px_rgba(13,71,161,0.05)] backdrop-blur-md transition-all duration-500 ${
          scrolled ? "py-4" : "py-5 md:py-6"
        }`}
      >
        <nav className="flex min-h-[4.5rem] w-full items-center gap-5 pl-5 pr-5 sm:min-h-[5rem] sm:pl-8 sm:pr-8 lg:gap-10 lg:pl-10 lg:pr-12 xl:pl-12 xl:pr-14">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); go("#hero"); }}
            className="relative z-10 shrink-0"
          >
            <Logo className="h-14 w-auto sm:h-16 md:h-[4.5rem] lg:h-[5rem]" />
          </a>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-8 lg:flex xl:gap-10 2xl:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="shrink-0">
                <button
                  onClick={() => go(link.href)}
                  className="group relative whitespace-nowrap px-2 py-2 text-xs font-bold tracking-[0.16em] uppercase text-charcoal transition-colors duration-500 hover:text-blue xl:text-[13px] xl:tracking-[0.18em]"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue transition-all duration-700 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-4 pl-4 lg:ml-0 lg:pl-8 xl:pl-10">
            <a
              href="#enquiry"
              onClick={(e) => { e.preventDefault(); go("#enquiry"); }}
              className="btn-luxury-primary hidden !px-8 !py-4 lg:inline-flex"
            >
              Book Visit
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-charcoal lg:hidden"
              aria-label="Menu"
            >
              {open ? <HiX size={26} strokeWidth={1} /> : <HiOutlineMenuAlt3 size={26} strokeWidth={1} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-warm-white/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-10">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.8 }}
                  onClick={() => go(link.href)}
                  className="font-display border-b border-charcoal/8 py-5 text-left text-3xl font-bold text-charcoal"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="#enquiry"
                onClick={(e) => { e.preventDefault(); go("#enquiry"); }}
                className="btn-luxury-primary btn-luxury-full mt-10 text-center"
              >
                Book Site Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
