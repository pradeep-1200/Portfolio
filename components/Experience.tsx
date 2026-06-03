"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold">Experience</h3>
     
      <div className="mt-6 space-y-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass p-4 rounded-lg"
        >
          <h4 className="font-semibold">
            Viruzverse Solutions — Flutter Developer Intern
          </h4>
          <ul className="mt-2 text-[color:var(--muted)] list-disc pl-5">
            <li>Developed Cafeaura Admin App</li>
            <li>Firebase Authentication, Firestore, Realtime DB</li>
            <li>UI/UX Enhancements and production-ready features</li>
          </ul>
          <div className="mt-4">
            <div className="text-sm text-[color:var(--muted)] mb-2">
              Certificate preview
            </div>
            <a
              href="https://drive.google.com/file/d/1VI7tXwgOMeNK50bsaJtPsvLhfUuTEHYN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bordered-action px-3 py-1 rounded"
            >
              Viruzverse Certificate
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass p-4 rounded-lg"
        >
          <div>
<h4 className="font-semibold">
            Aptitude Guru Hem - MERN
          </h4>
          </div>
          <ul className="mt-2 text-[color:var(--muted)] list-disc pl-5">
            <li>MERN stack features and API development</li>
            <li>Database design with MongoDB</li>
            <li>End-to-end feature delivery</li>
          </ul>
          <div className="mt-4">
            <div className="text-sm text-[color:var(--muted)] mb-2">
              Certificate preview
            </div>
            <a
              href="https://drive.google.com/file/d/1ENWaT_hArN8huBy_vpEJNDuI_mC8lsRB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bordered-action px-3 py-1 rounded"
            >
              Aptitude Guru Hem Certificate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
