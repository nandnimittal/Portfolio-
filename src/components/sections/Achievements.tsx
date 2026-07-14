"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones that reflect consistency, craft, and community."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <AnimatedCounter
              key={item.title}
              value={item.value ?? ""}
              label={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
