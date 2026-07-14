"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Skills"
          subtitle="Technical toolkit spanning data, mobile, and backend engineering."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <GlassCard key={category.title} className="h-full">
              <h3 className="mb-5 font-display text-lg font-semibold text-sky-300">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <ProgressBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 0.08}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
