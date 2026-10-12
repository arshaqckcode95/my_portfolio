import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import useTheme from "../hooks/useTheme.js";
import { personal, socials } from "../data/portfolio.js";

const LINKS = [
  { index: "01", label: "Work", href: "#work" },
  { index: "02", label: "Experience", href: "#experience" },
  { index: "03", label: "Skills", href: "#skills" },
  { index: "04", label: "Education", href: "#education" },
  // { index: "05", label: "Blog", href: "#blog" }, // enable alongside the Blog section
  { index: "05", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Reading-progress hairline */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-flame-500"
        style={{ scaleX: progress }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
          scrolled
            ? "border-b border-ink-600/10 bg-paper-100/85 backdrop-blur-md dark:border-paper-200/10 dark:bg-ink-900/85"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
          <a
            href="#top"
            className="font-mono text-sm uppercase tracking-[0.2em] text-ink-700 dark:text-paper-100"
          >
            Arshaq<span className="text-flame-500">©</span>CK
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-draw font-mono text-[13px] uppercase tracking-[0.12em] text-ink-500 hover:text-ink-700 dark:text-ink-300 dark:hover:text-paper-100"
                >
                  <span className="text-flame-500">{l.index}.</span> {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center border border-ink-600/25 text-ink-500 transition-colors hover:border-flame-500 hover:text-flame-500 dark:border-paper-200/25 dark:text-paper-200"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <a
              href="#contact"
              className="hidden h-10 items-center gap-1.5 bg-ink-700 px-4 font-mono text-[13px] uppercase tracking-[0.12em] text-paper-50 transition-colors hover:bg-flame-500 dark:bg-paper-100 dark:text-ink-800 dark:hover:bg-flame-500 dark:hover:text-paper-50 md:inline-flex"
            >
              Let's talk <FiArrowUpRight size={14} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center border border-ink-600/25 text-ink-600 dark:border-paper-200/25 dark:text-paper-200 md:hidden"
            >
              <FiMenu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-paper-100 dark:bg-ink-900 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-ink-700 dark:text-paper-100">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center border border-ink-600/25 text-ink-600 dark:border-paper-200/25 dark:text-paper-200"
              >
                <FiX size={18} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.45 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-ink-600/10 py-4 dark:border-paper-200/10"
                  >
                    <span className="font-mono text-xs text-flame-500">
                      {l.index}
                    </span>
                    <span className="display text-4xl text-ink-700 transition-colors group-hover:text-flame-500 dark:text-paper-100">
                      {l.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex items-center justify-between px-6 pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300">
                {personal.location}
              </span>
              <div className="flex gap-4">
                {socials.slice(0, 3).map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500 hover:text-flame-500 dark:text-ink-300"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
