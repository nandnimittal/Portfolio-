"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Code2,
  Cpu,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningJourney } from "@/data/portfolio";

const icons = [Smartphone, Brain, Sparkles, Cpu, Code2, BookOpen];

export function Experience() {
  return (
    <section id="experience" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Learning Journey"
          subtitle="As a fresher, I am continuously building depth across these focus areas."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningJourney.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition hover:border-sky-400/30"
              >
                <div className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-3 text-sky-400">
                  <Icon size={22} />
                </div>
                <span className="font-medium text-white">{item}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
