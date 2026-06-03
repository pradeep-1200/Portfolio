"use client";
import site from "../data/site";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between text-[color:var(--muted)] gap-3">
        <div>
          <div>
            © {new Date().getFullYear()} {site.name}
          </div>
          <div className="text-sm mt-1">
            Building scalable apps with passion and hard work.
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <a href={site.links.github} aria-label="GitHub">
            <Github />
          </a>
          <a href={site.links.linkedin} aria-label="LinkedIn">
            <Linkedin />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-3 py-1 border rounded"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
