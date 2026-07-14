"use client";

import { motion } from "framer-motion";
import { Download, FolderKanban, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TypingText } from "@/components/ui/TypingText";
import { floatingTechs, heroContent, siteConfig } from "@/data/portfolio";

/** Evenly spaced orbit just outside the portrait rim. */
function getOrbitPosition(index: number, total: number) {
  const angleDeg = -90 + (360 / total) * index;
  const angleRad = (angleDeg * Math.PI) / 180;
  const radius = 58;
  return {
    left: `${50 + Math.cos(angleRad) * radius}%`,
    top: `${50 + Math.sin(angleRad) * radius}%`,
  };
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-sky-500/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_#050b18_70%)]" />
      </div>

      {/* Portrait with evenly orbiting skill tags */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="pointer-events-none absolute right-[2%] top-[52%] z-0 hidden h-[min(48vw,400px)] w-[min(48vw,400px)] -translate-y-1/2 md:block lg:right-[5%] xl:right-[8%]"
        aria-hidden
      >
        <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-sky-400/30 via-blue-500/20 to-transparent blur-2xl" />
        <div
          className="absolute inset-[14%] overflow-hidden rounded-full border-[3px] border-sky-400/70 shadow-[0_0_0_4px_rgba(56,189,248,0.15),0_0_36px_rgba(56,189,248,0.28)]"
          style={{
            backgroundImage: `url(${siteConfig.profileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center 18%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050b18]/15 to-[#050b18]/50" />
        </div>

        {floatingTechs.map((tech, i) => {
          const pos = getOrbitPosition(i, floatingTechs.length);
          return (
            <motion.span
              key={tech}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-sky-300/50 bg-[#0a1628]/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-sky-100 shadow-[0_0_14px_rgba(56,189,248,0.22)] backdrop-blur-md"
              style={{ left: pos.left, top: pos.top }}
              animate={{
                y: [0, -6, 0],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3.6 + (i % 3) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              {tech}
            </motion.span>
          );
        })}
      </motion.div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl lg:max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
            Portfolio
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {heroContent.greeting}
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {heroContent.name}
            </span>
          </h1>

          <p className="mt-5 min-h-[1.75rem] text-lg text-sky-300/90 md:text-xl">
            <TypingText texts={heroContent.roles} />
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={siteConfig.resumePath} variant="primary">
              <Download size={16} />
              Download Resume
            </Button>
            <Button href="#projects" variant="secondary">
              <FolderKanban size={16} />
              View Projects
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail size={16} />
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
