import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Product-minded engineering for SaaS and commerce.</h2>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              I’m a Full-Stack Developer with 3+ years of experience specializing
              in building scalable SaaS applications and high-performance
              BigCommerce product solutions.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
              I focus on performance, usability, and business impact. Currently
              working on BigCommerce SaaS products and theme libraries, improving
              merchant experience and optimizing eCommerce workflows.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
