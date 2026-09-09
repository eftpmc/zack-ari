import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Projects from "@/app/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Every project worth showing — cross-platform apps, media servers, and client work.",
};

export default function Page() {
  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-6 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-base-content/60 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>
      <Projects showAll />
    </>
  );
}
