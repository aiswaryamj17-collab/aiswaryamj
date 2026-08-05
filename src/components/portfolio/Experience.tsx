import { motion } from "motion/react";
import { Award, Building2, Trophy, Users2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const entries = [
  {
    icon: Trophy,
    tag: "IEEE",
    text: "Participated in multiple IEEE competitions, technical events, and student camps, gaining exposure to teamwork, problem-solving, and emerging technologies.",
  },
  {
    icon: Building2,
    tag: "Campus",
    text: "Attended workshops and technical sessions organized by various clubs at Mar Athanasius College of Engineering.",
  },
  {
    icon: Users2,
    tag: "Inter-college",
    text: "Participated in technical and non-technical events conducted by different colleges, expanding learning and networking opportunities.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-20">
      <SectionHeading eyebrow="run history" title="Experience" icon={<Award size={12} />} />

      <div className="relative pl-8 sm:pl-12">
        <span
          aria-hidden
          className="absolute left-[11px] top-2 h-full w-[2px] rounded-full [background-image:linear-gradient(to_bottom,var(--cyan),var(--purple),transparent)] sm:left-[15px]"
        />
        <div className="space-y-6">
          {entries.map((entry, i) => (
            <Reveal key={entry.tag} direction="left" delay={i * 0.1}>
              <div className="relative">
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
                  className="absolute -left-8 top-6 grid h-6 w-6 place-items-center rounded-full border border-[var(--glass-border)] bg-surface sm:-left-12"
                >
                  <entry.icon size={12} className="text-sun" />
                </motion.span>
                <motion.div whileHover={{ y: -4, rotate: -0.4 }} className="glass rounded-3xl p-6">
                  <p className="font-pixel text-[9px] text-accent">{entry.tag.toUpperCase()}</p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {entry.text}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
