"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "theme";

/**
 * Light/dark toggle. Persists the choice and defaults to the OS preference
 * on first visit. The inline script in layout.tsx applies the theme before
 * paint so there is no flash of the wrong theme.
 */
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") ??
      "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage can be blocked; the toggle still works for this session */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="rounded-lg border border-base-content/15 p-2 text-base-content transition-colors hover:border-primary hover:text-primary"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {!mounted || theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
