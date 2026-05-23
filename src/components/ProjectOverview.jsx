import { motion } from "framer-motion";
import { OVERVIEW_STATS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import SectionHeading from "./ui/SectionHeading";

function StatCard({ stat, index, isActive }) {
  const count = useAnimatedCounter(
    stat.value,
    2200,
    isActive,
    stat.decimals || 0
  );

  const display =
    stat.decimals > 0
      ? count.toFixed(stat.decimals)
      : stat.suffix === "+"
        ? `${count}+`
        : stat.suffix === "%"
          ? `${count}%`
          : stat.suffix?.includes("sq")
            ? count.toLocaleString("en-IN")
            : count;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card group relative overflow-hidden rounded-sm p-5 text-center transition-all duration-500 hover:border-gold/30 sm:p-6 md:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display relative text-2xl text-gold sm:text-3xl md:text-5xl lg:text-6xl">
        {display}
        {stat.suffix && !["+", "%"].includes(stat.suffix) && stat.suffix.includes("sq") && (
          <span className="text-lg text-gold/70">{stat.suffix}</span>
        )}
        {stat.suffix === "%" && !String(display).includes("%") && "%"}
      </p>
      <p className="relative mt-3 text-xs tracking-[0.25em] uppercase text-white/50">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function ProjectOverview() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="overview" className="section-padding relative bg-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 md:bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=60)",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/90" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Development"
          title="Project Overview"
          subtitle="A landmark address spanning 8.5 acres of meticulously planned luxury living."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6">
          {OVERVIEW_STATS.map((stat, i) => (
            <StatCard key={stat.key} stat={stat} index={i} isActive={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
