"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [glitching, setGlitching] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);

      const isDark = localStorage.getItem("theme") === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
      
      if (isDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    if (glitching) return;

    setGlitching(true);

    setTimeout(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);

      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      setGlitching(false);
    }, 300);
  };

  if (!mounted) {
    return (
      <button className="w-full border-4 border-transparent p-2 font-bold opacity-0 cursor-default">
        LOADING...
      </button>
    );
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className="w-full border-4 border-snes-textLight p-2 font-bold hover:bg-snes-accent hover:text-white transition-colors flex justify-center items-center gap-2"
      >
        <span>{theme === "light" ? "☀ MODE: ON" : "☾ MODE: OFF"}</span>
      </button>

      {glitching && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden pointer-events-none mix-blend-difference">
           <div className="absolute inset-0 bg-black opacity-20 animate-noise w-[120%] h-[120%]" />
           <h1 className="text-9xl font-bold uppercase animate-pulse text-black">LOADING...</h1>
        </div>
      )}
    </>
  );
}