import { motion } from "framer-motion";
import { STRIP_HIGHLIGHTS } from "../data/content";
import HighlightIcon from "./ui/HighlightIcon";
import Reveal from "./ui/Reveal";

export default function ProjectHighlights() {
  return (
    <section id="highlights" className="section-luxury overflow-hidden bg-beige">
      <div className="container-luxury">
        <Reveal className="mb-14 max-w-xl md:mb-20">
          <span className="text-gold-label text-[10px] uppercase">Project Highlights</span>
          <div className="gold-line my-6" />
          <h2 className="font-display text-3xl font-semibold leading-[1.1] text-charcoal sm:text-4xl md:text-5xl">
            Crafted for Those Who Expect More
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {STRIP_HIGHLIGHTS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.5 } }}
              className="glass-panel group flex h-full flex-col p-8 sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-charcoal/8 bg-white/80 transition-colors duration-700 group-hover:border-blue/20 group-hover:bg-blue/5">
                <HighlightIcon
                  name={item.icon}
                  className="h-6 w-6 text-blue transition-colors duration-700 group-hover:text-gold-bright"
                />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-charcoal sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-charcoal/85">{item.desc}</p>
              <div className="mt-6 h-px w-0 bg-gold-bright/70 transition-all duration-700 group-hover:w-16" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
