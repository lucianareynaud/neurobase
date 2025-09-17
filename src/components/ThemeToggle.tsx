"use client";

import { useEffect, useState } from "react";

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getStoredTheme(): "light" | "dark" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem("theme");
    return v === "dark" || v === "light" ? v : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = getStoredTheme();
    const initial: "light" | "dark" = stored ?? (getSystemPrefersDark() ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Show target mode label: if current is dark, CTA shows Light mode to switch into
  const targetLabel = theme === "dark" ? "Light mode" : "Dark mode";
  const targetIcon = theme === "dark" ? "☀️" : "🌙";

  return (
    <button
      type="button"
      aria-label={`Mudar para ${targetLabel}`}
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary hover:bg-secondary/40"
    >
      <span className="hidden sm:inline">{targetLabel}</span>
      <span aria-hidden>{targetIcon}</span>
    </button>
  );
}


