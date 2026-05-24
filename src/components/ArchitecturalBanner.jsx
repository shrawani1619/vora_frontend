import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./ui/Reveal";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=92";

export default function ArchitecturalBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section ref={ref} className="relative min-h-[70vh] overflow-hidden sm:min-h-[80vh]">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={BANNER_IMAGE} alt="" className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

      <div className="relative z-10 flex min-h-[70vh] items-center sm:min-h-[80vh]">
        <div className="container-luxury px-6 sm:px-10 lg:px-20">
          <Reveal className="max-w-lg">
            <span className="text-gold-label text-[10px] uppercase">Architecture</span>
            <div className="gold-line my-6" />
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
              Three-Sided
              <br />
              Open Living
            </h2>
            <p className="mt-6 text-sm font-medium leading-[1.85] text-charcoal/85 sm:text-base">
              Homes designed to capture light, ventilation, and panoramic views — a
              sustainable vision woven into every floor plate.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
