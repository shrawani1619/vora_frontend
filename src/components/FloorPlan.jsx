import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { FLOOR_PLANS } from "../data/content";
import LazyImage from "./ui/LazyImage";

function usePerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

function SiteKey() {
  return (
    <div
      className="absolute top-3 right-3 w-14 border border-charcoal/15 bg-white/90 p-1.5 sm:top-4 sm:right-4 sm:w-16"
      aria-hidden
    >
      <div className="grid grid-cols-2 gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`aspect-square bg-charcoal/10 ${i === 1 ? "bg-blue/80" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function FloorPlan() {
  const perView = usePerView();
  const maxIndex = Math.max(0, FLOOR_PLANS.length - perView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );
  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );

  const slidePercent = 100 / perView;

  return (
    <section id="floor-plans" className="section-luxury !pt-12 bg-white sm:!pt-14 md:!pt-16">
      <div className="container-luxury">
        <h2 className="font-display text-center text-3xl font-semibold tracking-[0.12em] text-charcoal uppercase sm:text-4xl md:text-5xl">
          Floor Plans
        </h2>

        <div className="mt-12 md:mt-16">
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous floor plans"
              className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-charcoal/20 bg-white text-charcoal shadow-sm transition-all hover:border-blue hover:bg-blue hover:text-white sm:h-12 sm:w-12"
            >
              <HiOutlineChevronLeft size={24} strokeWidth={2} />
            </button>

            <div className="min-w-0 flex-1 overflow-hidden">
              <motion.div
                animate={{ x: `-${index * slidePercent}%` }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                {FLOOR_PLANS.map((plan) => (
                  <article
                    key={plan.id}
                    className="w-full shrink-0 px-2 sm:px-3"
                    style={{ flexBasis: `${slidePercent}%` }}
                  >
                    <div className="relative aspect-[4/3] bg-beige p-4 sm:p-6">
                      <LazyImage
                        src={plan.image}
                        alt={plan.title}
                        className="h-full w-full"
                        imgClassName="object-contain object-center"
                      />
                      <SiteKey />
                    </div>
                    <div className="mt-6 px-1 text-center">
                      <p className="text-base font-bold leading-snug text-charcoal uppercase sm:text-lg">
                        {plan.title}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-charcoal sm:text-base">
                        {plan.subtitle}
                      </p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next floor plans"
              className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-charcoal/20 bg-white text-charcoal shadow-sm transition-all hover:border-blue hover:bg-blue hover:text-white sm:h-12 sm:w-12"
            >
              <HiOutlineChevronRight size={24} strokeWidth={2} />
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-px transition-all duration-500 ${
                  i === index ? "w-10 bg-blue" : "w-5 bg-charcoal/20 hover:bg-charcoal/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
