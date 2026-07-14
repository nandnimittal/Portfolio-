"use client";

import { Droplets, HandHeart, Users } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { community } from "@/data/portfolio";

const icons = [Droplets, HandHeart, Users];

export function Community() {
  return (
    <section id="community" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Community"
          subtitle="Giving back through volunteering and local impact initiatives."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {community.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <GlassCard key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-sky-400">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
