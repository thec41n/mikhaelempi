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
  title: "Devi Mikhael Empi - Portfolio",
  description: "16-bit Retro Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} flex flex-col md:flex-row min-h-screen antialiased`}>
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