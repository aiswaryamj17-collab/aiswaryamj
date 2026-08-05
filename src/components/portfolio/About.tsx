import { motion } from "motion/react";
import { Code2, Compass, GraduationCap, Rocket, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const floaters = [
  { Icon: Code2, className: "left-2 top-6", delay: 0 },
  { Icon: Rocket, className: "right-4 top-10", delay: 0.8 },
  { Icon: Compass, className: "bottom-8 left-8", delay: 1.4 },
  { Icon: Sparkles, className: "bottom-6 right-10", delay: 2 },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl scroll-mt-28 px-5 py-20">
      <SectionHeading eyebrow="player profile" title="About Me" icon={<Sparkles size={12} />} />

      <div className="relative">
        {floaters.map(({ Icon, className, delay }, i) => (
          <motion.span
            key={i}
            aria-hidden
            className={`pointer-events-none absolute hidden text-muted-foreground/40 lg:block ${className}`}
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7 + i, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={26} />
          </motion.span>
        ))}

        <Reveal direction="scale">
          <div className="glass mx-auto max-w-3xl rounded-[2rem] p-7 sm:p-10">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A passionate Computer Science Engineering student from Kerala, India, and a tech enthusiast who
              enjoys exploring diverse technologies across different domains. Always eager to learn, build, and
              take on new challenges, I&apos;m constantly expanding my skills while discovering emerging
              technologies and innovative ideas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-surface-2/70 p-5">
                <p className="font-pixel text-[9px] text-sun">CURRENT STATUS</p>
                <p className="mt-3 font-semibold">2nd Year Computer Science Engineering</p>
              </div>
              <div className="rounded-2xl bg-surface-2/70 p-5">
                <p className="flex items-center gap-2 font-pixel text-[9px] text-accent">
                  <GraduationCap size={12} /> BASE CAMP
                </p>
                <p className="mt-3 font-semibold">Mar Athanasius College of Engineering</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
