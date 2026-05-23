import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import LazyImage from "./ui/LazyImage";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-charcoal">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Redefining Luxury Real Estate"
          subtitle="Vora Realtors curates residences that transcend conventional living — blending timeless design with contemporary sophistication."
          align="left"
        />

        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 h-full w-full border border-gold/20" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <LazyImage
                src={ABOUT_IMAGE}
                alt="Modern luxury architecture exterior"
                className="h-full w-full"
              />
            </div>
            <div className="glass-card absolute -right-2 -bottom-3 p-4 sm:-right-4 sm:-bottom-4 sm:p-6 md:-right-8 md:p-8">
              <p className="font-display text-2xl text-gold sm:text-3xl md:text-4xl">15+</p>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-white/50">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed font-light text-white/70 sm:text-lg">
              At Vora Realtors, we believe luxury is not merely an aesthetic — it is an
              experience woven into every detail of your home. Our developments are conceived
              by award-winning architects and crafted with materials sourced from the world's
              finest suppliers.
            </p>
            <p className="leading-relaxed font-light text-white/50">
              From the moment you step into our sales gallery to the day you receive your keys,
              our concierge team ensures a seamless, white-glove journey. We partner with
              leading interior designers to offer bespoke fit-out packages tailored to your
              vision of home.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:gap-6">
              {[
                { label: "RERA Certified", value: "100%" },
                { label: "Customer Satisfaction", value: "98%" },
                { label: "Green Building", value: "IGBC Gold" },
                { label: "On-Time Delivery", value: "Track Record" },
              ].map((item) => (
                <div key={item.label} className="border-l border-gold/30 pl-4">
                  <p className="font-display text-xl text-white sm:text-2xl">{item.value}</p>
                  <p className="mt-1 text-xs tracking-wider uppercase text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <a href="#highlights" className="btn-outline mt-4 inline-flex">
              Explore Highlights
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
