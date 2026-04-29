import { BriefcaseBusiness } from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-white/[0.44] py-24 dark:bg-white/[0.025] sm:py-28">
      <div className="section-shell">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Focused on digital commerce engineering.</h2>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-12 max-w-3xl">
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent" />
            <div className="relative glass-panel rounded-[1.75rem] p-6 sm:p-8">
              <div className="absolute -left-[2.15rem] top-8 grid size-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-glow">
                <BriefcaseBusiness size={19} />
              </div>
              <div className="mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-sky-200">
                Full-time - 2023 to 2026
              </div>
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                Fill Stack Web Developer
              </h3>
              <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-300">
                Fues Technologies Solution
              </p>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                Experienced in creating responsive e-commerce websites, HR portals, and stock management
                applications. Proven ability to develop dynamic, user-friendly websites that enhance user engagement and
                drive business growth.
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-12 max-w-3xl">
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent" />
            <div className="relative glass-panel rounded-[1.75rem] p-6 sm:p-8">
              <div className="absolute -left-[2.15rem] top-8 grid size-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-glow">
                <BriefcaseBusiness size={19} />
              </div>
              <div className="mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-sky-200">
                Full-time -2026 to Present
              </div>
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                BigCommerce Developer
              </h3>
              <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-300">
                Arizon Digital USA - Digital Commerce Experts
              </p>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                Building and improving BigCommerce SaaS products, theme libraries,
                merchant-facing workflows, and eCommerce experiences with an
                emphasis on speed, reliability, and usability.
              </p>
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
