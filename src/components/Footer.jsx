import { FiArrowUp } from "react-icons/fi";
import { personal } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-600/15 dark:border-paper-200/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-xs uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {personal.name} — all rights reserved
        </p>
        <p className="text-center">
          Senior Software Engineer
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-ink-600 transition-colors hover:text-flame-500 dark:text-paper-200"
        >
          Back to top
          <FiArrowUp className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Oversized hollow wordmark bleeding off the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="display text-hollow -mb-[0.33em] whitespace-nowrap text-center text-[clamp(5rem,18vw,16rem)]">
          ARSHAQ CK
        </p>
      </div>
    </footer>
  );
}
