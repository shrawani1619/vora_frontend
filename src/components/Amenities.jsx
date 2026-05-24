import { motion } from "framer-motion";
import { AMENITIES } from "../data/content";
import SectionHeading from "./ui/SectionHeading";

export default function Amenities() {
  return (
    <section id="amenities" className="section-luxury !pb-12 bg-warm-white sm:!pb-14 md:!pb-16">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Lifestyle"
          title="A Resort Within Your Residence"
          subtitle="World-class amenities curated with the sensibility of five-star hospitality."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {AMENITIES.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[240px] overflow-hidden sm:min-h-[260px]"
            >
              <div className="relative h-full min-h-[240px] overflow-hidden sm:min-h-[260px]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                  <div className="translate-y-4 transition-transform duration-700 group-hover:translate-y-0">
                    <div className="mb-4 h-px w-0 bg-gold-bright transition-all duration-700 group-hover:w-12" />
                    <h3
                      className={`font-display font-normal text-white ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
                    >
                      {item.name}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm font-light text-white/80 opacity-0 transition-all duration-700 group-hover:max-h-20 group-hover:opacity-100">
                      Exclusive to residents of Vora Signature
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
