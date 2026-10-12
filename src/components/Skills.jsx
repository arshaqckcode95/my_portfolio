import Section from "./Section.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import TechIcon from "./TechIcon.jsx";
import { skillGroups, highlights } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="03"
        kicker="Tooling & stack"
        title="SKILLS"
        accent="in rotation"
      />

      <div>
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.05}>
            <div className="grid gap-6 border-t border-ink-600/15 py-10 dark:border-paper-200/15 md:grid-cols-[1fr_1.4fr] md:gap-14 md:py-12">
              <div>
                <span className="font-mono text-sm text-flame-500">
                  /{String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-2xl text-ink-700 dark:text-paper-100 md:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-500 dark:text-paper-300">
                  {group.description}
                </p>
              </div>

              <ul className="flex flex-wrap content-start gap-2.5">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="group/chip flex items-center gap-2.5 border border-ink-600/20 px-4 py-2.5 font-mono text-[13px] uppercase tracking-[0.1em] text-ink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500 dark:border-paper-200/20 dark:text-paper-200"
                  >
                    <TechIcon
                      icon={s.icon}
                      color={s.color}
                      className="text-lg grayscale transition-all duration-300 group-hover/chip:grayscale-0"
                    />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Day to day */}
      <Reveal className="border-t border-ink-600/15 pt-10 dark:border-paper-200/15 md:pt-12">
        <h3 className="display text-2xl text-ink-700 dark:text-paper-100 md:text-3xl">
          DAY TO DAY{" "}
          <span className="display-accent text-ink-400 dark:text-ink-300">
            — in practice
          </span>
        </h3>
        <ul className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {highlights.map((h, i) => (
            <li
              key={h}
              className="flex gap-4 text-[15px] leading-relaxed text-ink-500 dark:text-paper-300"
            >
              <span className="font-mono text-xs text-flame-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              {h}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
