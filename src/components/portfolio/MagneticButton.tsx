import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "sun";
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });
  const rotate = useTransform(sx, [-20, 20], [-3, 3]);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 22);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 16);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors",
    variant === "primary" &&
      "text-primary-foreground shadow-[var(--shadow-glow)] [background-image:var(--gradient-hero)]",
    variant === "sun" && "text-accent-foreground [background-image:var(--gradient-sun)]",
    variant === "ghost" && "glass text-foreground hover:bg-secondary",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 z-0 scale-0 rounded-full bg-foreground/15 transition-transform duration-500 group-active:scale-150" />
    </>
  );

  const motionProps = {
    style: { x: sx, y: sy, rotate },
    onMouseMove: handleMove,
    onMouseLeave: reset,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: styles,
    "aria-label": ariaLabel,
  } as const;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto");
    return (
      <motion.a
        ref={ref as never}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as never} type="button" onClick={onClick} {...motionProps}>
      {inner}
    </motion.button>
  );
}
