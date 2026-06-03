"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  { title: "C & C++", img: "/images/learnflow-preview.svg" },
  { title: "Web Design", img: "/images/webchat-preview.svg" },
  { title: "DSA Using C & C++", img: "/images/learnflow-preview.svg" },
  { title: "Java from Zero to First Job", img: "/images/webchat-preview.svg" },
  { title: "HackerRank SQL", img: "/images/bunkmaster-preview.svg" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold">Certifications</h3>
      <div className="mt-6 flex gap-4 overflow-x-auto py-4">
        {certs.map((c) => (
          <motion.div
            key={c.title}
            whileHover={{ scale: 1.03 }}
            className="min-w-[260px] glass p-4 rounded-lg"
          >
            <div className="h-40 mb-2 overflow-hidden rounded">
              <Image
                src={c.img}
                alt={`${c.title} preview`}
                width={800}
                height={360}
              />
            </div>
            <div className="font-semibold">{c.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
