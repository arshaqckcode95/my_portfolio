import { FiGithub, FiGlobe, FiImage, FiArrowUpRight } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const LINK_META = [
  { key: "appstore", label: "App Store", Icon: FaApple },
  { key: "playstore", label: "Play Store", Icon: FaGooglePlay },
  { key: "website", label: "Web", Icon: FiGlobe },
  { key: "github", label: "Code", Icon: FiGithub },
];

/**
 * Compact editorial project card: index, name, tagline, description, tech,
 * then a footer rail of real links (store badges, web, code) plus a
 * "Screens" trigger that opens the screenshot lightbox via `onShots`.
 */
export default function ProjectCard({ project, index, onShots }) {
  const links = LINK_META.filter(({ key }) => project.links?.[key]);
  const hasShots = (project.screenshots ?? []).length > 0;

  return (
    <article className="group flex h-full flex-col border border-ink-600/15 bg-paper-50/70 p-6 transition-colors duration-300 hover:border-flame-500/60 dark:border-paper-200/15 dark:bg-ink-800/50 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-flame-500">
          /{String(index + 1).padStart(2, "0")}
        </span>
        <span className="border border-ink-600/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400 dark:border-paper-200/20 dark:text-ink-300">
          {project.category}
        </span>
      </div>

      <h3 className="display mt-4 text-2xl text-ink-700 transition-transform duration-300 group-hover:translate-x-1 dark:text-paper-100 md:text-[1.65rem]">
        {project.name}
      </h3>
      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-300">
        {project.tagline}
      </p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500 dark:text-paper-300">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="border border-ink-600/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-500 transition-colors group-hover:border-flame-500/30 dark:border-paper-200/15 dark:text-paper-300"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-600/10 pt-4 dark:border-paper-200/10">
        {hasShots && (
          <button
            onClick={() => onShots(project)}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-flame-500 transition-colors hover:text-flame-600"
          >
            <FiImage size={13} /> Screens
          </button>
        )}
        {links.map(({ key, label, Icon }) => (
          <a
            key={key}
            href={project.links[key]}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500 transition-colors hover:text-flame-500 dark:text-ink-300 dark:hover:text-flame-400"
          >
            <Icon size={13} /> {label}
            <FiArrowUpRight size={11} />
          </a>
        ))}
        {!hasShots && links.length === 0 && (
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-400/70 dark:text-ink-300/70">
            Case study on request
          </span>
        )}
      </div>
    </article>
  );
}
