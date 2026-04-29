"use client";

import "./style.css";

const skills = [
  "Python",
  // "Django",
  "Flask",
  "FastAPI",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "React",
  "MongoDB",
  "Oracle",
  "Java",
];

export default function Skills() {
  return (
    <div
      className="relative w-full max-w-6xl mx-auto overflow-hidden py-10 my-5"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-8 py-3 bg-violet-900/30 border border-violet-400/30 rounded-full text-violet-200 font-mystic text-2xl whitespace-nowrap shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-md"
          >
            {skill}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={`dup-${index}`}
            className="px-8 py-3 bg-violet-900/30 border border-violet-400/30 rounded-full text-violet-200 font-mystic text-2xl whitespace-nowrap shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
