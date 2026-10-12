import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section id="experience" className="bg-paper-50 dark:bg-ink-800">
      <SectionHeading
        index="02"
        kicker="Career so far"
        title="EXPERIENCE"
        accent="on the record"
      />

      <ol>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <li className="group grid gap-5 border-t border-ink-600/15 py-10 dark:border-paper-200/15 md:grid-cols-[220px_1fr] md:gap-12 md:py-12">
              {/* Ledger column: dates + place */}
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300">
                <p className="text-flame-500">{job.duration}</p>
                <p className="mt-2">{job.location}</p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    loading="lazy"
                    className="h-12 w-12 border border-ink-600/15 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 dark:border-paper-200/15"
                  />
                  <div>
                    <h3 className="display text-2xl text-ink-700 dark:text-paper-100 md:text-3xl">
                      {job.role}
                    </h3>
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link-draw mt-1 inline-flex items-center gap-1 font-mono text-sm text-ink-500 hover:text-flame-500 dark:text-paper-300"
                      >
                        {job.company} <FiArrowUpRight size={13} />
                      </a>
                    ) : (
                      <p className="mt-1 font-mono text-sm text-ink-500 dark:text-paper-300">
                        {job.company}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="mt-6 max-w-2xl space-y-2.5 text-[15px] leading-relaxed text-ink-500 dark:text-paper-300">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[2px] select-none text-flame-500">—</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="border border-ink-600/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500 dark:border-paper-200/20 dark:text-paper-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
        <li aria-hidden="true" className="border-t border-ink-600/15 dark:border-paper-200/15" />
      </ol>
    </Section>
  );
}
