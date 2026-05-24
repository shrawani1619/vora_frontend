import { motion } from "framer-motion";
import { GALLERY_IMAGES, GALLERY_SECTION } from "../data/content";
import LazyImage from "./ui/LazyImage";
import Reveal from "./ui/Reveal";

const ease = [0.22, 1, 0.36, 1];

const frameStyles = {
  hero: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[min(72vh,680px)]",
  portrait: "aspect-[4/5] sm:aspect-[5/6]",
  wide: "aspect-[16/10] sm:aspect-[2/1]",
};

function GalleryFrame({
  src,
  alt,
  caption,
  variant = "portrait",
  className = "",
  delay = 0,
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay, ease }}
      className={`group relative overflow-hidden bg-[#e8e4dc] shadow-[0_20px_50px_rgba(30,30,30,0.08)] ${className}`}
    >
      <div className={`relative w-full ${frameStyles[variant] || frameStyles.portrait}`}>
        <LazyImage
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full"
          imgClassName="object-cover object-center transition-transform duration-[2.8s] ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/5 to-transparent" />
        {caption && (
          <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <span className="text-[10px] font-semibold tracking-[0.24em] text-white uppercase sm:text-[11px]">
              {caption}
            </span>
          </figcaption>
        )}
      </div>
    </motion.figure>
  );
}

export default function Gallery() {
  const { hero, support, accent } = GALLERY_IMAGES;

  return (
    <section id="gallery" className="overflow-hidden bg-beige py-24 sm:py-28 md:py-32 lg:py-36">
      <div className="mx-auto w-[90%] max-w-[1480px]">
        <header className="mb-12 border-b border-charcoal/10 pb-10 md:mb-16 md:pb-14 lg:mb-20">
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <p className="text-gold-label text-[10px] uppercase tracking-[0.32em]">
                {GALLERY_SECTION.eyebrow}
              </p>
              <div className="gold-line my-5 md:my-6" />
              <h2 className="font-display text-3xl font-semibold leading-[1.1] text-charcoal sm:text-4xl lg:text-5xl">
                {GALLERY_SECTION.title}
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="border-l-2 border-gold-bright/60 pl-6 text-sm font-medium leading-[1.85] text-charcoal sm:pl-8 sm:text-base">
                {GALLERY_SECTION.subtitle}
              </p>
            </Reveal>
          </div>
        </header>

        {/* Main editorial row */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          <div className="lg:col-span-7 lg:flex lg:flex-col xl:col-span-8">
            <GalleryFrame
              variant="hero"
              src={hero.src}
              alt={hero.alt}
              caption={hero.caption}
              className="h-full w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5 lg:grid-cols-1 lg:gap-6 xl:col-span-4">
            {support.map((img, i) => (
              <GalleryFrame
                key={img.caption}
                variant="portrait"
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                delay={0.08 + i * 0.06}
                className={i === 2 ? "col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </div>

        {/* Accent row */}
        <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-8">
          <GalleryFrame
            variant="wide"
            src={accent[0].src}
            alt={accent[0].alt}
            caption={accent[0].caption}
            delay={0.12}
            className="lg:col-span-8"
          />
          <GalleryFrame
            variant="portrait"
            src={accent[1].src}
            alt={accent[1].alt}
            caption={accent[1].caption}
            delay={0.18}
            className="lg:col-span-4"
          />
        </div>
      </div>
    </section>
  );
}
