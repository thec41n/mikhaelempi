import type { Metadata } from "next";
import { getSortedPostsData } from "../../lib/posts";
import { SITE_URL } from "../../lib/site";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Developer notes and tutorials by Devi Mikhael Empi on web development, backend engineering, and everyday tooling.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="space-y-8">
      <header className="border-b-4 border-dashed border-snes-textLight dark:border-snes-textDark pb-6">
        <h1 className="text-4xl font-bold uppercase text-snes-textLight dark:text-snes-textDark">
          <span className="text-snes-accent mr-2">♦</span>
          DEV LOGS
        </h1>
        <p className="mt-2 text-lg opacity-80">
          Notes from the developer&apos;s journey.
        </p>
      </header>

      <BlogClient initialPosts={allPosts} />
    </div>
  );
}