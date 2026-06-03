"use client";
import { useEffect, useRef } from "react";
import site, { tagline } from "../data/site";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Flutter Developer",
  "Problem Solver",
  "Hackathon Enthusiast",
];

function useTyping(elRef: any) {
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    let idx = 0;
    let i = 0;
    let timeout: any;
    const tick = () => {
      const full = roles[idx];
      i++;
      el.textContent = full.slice(0, i);
      if (i >= full.length) {
        // wait a bit then move to next role
        timeout = setTimeout(() => {
          i = 0;
          idx = (idx + 1) % roles.length;
          el.textContent = "";
          timeout = setTimeout(tick, 80);
        }, 800);
      } else {
        timeout = setTimeout(tick, 80);
      }
    };
    // start immediately so first char shows without delay
    tick();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [elRef]);
}

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement | null>(null);
  useTyping(typingRef);

  useEffect(() => {
    // Dynamically import GSAP so it doesn't bloat initial client bundle
    let ctx: any;
    let mounted = true;
    import("gsap").then(({ gsap }) => {
      if (!mounted) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-name", { y: 40, opacity: 0, duration: 0.8 }).from(
          ".hero-sub",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.4",
        );
        gsap.to(".blob", {
          rotation: 360,
          repeat: -1,
          duration: 30,
          ease: "none",
        });
        gsap.to(".floating", {
          y: "-=20",
          yoyo: true,
          repeat: -1,
          duration: 4,
          ease: "sine.inOut",
        });
      });
    });
    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

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
            {(() => {
              const parts = site.name.split(" ");
              const first = parts.shift() || "";
              const rest = parts.join(" ");
              return (
                <>
                  <span className="text-[color:var(--primary)]">{first}</span>{" "}
                  {rest}
                </>
              );
            })()}
          </motion.h1>

          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-sub text-xl md:text-2xl text-[color:var(--muted)] mt-4"
          >
            I am a{" "}
            <span
              ref={typingRef}
              className="font-medium text-[color:var(--text)]"
            >
              {roles[0].slice(0, 1)}
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
