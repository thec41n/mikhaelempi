import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import "highlight.js/styles/monokai-sublime.css";

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thec41n.github.io/mikhaelempi"),

  title: {
    default: "Mikhael | LVL. 50 Developer",
    template: "%s | Mikhael Empi",
  },

  description:
    "Portfolio website of Mikhael. Software Engineer and Cyber Security Enthusiast.",

  keywords: [
    "Software Engineer",
    "JavaScript",
    "Portfolio",
    "Web Developer",
    "Backend",
    "Frontend",
  ],

  authors: [{ name: "Mikhael" }],
  creator: "Mikhael",

  openGraph: {
    title: "Mikhael | LVL. 50 Developer",
    description:
      "Check out my website featuring portfolio, about, and blogs.",
    url: "https://thec41n.github.io/mikhaelempi",
    siteName: "Mikhael Empi",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mikhael | LVL. 50 Developer",
    description: "Portfolio website of Mikhael. Software Engineer and Cyber Security Enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelFont.variable} flex flex-col md:flex-row min-h-screen antialiased`}
      >
        <Sidebar />
        <main className="flex-1 p-6 md:p-12 overflow-y-auto h-screen">
          <div className="max-w-4xl mx-auto border-4 border-snes-textLight p-6 min-h-[500px] shadow-[8px_8px_0px_0px_rgba(44,44,44,0.3)] bg-white/10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
