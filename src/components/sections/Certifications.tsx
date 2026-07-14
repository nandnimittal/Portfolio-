"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/portfolio";

type Certification = (typeof certifications)[number];

export function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  useEffect(() => {
    if (!activeCert) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCert(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCert]);

  return (
    <section id="certifications" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials that reinforce skills across cloud, data, and development."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCert(cert)}
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCert(cert);
                }
              }}
              className="cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            >
              <GlassCard className="group flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_12px_32px_-8px_rgba(56,189,248,0.35)]">
                <div className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-2.5 text-sky-400 transition-colors duration-300 group-hover:border-sky-400/40 group-hover:bg-sky-500/20">
                  <Award size={20} />
                </div>
                <h3 className="font-semibold leading-snug text-white">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400">{cert.issuer}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCert(cert);
                  }}
                  className="mt-1 text-xs font-medium text-sky-400/70 opacity-0 transition-opacity duration-300 hover:text-sky-300 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
                >
                  View certificate →
                </button>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setActiveCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCert.title} certificate`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#0a1220] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate preview"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-sky-400/40 hover:bg-sky-500/20"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[4/3] w-full bg-black/20">
                <Image
                  src={activeCert.certificate}
                  alt={`${activeCert.title} certificate`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                <div>
                  <h3 className="font-semibold text-white">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs text-slate-400">{activeCert.issuer}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}