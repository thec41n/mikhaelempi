import Image from "next/image";
import Typewriter from "../components/Typewriter";
import avatarImg from "../assets/images/avatar.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col md:flex-row items-center gap-8 border-b-4 border-snes-textLight dark:border-snes-textDark pb-12 border-dashed">
        <div className="relative w-48 h-48 bg-snes-accent border-4 border-snes-textLight dark:border-snes-textDark shadow-[8px_8px_0px_0px_rgba(44,44,44,1)] dark:shadow-[8px_8px_0px_0px_#637AFE] shrink-0 overflow-hidden">
          <Image
            src={avatarImg}
            alt="Devi Mikhael Pixel Avatar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 300px"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 pointer-events-none"></div>
        </div>

        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest leading-none text-snes-textLight dark:text-snes-textDark">
            Devi Mikhael <br /> <span className="text-snes-accent">Empi</span>
          </h1>
          <div className="text-xl md:text-2xl opacity-80 font-mono bg-snes-textLight text-snes-light dark:bg-snes-textDark dark:text-snes-dark inline-block px-2 py-1 min-h-[40px]">
            <Typewriter />
          </div>

          <div className="pt-4">
            <button className="px-6 py-2 border-2 border-snes-textLight dark:border-snes-textDark hover:bg-snes-textLight hover:text-snes-light dark:hover:bg-snes-textDark dark:hover:text-snes-dark transition-all uppercase text-sm font-bold">
              [ DOWNLOAD CV ]
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-snes-textLight dark:text-snes-textDark">
          <span className="text-snes-accent">♦</span> QUEST LOG: ABOUT ME
        </h2>

        <div className="border-4 border-snes-textLight dark:border-snes-textDark p-6 bg-white/50 dark:bg-black/30 relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-snes-textLight dark:bg-snes-textDark"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-snes-textLight dark:bg-snes-textDark"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-snes-textLight dark:bg-snes-textDark"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-snes-textLight dark:bg-snes-textDark"></div>

          <p className="text-lg leading-relaxed text-snes-textLight dark:text-snes-textDark">
            A passionate individual with a strong interest in{" "}
            <span className="font-bold text-snes-accent">Web Development</span>{" "}
            and{" "}
            <span className="font-bold text-snes-accent">Cyber Security</span>.
            Currently grinding XP to level up my skills in building secure and
            aesthetic digital experiences.
            <br />
            <br />
            Always ready for new challenges and collaborative quests!
          </p>
        </div>
      </section>
    </div>
  );
}
