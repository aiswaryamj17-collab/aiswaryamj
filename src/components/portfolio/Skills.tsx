import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import {
  Braces,
  Brush,
  Coffee,
  Database,
  FileCode2,
  Figma,
  Lightbulb,
  MessagesSquare,
  Palette,
  Puzzle,
  Repeat,
  Terminal,
  Users,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Skill = { name: string; icon: LucideIcon; level: number };

const groups: { title: string; accent: string; skills: Skill[] }[] = [
  {
    title: "Programming",
    accent: "var(--purple)",
    skills: [
      { name: "Python", icon: Braces, level: 80 },
      { name: "Java", icon: Coffee, level: 70 },
      { name: "C", icon: Terminal, level: 68 },
      { name: "HTML", icon: FileCode2, level: 85 },
      { name: "CSS", icon: Palette, level: 78 },
      { name: "SQL", icon: Database, level: 65 },
    ],
  },
  {
    title: "Tools",
    accent: "var(--cyan)",
    skills: [
      { name: "VS Code", icon: Terminal, level: 88 },
      { name: "Figma", icon: Figma, level: 72 },
      { name: "Canva", icon: Brush, level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    accent: "var(--sun)",
    skills: [
      { name: "Teamwork", icon: Users, level: 90 },
      { name: "Problem Solving", icon: Puzzle, level: 82 },
      { name: "Communication", icon: MessagesSquare, level: 85 },
      { name: "Leadership", icon: Crown, level: 75 },
      { name: "Creativity", icon: Lightbulb, level: 88 },
      { name: "Adaptability", icon: Repeat, level: 86 },
    ],
  },
];

function SkillCard({ skill, accent }: { skill: Skill; accent: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={{ scale: 1.04 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 700 }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-surface-2/70 p-4"
    >
      <span
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 32px -6px ${accent}`, border: `1px solid ${accent}` }}
      />
      <div className="flex min-w-0 items-center gap-3">
        <motion.span
          whileHover={{ rotate: 12 }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-background/60"
          style={{ color: accent }}
        >
          <skill.icon size={17} />
        </motion.span>
        <p className="truncate text-sm font-semibold">{skill.name}</p>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-background/60">
        <motion.div
          className="h-full rounded-full"
          style={{ background: accent }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20">
      <SectionHeading
        eyebrow="inventory"
        title="Skills"
        description="Abilities collected across coursework, clubs and late-night side quests."
        icon={<Puzzle size={12} />}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.12}>
            <div className="glass h-full rounded-[1.75rem] p-6">
              <h3 className="font-pixel text-[10px]" style={{ color: group.accent }}>
                {group.title.toUpperCase()}
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} accent={group.accent} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
