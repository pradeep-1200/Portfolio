"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // load saved theme on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site-theme") as
        | "light"
        | "dark"
        | null;
      if (saved) setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") {
      localStorage.setItem("site-theme", theme);
    }
  }, [theme]);

  return (
    <div className="theme-toggle inline-flex items-center">
      <button
        aria-label="Toggle theme"
        className={`toggle-track ${theme === "dark" ? "dark" : "light"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span
          className={`toggle-thumb ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
        />
        <span className="sr-only">Toggle theme</span>
      </button>
      <div className="ml-2 flex items-center gap-1 text-[color:var(--muted)]">
        {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      </div>
    </div>
  );
}
