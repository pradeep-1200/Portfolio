"use client";
import site from "../data/site";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center">
        <h3 className="text-3xl font-bold">Get In Touch</h3>
        <div className="mx-auto mt-2 w-12 h-1 rounded bg-[color:var(--accent)]" />
        <p className="mt-6 text-[color:var(--muted)] max-w-2xl mx-auto">
          I'm open to internships, collaborations, or just a good tech
          conversation. My inbox is always open.
        </p>

        <div className="mt-8">
          <a
            href={`mailto:${site.email}`}
            className="say-hello-btn inline-block px-6 py-4 rounded-md font-medium shadow-md"
          >
            Say Hello →
          </a>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-[color:var(--muted)]">
          <div className="flex items-center gap-2">
            <Github size={18} />
            <a href={site.links.github} className="hover:underline">{site.links.github.replace(/^https?:\/\//, '')}</a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={18} />
            <a href={site.links.linkedin} className="hover:underline">{site.links.linkedin.replace(/^https?:\/\//, '')}</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
