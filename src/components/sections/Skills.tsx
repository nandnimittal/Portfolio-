"use client";

import { motion } from "framer-motion";
import {
  Braces,
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Smartphone,
  Wrench,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";

const categoryIcons: Record<string, typeof Code2> = {
  Programming: Code2,
  "Data Science": BrainCircuit,
  Android: Smartphone,
  Backend: Layers,
  Database: Database,
  Tools: Wrench,
  Concepts: Braces,
};

// One identity color per category — used for the accent rail, icon chip,
// comment header, and skill-tag dots. Distinct hues so cards read apart
// from each other at a glance instead of all sharing one blue.
const categoryAccents: Record<string, string> = {
  Programming: "#38bdf8", // sky
  "Data Science": "#a78bfa", // violet
  Android: "#4ade80", // emerald
  Backend: "#fbbf24", // amber
  Database: "#fb7185", // rose
  Tools: "#94a3b8", // slate
  Concepts: "#fb923c", // orange
};

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative section-padding scroll-mt-24 overflow-hidden"
    >
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute bottom-10 left-[10%] h-[280px] w-[280px] rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="absolute right-[5%] top-1/3 h-[240px] w-[240px] rounded-full bg-cyan-400/10 blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--background)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Skills"
          subtitle="Technical toolkit spanning data, mobile, and backend engineering."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.title] ?? Code2;
            const accent = categoryAccents[category.title] ?? "#38bdf8";

            return (
              <GlassCard
                key={category.title}
                style={{ "--accent": accent } as React.CSSProperties}
                className="group relative h-full overflow-hidden border-white/15 bg-[rgba(8,16,32,0.45)] pl-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_12px_40px_-8px_var(--accent)]"
              >
                {/* Signature: accent rail, brightens on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] bg-[var(--accent)]/40 transition-all duration-300 group-hover:w-[4px] group-hover:bg-[var(--accent)] group-hover:shadow-[0_0_16px_var(--accent)]"
                />

                {/* Code-comment style eyebrow */}
                <p className="mb-1.5 font-mono text-[11px] tracking-wide text-[var(--accent)]/70">
                  {`// ${slugify(category.title)}`}
                </p>

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/15 text-[var(--accent)] backdrop-blur-md transition-colors duration-300">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.04 + i * 0.03,
                        duration: 0.35,
                      }}
                      className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 backdrop-blur-md transition-colors duration-300 hover:border-[var(--accent)]/45 hover:bg-[var(--accent)]/15 hover:text-white"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}