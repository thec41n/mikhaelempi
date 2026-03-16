"use client";

import { useEffect, useRef } from "react";

export default function RetroContent({ htmlContent }: { htmlContent: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const preBlocks = contentRef.current.querySelectorAll("pre");

    preBlocks.forEach((block) => {
      if (block.parentElement?.classList.contains("code-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "code-wrapper relative mt-6 mb-4";

      block.parentNode?.insertBefore(wrapper, block);
      wrapper.appendChild(block);

      const btn = document.createElement("button");
      btn.className =
        "copy-btn absolute -top-4 right-4 bg-snes-accent text-white px-3 py-1 text-xs font-bold font-mono uppercase border-4 border-snes-textLight dark:border-snes-textDark hover:bg-white hover:text-snes-accent transition-all active:scale-95 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10";
      btn.innerText = "COPY";

      btn.addEventListener("click", async () => {
        const codeText = block.querySelector("code")?.textContent || "";

        try {
          await navigator.clipboard.writeText(codeText);

          btn.innerText = "COPIED!";
          btn.classList.replace("bg-snes-accent", "bg-green-600");
          btn.classList.replace(
            "hover:text-snes-accent",
            "hover:text-green-600",
          );

          setTimeout(() => {
            btn.innerText = "COPY";
            btn.classList.replace("bg-green-600", "bg-snes-accent");
            btn.classList.replace(
              "hover:text-green-600",
              "hover:text-snes-accent",
            );
          }, 2000);
        } catch (err) {
          console.error("Gagal copy code bro:", err);
          btn.innerText = "ERROR!";
        }
      });

      wrapper.appendChild(btn);
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
