"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = document.getElementById("custom-cursor");
      if (el) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      id="custom-cursor"
      className="custom-cursor w-5 h-5 rounded-full bg-[color:var(--primary)]/80 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
    />
  );
}
