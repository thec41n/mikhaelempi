import Link from "next/link";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  color: string;
}

export default function ProjectCard({ title, desc, tags, link, color }: ProjectProps) {
  return (
    <Link href={link} target="_blank" className="block h-full">
      <div className="group h-full border-4 border-snes-textLight dark:border-snes-textDark bg-white dark:bg-black/20 p-4 relative hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--color-snes-accent)] transition-all duration-300">
        
        <div 
          className="w-full h-32 mb-4 border-2 border-dashed border-snes-textLight dark:border-snes-textDark flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: color }}
        >
           <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
           <span className="text-4xl font-bold text-white opacity-50">IMG</span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-snes-textLight dark:text-snes-textDark group-hover:text-snes-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-sm mb-4 opacity-80 leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-bold px-2 py-1 bg-snes-textLight text-snes-light dark:bg-snes-textDark dark:text-snes-dark uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}