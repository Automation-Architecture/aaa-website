import type { Metadata } from "next";
import { AboutView } from "@/feature/about/views/AboutView";

export const metadata: Metadata = {
  title: "About AAA: The Philosophy Behind the AI Operating System",
  description:
    "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AAA: The Philosophy Behind the AI Operating System",
    description:
      "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
    type: "article",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
