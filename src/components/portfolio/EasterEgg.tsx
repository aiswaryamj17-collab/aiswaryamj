import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let index = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === SEQUENCE[index]) {
        index += 1;
        if (index === SEQUENCE.length) {
          index = 0;
          setUnlocked(true);
        }
      } else {
        index = key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    const id = window.setTimeout(() => setUnlocked(false), 5000);
    return () => window.clearTimeout(id);
  }, [unlocked]);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="glass fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-3xl px-6 py-4 text-center"
          role="status"
        >
          <p className="font-pixel text-[10px] text-gradient">ACHIEVEMENT UNLOCKED</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Secret found — curiosity is the best engineering skill. Let&apos;s build something.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
