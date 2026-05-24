import Reveal from "./ui/Reveal";
import LazyImage from "./ui/LazyImage";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=92";

export default function About() {
  return (
    <section id="about" className="section-luxury bg-white">
      <div className="container-luxury">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:pt-8">
            <span className="text-gold-label text-xs uppercase">The Vision</span>
            <div className="gold-line my-6" />
            <h2 className="font-display text-3xl font-semibold leading-[1.1] text-charcoal sm:text-4xl md:text-5xl">
              Where Architecture
              <br />
              Becomes Home
            </h2>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="space-y-5">
              <p className="text-sm font-medium leading-[1.85] text-charcoal/90 sm:text-base">
                Vora Signature Residences represents a new chapter in Hyderabad&apos;s luxury
                skyline — a low-density enclave where contemporary design meets timeless
                refinement across 8.5 acres of curated living.
              </p>
              <p className="text-sm font-medium leading-[1.85] text-charcoal/90 sm:text-base">
                Conceived by award-winning architects, each tower is defined by clean lines,
                three-sided openness, and homes that breathe with nature. This is not
                construction — it is craftsmanship at the scale of landmark living.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px flex-1 max-w-[80px] bg-gold-bright/60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal">Est. 2010</span>
            </div>
          </div>
        </div>

        <Reveal delay={0.2} className="mt-16 md:mt-20">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold-bright/20 md:-inset-6" />
            <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
              <LazyImage
                src={ABOUT_IMAGE}
                alt="Vora Signature architecture"
                className="h-full w-full"
                imgClassName="transition-transform duration-[2s] ease-out hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
