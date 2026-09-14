"use client";

import Link from "next/link";
import {
  MdHome,
  MdPerson,
  MdCode,
  MdArticle,
  MdEmail,
} from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

export const navItems = [
  { name: "HERO", path: "/", icon: MdHome },
  { name: "ABOUT", path: "/about", icon: MdPerson },
  { name: "QUESTS", path: "/projects", icon: MdCode },
  { name: "LOGS", path: "/blog", icon: MdArticle },
  { name: "MAIL", path: "/contact", icon: MdEmail },
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 z-50 transition-all">
      <div className="bg-snes-light dark:bg-snes-dark border-b-4 md:border-b-0 md:border-r-4 border-snes-textLight dark:border-snes-textDark flex flex-col md:h-screen md:sticky md:top-0 p-6 md:gap-6">

        <div className="flex md:flex-col justify-between items-center gap-4 md:gap-6">
          <div className="w-full">
            <div className="border-4 border-snes-textLight dark:border-snes-textDark p-2 text-center bg-snes-accent text-white shadow-[4px_4px_0px_0px_rgba(44,44,44,1)] dark:shadow-[4px_4px_0px_0px_#00FF41]">
              <h1 className="text-xl font-bold tracking-widest leading-none">
                D.M.E
              </h1>
              <span className="text-xs opacity-90">Software Engineer</span>
            </div>
          </div>
          <div className="shrink-0 md:w-full">
            <ThemeToggle />
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="group relative block text-lg text-snes-textLight dark:text-snes-textDark hover:text-snes-accent dark:hover:text-snes-accent transition-colors"
              >
                <span className="inline-block w-4 opacity-0 group-hover:opacity-100 transition-opacity text-snes-accent">
                  ►
                </span>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 text-xs text-center opacity-60 text-snes-textLight dark:text-snes-textDark">
            © 2026 16-BIT
          </div>
        </div>

      </div>
    </aside>
  );
}
