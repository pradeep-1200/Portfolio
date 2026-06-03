"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = (window.scrollY / h) * 100;
      setProgress(Number.isFinite(p) ? Math.max(0, Math.min(100, p)) : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 h-1 z-50 bg-transparent">
      <div
        style={{ width: `${progress}%` }}
        className="h-1 bg-[color:var(--accent)] transition-[width] duration-150"
      />
    </div>
  );
}
