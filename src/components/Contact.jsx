import { FiMail, FiDownload } from "react-icons/fi";
import Section, { Reveal } from "./Section.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { personal, socials } from "../data/portfolio.js";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <Reveal className="hero-glow relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-white/10 dark:bg-surface-900 sm:p-14">
        <img
          src={personal.photo}
          alt={personal.name}
          className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-accent-500/50"
        />
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          Have a mobile app idea, or need a React Native developer who ships to
          both stores? My inbox is always open.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-colors hover:bg-accent-500"
          >
            <FiMail /> {personal.email}
          </a>
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            <FiDownload /> Download resume
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <SocialLinks items={socials} size={20} />
        </div>
      </Reveal>
    </Section>
  );
}
