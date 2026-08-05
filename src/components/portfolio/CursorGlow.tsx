import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 150, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen blur-3xl md:block"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, color-mix(in oklab, var(--purple) 55%, transparent), transparent 62%)",
      }}
    />
  );
}
