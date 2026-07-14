"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { contactInfo, siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]/80 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:px-6">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          Made with{" "}
          <Heart size={14} className="fill-rose-500 text-rose-500" aria-hidden />{" "}
          by {siteConfig.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
