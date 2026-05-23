import { motion } from "framer-motion";
import { HIGHLIGHTS } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import HighlightIcon from "./ui/HighlightIcon";

export default function ProjectHighlights() {
  return (
    <section id="highlights" className="section-padding bg-charcoal-light">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Project Highlights"
          subtitle="Every element of Vora Signature Residences is designed to elevate your everyday living experience."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card group relative overflow-hidden rounded-sm p-5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-gold/5 sm:p-6 md:p-8"
            >
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-gold/30 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-charcoal">
                <HighlightIcon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-white/50">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
