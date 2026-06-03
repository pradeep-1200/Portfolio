"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ to }: { to: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1000;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (to - start) + start);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <div className="text-2xl font-bold">{value}</div>;
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 items-start"
      >
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="mt-4 text-[color:var(--muted)]">
            Computer Science Engineering student and Full Stack Developer. I
            build scalable web and mobile applications, and I’m driven by
            passion, consistency, and hard work. I believe continuous practice
            in DSA, competitive programming, and hackathons sharpens my craft.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass p-4 rounded-lg">
              <h4 className="font-semibold">Education</h4>
              <p className="text-[color:var(--muted)]">
                B.Tech - Computer Science Engineering
              </p>
            </div>
            <div className="glass p-4 rounded-lg">
              <h4 className="font-semibold">Current CGPA</h4>
              <p className="text-[color:var(--muted)]">7.83 / 10</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <h4 className="font-semibold">Internship Experience</h4>
              <p className="text-[color:var(--muted)]">
                Viruzverse Solutions - Flutter Intern; Aptitude Guru Hem - MERN
              </p>
            </div>
            <div className="glass p-4 rounded-lg">
              <h4 className="font-semibold">Career Goals</h4>
              <p className="text-[color:var(--muted)]">
                Build scalable products, lead engineering teams, and contribute
                to open-source.
              </p>
            </div>
          </div>
        </div>

        <aside className="glass p-4 rounded-lg">
          <h4 className="font-semibold">Quick Stats</h4>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-[color:var(--muted)]">Leetcode</div>
            </div>
            <div>
              <div className="text-2xl font-bold">1194+</div>
              <div className="text-[color:var(--muted)]">SkillRack</div>
            </div>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}
