import { useEffect, useState } from "react";

const FALLBACK =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=90";

export default function LazyImage({ src, alt, className = "", imgClassName = "", ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-beige transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imgSrc !== FALLBACK) {
            setImgSrc(FALLBACK);
            setLoaded(false);
          }
        }}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
