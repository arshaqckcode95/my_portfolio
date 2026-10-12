import { FiAward, FiBookOpen } from "react-icons/fi";
import Section, { Reveal } from "./Section.jsx";
import { education, certifications } from "../data/portfolio.js";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Background"
      title="Education & certifications"
    >
      <div className="grid gap-5 lg:grid-cols-5">
        <Reveal className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-surface-900 lg:col-span-3">
          <div className="flex items-start gap-4">
            <img
              src={education.logo}
              alt={education.institution}
              className="h-14 w-14 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-white/10"
            />
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                {education.institution} · {education.university}
              </p>
              <p className="mt-0.5 font-mono text-sm text-slate-500 dark:text-slate-400">
                {education.duration}
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {education.points.map((p) => (
              <li key={p} className="flex gap-2.5">
                <FiBookOpen className="mt-0.5 shrink-0 text-accent-500" /> {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="space-y-4 lg:col-span-2">
          {certifications.map((c, i) => (
            <Reveal
              key={c.title}
              custom={i}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-surface-900"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                <FiAward size={20} />
              </span>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {c.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {c.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
