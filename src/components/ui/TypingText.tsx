"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export function TypingText({
  texts,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 1800,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && display === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplay((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, texts, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className} aria-live="polite">
      {display}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-sky-400 align-middle" />
    </span>
  );
}
