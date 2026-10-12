import { FiMapPin, FiExternalLink } from "react-icons/fi";
import Section, { Reveal } from "./Section.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      intro="6+ years building and shipping hybrid mobile applications and web platforms for enterprise clients."
    >
      <ol className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-white/10 sm:space-y-12 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} custom={i}>
            <li className="relative">
              <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-accent-500/20 sm:-left-[47px]" />
              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-200/60 dark:border-white/10 dark:bg-surface-900 dark:hover:shadow-black/30">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="h-12 w-12 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-white/10"
                    />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            {job.company} <FiExternalLink size={12} />
                          </a>
                        ) : (
                          job.company
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                    <p className="font-mono">{job.duration}</p>
                    <p className="mt-0.5 flex items-center justify-end gap-1">
                      <FiMapPin size={12} /> {job.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent-500">▹</span> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent-50 px-3 py-1 font-mono text-xs text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
