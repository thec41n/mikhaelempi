import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";

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

      <div className="grid gap-6">
        {allPosts.map(({ id, date, title, tags }) => (
          <Link href={`/blog/${id}`} key={id} className="group">
            <article className="border-4 border-snes-textLight dark:border-snes-textDark p-4 bg-white/50 dark:bg-black/20 hover:bg-snes-textLight hover:text-snes-light dark:hover:bg-snes-textDark dark:hover:text-snes-dark transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h2 className="text-xl font-bold uppercase group-hover:text-snes-accent dark:group-hover:text-snes-dark">
                  {title}
                </h2>
                <span className="text-sm font-mono opacity-70">{date}</span>
              </div>

              <div className="flex gap-2 mt-2">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-current px-2 py-0.5 opacity-60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
