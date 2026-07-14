"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  description: string;
}

export function AnimatedCounter({
  value,
  label,
  description,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const numeric = parseFloat(value);
  const isNumeric = !Number.isNaN(numeric);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!inView || !isNumeric) return;

    const suffix = value.replace(/[\d.]/g, "");
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(
        (Number.isInteger(numeric)
          ? Math.round(current).toString()
          : current.toFixed(2)) + suffix
      );
      if (progress < 1) requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, isNumeric, numeric, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl border border-white/10 p-6 text-center"
    >
      <span className="font-display text-3xl font-bold text-sky-400 md:text-4xl">
        {display}
      </span>
      <h3 className="mt-2 font-semibold text-white">{label}</h3>
      <p className="mt-1 text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}
