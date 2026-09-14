import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Devi Mikhael Empi — email, GitHub, and LinkedIn links for collaboration, freelance work, and job opportunities.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
