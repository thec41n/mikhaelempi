import type { MetadataRoute } from "next";
import { getSortedPostsData } from "../lib/posts";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/about`, priority: 0.8 },
    { url: `${SITE_URL}/projects`, priority: 0.8 },
    { url: `${SITE_URL}/resume`, priority: 0.8 },
    { url: `${SITE_URL}/blog`, priority: 0.6 },
    { url: `${SITE_URL}/contact`, priority: 0.5 },
  ];

  const posts: MetadataRoute.Sitemap = getSortedPostsData().map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: new Date(post.date),
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
