"use client";

import { useState } from "react";
import { educationData, experienceData, techStack } from "./data";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">(
    "education",
  );
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const activeData = activeTab === "education" ? educationData : experienceData;

  return (
    <div className="space-y-12 pb-12">
      <header className="border-b-4 border-dashed border-snes-textLight dark:border-snes-textDark pb-6">
        <h1 className="text-4xl font-bold uppercase text-snes-textLight dark:text-snes-textDark">
          <span className="text-snes-accent mr-2">♦</span>
          CHARACTER INFO
        </h1>
        <p className="mt-2 text-lg opacity-80">
          Background story and skill proficiency.
        </p>
      </header>

      <section className="space-y-6">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 border-4 font-bold uppercase transition-all ${
              activeTab === "education"
                ? "bg-snes-accent text-white border-snes-textLight dark:border-snes-textDark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-transparent border-snes-textLight dark:border-snes-textDark opacity-50 hover:opacity-100"
            }`}
          >
            EDUCATION
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 border-4 font-bold uppercase transition-all ${
              activeTab === "experience"
                ? "bg-snes-accent text-white border-snes-textLight dark:border-snes-textDark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-transparent border-snes-textLight dark:border-snes-textDark opacity-50 hover:opacity-100"
            }`}
          >
            EXPERIENCE
          </button>
        </div>

        <div className="grid gap-6">
          {activeData.map((item, index) => (
            <div
              key={index}
              className="border-4 border-snes-textLight dark:border-snes-textDark p-6 bg-white dark:bg-black relative group hover:shadow-[8px_8px_0px_0px_var(--color-snes-accent)] transition-all"
            >
              <div className="absolute top-0 right-0 w-4 h-4 bg-snes-textLight dark:bg-snes-textDark" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b-2 border-dashed border-gray-400 pb-2">
                <div>
                  <h3 className="text-2xl font-bold text-snes-textLight dark:text-snes-textDark">
                    {item.institution}
                  </h3>
                  <span className="text-snes-accent font-bold text-sm">
                    {item.title}
                  </span>
                </div>
                <div className="text-sm font-mono opacity-70 mt-2 md:mt-0 bg-gray-200 dark:bg-gray-800 px-2 py-1 inline-block">
                  [{item.year}]
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 opacity-80">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-snes-textLight dark:text-snes-textDark">
          <span className="text-snes-accent">♦</span> SKILL TREE
        </h2>

        <div className="h-16 border-4 border-snes-textLight dark:border-snes-textDark bg-black flex items-center justify-center mb-4 transition-all">
          {hoveredTech ? (
            <span className="text-xl md:text-2xl font-mono text-snes-accent animate-pulse uppercase text-center w-full truncate px-4">
              &gt; DETECTED: {hoveredTech}_
            </span>
          ) : (
            <span className="text-white font-mono text-sm md:text-base animate-pulse">
              &gt; HOVER OVER A SKILL TO SCAN...
            </span>
          )}
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`
                aspect-square border-4 border-snes-textLight dark:border-snes-textDark 
                bg-white dark:bg-black flex items-center justify-center text-3xl sm:text-4xl 
                text-gray-400 cursor-crosshair transition-all duration-200
                hover:scale-110 hover:border-snes-accent hover:bg-gray-100 dark:hover:bg-gray-900
                ${tech.color}
              `}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
