"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in Computer Science Engineering."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/60 via-blue-500/30 to-transparent md:left-1/2" />

          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative mb-10 pl-12 md:mb-14 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
              }`}
            >
              <span
                className={`absolute left-[0.7rem] top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-sky-400 bg-[#050b18] md:left-1/2 md:-translate-x-1/2`}
              >
                <GraduationCap size={10} className="text-sky-400" />
              </span>

              <div className="glass rounded-2xl border border-white/10 p-6 text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  {item.period}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-400">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                {item.highlight && (
                  <p className="mt-3 inline-block rounded-lg bg-sky-500/15 px-3 py-1 text-sm font-semibold text-sky-300">
                    {item.highlight}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
