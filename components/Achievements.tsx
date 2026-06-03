"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Leetcode", value: "200+" },
  { label: "SkillRack", value: "1194+" },
  { label: "Hackathon", value: "Top 10 K! Hacks 3.0" },
  { label: "Participations", value: "5+" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold">Achievements</h3>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={s.label}
            className="glass p-4 rounded-lg text-center"
          >
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-[color:var(--muted)]">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
