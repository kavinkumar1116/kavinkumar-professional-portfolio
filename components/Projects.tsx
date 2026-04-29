"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "HR Management Portal",
    description:
      "Role-based HR platform covering employee records, leave workflows, attendance tracking, and operational dashboards.",
    points: ["RBAC system", "Employee management", "Leave & attendance modules", "Real-time dashboards"],
    stack: ["React.js", "PHP", "PostgreSQL", "RBAC"],
    link: "https://github.com/kavinkumar1116"
  },
  {
    title: "Inventory Management System",
    description:
      "Inventory operations product with live stock visibility, alerting, approval flows, and reporting for smarter decisions.",
    points: ["Real-time stock tracking", "Low-stock alerts", "Reporting dashboard", "Approval workflows"],
    stack: ["Next.js", "MSSQL", "GraphQL", "Dashboards"],
    link: "https://github.com/kavinkumar1116"
  },
  {
    title: "E-commerce Website",
    description:
      "Complete commerce experience with product discovery, checkout, payment integrations, and admin management tools.",
    points: ["Product listing & filtering", "Cart & checkout", "Razorpay, GPay, PhonePe", "Admin dashboard"],
    stack: ["React.js", "JavaScript", "Payments", "Admin"],
    link: "https://github.com/kavinkumar1116"
  },
  {
    title: "BigCommerce SaaS Development",
    description:
      "Product enhancements and theme engineering focused on merchant experience, storefront quality, and workflow speed.",
    points: ["SaaS product enhancements", "Theme development", "Merchant experience optimization"],
    stack: ["BigCommerce", "Next.js", "AWS Lambda", "CloudWatch"],
    link: "https://github.com/kavinkumar1116"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionReveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected work with practical business value.</h2>
          </div>
          <a
            href="https://github.com/kavinkumar1116"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-blue-500/40 hover:text-blue-700 dark:border-white/[0.12] dark:bg-white/[0.07] dark:text-white dark:hover:text-sky-200"
          >
            GitHub
            <ExternalLink size={16} />
          </a>
        </SectionReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass-panel flex h-full flex-col rounded-[1.75rem] p-6 transition hover:border-blue-500/[0.28] hover:shadow-glow sm:p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-5">
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    aria-label={`${project.title} GitHub`}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-950/[0.04] text-slate-700 transition hover:bg-blue-600 hover:text-white dark:bg-white/[0.08] dark:text-slate-200"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 grid gap-2">
                  {project.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl bg-slate-950/[0.035] px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-white/[0.055] dark:text-slate-200"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-500/[0.18] bg-blue-500/[0.08] px-3 py-1 text-xs font-bold text-blue-700 dark:border-sky-300/[0.18] dark:bg-sky-300/[0.08] dark:text-sky-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
