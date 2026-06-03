"use client";
import { motion } from "framer-motion";

// deterministic width generator so server and client render match
function hashToPercent(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  h = Math.abs(h);
  // map to 30..90
  return (h % 61) + 30 + "%";
}

const categories = [
  {
    title: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
  },
  { title: "Frontend", items: ["React", "Flutter", "Tailwind", "HTML", "CSS"] },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "Flask", "Django"],
  },
  { title: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "AWS", "Vercel"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold">Skills</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            whileHover={{ y: -6 }}
            className="glass p-4 rounded-lg"
          >
            <h4 className="font-semibold">{cat.title}</h4>
            <ul className="mt-3 space-y-2">
              {cat.items.map((i) => (
                <li key={i} className="flex items-center justify-between">
                  <div className="text-[color:var(--muted)]">{i}</div>
                  <div className="w-36 ml-4 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-[color:var(--primary)]"
                      style={{ width: hashToPercent(i) }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
