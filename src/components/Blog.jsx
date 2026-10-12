import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

// ─────────────────────────────────────────────────────────────
// PLACEHOLDER DATA — replace with real posts when the blog
// backend is connected. Each post needs: title, excerpt, date,
// readingTime, tags[] and url (external or internal route).
// ─────────────────────────────────────────────────────────────
const POSTS = [
  {
    title: "Shipping OTA updates with Expo EAS without breaking users",
    excerpt:
      "A practical rollout strategy for over-the-air updates: channels, runtime versions, staged percentages — and the mistakes that teach you to respect them.",
    date: "2026-01-14",
    readingTime: "7 min",
    tags: ["Expo", "EAS", "Release"],
    url: "#",
  },
  {
    title: "React Native New Architecture: a migration field report",
    excerpt:
      "What actually broke, what silently got faster, and how to plan the jump for a production app with native modules.",
    date: "2025-11-02",
    readingTime: "9 min",
    tags: ["React Native", "Architecture"],
    url: "#",
  },
  {
    title: "Offline-first with SQLite: patterns that survive bad networks",
    excerpt:
      "Sync queues, conflict resolution and optimistic UI — lessons from building field apps for users who are rarely on Wi-Fi.",
    date: "2025-09-18",
    readingTime: "6 min",
    tags: ["SQLite", "Offline"],
    url: "#",
  },
  {
    title: "The store-release checklist I wish I had six years ago",
    excerpt:
      "Certificates, privacy manifests, screenshots, review notes — everything that blocks an App Store or Play release, in one list.",
    date: "2025-07-30",
    readingTime: "5 min",
    tags: ["iOS", "Android", "Release"],
    url: "#",
  },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

function FeaturedPost({ post }) {
  return (
    <Reveal>
      <a
        href={post.url}
        className="group grid gap-6 border-y border-ink-600/15 py-10 dark:border-paper-200/15 md:grid-cols-[220px_1fr] md:gap-12 md:py-14"
      >
        <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300">
          <p className="text-flame-500">Latest</p>
          <p className="mt-2">{formatDate(post.date)}</p>
          <p className="mt-1">{post.readingTime} read</p>
        </div>

        <div>
          <h3 className="display max-w-3xl text-3xl text-ink-700 transition-colors duration-300 group-hover:text-flame-500 dark:text-paper-100 md:text-5xl">
            {post.title}
          </h3>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-500 dark:text-paper-300">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="border border-ink-600/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500 dark:border-paper-200/20 dark:text-paper-300"
              >
                {t}
              </span>
            ))}
            <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-flame-500">
              Read
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Blog() {
  const [latest, ...rest] = POSTS;

  return (
    <Section id="blog">
      <SectionHeading
        index="05"
        kicker="Writing"
        title="NOTES"
        accent="from the field"
      />

      <FeaturedPost post={latest} />

      <ul>
        {rest.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.05}>
            <li>
              <a
                href={post.url}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-ink-600/15 py-7 transition-colors hover:bg-paper-50 dark:border-paper-200/15 dark:hover:bg-ink-800 md:grid-cols-[220px_1fr_auto] md:gap-12 md:px-4"
              >
                <span className="hidden font-mono text-xs uppercase tracking-[0.15em] text-ink-400 dark:text-ink-300 md:block">
                  {formatDate(post.date)} · {post.readingTime}
                </span>
                <div>
                  <h4 className="font-sans text-lg font-bold tracking-tight text-ink-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-flame-500 dark:text-paper-100 md:text-xl">
                    {post.title}
                  </h4>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-ink-400 dark:text-ink-300 md:hidden">
                    {formatDate(post.date)} · {post.readingTime}
                  </p>
                  <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-ink-500 dark:text-paper-300 md:block">
                    {post.excerpt}
                  </p>
                </div>
                <FiArrowUpRight className="justify-self-end text-ink-400 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame-500 group-hover:opacity-100 dark:text-ink-300" />
              </a>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10">
        <a
          href="#"
          className="group inline-flex h-12 items-center gap-2 border border-ink-600/30 px-6 font-mono text-sm uppercase tracking-[0.12em] text-ink-600 transition-colors hover:border-flame-500 hover:text-flame-500 dark:border-paper-200/30 dark:text-paper-200 dark:hover:border-flame-400 dark:hover:text-flame-400"
        >
          All posts
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}
