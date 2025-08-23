// components/ScrollSpy.js
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const ScrollSpy = () => {
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Prevent multiple push with same hash
            if (currentPath !== `/#${id}` && id) {
              router.replace(`/#${id}`, { scroll: false });
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Adjust visibility threshold
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [router, currentPath]);

  return null;
};

export default ScrollSpy;
