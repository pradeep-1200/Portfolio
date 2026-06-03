"use client";
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
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            {/* Top row: icon left, github right */}
            <div className="pc-top-row">
              <div className="pc-icon-wrap" aria-hidden>
                {p.icon ? <p.icon size={22} /> : null}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-github-btn"
                aria-label="Open repository"
              >
                <Github size={18} />
              </a>
            </div>

            {/* Title */}
            <h4 className="pc-title">{p.title}</h4>

            {/* Year in cyan */}
            <span className="pc-year">{p.year}</span>

            {/* Description */}
            <p className="pc-desc">{p.desc}</p>

            {/* Tech stack tags */}
            <div className="pc-tags">
              {p.stack.map((s) => (
                <span key={s} className="pc-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
