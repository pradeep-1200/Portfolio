"use client";
import { useEffect, useState } from "react";
import site, { tagline } from "../data/site";
import { motion } from "framer-motion";

const roles = [
  "Web Developer",
  "Full Stack Developer",
  "Flutter Developer",
  "Problem Solver",
  "Hackathon Enthusiast",
];

function useTypingText() {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    let idx = 0;
    let letter = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = roles[idx];
      letter += 1;
      setText(full.slice(0, letter));

      if (letter >= full.length) {
        timeout = setTimeout(() => {
          letter = 0;
          idx = (idx + 1) % roles.length;
          setText("");
          timeout = setTimeout(tick, 80);
        }, 800);
      } else {
        timeout = setTimeout(tick, 80);
      }
    };

    timeout = setTimeout(tick, 80);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return text;
}

export default function Hero() {
  const typedText = useTypingText();

  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-name text-4xl md:text-6xl font-extrabold leading-tight"
          >
            I am{" "}
            <span className="text-[color:var(--primary)]">
              {site.name.split(" ")[0]}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-sub text-xl md:text-2xl text-[color:var(--muted)] mt-4"
          >
            I am{" "}
            <span className="font-medium text-[color:var(--text)]">
              {typedText || roles[0]}
            </span>
            <span
              className="inline-block w-1 h-5 align-middle ml-1 bg-[color:var(--muted)] animate-pulse"
              aria-hidden
            />
          </motion.h2>

          <div className="flex gap-4 mt-4">
            <button
              className="px-4 py-2 rounded-md bg-[color:var(--primary)] text-white"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>
            <button
              className="px-4 py-2 rounded-md bg-white border"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
          <div className="mt-4 text-[color:var(--muted)]">{tagline}</div>
        </div>

        <div className="hidden md:flex flex-col items-start gap-4">
          <div className="text-[color:var(--muted)]">Connect with me</div>
          <div className="flex gap-3">
            <a href={site.links.linkedin} className="text-[color:var(--text)]">
              LinkedIn
            </a>
            <a href={site.links.github} className="text-[color:var(--text)]">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
