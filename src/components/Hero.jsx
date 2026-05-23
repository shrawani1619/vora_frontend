import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import { HERO_STATS } from "../data/content";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100dvh] overflow-hidden sm:min-h-[700px]">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={HERO_IMAGE}
          alt="Luxury residential tower at dusk"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_75%)]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-[100dvh] flex-col px-4 sm:px-5 md:px-10 lg:px-16"
      >
        {/* Offset for fixed navbar */}
        <div className="h-20 shrink-0 sm:h-24 md:h-32 lg:h-36" aria-hidden="true" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center pb-28 sm:pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-4 inline-block text-[10px] tracking-[0.3em] uppercase text-gold sm:mb-6 sm:text-xs sm:tracking-[0.4em]">
              Vora Signature Residences
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-4xl text-3xl leading-[1.12] font-light text-white sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Experience Luxury Living With{" "}
            <span className="gold-gradient-text italic">Vora Realtors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 sm:mt-8 sm:text-lg md:text-xl"
          >
            Premium residences crafted for modern lifestyles — where architectural
            excellence meets everyday elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4"
          >
            <a href="#enquiry" className="btn-primary btn-mobile-full">
              Book Site Visit
            </a>
            <a href="#floor-plans" className="btn-outline btn-mobile-full">
              Download Brochure
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-3 sm:gap-6 sm:pt-10 md:mt-28"
          >
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="glass-card rounded-sm p-4 sm:p-6"
              >
                <p className="font-display text-2xl text-gold sm:text-3xl md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-white/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-gold sm:bottom-10 sm:flex"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Discover</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <HiOutlineArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
