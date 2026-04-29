import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionReveal from "./SectionReveal";

const contactItems = [
  {
    label: "Phone",
    value: "7708027444",
    href: "tel:7708027444",
    icon: Phone
  },
  {
    label: "Email",
    value: "akavinkumarit1116@gmail.com",
    href: "mailto:akavinkumarit1116@gmail.com",
    icon: Mail
  },
  {
    label: "GitHub",
    value: "github.com/kavinkumar1116",
    href: "https://github.com/kavinkumar1116",
    icon: Github
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kavinkumar1116",
    href: "https://www.linkedin.com/in/kavinkumar1116/",
    icon: Linkedin
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionReveal className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let’s build something useful and polished.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                Available for conversations around SaaS product development,
                BigCommerce engineering, storefront performance, and full-stack
                application builds.
              </p>
            </div>
            <div className="grid gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-3xl border border-slate-200/80 bg-white/[0.65] p-4 transition hover:border-blue-500/30 hover:bg-white hover:shadow-glow dark:border-white/10 dark:bg-white/[0.045] dark:hover:bg-white/[0.075]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-700 transition group-hover:scale-105 dark:text-sky-200">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {item.label}
                      </span>
                      <span className="block truncate text-sm font-bold text-slate-950 dark:text-white sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
