import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, work experience, and tech stack of Devi Mikhael Empi — Full-Stack Developer at Alner, previously HiThink Technology and Telkom Indonesia.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
