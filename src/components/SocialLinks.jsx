import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiInstagram,
  FiArrowUpRight,
} from "react-icons/fi";

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  twitter: FiTwitter,
  instagram: FiInstagram,
};

/**
 * variant="icons"  — square bordered icon buttons (hero, footer)
 * variant="list"   — mono text links with arrows (contact section)
 */
export default function SocialLinks({ items, size = 17, variant = "icons" }) {
  if (variant === "list") {
    return (
      <ul className="space-y-1">
        {items.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-500 transition-colors hover:text-flame-500 dark:text-ink-300 dark:hover:text-flame-400"
            >
              {s.name}
              <FiArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {items.map((s) => {
        const Icon = ICONS[s.icon];
        if (!Icon) return null;
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            title={s.name}
            className="grid h-10 w-10 place-items-center border border-ink-600/25 text-ink-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500 hover:bg-flame-500 hover:text-paper-50 dark:border-paper-200/25 dark:text-paper-200"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
