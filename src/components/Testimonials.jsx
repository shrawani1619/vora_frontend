import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { TESTIMONIALS } from "../data/content";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-charcoal-light">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resident Stories"
          title="What Our Clients Say"
          subtitle="Hear from homeowners who chose Vora Realtors for their luxury living journey."
        />

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-sm p-6 sm:p-8 md:p-14"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-gold" />
                ))}
              </div>

              <blockquote className="font-display text-lg leading-relaxed font-light text-white/90 sm:text-xl md:text-2xl lg:text-3xl">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>

              <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="flex h-14 w-14 items-center justify-center border border-gold/30 bg-gold/10">
                  <span className="font-display text-xl text-gold">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="font-medium text-white">{TESTIMONIALS[current].name}</p>
                  <p className="text-sm text-white/50">{TESTIMONIALS[current].role}</p>
                </motion.div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1 transition-all duration-500 ${
                  i === current ? "w-10 bg-gold" : "w-4 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
