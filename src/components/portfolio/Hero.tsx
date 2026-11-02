import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { Typewriter } from "./Typewriter";
import profileAsset from "@/assets/profile.png.asset.json";

const codeLines = [
  { text: "const dev = {", color: "text-accent" },
  { text: "  name: 'Aiswarya M J',", color: "text-foreground" },
  { text: "  role: 'CSE Student',", color: "text-foreground" },
  { text: "  stack: ['Python','Java','C'],", color: "text-primary" },
  { text: "  learning: ['DSA','Networks'],", color: "text-primary" },
  { text: "  status: 'building & exploring',", color: "text-foreground" },
  { text: "};", color: "text-accent" },
];

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-5 pb-24 pt-36 sm:pt-44">
      <div className="grid items-center gap-12 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto lg:mx-0"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full opacity-60 blur-2xl [background-image:var(--gradient-hero)]" />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border border-[var(--glass-border)] bg-surface-2 sm:h-44 sm:w-44">
              <img
                src={profileAsset.url}
                alt="Aiswarya M J profile photo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Terminal size={13} className="text-accent" /> open to internships · 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-6 font-pixel text-2xl leading-[1.5] text-gradient sm:text-4xl"
          >
            Aiswarya M J
          </motion.h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg lg:mx-0">
            <Typewriter text="Engineering student passionate about evolving tech and ready to explore." />
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <MagneticButton href="#contact" variant="sun">
              <Mail size={16} /> Contact Me
            </MagneticButton>
            <MagneticButton href="https://github.com/aiswaryamj17-collab" variant="ghost">
              <Github size={16} /> GitHub
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/aiswarya-m-j-421477411" variant="ghost">
              <Linkedin size={16} /> LinkedIn
            </MagneticButton>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:mx-0 lg:w-[22rem]"
        >
          <motion.div
            whileHover={{ rotateX: -6, rotateY: 8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="glass rounded-3xl p-4 [transform-style:preserve-3d]"
          >
            <div className="flex items-center gap-1.5 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-sun" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">portfolio.ts</span>
            </div>
            <pre className="overflow-x-auto rounded-2xl bg-background/50 p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
              {codeLines.map((line, i) => (
                <motion.div
                  key={line.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className={line.color}
                >
                  {line.text}
                </motion.div>
              ))}
            </pre>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["build", "learn", "ship"].map((t, i) => (
                <motion.div
                  key={t}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="pixel-corners bg-surface-2 py-2 text-center font-pixel text-[8px] text-muted-foreground"
                >
                  {t}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-20 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">scroll</span>
        <ArrowDown size={16} aria-hidden />
      </motion.div>
    </section>
  );
}
