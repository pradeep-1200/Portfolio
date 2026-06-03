"use client";
import { motion } from "framer-motion";
import { MessageSquare, BookOpen, Ticket, Github } from "lucide-react";

const projects = [
  {
    title: "WebChat",
    icon: MessageSquare,
    year: 2025,
    github: "https://github.com/pradeep-1200/WebChat-Frontend",
    stack: ["ReactJS", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
    desc: "Real-time messaging app with auth and friend management.",
  },
  {
    title: "LearnFlow",
    icon: BookOpen,
    year: 2025,
    github: "https://github.com/pradeep-1200/Learn-Flow-Frontend",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    desc: "Course management and coding progress tracking platform.",
  },
  {
    title: "Bunk Master",
    icon: Ticket,
    year: 2025,
    github: "https://github.com/pradeep-1200/Bunk-Master.git",
    stack: ["Flutter", "Dart"],
    desc: "Attendance tracking app with percentage prediction and local storage.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold">Projects</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6 }}
            className="project-card glass p-5 rounded-lg relative"
          >
            <div className="absolute top-4 left-4 icon-placeholder" aria-hidden>
              {p.icon ? <p.icon size={20} /> : null}
            </div>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 github-action" aria-label="Open repository"><Github size={16} /></a>
            <h4 className="font-semibold text-lg mt-2">{p.title}</h4>
            <span className="year-pill">{p.year}</span>
            <p className="text-[color:var(--muted)] mt-4 leading-relaxed">{p.desc}</p>
            <div className="mt-5 flex gap-2 flex-wrap">
              {p.stack.map((s) => (
                <span key={s} className="project-tag text-xs px-3 py-1 rounded">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
