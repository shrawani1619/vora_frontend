import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 flex flex-col gap-3 sm:mb-14 sm:gap-4 md:mb-20 ${alignClass}`}
    >
      {eyebrow && (
        <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold sm:text-xs sm:tracking-[0.35em]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display max-w-3xl text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed font-light text-white/60 sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className={`mt-2 h-px w-16 bg-gradient-to-r from-gold to-transparent ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
