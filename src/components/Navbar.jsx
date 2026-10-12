import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme.js";
import { personal } from "../data/portfolio.js";

const LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-3 mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-2.5 backdrop-blur-xl dark:border-white/10 dark:bg-surface-900/70 sm:mx-5 lg:mx-auto">
        <a
          href="#top"
          className="font-display text-lg font-bold text-slate-900 dark:text-white"
        >
          {personal.firstName}
          <span className="text-accent-500">.ck</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-accent-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-500 md:block"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-600 dark:text-slate-300 md:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mx-3 mt-2 rounded-2xl border border-slate-200/60 bg-white/90 p-3 backdrop-blur-xl dark:border-white/10 dark:bg-surface-900/90 md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block rounded-lg bg-accent-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
