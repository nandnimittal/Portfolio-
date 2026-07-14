"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export function GlassCard({
  children,
  className,
  hover = true,
  style,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      style={style}
      className={cn(
        "glass rounded-2xl border border-white/10 p-6 transition-shadow duration-300",
        hover && "hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
