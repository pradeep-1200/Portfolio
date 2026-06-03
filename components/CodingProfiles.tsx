"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import site from "../data/site";

const profiles = [
  { name: "LeetCode", url: site.links.leetcode ?? "#" },
  { name: "SkillRack", url: site.links.skillrack ?? "#" },
  { name: "GitHub", url: site.links.github },
  { name: "LinkedIn", url: site.links.linkedin },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold">Coding Profiles</h3>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {profiles.map((p) => (
          <motion.a
            key={p.name}
            href={p.url}
            whileHover={{ scale: 1.02 }}
            className="glass p-4 rounded-lg flex items-center justify-between"
            target="_blank"
            rel="noreferrer"
          >
            <div className="font-semibold">{p.name}</div>
            <div className="text-[color:var(--muted)]">
              <ExternalLink size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
