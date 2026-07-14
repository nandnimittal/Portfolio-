import { NextResponse } from "next/server";
import { siteConfig } from "@/data/portfolio";
import type { GitHubRepo } from "@/types";

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=12`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "nandni-portfolio",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub API request failed" },
        { status: res.status }
      );
    }

    const data: GitHubRepo[] = await res.json();
    const filtered = data
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        fork: repo.fork,
        updated_at: repo.updated_at,
      }));

    return NextResponse.json(filtered);
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch repositories" },
      { status: 500 }
    );
  }
}
