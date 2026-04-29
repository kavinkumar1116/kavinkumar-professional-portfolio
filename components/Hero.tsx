"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const roles = [
  "Full Stack Developer",
  "BigCommerce Product Developer",
  "SaaS Builder"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentRole = useMemo(() => roles[roleIndex], [roleIndex]);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && visibleChars < currentRole.length) {
          setVisibleChars((value) => value + 1);
          return;
        }

        if (!isDeleting && visibleChars === currentRole.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && visibleChars > 0) {
          setVisibleChars((value) => value - 1);
          return;
        }

        setIsDeleting(false);
        setRoleIndex((value) => (value + 1) % roles.length);
      },
      isDeleting ? 44 : visibleChars === currentRole.length ? 1200 : 76
    );

    return () => window.clearTimeout(timeout);
  }, [currentRole, isDeleting, visibleChars]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-premium-gradient pb-20 pt-32 dark:bg-premium-gradient-dark"
    >
      <div className="noise" />
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-white/[0.72] px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-sky-300/20 dark:bg-white/[0.08] dark:text-sky-200">
            Building SaaS products and eCommerce systems with measurable impact
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Kavinkumar A
            <span className="block gradient-text">Full Stack Developer</span>
          </h1>
          <div className="mt-6 min-h-9 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
            <span>{currentRole.slice(0, visibleChars)}</span>
            <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-blue-600 dark:bg-sky-300" />
          </div>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I create scalable SaaS applications and high-performance BigCommerce
            product solutions with a sharp focus on performance, usability, and
            business outcomes.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition hover:shadow-[0_0_46px_rgba(37,99,235,0.36)]"
            >
              View Projects
              <ArrowDown size={17} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/[0.72] px-6 py-3.5 text-sm font-bold text-slate-900 backdrop-blur transition hover:border-blue-500/40 hover:text-blue-700 dark:border-white/[0.12] dark:bg-white/[0.08] dark:text-white dark:hover:text-sky-200"
            >
              Contact
              <Mail size={17} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              href="/Kavinkumar-A-Resume.txt"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/50 px-6 py-3.5 text-sm font-bold text-slate-900 backdrop-blur transition hover:border-blue-500/40 hover:text-blue-700 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-white dark:hover:text-sky-200"
            >
              Resume
              <Download size={17} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-panel rounded-[2rem] p-5 sm:p-7">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-slate-950/[0.54]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Current Focus
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                    BigCommerce SaaS Products
                  </h2>
                </div>
                <div className="rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                  Active
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  "Theme library engineering",
                  "Merchant workflow optimization",
                  "Scalable SaaS application architecture",
                  "Performance-first eCommerce experiences"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200/75 bg-white/[0.72] p-4 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["3+", "Years"],
                  ["9", "Core Skills"],
                  ["4", "Projects"]
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-slate-950/[0.04] p-4 text-center dark:bg-white/[0.06]"
                  >
                    <div className="text-2xl font-black gradient-text">{value}</div>
                    <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
