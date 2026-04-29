"use client";

import { motion } from "framer-motion";
import {
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiReact
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Activity, Database } from "lucide-react";
import SectionReveal from "./SectionReveal";

const skills = [
  { name: "React.js", icon: SiReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-950 dark:text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "PostgreSQL (pgAdmin)", icon: SiPostgresql, color: "text-blue-700 dark:text-blue-300" },
  { name: "MSSQL", icon: Database, color: "text-red-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "AWS Lambda", icon: FaAws, color: "text-orange-500" },
  { name: "AWS CloudWatch", icon: Activity, color: "text-emerald-500" }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white/[0.44] py-24 dark:bg-white/[0.025] sm:py-28">
      <div className="section-shell">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools I use to ship reliable products.</h2>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <SectionReveal key={skill.name} delay={index * 0.035}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.025 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="group glass-panel flex min-h-28 items-center gap-4 rounded-3xl p-5 transition hover:border-blue-500/[0.28] hover:shadow-glow"
                >
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-slate-950/[0.04] transition group-hover:scale-105 dark:bg-white/[0.07]">
                    <Icon className={`size-7 ${skill.color}`} />
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {skill.name}
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
