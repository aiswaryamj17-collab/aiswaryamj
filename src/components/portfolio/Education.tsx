import { motion } from "motion/react";
import { BookOpen, GraduationCap, Loader, ScrollText } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const coursework = ["Python Programming", "Java Programming", "C Programming", "SQL", "HTML", "CSS"];
const learning = ["Data Structures & Algorithms", "Computer Networks"];

const nodes = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Mar Athanasius College of Engineering",
    meta: "Expected graduation · 2029",
    body: null as string[] | null,
  },
  {
    icon: ScrollText,
    title: "Relevant Coursework",
    subtitle: "Foundations unlocked so far",
    meta: null,
    body: coursework,
  },
  {
    icon: Loader,
    title: "Currently Learning",
    subtitle: "Quest in progress",
    meta: null,
    body: learning,
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-20">
      <SectionHeading eyebrow="skill tree" title="Education" icon={<BookOpen size={12} />} />

      <div className="relative pl-8 sm:pl-12">
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute left-[11px] top-2 h-full w-[2px] origin-top rounded-full [background-image:linear-gradient(to_bottom,var(--purple),var(--cyan),transparent)] sm:left-[15px]"
        />

        <div className="space-y-6">
          {nodes.map((node, i) => (
            <Reveal key={node.title} direction="right" delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-8 top-6 grid h-6 w-6 place-items-center rounded-full border border-[var(--glass-border)] bg-surface sm:-left-12">
                  <node.icon size={12} className="text-accent" />
                </span>
                <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-6">
                  <h3 className="text-base font-semibold sm:text-lg">{node.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{node.subtitle}</p>
                  {node.meta && (
                    <p className="mt-3 inline-block rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-sun">
                      {node.meta}
                    </p>
                  )}
                  {node.body && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {node.body.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-[var(--glass-border)] bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
