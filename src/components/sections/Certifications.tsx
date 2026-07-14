"use client";

import { Award } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials that reinforce skills across cloud, data, and development."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <GlassCard key={cert.title} className="flex flex-col items-start gap-3">
              <div className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-2.5 text-sky-400">
                <Award size={20} />
              </div>
              <h3 className="font-semibold leading-snug text-white">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400">{cert.issuer}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
