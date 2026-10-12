import { personal } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with React · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
