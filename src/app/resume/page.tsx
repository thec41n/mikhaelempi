import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <header className="border-b-4 border-dashed border-snes-textLight dark:border-snes-textDark pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold uppercase text-snes-textLight dark:text-snes-textDark">
            <span className="text-snes-accent mr-2">♦</span>
            RESUME SCANNER
          </h1>
          <p className="mt-2 text-lg opacity-80">
            Previewing encrypted document...
          </p>
        </div>

        <a
          href="/mikhaelempi/cv/CV.pdf"
          download="Devi_Mikhael_Empi_CV.pdf"
          className="px-6 py-2 border-4 bg-snes-accent text-white font-bold uppercase hover:scale-105 transition-transform"
        >
          [ DIRECT DOWNLOAD ]
        </a>
      </header>

      <div className="border-4 border-snes-textLight dark:border-snes-textDark p-2 bg-white dark:bg-black shadow-[8px_8px_0px_0px_var(--color-snes-accent)]">
        <iframe
          src="/mikhaelempi/cv/CV.pdf"
          className="w-full h-[75vh] border-2 border-dashed border-gray-400"
          title="CV Preview Devi Mikhael"
        />
      </div>

      <div className="flex justify-center pt-8 pb-4">
        <Link
          href="/"
          className="inline-block px-8 py-3 border-4 border-snes-textLight dark:border-snes-textDark font-bold uppercase tracking-widest text-snes-textLight dark:text-snes-textDark hover:bg-snes-textLight hover:text-white dark:hover:bg-snes-textDark dark:hover:text-black transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--color-snes-accent)]"
        >
          &lt;&lt; Return to Home
        </Link>
      </div>
    </div>
  );
}
