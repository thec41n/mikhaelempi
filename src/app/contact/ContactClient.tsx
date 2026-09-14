"use client";

import { useState } from "react";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";

const WEB3FORMS_KEY = "de3a2b09-8bbc-4e8c-ac45-e58394fdbd04";

export default function ContactClient() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("d.mikhaelempi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInput = () => {
    setStatus((s) => (s === "ok" || s === "error" ? "idle" : s));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <header className="border-b-4 border-dashed border-snes-textLight dark:border-snes-textDark pb-6">
        <h1 className="text-4xl font-bold uppercase text-snes-textLight dark:text-snes-textDark">
          <span className="text-snes-accent mr-2">♦</span>
          TRANSMISSION
        </h1>
        <p className="mt-2 text-lg opacity-80">
          Open channels for collaboration and side quests.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="border-4 border-snes-textLight dark:border-snes-textDark p-6 bg-white dark:bg-black relative">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MdEmail className="text-snes-accent" /> DIRECT MESSAGE
            </h3>
            <div className="flex items-center gap-2 border-2 border-dashed border-gray-400 p-2 bg-gray-100 dark:bg-gray-900">
              <span className="flex-1 font-mono text-sm overflow-hidden text-ellipsis">
                d.mikhaelempi@gmail.com
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 hover:bg-snes-accent hover:text-white transition-colors"
                title="Copy Email"
              >
                {copied ? (
                  <MdCheck className="text-green-500" />
                ) : (
                  <MdContentCopy />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-bold animate-pulse">
                &gt; ADDRESS COPIED TO CLIPBOARD!
              </p>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-snes-textLight dark:text-snes-textDark">
              UPLINKS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="https://github.com/thec41n"
                target="_blank"
                className="group"
              >
                <div className="border-4 border-snes-textLight dark:border-snes-textDark p-4 bg-white dark:bg-black hover:bg-snes-textLight hover:text-white dark:hover:bg-snes-textDark dark:hover:text-black transition-all flex items-center gap-3">
                  <SiGithub className="text-2xl group-hover:scale-110 transition-transform" />
                  <span className="font-bold">GITHUB</span>
                </div>
              </Link>
              <Link
                href="https://linkedin.com/in/mikhaelempi"
                target="_blank"
                className="group"
              >
                <div className="border-4 border-snes-textLight dark:border-snes-textDark p-4 bg-white dark:bg-black hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all flex items-center gap-3">
                  <SiLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                  <span className="font-bold">LINKEDIN</span>
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@clinodex"
                target="_blank"
                className="group col-span-2"
              >
                <div className="border-4 border-snes-textLight dark:border-snes-textDark p-4 bg-white dark:bg-black hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all flex items-center gap-3">
                  <SiYoutube className="text-2xl group-hover:scale-110 transition-transform" />
                  <span className="font-bold">CLINODEX</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-4 border-snes-textLight dark:border-snes-textDark p-6 bg-white dark:bg-black shadow-[8px_8px_0px_0px_rgba(44,44,44,1)] dark:shadow-[8px_8px_0px_0px_var(--color-snes-accent)]">
          <h3 className="text-xl font-bold mb-6 border-b-2 border-dashed border-gray-400 pb-2">
            &gt; SEND_ENCRYPTED_MSG
          </h3>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            onInput={handleInput}
          >
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-bold mb-1 opacity-80"
              >
                CODENAME (Name)
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full bg-gray-100 dark:bg-gray-900 text-snes-textLight dark:text-snes-textDark placeholder-gray-500 dark:placeholder-[#00FF41]/50 border-4 border-transparent border-b-snes-textLight dark:border-b-snes-textDark focus:border-snes-accent dark:focus:border-snes-accent p-3 outline-none transition-colors duration-300 font-mono"
                placeholder="Enter your name..."
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-bold mb-1 opacity-80"
              >
                RETURN ADDRESS (Email)
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full bg-gray-100 dark:bg-gray-900 text-snes-textLight dark:text-snes-textDark placeholder-gray-500 dark:placeholder-[#00FF41]/50 border-4 border-transparent border-b-snes-textLight dark:border-b-snes-textDark focus:border-snes-accent dark:focus:border-snes-accent p-3 outline-none transition-colors duration-300 font-mono"
                placeholder="Enter your email..."
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-bold mb-1 opacity-80"
              >
                DATA PACKET (Message)
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full bg-gray-100 dark:bg-gray-900 text-snes-textLight dark:text-snes-textDark placeholder-gray-500 dark:placeholder-[#00FF41]/50 border-4 border-transparent border-b-snes-textLight dark:border-b-snes-textDark focus:border-snes-accent dark:focus:border-snes-accent p-3 outline-none transition-colors duration-300 font-mono resize-none"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-snes-textLight text-white dark:bg-snes-textDark dark:text-black font-bold text-xl hover:bg-snes-accent hover:text-white dark:hover:bg-snes-accent dark:hover:text-white transition-all duration-300 active:scale-95 uppercase tracking-widest mt-4 disabled:opacity-50 disabled:cursor-wait"
            >
              {status === "sending" ? "[ TRANSMITTING... ]" : "[ EXECUTE SEND ]"}
            </button>

            <p className="text-xs font-mono opacity-60 text-center">
              &gt; USUAL RESPONSE TIME: 1-2 DAYS
            </p>

            {status === "ok" && (
              <p
                role="status"
                className="text-sm font-bold text-green-600 dark:text-green-400 animate-pulse"
              >
                &gt; TRANSMISSION RECEIVED. I&apos;LL REPLY SOON!
              </p>
            )}
            {status === "error" && (
              <p
                role="status"
                className="text-sm font-bold text-red-600 dark:text-red-400"
              >
                &gt; TRANSMISSION FAILED. EMAIL ME DIRECTLY INSTEAD.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
