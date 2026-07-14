"use client";

import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Selected work spanning Android apps and data analysis."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <GlassCard key={project.title} className="group flex h-full flex-col">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 group-hover:w-20" />
              <h3 className="font-display text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-sky-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400/40 hover:text-sky-300"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500/15 px-3 py-2 text-xs font-medium text-sky-300 transition hover:bg-sky-500/25"
                >
                  <ExternalLink size={14} />
                  {project.demoLabel}
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
