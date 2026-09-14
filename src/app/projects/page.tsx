import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Devi Mikhael Empi — e-commerce platforms, government systems, and cloud apps built with Go, Next.js, Laravel, and Node.js.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
