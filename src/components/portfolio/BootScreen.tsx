import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const steps = ["booting pixels", "loading skills", "spawning quests", "welcome aboard"];

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return Math.min(100, p + Math.round(3 + Math.random() * 9));
      });
    }, 90);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const id = window.setTimeout(() => {
      setVisible(false);
      onDone();
    }, 700);
    return () => window.clearTimeout(id);
  }, [progress, onDone]);

  const filled = Math.round(progress / 10);
  const label = progress >= 100 ? steps[3] : steps[Math.min(2, Math.floor(progress / 40))];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-6"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          role="status"
          aria-live="polite"
        >
          <div className="w-full max-w-md text-center">
            <motion.p
              className="font-pixel text-[11px] leading-relaxed text-gradient sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {progress >= 100 ? "WELCOME ABOARD!" : "LOADING PORTFOLIO..."}
            </motion.p>

            <div className="mt-8 font-mono text-lg tracking-[0.35em] text-primary sm:text-2xl">
              {"█".repeat(filled)}
              <span className="text-muted-foreground">{"░".repeat(10 - filled)}</span>
            </div>

            <p className="mt-4 font-mono text-sm text-muted-foreground">{progress}%</p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
