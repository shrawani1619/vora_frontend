import { motion } from "framer-motion";
import { HiOutlineDownload, HiOutlineHome } from "react-icons/hi";
import { FLOOR_PLANS } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import LazyImage from "./ui/LazyImage";

export default function FloorPlan() {
  return (
    <section id="floor-plans" className="section-padding bg-charcoal-light">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <SectionHeading
          eyebrow="Your Space"
          title="Floor Plans"
          subtitle="Thoughtfully designed layouts that maximize natural light, ventilation, and livable space."
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FLOOR_PLANS.map((plan, i) => (
            <motion.article
              key={plan.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className={`glass-card group relative overflow-hidden rounded-sm transition-shadow duration-500 ${
                plan.featured
                  ? "border-gold/30 shadow-xl shadow-gold/5 md:-mt-4 md:mb-4"
                  : ""
              }`}
            >
              {plan.featured && (
                <motion.div className="absolute top-4 right-4 z-10 bg-gold px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-charcoal">
                  Most Popular
                </motion.div>
              )}

              <motion.div
                className="relative aspect-[4/3] overflow-hidden"
                whileHover="hover"
              >
                <LazyImage
                  src={plan.image}
                  alt={`${plan.type} floor plan interior`}
                  className="h-full w-full"
                />
                <motion.div
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                />
                <motion.div
                  className="absolute inset-0 bg-charcoal/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <HiOutlineHome className="h-16 w-16 text-gold/80" />
                </motion.div>
              </motion.div>

              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="font-display text-2xl text-white sm:text-3xl">{plan.type}</h3>
                <p className="mt-2 text-sm text-white/50">{plan.area}</p>
                <p className="mt-3 font-display text-xl text-gold sm:mt-4 sm:text-2xl">{plan.price}</p>

                <motion.div
                  className="mt-6 flex gap-6 border-t border-white/10 pt-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                    <p className="font-display text-2xl text-white">{plan.beds}</p>
                    <p className="text-[10px] tracking-wider uppercase text-white/40">Bedrooms</p>
                  </motion.div>
                  <div className="w-px bg-white/10" />
                  <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                    <p className="font-display text-2xl text-white">{plan.baths}</p>
                    <p className="text-[10px] tracking-wider uppercase text-white/40">Bathrooms</p>
                  </motion.div>
                </motion.div>

                <button className="btn-outline mt-8 w-full !text-xs group/btn">
                  <HiOutlineDownload className="transition-transform group-hover/btn:-translate-y-0.5" />
                  Download Plan
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
