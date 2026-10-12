import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section.jsx";
import Reveal, { RevealWords } from "./Reveal.jsx";
import SocialLinks from "./SocialLinks.jsx";
import Marquee from "./Marquee.jsx";
import { personal, socials } from "../data/portfolio.js";

export default function Contact() {
  return (
    <>
      <Marquee
        items={[
          "React Native",
          "Expo",
          "iOS & Android",
          "App Store & Google Play",
          "Full-stack JavaScript",
        ]}
        duration={26}
        className="border-y border-ink-600/15 py-5 font-mono text-base uppercase tracking-[0.25em] text-ink-600 dark:border-paper-200/15 dark:text-paper-200"
      />

      <Section id="contact">
        <Reveal>
          {/* Bump to (06) when the Blog section (05) goes live. */}
          <p className="mb-8 flex items-center gap-4 font-mono text-sm text-flame-500">
            (05)
            <span className="h-px flex-1 bg-ink-600/20 dark:bg-paper-200/20" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 dark:text-ink-300">
              Get in touch
            </span>
          </p>
        </Reveal>

        <h2 className="display text-[clamp(3rem,10vw,8rem)] text-ink-700 dark:text-paper-100">
          <RevealWords>LET'S WORK</RevealWords>
          <br />
          <span className="display-accent text-flame-500">
            <RevealWords delay={0.15}>together.</RevealWords>
          </span>
        </h2>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-ink-500 dark:text-paper-300 md:text-lg">
              Have a mobile app idea, or need a React Native developer who
              ships to both stores? My inbox is always open — I usually reply
              within a day.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="group mt-8 inline-flex flex-wrap items-center gap-3 break-all font-sans text-2xl font-bold tracking-tight text-ink-700 underline decoration-flame-500 decoration-2 underline-offset-8 transition-colors hover:text-flame-500 dark:text-paper-100 md:text-4xl"
            >
              {personal.email}
              <FiArrowUpRight className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-8 border-t border-ink-600/15 pt-8 dark:border-paper-200/15 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 dark:text-ink-300">
                  Based in
                </p>
                <p className="mt-2 text-lg font-bold text-ink-700 dark:text-paper-100">
                  {personal.location}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 dark:text-ink-300">
                  Elsewhere
                </p>
                <div className="mt-3">
                  <SocialLinks items={socials} variant="list" />
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 dark:text-ink-300">
                  Paperwork
                </p>
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-2 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-600 transition-colors hover:text-flame-500 dark:text-paper-200"
                >
                  Download résumé
                  <FiArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
