"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

export default function BlogClient({ initialPosts }: { initialPosts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialPosts.forEach((post) => {
      if (post.tags) {
        post.tags.forEach((tag) => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [initialPosts, searchQuery, selectedTag]);

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="SEARCH LOGS OR TAGS..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-4 border-snes-textLight dark:border-snes-textDark bg-white/50 dark:bg-black/30 p-4 font-mono text-snes-textLight dark:text-snes-textDark uppercase placeholder-opacity-50 focus:outline-none focus:border-snes-accent dark:focus:border-snes-accent transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
        />
        <div className="absolute top-0 right-0 h-full px-4 flex items-center pointer-events-none text-snes-textLight dark:text-snes-textDark opacity-50 font-bold">
          [?]
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold uppercase opacity-70 mr-2">
          AVAILABLE TAGS:
        </span>
        <button
          onClick={() => setSelectedTag(null)}
          className={`text-xs font-bold px-3 py-1 uppercase transition-all ${
            selectedTag === null
              ? "bg-snes-accent text-white border-2 border-snes-accent"
              : "border-2 border-snes-textLight dark:border-snes-textDark hover:bg-snes-textLight hover:text-snes-light dark:hover:bg-snes-textDark dark:hover:text-snes-dark"
          }`}
        >
          ALL
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`text-xs font-bold px-3 py-1 uppercase transition-all ${
              selectedTag === tag
                ? "bg-snes-accent text-white border-2 border-snes-accent"
                : "border-2 border-snes-textLight dark:border-snes-textDark hover:bg-snes-textLight hover:text-snes-light dark:hover:bg-snes-textDark dark:hover:text-snes-dark"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {selectedTag && (
        <div className="font-mono text-sm text-snes-accent animate-pulse">
          &gt; FILTER ACTIVE: #{selectedTag}_
        </div>
      )}

      <div className="grid gap-6 pt-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(({ id, date, title, tags }) => (
            <Link href={`/blog/${id}`} key={id} className="group">
              <article className="border-4 border-snes-textLight dark:border-snes-textDark p-4 bg-white/50 dark:bg-black/20 hover:bg-snes-textLight hover:text-snes-light dark:hover:bg-snes-textDark dark:hover:text-snes-dark transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h2 className="text-xl font-bold uppercase group-hover:text-snes-accent dark:group-hover:text-snes-dark transition-colors">
                    {title}
                  </h2>
                  <span className="text-sm font-mono opacity-70 shrink-0">
                    {date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {tags?.map((tag) => (
                    <span
                      key={tag}
                      onClick={(e) => handleTagClick(e, tag)}
                      className={`text-xs border-2 px-2 py-0.5 transition-colors z-10 ${
                        selectedTag === tag
                          ? "bg-snes-accent text-white border-snes-accent"
                          : "border-current opacity-70 hover:opacity-100 hover:bg-snes-accent hover:text-white hover:border-snes-accent"
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="border-4 border-dashed border-snes-textLight dark:border-snes-textDark p-8 text-center opacity-70">
            <p className="font-mono uppercase">
              &gt; NO LOGS FOUND FOR YOUR QUERY_
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
