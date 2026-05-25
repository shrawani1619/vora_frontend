import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/content";
import { useNavbarScroll } from "../hooks/useScrollReveal";
import Logo from "./ui/Logo";

export default function Navbar() {
  const scrolled = useNavbarScroll(40);

  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass =
    "group relative shrink-0 whitespace-nowrap px-2 py-2 text-[10px] font-bold tracking-[0.14em] uppercase text-charcoal transition-colors duration-500 hover:text-blue sm:text-xs sm:tracking-[0.16em] lg:text-xs lg:tracking-[0.16em] xl:text-[13px] xl:tracking-[0.18em]";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 border-b border-charcoal/8 bg-white/98 text-charcoal shadow-[0_8px_40px_rgba(13,71,161,0.05)] backdrop-blur-md transition-all duration-500 ${
        scrolled ? "py-3 lg:py-4" : "py-3 lg:py-5 xl:py-6"
      }`}
    >
      <nav className="flex w-full min-w-0 flex-col overflow-visible lg:block">
        {/* Logo + CTA */}
        <div className="flex min-h-[3.5rem] w-full items-center gap-4 px-4 sm:min-h-[4rem] sm:px-6 lg:min-h-[5rem] lg:gap-10 lg:px-10 xl:px-12">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              go("#hero");
            }}
            className="relative z-10 shrink-0"
          >
            <Logo className="h-11 w-auto sm:h-14 md:h-16 lg:h-[4.5rem] xl:h-[5rem]" />
          </a>

          {/* Desktop links */}
          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-8 lg:flex xl:gap-10 2xl:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="shrink-0">
                <button type="button" onClick={() => go(link.href)} className={linkClass}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue transition-all duration-700 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <a
            href="#enquiry"
            onClick={(e) => {
              e.preventDefault();
              go("#enquiry");
            }}
            className="btn-luxury-primary ml-auto shrink-0 !px-5 !py-3 text-[9px] sm:!px-6 sm:!py-3.5 sm:text-[10px] lg:ml-0 lg:!px-8 lg:!py-4"
          >
            Book Visit
          </a>
        </div>

        {/* Mobile / tablet navbar links */}
        <div className="w-full min-w-0 border-t border-charcoal/6 lg:hidden">
          <div className="h-scroll" role="navigation" aria-label="Section navigation">
            <div className="h-scroll-inner gap-1.5 px-4 py-2 sm:gap-2 sm:px-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => go(link.href)}
                  className={`${linkClass} shrink-0 rounded-full border border-charcoal/10 bg-warm-white/80 px-3 py-1.5 hover:border-blue/40 sm:px-3.5 sm:py-2`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
