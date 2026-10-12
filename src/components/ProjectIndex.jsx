import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Section from "./Section.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ScreenshotModal from "./ScreenshotModal.jsx";
import { projects, projectGroups } from "../data/portfolio.js";

/**
 * Standalone page (#/projects): the complete catalogue, grouped by
 * work / open source / hobby, with the same cards and lightbox as home.
 */
export default function ProjectIndex() {
  const [shots, setShots] = useState(null);

  return (
    <main className="pt-16 md:pt-[72px]">
      <Section id="project-index">
        <Reveal>
          <a
            href="#/"
            className="link-draw mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-500 hover:text-flame-500 dark:text-ink-300"
          >
            <FiArrowLeft size={14} /> Back to home
          </a>
        </Reveal>

        <SectionHeading
          index="00"
          kicker={`Complete archive — ${projects.length} builds`}
          title="PROJECT"
          accent="index"
        />

        {projectGroups.map((group) => {
          const list = projects.filter((p) => p.group === group.id);
          if (list.length === 0) return null;
          return (
            <div key={group.id} className="mb-20 last:mb-0 md:mb-24">
              <Reveal>
                <div className="mb-8 flex items-baseline gap-4">
                  <h3 className="display text-2xl text-ink-700 dark:text-paper-100 md:text-3xl">
                    {group.label.toUpperCase()}
                  </h3>
                  <span className="font-mono text-sm text-flame-500">
                    ({list.length})
                  </span>
                  <span className="h-px flex-1 self-center bg-ink-600/20 dark:bg-paper-200/20" />
                  <span className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300 sm:block">
                    {group.blurb}
                  </span>
                </div>
              </Reveal>

              <div className="grid gap-5 md:grid-cols-2">
                {list.map((p, i) => (
                  <Reveal key={p.name} delay={(i % 2) * 0.06}>
                    <ProjectCard project={p} index={i} onShots={setShots} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <ScreenshotModal project={shots} onClose={() => setShots(null)} />
    </main>
  );
}
