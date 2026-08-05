import { motion } from "motion/react";
import { CheckCircle2, Flag, Loader, Map } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stages = [
  {
    label: "Completed",
    icon: CheckCircle2,
    accent: "var(--cyan)",
    items: ["Python", "Java", "C", "HTML", "CSS", "SQL"],
    state: "done" as const,
  },
  {
    label: "Currently Learning",
    icon: Loader,
    accent: "var(--purple)",
    items: ["DSA", "Computer Networks"],
    state: "active" as const,
  },
  {
    label: "Future Goals",
    icon: Flag,
    accent: "var(--sun)",
    items: ["Open Source", "Hackathons", "Full Stack", "AI", "Cloud"],
    state: "locked" as const,
  },
];

export function Roadmap() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="quest map"
        title="Achievement Roadmap"
        description="Three checkpoints on the way from first Hello World to shipping real systems."
        icon={<Map size={12} />}
      />

      <div className="relative grid gap-6 lg:grid-cols-3">
        <span
          aria-hidden
          className="absolute left-0 right-0 top-[86px] hidden h-[2px] [background-image:linear-gradient(to_right,var(--cyan),var(--purple),var(--sun))] lg:block"
        />
        {stages.map((stage, i) => (
          <Reveal key={stage.label} delay={i * 0.12}>
            <motion.div whileHover={{ y: -6 }} className="glass relative h-full rounded-[1.75rem] p-6">
              <span
                className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-[var(--glass-border)] bg-surface"
                style={{ color: stage.accent }}
              >
                <stage.icon size={20} />
              </span>
              <h3 className="mt-5 font-pixel text-[10px]" style={{ color: stage.accent }}>
                {stage.label.toUpperCase()}
              </h3>
              <ul className="mt-5 space-y-2">
                {stage.items.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.07 }}
                    className="pixel-corners flex items-center justify-between bg-surface-2/70 px-4 py-2.5 text-sm"
                  >
                    <span className={stage.state === "locked" ? "text-muted-foreground" : ""}>{item}</span>
                    <span className="font-mono text-xs" style={{ color: stage.accent }}>
                      {stage.state === "done" ? "✓" : stage.state === "active" ? "···" : "→"}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
