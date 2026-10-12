import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ScreenshotModal from "./ScreenshotModal.jsx";
import { projects, projectGroups } from "../data/portfolio.js";

const HOME_LIMIT = 4;

/* Featured first, original order otherwise. */
const byFeatured = (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0);

export default function Projects() {
  const [active, setActive] = useState(projectGroups[0].id);
  const [shots, setShots] = useState(null);

  const group = projectGroups.find((g) => g.id === active);
  const list = projects.filter((p) => p.group === active);
  const visible = [...list].sort(byFeatured).slice(0, HOME_LIMIT);
  const hidden = list.length - visible.length;

  return (
    <Section id="work">
      <SectionHeading
        index="01"
        kicker="Selected work"
        title="PROJECTS"
        accent="that shipped"
      />

      {/* Category rail — work / open source / hobby */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex gap-7 border-b border-ink-600/15 dark:border-paper-200/15 md:gap-10"
        >
          {projectGroups.map((g) => {
            const count = projects.filter((p) => p.group === g.id).length;
            const isActive = g.id === active;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(g.id)}
                className={`relative flex items-baseline gap-1.5 pb-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors md:text-[13px] ${
                  isActive
                    ? "text-ink-700 dark:text-paper-100"
                    : "text-ink-400 hover:text-ink-600 dark:text-ink-300 dark:hover:text-paper-200"
                }`}
              >
                {g.label}
                <sup className="font-mono text-[10px] text-flame-500">
                  {count}
                </sup>
                {isActive && (
                  <motion.span
                    layoutId="project-tab-underline"
                    className="absolute inset-x-0 -bottom-px h-[2px] bg-flame-500"
                  />
                )}
              </button>
            );
          })}
          <span className="ml-auto hidden self-end pb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300 sm:block">
            {group.blurb}
          </span>
        </div>
      </Reveal>

      {/* Card grid — re-animates on tab change */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 grid gap-5 md:grid-cols-2"
      >
        {visible.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} onShots={setShots} />
        ))}
        {visible.length === 0 && (
          <p className="col-span-full border border-dashed border-ink-600/20 p-10 text-center font-mono text-xs uppercase tracking-[0.15em] text-ink-400 dark:border-paper-200/20 dark:text-ink-300">
            Coming soon — builds in progress
          </p>
        )}
      </motion.div>

      {/* Full-index CTA — replaces a long on-page archive */}
      <Reveal className="mt-10">
        <a
          href="#/projects"
          className="group flex items-center justify-between gap-6 border border-ink-600/20 p-6 transition-colors duration-300 hover:border-flame-500 hover:bg-flame-500 dark:border-paper-200/20 md:p-8"
        >
          <div>
            <p className="display text-2xl text-ink-700 transition-colors group-hover:text-paper-50 dark:text-paper-100 md:text-4xl">
              FULL PROJECT INDEX
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 transition-colors group-hover:text-paper-50/80 dark:text-ink-300">
              All {projects.length} builds — work, open source & hobby
              {hidden > 0 ? ` · +${hidden} more in ${group.label}` : ""}
            </p>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center border border-ink-600/25 text-ink-600 transition-all duration-300 group-hover:border-paper-50/60 group-hover:text-paper-50 dark:border-paper-200/25 dark:text-paper-200 md:h-14 md:w-14">
            <FiArrowUpRight
              size={22}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </a>
      </Reveal>

      <ScreenshotModal project={shots} onClose={() => setShots(null)} />
    </Section>
  );
}
