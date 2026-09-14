"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./Sidebar";

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const wake = () => {
      setVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(false), 3000);
    };

    window.addEventListener("scroll", wake, true);
    wake();

    return () => {
      window.removeEventListener("scroll", wake, true);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav
      className={`md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-[opacity,translate] ${
        visible
          ? "opacity-100 translate-y-0 duration-500 ease-out"
          : "opacity-0 translate-y-32 pointer-events-none duration-700 ease-[cubic-bezier(0.36,0,0.66,-0.56)]"
      }`}
    >
      <div className="flex gap-1 p-1 bg-snes-light dark:bg-snes-dark border-4 border-snes-textLight dark:border-snes-textDark shadow-[4px_4px_0px_0px_var(--color-snes-accent)]">
        {navItems.map(({ name, path, icon: Icon }) => {
          const active = pathname === path;
          return (
            <Link
              key={name}
              href={path}
              className={`w-14 px-1 py-1.5 flex flex-col items-center gap-1 leading-none transition-colors ${
                active
                  ? "bg-snes-accent text-white"
                  : "text-snes-textLight dark:text-snes-textDark active:bg-snes-accent active:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs">{name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
