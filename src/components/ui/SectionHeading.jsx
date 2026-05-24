import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  spacing = "default",
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "mx-auto max-w-3xl text-center items-center"
      : "text-left items-start max-w-2xl";

  const spacingClass =
    spacing === "tight" ? "mb-10 sm:mb-12" : "mb-14 sm:mb-16 md:mb-20";

  return (
    <Reveal className={`flex flex-col gap-4 ${spacingClass} ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-gold-label text-[10px] uppercase">{eyebrow}</span>
      )}
      <div className="gold-line" />
      <h2
        className={`font-display text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.25rem] ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-lg text-sm font-medium leading-relaxed sm:text-base ${
            light ? "text-white/90" : "text-charcoal/85"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
