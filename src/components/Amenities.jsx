import { motion } from "framer-motion";
import { AMENITIES } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import LazyImage from "./ui/LazyImage";

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-charcoal-light">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <SectionHeading
          eyebrow="World-Class Living"
          title="Curated Amenities"
          subtitle="An exclusive collection of lifestyle amenities designed for wellness, recreation, and community."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5"
        >
          {AMENITIES.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-sm"
            >
              <LazyImage src={item.image} alt={item.name} className="h-full w-full" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"
                whileHover={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)" }}
              />
              <motion.div
                className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-8" />
                <h3 className="font-display mt-2 text-base text-white md:text-lg">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
