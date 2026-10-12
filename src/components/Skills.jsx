import { FiCheck } from "react-icons/fi";
import Section, { Reveal } from "./Section.jsx";
import TechIcon from "./TechIcon.jsx";
import { skillGroups, highlights } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech stack"
      title="What I work with"
      intro="Mobile-first by specialty — React Native and Expo are my home turf, with React on the web and Node.js + PostgreSQL on the backend."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal
            key={group.title}
            custom={gi}
            className={`rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-surface-900 ${
              gi === 0 ? "lg:row-span-2 ring-1 ring-accent-500/20" : ""
            }`}
          >
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              {group.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {group.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-accent-400/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <TechIcon icon={s.icon} color={s.color} className="text-base" />
                  {s.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal
          custom={3}
          className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-surface-900 lg:col-span-2"
        >
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Day to day
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <FiCheck className="mt-0.5 shrink-0 text-accent-500" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
