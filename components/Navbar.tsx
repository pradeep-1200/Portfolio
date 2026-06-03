"use client";
import { useState, useEffect } from "react";
import { Menu, Download } from "lucide-react";
import site, { tagline } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      let cur = "home";
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) cur = s;
        }
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-40 px-4">
      <nav className="max-w-6xl mx-auto glass rounded-xl px-4 py-2 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <div className="font-semibold text-lg text-[color:var(--text)]">
            {site.name}
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-8 items-center">
          <button
            className={`text-sm ${active === "home" ? "text-[color:var(--primary)]" : ""}`}
            onClick={() => scrollTo("home")}
          >
            Home
          </button>
          <button
            className={`text-sm ${active === "about" ? "text-[color:var(--primary)]" : ""}`}
            onClick={() => scrollTo("about")}
          >
            About
          </button>
          <button
            className={`text-sm ${active === "skills" ? "text-[color:var(--primary)]" : ""}`}
            onClick={() => scrollTo("skills")}
          >
            Skills
          </button>
          <button
            className={`text-sm ${active === "projects" ? "text-[color:var(--primary)]" : ""}`}
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="contact-us-btn px-4 py-2 rounded-full"
          >
            Contact Me
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="menu"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="md:hidden mt-2 max-w-3xl mx-auto glass rounded-xl p-3">
          <div className="flex flex-col gap-3">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
            <div className="mt-2 text-[color:var(--muted)]">
              {tagline.split(" — ")[0]}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
