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
import SectionHeading from "./ui/SectionHeading";

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
    <section id="location" className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Connectivity"
          title="Location Advantages"
          subtitle="Nestled in the Financial District — Hyderabad's most dynamic address for business, leisure, and living."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-10 aspect-[4/3] overflow-hidden rounded-sm border border-white/5 sm:mb-14 sm:aspect-[16/9] md:mb-16 md:aspect-[16/7]"
        >
          <iframe
            title="Vora Signature Residences Location"
            src="https://maps.google.com/maps?q=Financial+District+Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full grayscale contrast-125 invert"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 bg-charcoal/30" />
          <div className="glass-card absolute right-3 bottom-3 left-3 max-w-none p-4 sm:right-auto sm:bottom-6 sm:left-6 sm:max-w-xs sm:p-6 md:bottom-8 md:left-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold">Project Address</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Vora Signature Residences, Financial District, Gachibowli, Hyderabad – 500032
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-8 right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block"
          />

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LOCATION_POINTS.map((point, i) => {
              const Icon = ICONS[point.icon];
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card group relative rounded-sm p-5 transition-all duration-500 hover:border-gold/20 sm:p-6 md:p-8"
                >
                  <motion.div
                    className="absolute -top-3 left-8 hidden h-6 w-6 items-center justify-center rounded-full border border-gold bg-charcoal md:flex"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="text-[10px] text-gold">{i + 1}</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 flex h-12 w-12 items-center justify-center border border-gold/30 text-gold"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  <h3 className="font-display text-xl text-white">{point.title}</h3>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm text-gold">{point.distance}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span className="text-sm text-white/50">{point.time} drive</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
