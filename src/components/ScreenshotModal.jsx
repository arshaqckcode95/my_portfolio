import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiArrowLeft, FiArrowRight } from "react-icons/fi";

/**
 * Editorial lightbox for project screenshots. Render it once per view with
 * `project` set to the project being previewed (or null when closed):
 *   <ScreenshotModal project={shots} onClose={() => setShots(null)} />
 * Esc closes, arrow keys navigate, backdrop click closes.
 */
export default function ScreenshotModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <Lightbox key={project.name} project={project} onClose={onClose} />
      )}
    </AnimatePresence>
  );
}

function Lightbox({ project, onClose }) {
  const shots = project.screenshots ?? [];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setIndex((i) => (i + 1) % shots.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 bg-ink-900/85 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} screenshots`}
        className="relative flex max-h-full w-full max-w-3xl flex-col border border-paper-200/25 bg-ink-800 text-paper-100"
        initial={{ y: 36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-paper-200/15 px-5 py-4">
          <div className="min-w-0">
            <h3 className="display truncate text-xl md:text-2xl">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-300">
              {project.tagline}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <span className="font-mono text-xs text-ink-300">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(shots.length).padStart(2, "0")}
            </span>
            <button
              onClick={onClose}
              aria-label="Close screenshots"
              className="grid h-9 w-9 place-items-center border border-paper-200/25 text-paper-200 transition-colors hover:border-flame-500 hover:text-flame-500"
            >
              <FiX size={16} />
            </button>
          </div>
        </div>

        {/* Stage */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-ink-900/60 p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={import.meta.env.BASE_URL + shots[index]}
              alt={`${project.name} screenshot ${index + 1} of ${shots.length}`}
              className="max-h-[58vh] w-auto max-w-full border border-paper-200/10 object-contain"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>

          {shots.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border border-paper-200/25 bg-ink-800/80 text-paper-200 transition-colors hover:border-flame-500 hover:text-flame-500"
              >
                <FiArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border border-paper-200/25 bg-ink-800/80 text-paper-200 transition-colors hover:border-flame-500 hover:text-flame-500"
              >
                <FiArrowRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail rail */}
        {shots.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-t border-paper-200/15 px-5 py-3">
            {shots.map((shot, i) => (
              <button
                key={shot}
                onClick={() => setIndex(i)}
                aria-label={`View screenshot ${i + 1}`}
                className={`h-14 w-10 shrink-0 overflow-hidden border transition-colors ${
                  i === index
                    ? "border-flame-500"
                    : "border-paper-200/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={import.meta.env.BASE_URL + shot}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
