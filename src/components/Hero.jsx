import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import { HERO_STATS } from "../data/content";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2200&q=92&auto=format&fit=crop";

const cinematicEase = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100dvh] overflow-hidden bg-warm-white">
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 origin-center"
        aria-hidden
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-[115%] w-full object-cover object-[72%_center] sm:object-[68%_30%] lg:object-right lg:object-center"
          fetchPriority="high"
        />
      </motion.div>

      <div className="hero-cinematic-overlay absolute inset-0" aria-hidden />
      <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-56 sm:h-64" aria-hidden />

      <div className="relative z-10 flex min-h-[100dvh] flex-col">
        <motion.div
          style={{ y: textY, opacity: contentOpacity }}
          className="flex flex-1 flex-col"
        >
        <div className="h-32 sm:h-36 md:h-40" aria-hidden="true" />

        <div className="container-luxury flex flex-1 flex-col justify-center px-6 pb-8 sm:px-10 lg:px-20">
          <div className="max-w-[22rem] sm:max-w-md lg:max-w-[28rem]">
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.35, ease: cinematicEase }}
              className="text-gold-label mb-6 text-[10px] uppercase sm:mb-7"
            >
              Vora Signature Residences
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.55, ease: cinematicEase }}
              className="font-display text-[2.35rem] leading-[1.02] font-semibold tracking-[-0.02em] text-charcoal sm:text-5xl md:text-[3.35rem] lg:text-6xl xl:text-[4.25rem]"
            >
              Luxury Living
              <br />
              <span className="text-gradient-blue-gold">Crafted By Vora</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.85, ease: cinematicEase }}
              className="mt-7 max-w-[20rem] text-[0.95rem] font-semibold leading-[1.8] text-charcoal sm:mt-8 sm:max-w-sm sm:text-base"
            >
              An iconic residential experience designed for elevated lifestyles in
              Hyderabad&apos;s most prestigious address.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.05, ease: cinematicEase }}
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-6"
            >
              <a href="#enquiry" className="btn-hero-primary btn-luxury-full sm:w-auto">
                Book Site Visit
              </a>
              <a href="#floor-plans" className="btn-hero-outline btn-luxury-full sm:w-auto">
                Download Brochure
              </a>
            </motion.div>
          </div>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.25, ease: cinematicEase }}
          className="relative z-20 container-luxury px-6 pb-10 sm:px-10 lg:px-20"
        >
          <div className="hero-stats-glass overflow-hidden rounded-sm">
            <div className="grid grid-cols-1 divide-y divide-charcoal/6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.35 + i * 0.1, ease: cinematicEase }}
                  className="px-8 py-7 sm:px-10 sm:py-8"
                >
                  <p className="font-display text-3xl font-semibold leading-none text-blue md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[10px] font-bold tracking-[0.22em] text-charcoal uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-charcoal/70">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        >
          <HiOutlineArrowDown size={18} className="text-charcoal/80" strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
