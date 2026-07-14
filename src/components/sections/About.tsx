"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, aboutTimeline } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="A brief look at my journey and what drives me."
        />

        <div className="mx-auto max-w-3xl space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-slate-300"
          >
            {aboutContent.intro}
          </motion.p>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              {aboutContent.interestsLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {aboutContent.interests.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="relative space-y-0 border-l border-sky-500/30 pl-6">
            {aboutTimeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pb-8 last:pb-0"
              >
                <span className="absolute -left-[1.95rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-sky-400 bg-[#050b18]" />
                <span className="text-sm font-semibold text-sky-400">
                  {item.year}
                </span>
                <h4 className="mt-1 font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
