import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Retro Portfolio",
    desc: "A 16-bit inspired portfolio website built with Next.js, Tailwind CSS, and pure nostalgia. Features a custom glitch theme toggle.",
    tags: ["Next.js", "Tailwind", "React"],
    link: "https://github.com/thec41n/portfolio",
    color: "#D35400",
  },
  {
    title: "Cyber Shield API",
    desc: "Secure REST API built for handling encrypted transactions. Implements JWT auth and rate limiting.",
    tags: ["Node.js", "Express", "Security"],
    link: "https://github.com/thec41n/api",
    color: "#2980B9",
  },
  {
    title: "Pixel Art Generator",
    desc: "A web-based tool to convert images into pixel art using HTML5 Canvas API.",
    tags: ["JavaScript", "Canvas", "CSS"],
    link: "#",
    color: "#27AE60",
  },
  {
    title: "Task Quest App",
    desc: "Gamified to-do list app that turns your daily chores into RPG quests with XP and leveling up.",
    tags: ["Vue.js", "Firebase", "Game Design"],
    link: "#",
    color: "#8E44AD",
  },
];

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
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}