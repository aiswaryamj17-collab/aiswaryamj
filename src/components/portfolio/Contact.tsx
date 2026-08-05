import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const channels = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "aiswarya-m-j-421477411",
    href: "https://www.linkedin.com/in/aiswarya-m-j-421477411",
    accent: "var(--blue)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "aiswaryamj17-collab",
    href: "https://github.com/aiswaryamj17-collab",
    accent: "var(--purple)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aiswaryamj17@gmail.com",
    href: "mailto:aiswaryamj17@gmail.com",
    accent: "var(--cyan)",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-20">
      <SectionHeading
        eyebrow="open a portal"
        title="Contact"
        description="Always up for internships, collaborations, hackathon teams and good tech conversations."
        icon={<Send size={12} />}
      />

      <Reveal direction="scale">
        <div className="glass rounded-[2rem] p-6 sm:p-9">
          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-surface-2/70 p-6 text-center"
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-background/60"
                  style={{ color: c.accent }}
                >
                  <c.icon size={20} />
                </motion.span>
                <span className="font-pixel text-[9px]" style={{ color: c.accent }}>
                  {c.label.toUpperCase()}
                </span>
                <span className="w-full truncate text-xs text-muted-foreground">{c.value}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
