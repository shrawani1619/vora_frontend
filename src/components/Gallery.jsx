import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import LazyImage from "./ui/LazyImage";

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visual Journey"
          title="Gallery"
          subtitle="Step inside a world of refined interiors, breathtaking views, and architectural grandeur."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-sm lg:mb-5 ${
                img.tall ? "lg:mb-5" : ""
              }`}
            >
              <div className={`overflow-hidden ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <LazyImage
                  src={img.src}
                  alt={`Luxury residence gallery image ${i + 1}`}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <motion.div className="pointer-events-none absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/80 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-gold">
                  View Detail
                </span>
              </motion.div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
