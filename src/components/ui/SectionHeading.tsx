"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
