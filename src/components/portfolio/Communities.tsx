import { motion } from "motion/react";
import { Award, Cpu, PenTool, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const badges = [
  {
    icon: Cpu,
    title: "IEEE Student Member",
    subtitle: "Technical community · events & camps",
    accent: "var(--blue)",
  },
  {
    icon: PenTool,
    title: "Designer's Club of MACE (DOM)",
    subtitle: "Design community · visual craft",
    accent: "var(--purple)",
  },
  {
    icon: Award,
    title: "Design Execom Member of ASME",
    subtitle: "ASME student community",
    accent: "var(--cyan)",
  },
];

export function Communities() {
  return (
    <section id="communities" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-20">
      <SectionHeading eyebrow="guilds joined" title="Communities" icon={<ShieldCheck size={12} />} />

      <div className="grid gap-5 sm:grid-cols-2">
        {badges.map((badge, i) => (
          <Reveal key={badge.title} direction="scale" delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className={`glass group relative h-full overflow-hidden rounded-[1.75rem] p-6 text-center ${
                i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""
              }`}
            >
              <span
                className="absolute inset-x-0 -top-24 h-40 opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                style={{ background: badge.accent }}
              />
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[var(--glass-border)] bg-surface-2"
                style={{ color: badge.accent }}
              >
                <badge.icon size={26} />
              </motion.span>
              <h3 className="relative mt-5 text-base font-semibold">{badge.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{badge.subtitle}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
