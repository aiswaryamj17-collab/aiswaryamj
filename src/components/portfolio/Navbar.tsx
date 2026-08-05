import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "communities", label: "Communities" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left [background-image:var(--gradient-hero)]"
        style={{ scaleX: progress }}
      />

      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
        <nav
          className={cn(
            "glass flex w-full max-w-4xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500",
            scrolled && "bg-[var(--glass-bg)]/60 py-1.5 shadow-none backdrop-blur-2xl",
          )}
          aria-label="Primary"
        >
          <button
            onClick={() => go("home")}
            className="flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 font-pixel text-[10px] text-gradient"
          >
            AMJ
          </button>

          <ul className="hidden min-w-0 items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    active === l.id && "text-foreground",
                  )}
                  aria-current={active === l.id ? "page" : undefined}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1">
            <motion.button
              whileHover={{ rotate: 20, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLight((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            >
              {light ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-20 z-40 md:hidden"
        >
          <ul className="glass grid gap-1 rounded-3xl p-3">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={cn(
                    "w-full rounded-2xl px-4 py-2.5 text-left text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
                    active === l.id && "bg-secondary text-foreground",
                  )}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
