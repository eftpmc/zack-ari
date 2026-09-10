"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `.is-visible` to every `.reveal` element as it enters the viewport.
 * Mounted once in the layout so individual sections stay server components.
 *
 * Re-runs on every route change: client-side navigation keeps this component
 * mounted, so without the pathname dependency the new page's `.reveal` nodes
 * would never be observed and would stay at opacity 0 — a blank page.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (typeof IntersectionObserver === "undefined") {
      document.documentElement.classList.add("no-js");
      for (const n of nodes) n.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
