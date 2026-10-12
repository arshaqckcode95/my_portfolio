import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { personal, stats, socials } from "../data/portfolio.js";
import SocialLinks from "./SocialLinks.jsx";
import { fadeUp } from "./Section.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-3"
          >
            <img
              src={personal.photo}
              alt={personal.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-accent-500/50"
            />
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                {personal.name}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <FiMapPin size={13} /> {personal.location} ·{" "}
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to work
                </span>
              </p>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-8 font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            I build <span className="text-gradient">cross-platform apps</span>{" "}
            with React Native &amp; Expo.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {personal.subHeadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              <FiDownload /> Resume
            </a>
            <SocialLinks items={socials.slice(0, 3)} />
          </motion.div>

          <motion.dl
            variants={fadeUp}
            custom={4}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 dark:border-white/10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="order-last mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {s.label}
                </dt>
                <dd className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
