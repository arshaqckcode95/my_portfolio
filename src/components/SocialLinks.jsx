import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  twitter: FiTwitter,
  instagram: FiInstagram,
};

export default function SocialLinks({ items, size = 18 }) {
  return (
    <div className="flex items-center gap-1.5">
      {items.map((s) => {
        const Icon = ICONS[s.icon];
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            title={s.name}
            className="rounded-xl p-2.5 text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-slate-100 hover:text-accent-600 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-accent-400"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
