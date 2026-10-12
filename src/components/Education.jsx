import { FiAward } from "react-icons/fi";
import Section from "./Section.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { education, certifications } from "../data/portfolio.js";

export default function Education() {
  return (
    <Section id="education" className="bg-paper-50 dark:bg-ink-800">
      <SectionHeading
        index="04"
        kicker="Foundations"
        title="EDUCATION"
        accent="& credentials"
      />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        {/* Degree */}
        <Reveal>
          <div className="border-t border-ink-600/15 pt-8 dark:border-paper-200/15">
            <div className="flex items-start gap-5">
              <img
                src={education.logo}
                alt={education.institution}
                loading="lazy"
                className="h-14 w-14 border border-ink-600/15 object-cover grayscale dark:border-paper-200/15"
              />
              <div>
                <h3 className="display text-2xl text-ink-700 dark:text-paper-100 md:text-3xl">
                  {education.degree}
                </h3>
                <p className="mt-2 font-mono text-sm text-ink-500 dark:text-paper-300">
                  {education.institution} · {education.university}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-flame-500">
                  {education.duration}
                </p>
              </div>
            </div>
            <ul className="mt-7 space-y-2.5 text-[15px] leading-relaxed text-ink-500 dark:text-paper-300">
              {education.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[2px] select-none text-flame-500">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Certifications ledger */}
        <div>
          <Reveal>
            <p className="border-t border-ink-600/15 pt-8 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 dark:border-paper-200/15 dark:text-ink-300">
              Certificates on file
            </p>
          </Reveal>
          <ul className="mt-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <li className="group flex items-center gap-4 border-b border-ink-600/15 py-5 dark:border-paper-200/15">
                  <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink-600/20 text-ink-400 transition-colors group-hover:border-flame-500 group-hover:text-flame-500 dark:border-paper-200/20 dark:text-ink-300">
                    <FiAward size={17} />
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-ink-700 dark:text-paper-100">
                      {c.title}
                    </h4>
                    <p className="mt-0.5 font-mono text-xs text-ink-400 dark:text-ink-300">
                      {c.issuer}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
