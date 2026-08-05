import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { Background } from "@/components/portfolio/Background";
import { BootScreen } from "@/components/portfolio/BootScreen";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { QuestPanel } from "@/components/portfolio/QuestPanel";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Communities } from "@/components/portfolio/Communities";
import { Roadmap } from "@/components/portfolio/Roadmap";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { EasterEgg } from "@/components/portfolio/EasterEgg";

const title = "Aiswarya M J — Computer Science Engineering Student Portfolio";
const description =
  "Interactive portfolio of Aiswarya M J, a 2nd year Computer Science Engineering student at Mar Athanasius College of Engineering exploring DSA, networks and web development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <BootScreen onDone={() => setBooted(true)} />
      <Background />
      <CursorGlow />
      <EasterEgg />

      <AnimatePresence>
        {booted && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
            <main>
              <Hero />
              <QuestPanel />
              <About />
              <Education />
              <Skills />
              <Experience />
              <Communities />
              <Roadmap />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
