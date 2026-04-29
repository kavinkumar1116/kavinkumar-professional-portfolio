import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-white/10">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Kavinkumar A. Full Stack Developer.
        </p>
        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub"
            href="https://github.com/kavinkumar1116"
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/kavinkumar1116/"
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            aria-label="Email"
            href="mailto:akavinkumarit1116@gmail.com"
            className="grid size-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
