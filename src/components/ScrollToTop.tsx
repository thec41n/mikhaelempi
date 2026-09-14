"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Kembali ke atas"
      aria-hidden={!visible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 md:bottom-6 right-4 md:right-6 z-40 w-12 h-12 flex items-center justify-center text-lg font-bold border-4 border-snes-textLight dark:border-snes-textDark bg-snes-light dark:bg-snes-dark text-snes-textLight dark:text-snes-textDark hover:bg-snes-accent hover:text-white hover:border-snes-accent active:translate-y-1 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      ▲
    </button>
  );
}
