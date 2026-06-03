"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-4"
      >
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded"
          placeholder="Type a command or page (e.g. projects) — Ctrl+K to toggle"
        />
        <div className="mt-3">
          <div className="text-sm text-gray-500">Quick actions</div>
          <div className="mt-2 grid gap-2">
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
              className="text-left p-2 rounded hover:bg-gray-50"
            >
              Go to Projects
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
              className="text-left p-2 rounded hover:bg-gray-50"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
