import Reveal, { RevealWords } from "./Reveal.jsx";

/**
 * Editorial section header: mono index + rule, then an oversized display
 * title where `accent` is set in italic serif.
 *   <SectionHeading index="01" kicker="Selected work" title="PROJECTS" accent="that shipped" />
 */
export default function SectionHeading({ index, kicker, title, accent }) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-sm text-flame-500">({index})</span>
          <span className="h-px flex-1 bg-ink-600/20 dark:bg-paper-200/20" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 dark:text-ink-300">
            {kicker}
          </span>
        </div>
      </Reveal>
      <h2 className="display text-[clamp(2.6rem,7vw,5.5rem)] text-ink-700 dark:text-paper-100">
        <RevealWords>{title}</RevealWords>{" "}
        {accent ? (
          <span className="display-accent text-flame-500">
            <RevealWords delay={0.15}>{accent}</RevealWords>
          </span>
        ) : null}
      </h2>
    </div>
  );
}
