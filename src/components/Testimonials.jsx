import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { TESTIMONIALS } from "../data/content";
import Reveal from "./ui/Reveal";

function getPageItems(pageIndex) {
  const start = pageIndex * 2;
  const pair = TESTIMONIALS.slice(start, start + 2);
  if (pair.length === 2) return pair;
  if (pair.length === 1) return [pair[0], TESTIMONIALS[0]];
  return TESTIMONIALS.slice(0, 2);
}

const PAGE_COUNT = Math.ceil(TESTIMONIALS.length / 2);

export default function Testimonials() {
  const [page, setPage] = useState(0);

  const next = useCallback(
    () => setPage((p) => (p + 1) % PAGE_COUNT),
    []
  );

  const prev = useCallback(
    () => setPage((p) => (p - 1 + PAGE_COUNT) % PAGE_COUNT),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const items = getPageItems(page);

  return (
    <section id="testimonials" className="section-luxury bg-white">
      <div className="container-luxury">
        <Reveal className="mb-12 max-w-xl md:mb-16">
          <span className="text-gold-label text-[10px] uppercase">Resident Stories</span>
          <div className="gold-line my-6" />
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl md:text-5xl">
            Voices of Vora
          </h2>
        </Reveal>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
              >
                {items.map((item) => (
                  <blockquote
                    key={item.name}
                    className="flex h-full flex-col rounded-sm border border-charcoal/8 bg-[#ececec] px-7 py-10 sm:px-9 sm:py-12"
                  >
                    <span
                      className="font-display text-5xl leading-none text-gold-bright/40 select-none"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <p className="mt-4 flex-1 text-base font-medium leading-relaxed text-charcoal sm:text-lg">
                      {item.quote}
                    </p>
                    <footer className="mt-8 border-t border-charcoal/10 pt-6">
                      <cite className="not-italic">
                        <span className="text-sm font-bold text-charcoal">{item.name}</span>
                        <span className="mt-1 block text-xs font-semibold text-charcoal/75">
                          {item.role}
                        </span>
                      </cite>
                    </footer>
                  </blockquote>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center border border-charcoal/15 text-charcoal transition-colors hover:border-blue hover:text-blue"
            >
              <HiOutlineChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <div className="flex gap-3">
              {Array.from({ length: PAGE_COUNT }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === page ? "true" : undefined}
                  className={`h-px transition-all duration-700 ${
                    i === page ? "w-12 bg-blue" : "w-6 bg-charcoal/20 hover:bg-gold-bright/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center border border-charcoal/15 text-charcoal transition-colors hover:border-blue hover:text-blue"
            >
              <HiOutlineChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
