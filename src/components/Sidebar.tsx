"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "HERO", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "QUESTS", path: "/projects" },
  { name: "LOGS", path: "/blog" },
  { name: "MAIL", path: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full md:w-64 flex-shrink-0 z-50 transition-all">
      <div className="bg-snes-light dark:bg-snes-dark border-b-4 md:border-b-0 md:border-r-4 border-snes-textLight dark:border-snes-textDark flex flex-col md:h-screen md:sticky md:top-0 p-6 md:gap-6">
        
        <div className="flex justify-between items-center gap-4 md:mb-0">
          <div className="w-full"> 
            <div className="border-4 border-snes-textLight dark:border-snes-textDark p-2 text-center bg-snes-accent text-white shadow-[4px_4px_0px_0px_rgba(44,44,44,1)] dark:shadow-[4px_4px_0px_0px_#00FF41]">
              <h1 className="text-xl font-bold tracking-widest leading-none">
                D.M.E
              </h1>
              <span className="text-xs opacity-90">LVL. 50 DEV</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-4 border-snes-textLight dark:border-snes-textDark p-2 bg-white dark:bg-black/20 active:bg-snes-accent active:text-white h-full flex items-center justify-center font-bold shrink-0 transition-colors"
          >
            <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
              {isOpen ? "X" : "≡"}
            </span>
          </button>
        </div>
        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} md:grid-rows-[1fr]`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-6 pt-6 md:pt-0">
              
              <div className="mt-2 md:mt-0">
                <ThemeToggle />
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="group relative block text-lg text-snes-textLight dark:text-snes-textDark hover:text-snes-accent dark:hover:text-snes-accent transition-colors"
                  >
                    <span className="inline-block w-4 opacity-0 group-hover:opacity-100 transition-opacity text-snes-accent">
                      ►
                    </span>
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto md:pt-6 text-xs text-center opacity-60 text-snes-textLight dark:text-snes-textDark">
                © 2026 16-BIT
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </aside>
  );
}