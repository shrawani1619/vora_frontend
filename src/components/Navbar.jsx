import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../data/content";
import { useNavbarScroll } from "../hooks/useScrollReveal";
import Logo from "./ui/Logo";

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-charcoal/90 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center px-4 sm:px-5 md:px-10 lg:px-12 xl:px-16">
          <div className="flex min-w-0 flex-1 items-center">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#hero");
              }}
              className="group block shrink-0 transition-opacity duration-300 hover:opacity-90"
            >
              <Logo className="h-9 w-auto sm:h-11 md:h-12 lg:h-14" />
            </a>
          </div>

          <ul className="hidden shrink-0 items-center gap-5 xl:flex xl:gap-7 2xl:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="whitespace-nowrap px-1 text-[11px] tracking-[0.18em] uppercase text-white/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#enquiry");
              }}
              className="btn-primary hidden shrink-0 !px-6 !py-3 !text-xs xl:inline-flex"
            >
              Book Visit
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-white xl:hidden"
              aria-label="Toggle menu"
            >
              {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
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
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl xl:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="flex h-full flex-col justify-center overflow-y-auto px-6 py-24 sm:px-10"
            >
              <ul className="flex flex-col gap-5 sm:gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNav(link.href)}
                      className="font-display text-2xl text-white/90 transition-colors hover:text-gold sm:text-3xl"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#enquiry"
                onClick={(e) => { e.preventDefault(); handleNav("#enquiry"); }}
                className="btn-primary mt-12 w-full text-center"
              >
                Book Site Visit
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
