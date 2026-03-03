"use client";

import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "./projectsData";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="border-b-4 border-dashed border-snes-textLight dark:border-snes-textDark pb-6">
        <h1 className="text-4xl font-bold uppercase text-snes-textLight dark:text-snes-textDark">
          <span className="text-snes-accent mr-2">♦</span>
          My Projects
        </h1>
        <p className="mt-2 text-lg opacity-80">
          List of deployed artifacts and side quests.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
