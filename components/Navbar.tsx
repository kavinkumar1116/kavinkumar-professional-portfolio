"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/[0.76] px-4 shadow-[0_18px_60px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-bold text-slate-950 dark:text-white"
          onClick={closeMenu}
        >
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-glow">
            KA
          </span>
          <span className="hidden sm:inline">Kavinkumar A</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub"
            href="https://github.com/kavinkumar1116"
            target="_blank"
            rel="noreferrer"
            className="hidden size-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white sm:grid"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/kavinkumar1116/"
            target="_blank"
            rel="noreferrer"
            className="hidden size-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white sm:grid"
          >
            <Linkedin size={18} />
          </a>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full text-slate-700 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full text-slate-700 transition hover:bg-slate-950/5 dark:text-slate-200 dark:hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/70 bg-white/[0.92] p-3 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/[0.92] lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-950/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
