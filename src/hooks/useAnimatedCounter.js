import { useEffect, useState } from "react";

export function useAnimatedCounter(end, duration = 2000, isActive = false, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime = null;
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = eased * end;
      setCount(decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.floor(value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, isActive, decimals]);

  return count;
}
