import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSmartphone, FiGlobe, FiGithub } from "react-icons/fi";
import Section from "./Section.jsx";
import { projects, socials } from "../data/portfolio.js";

const FILTERS = ["All", "Mobile", "Web"];

function Screenshot({ project }) {
  if (project.image) {
    return (
      <img
        src={import.meta.env.BASE_URL + project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }
  // Branded placeholder until a real screenshot is dropped into public/screenshots/
  const Icon = project.category === "Web" ? FiGlobe : FiSmartphone;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-600/15 via-surface-900/5 to-cyan-500/15 dark:from-accent-500/15 dark:via-transparent dark:to-cyan-400/10">
      <Icon className="text-3xl text-accent-500/70" />
      <span className="font-display text-xl font-semibold tracking-wide text-slate-400 dark:text-slate-500">
        {project.name}
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:border-white/10 dark:bg-surface-900 dark:hover:border-accent-400/30 dark:hover:shadow-black/40"
    >
      <div className="relative h-44 overflow-hidden border-b border-slate-100 dark:border-white/5">
        <Screenshot project={project} />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:bg-surface-950/70 dark:text-slate-300">
          {project.category === "Web" ? (
            <FiGlobe size={12} />
          ) : (
            <FiSmartphone size={12} />
          )}
          {project.tagline}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter
  );
  const visible = showAll ? filtered : filtered.filter((p) => p.featured);
  const hiddenCount = filtered.length - visible.length;
  const github = socials.find((s) => s.icon === "github")?.url;

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Projects I've shipped"
      intro="17+ production apps across healthcare, fintech, e-commerce and workforce management — most live on both the App Store and Google Play."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f
                ? "bg-accent-600 text-white shadow-md shadow-accent-600/25"
                : "border border-slate-200 text-slate-600 hover:border-accent-400 hover:text-accent-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-accent-400/50 dark:hover:text-accent-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            Show {hiddenCount} more project{hiddenCount > 1 ? "s" : ""}
          </button>
        )}
        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            Show featured only
          </button>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            <FiGithub /> More on GitHub
          </a>
        )}
      </div>
    </Section>
  );
}
