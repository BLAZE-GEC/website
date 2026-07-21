"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Avoids a hydration mismatch — the real theme isn't known until
  // after the page has mounted in the browser.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // placeholder, same size, avoids layout shift
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="w-9 h-9 rounded-full flex items-center justify-center text-primary hover:text-accent hover:bg-primary/5 transition-colors"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}