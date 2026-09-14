import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import FloatingNav from "../components/FloatingNav";
import { SITE_HOME, SITE_ORIGIN } from "../lib/site";
import "highlight.js/styles/monokai-sublime.css";

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),

  title: {
    default: "Devi Mikhael Empi | Software Engineer",
    template: "%s | Devi Mikhael Empi",
  },

  description:
    "Portfolio of Devi Mikhael Empi — Full-Stack Developer and cyber security enthusiast, building production systems with Go, Next.js, Laravel, and Java.",

  keywords: [
    "Devi Mikhael Empi",
    "Mikhael Empi",
    "Software Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "Web Developer",
    "Backend",
    "Frontend",
  ],

  authors: [{ name: "Devi Mikhael Empi", url: SITE_HOME }],
  creator: "Devi Mikhael Empi",

  verification: {
    google: "VpWSUd661zfyJdTD1UsVbcnqNQwSkkAj-25CvgNwi9A",
  },

  openGraph: {
    url: SITE_HOME,
    siteName: "Devi Mikhael Empi",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"||(!("theme" in localStorage)&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${pixelFont.variable} flex flex-col md:flex-row min-h-screen antialiased`}
      >
        <div
          id="boot-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-snes-light dark:bg-snes-dark"
        >
          <span className="text-3xl tracking-widest text-snes-textLight dark:text-snes-textDark">
            NOW LOADING...
          </span>

          <div className="w-72 h-7 border-4 border-snes-textLight dark:border-snes-textDark p-[3px]">
            <div className="boot-bar h-full bg-snes-accent" />
          </div>
        </div>

        <Sidebar />
        <main className="flex-1 p-6 md:p-12 pb-28 md:pb-12 overflow-y-auto h-screen">
          <div className="max-w-4xl mx-auto border-4 border-snes-textLight dark:border-snes-textDark p-6 min-h-[500px] shadow-[8px_8px_0px_0px_rgba(44,44,44,0.3)] bg-white/10">
            {children}
          </div>
        </main>
        <FloatingNav />
      </body>
    </html>
  );
}
