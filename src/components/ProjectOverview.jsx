import { OVERVIEW_STATS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import Reveal from "./ui/Reveal";

function Stat({ stat, active }) {
  const count = useAnimatedCounter(stat.value ?? 0, 2400, active && !stat.static, stat.decimals || 0);
  let display = stat.static;
  if (!stat.static) {
    if (stat.decimals > 0) display = `${count.toFixed(stat.decimals)}${stat.suffix || ""}`;
    else if (stat.suffix === "+") display = `${count}+`;
    else if (stat.suffix === "%") display = `${count}%`;
    else display = `${count}${stat.suffix || ""}`;
  }
  return (
    <div className="rounded-sm border border-charcoal/8 bg-beige px-6 py-6 sm:px-7 sm:py-7">
      <p className="font-display text-2xl font-semibold text-blue sm:text-3xl">{display}</p>
      <p className="mt-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-charcoal/80">
        {stat.label}
      </p>
    </div>
  );
}

export default function ProjectOverview() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="overview" className="section-luxury !pt-12 border-y border-charcoal/6 bg-white sm:!pt-14 md:!pt-16">
      <div className="container-luxury">
        <Reveal className="mb-12 max-w-xl md:mb-16">
          <span className="text-gold-label text-[10px] uppercase">The Development</span>
          <div className="gold-line my-6" />
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl md:text-5xl">
            Project at a Glance
          </h2>
        </Reveal>

        <div ref={ref} className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {OVERVIEW_STATS.map((stat) => (
            <Stat key={stat.key} stat={stat} active={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
