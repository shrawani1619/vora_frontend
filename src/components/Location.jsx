import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineGlobeAlt,
  HiOutlineShoppingBag,
  HiOutlineHeart,
} from "react-icons/hi";
import { LOCATION_POINTS } from "../data/content";
import Reveal from "./ui/Reveal";

const ICONS = {
  school: HiOutlineAcademicCap,
  hospital: HiOutlineHeart,
  it: HiOutlineOfficeBuilding,
  metro: HiOutlineLocationMarker,
  airport: HiOutlineGlobeAlt,
  mall: HiOutlineShoppingBag,
};

export default function Location() {
  return (
    <section id="location" className="section-luxury bg-warm-white">
      <div className="container-luxury">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-gold-label text-[10px] uppercase">Connectivity</span>
            <div className="gold-line my-6" />
            <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl md:text-5xl">
              Location Advantages
            </h2>
            <p className="mt-6 text-sm font-medium leading-[1.85] text-charcoal/85 sm:text-base">
              Nestled in Hyderabad&apos;s Financial District — minutes from global workplaces,
              premier schools, and luxury retail.
            </p>

            <div className="relative mt-10 aspect-[4/3] overflow-hidden border border-charcoal/8 sm:mt-12">
              <iframe
                title="Location map"
                src="https://maps.google.com/maps?q=Financial+District+Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full grayscale contrast-[0.9] opacity-90"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[27px] hidden w-px bg-charcoal/10 sm:block" />
            <div className="space-y-0">
              {LOCATION_POINTS.map((point, i) => {
                const Icon = ICONS[point.icon];
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative flex gap-6 border-b border-charcoal/8 py-8 sm:gap-8 sm:py-10"
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-charcoal/10 bg-white transition-colors duration-700 group-hover:border-blue">
                      <Icon className="h-5 w-5 text-blue" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-charcoal/75">
                        {point.distance} · {point.time}
                      </p>
                      <h3 className="font-display mt-2 text-xl font-semibold text-charcoal sm:text-2xl">
                        {point.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
