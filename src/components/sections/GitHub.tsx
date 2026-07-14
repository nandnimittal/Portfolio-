"use client";

import { useEffect, useState } from "react";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/portfolio";
import type { GitHubRepo } from "@/types";

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to load repositories");
        const data: GitHubRepo[] = await res.json();
        if (!cancelled) {
          setRepos(data.slice(0, 6));
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to fetch GitHub repositories right now.");
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="GitHub"
          subtitle={`Live repositories from github.com/${siteConfig.githubUsername}`}
        />

        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-slate-400">
            {error}{" "}
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline"
            >
              Visit GitHub profile
            </a>
          </p>
        )}

        {!loading && !error && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <GlassCard key={repo.id} className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-white">{repo.name}</h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-slate-400 transition hover:text-sky-300"
                    aria-label={`Open ${repo.name}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="mt-2 flex-1 text-sm text-slate-400 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} className="text-amber-400" />
                    {repo.stargazers_count}
                  </span>
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      {repo.language}
                    </span>
                  )}
                  {repo.fork && (
                    <span className="inline-flex items-center gap-1">
                      <GitFork size={12} />
                      Fork
                    </span>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
