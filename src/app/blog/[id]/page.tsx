import Link from "next/link";
import { getSortedPostsData, getPostData } from "../../../lib/posts";
import RetroContent from "./RetroContent";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <article className="max-w-none">
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-block font-mono text-sm font-bold uppercase text-snes-textLight dark:text-snes-textDark hover:text-snes-accent dark:hover:text-snes-accent hover:-translate-x-1 transition-transform"
        >
          &lt;&lt; BACK TO LOGS
        </Link>
      </div>

      <header className="border-b-4 border-dashed border-snes-textLight dark:border-snes-textDark pb-6 mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold uppercase text-snes-textLight dark:text-snes-textDark mb-4">
          {postData.title}
        </h1>
        <div className="flex justify-center gap-4 text-sm font-mono opacity-70">
          <span>DATE: {postData.date}</span>
          <span>LOG_ID: {postData.id}</span>
        </div>
      </header>

      <RetroContent htmlContent={postData.contentHtml} />
    </article>
  );
}
