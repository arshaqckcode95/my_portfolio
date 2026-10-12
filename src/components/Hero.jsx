import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { personal, stats, socials, skillGroups } from "../data/portfolio.js";
import SocialLinks from "./SocialLinks.jsx";
import Reveal, { RevealWords } from "./Reveal.jsx";
import Marquee from "./Marquee.jsx";

/* Rotating circular specialty sticker, pinned to the photo. */
function OrbitBadge() {
  return (
    <div className="absolute -left-8 -bottom-8 h-28 w-28 md:h-32 md:w-32">
      <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
        <defs>
          <path
            id="orbit-circle"
            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <circle cx="50" cy="50" r="49" className="fill-flame-500" />
        <text className="fill-paper-50 font-mono text-[9.5px] uppercase tracking-[0.22em]">
          <textPath href="#orbit-circle">
            React Native · Expo · iOS · Android ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <FiArrowDown className="text-paper-50" size={20} />
      </span>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60]);

  const marqueeItems = skillGroups
    .flatMap((g) => g.skills.map((s) => s.name))
    .filter((v, i, a) => a.indexOf(v) === i);

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Meta row */}
        <Reveal y={16}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-600/15 pb-5 font-mono text-xs uppercase tracking-[0.18em] text-ink-400 dark:border-paper-200/15 dark:text-ink-300">
            <span>{personal.name} — {personal.role}</span>
            <span>{personal.location}</span>
          </div>
        </Reveal>

        {/* Headline + photo */}
        <div className="mt-12 grid items-end gap-10 md:mt-16 md:grid-cols-[1fr_auto]">
          <h1 className="display text-[clamp(3.2rem,10.5vw,8.5rem)] text-ink-700 dark:text-paper-100">
            <RevealWords>REACT</RevealWords>{" "}
            <span className="display-accent text-flame-500">
              <RevealWords delay={0.1}>native</RevealWords>
            </span>
            <br />
            <RevealWords delay={0.2}>ENGINEER</RevealWords>
            <span className="display-accent text-ink-400 dark:text-ink-300">
              {" "}
              <RevealWords delay={0.35}>who ships.</RevealWords>
            </span>
          </h1>

          <motion.div
            style={{ y: photoY }}
            className="relative hidden shrink-0 md:block"
            initial={reduce ? false : { opacity: 0, rotate: 6, y: 30 }}
            animate={{ opacity: 1, rotate: 3, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-52 border border-ink-600/20 bg-paper-50 p-2.5 pb-10 shadow-[6px_6px_0_0_var(--color-flame-500)] dark:border-paper-200/20 dark:bg-ink-800 lg:w-60">
              <img
                src={personal.photo}
                alt={personal.name}
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
              <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400 dark:text-ink-300">
                shipping apps since 2019
              </p>
            </div>
            <OrbitBadge />
          </motion.div>
        </div>

        {/* Intro + CTAs */}
        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-ink-500 dark:text-paper-300 md:text-lg">
              {personal.subHeadline}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-2 bg-ink-700 px-6 font-mono text-sm uppercase tracking-[0.12em] text-paper-50 transition-colors hover:bg-flame-500 dark:bg-paper-100 dark:text-ink-800 dark:hover:bg-flame-500 dark:hover:text-paper-50"
              >
                View work
                <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center gap-2 border border-ink-600/30 px-6 font-mono text-sm uppercase tracking-[0.12em] text-ink-600 transition-colors hover:border-flame-500 hover:text-flame-500 dark:border-paper-200/30 dark:text-paper-200 dark:hover:border-flame-400 dark:hover:text-flame-400"
              >
                Résumé
                <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <SocialLinks items={socials.slice(0, 3)} />
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal delay={0.15} className="mt-16 md:mt-24">
          <dl className="grid grid-cols-2 border-y border-ink-600/15 dark:border-paper-200/15 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-5 py-7 md:px-8 ${
                  i > 0 ? "border-l border-ink-600/15 dark:border-paper-200/15" : ""
                } ${i === 2 ? "max-md:border-l-0 max-md:border-t" : ""} ${
                  i === 3 ? "max-md:border-t" : ""
                }`}
              >
                <dd className="display text-4xl text-ink-700 dark:text-paper-100 md:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Skill ticker */}
      <Marquee
        items={marqueeItems}
        duration={34}
        className="mt-14 border-b border-ink-600/15 py-4 font-mono text-sm uppercase tracking-[0.2em] text-ink-500 dark:border-paper-200/15 dark:text-paper-300 md:mt-20"
      />
    </section>
  );
}
