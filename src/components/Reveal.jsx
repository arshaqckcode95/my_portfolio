import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal: content slides up a touch and fades in the first
 * time it enters the viewport. Pass `delay` (s) to stagger siblings.
 */
export default function Reveal({ children, delay = 0, y = 28, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word mask reveal for display headlines. Each word rises out of an
 * overflow-hidden slot. `children` must be a plain string.
 */
export function RevealWords({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  const words = String(children).split(" ");

  return (
    <span className={className} aria-label={String(children)}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-top ${
            i < words.length - 1 ? "mr-[0.22em]" : ""
          }`}
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
