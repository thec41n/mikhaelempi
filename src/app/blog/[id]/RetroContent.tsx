"use client";

import { useEffect, useRef } from "react";

export default function RetroContent({ htmlContent }: { htmlContent: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const preBlocks = contentRef.current.querySelectorAll("pre");

    preBlocks.forEach((block) => {
      block.style.position = "relative";

      if (block.querySelector(".copy-btn")) return;

      const btn = document.createElement("button");
      btn.className =
        "copy-btn absolute top-2 right-2 bg-snes-accent text-white px-2 py-1 text-xs font-bold font-mono uppercase border-2 border-transparent hover:border-white transition-all active:scale-95 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]";
      btn.innerText = "COPY";

      btn.addEventListener("click", async () => {
        const codeText = block.querySelector("code")?.textContent || "";

        try {
          await navigator.clipboard.writeText(codeText);

          btn.innerText = "COPIED!";
          btn.classList.replace("bg-snes-accent", "bg-green-600");

          setTimeout(() => {
            btn.innerText = "COPY";
            btn.classList.replace("bg-green-600", "bg-snes-accent");
          }, 2000);
        } catch (err) {
          console.error("Gagal copy code bro:", err);
          btn.innerText = "ERROR!";
        }
      });

      block.appendChild(btn);
    });
  }, [htmlContent]);

  return (
    <div
      ref={contentRef}
      className="prose-retro text-lg leading-relaxed space-y-4"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
