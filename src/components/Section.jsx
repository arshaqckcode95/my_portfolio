import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.21, 0.6, 0.35, 1] },
  }),
};

export function Reveal({ children, className = "", custom = 0, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={custom}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm tracking-widest uppercase text-accent-500 dark:text-accent-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
