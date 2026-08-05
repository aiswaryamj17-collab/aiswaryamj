import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-5 pb-14 pt-6">
      <div className="glass flex flex-col items-center gap-4 rounded-[2rem] px-6 py-8 text-center">
        <div className="flex gap-1.5" aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.8, delay: i * 0.12, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-[2px]"
              style={{ background: i % 2 ? "var(--cyan)" : "var(--purple)" }}
            />
          ))}
        </div>
        <p className="font-pixel text-[9px] leading-relaxed text-muted-foreground">
          BUILT WITH <Heart size={10} className="inline text-sun" /> BY AISWARYA M J
        </p>
        <p className="text-xs text-muted-foreground">
          Kerala, India · Press <span className="font-mono text-foreground">↑↑↓↓←→←→BA</span> for a surprise
        </p>
      </div>
    </footer>
  );
}
