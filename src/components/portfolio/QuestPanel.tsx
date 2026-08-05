import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Check, Gamepad2, Sparkles, Swords } from "lucide-react";
import { Reveal } from "./Reveal";

const unlocked = ["Python", "Java", "HTML", "CSS", "SQL", "Figma", "VS Code"];
const XP = 45;

export function QuestPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [xp, setXp] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      setXp((v) => (v >= XP ? XP : Math.min(XP, v + 1)));
      if (frame > 80) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16" ref={ref}>
      <Reveal>
        <div className="glass grid gap-6 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl [background-image:var(--gradient-hero)]">
                <Gamepad2 size={20} className="text-primary-foreground" />
              </span>
              <div className="min-w-0">
                <p className="font-pixel text-[10px] text-sun">LEVEL 2</p>
                <p className="truncate text-sm text-muted-foreground">Computer Science Student</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>XP</span>
                <span className="font-mono text-foreground">{xp}%</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  className="h-full rounded-full [background-image:var(--gradient-hero)]"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${XP}%` } : {}}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-surface-2/60 p-5">
            <p className="flex items-center gap-2 font-pixel text-[9px] text-accent">
              <Swords size={14} /> CURRENT QUEST
            </p>
            <p className="mt-4 text-lg font-semibold leading-snug">Exploring DSA &amp; Computer Networks</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Grinding data structures by day, packet routing by night.
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 font-pixel text-[9px] text-sun">
              <Sparkles size={14} /> UNLOCKED SKILLS
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {unlocked.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-1.5 rounded-full border border-[var(--glass-border)] bg-surface-2 px-3 py-1.5 text-xs"
                >
                  <Check size={12} className="text-accent" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
