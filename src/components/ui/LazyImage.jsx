import { useState } from "react";

export default function LazyImage({ src, alt, className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-charcoal-soft transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}
