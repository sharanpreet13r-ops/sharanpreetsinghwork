"use client";

import { useEffect, useState } from "react";
import { Home, LayoutList, Layers, MessageSquare, Mail } from "lucide-react";

const LINKS = [
  { id: "top", label: "Home", icon: Home },
  { id: "work", label: "Work", icon: LayoutList },
  { id: "stack", label: "Tech Stack", icon: Layers },
  { id: "process", label: "Process", icon: MessageSquare },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function NavRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 rounded-full border border-white/10 bg-black/40 p-2 backdrop-blur-md md:flex"
    >
      {LINKS.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          data-cursor-hover
          className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${
            active === id
              ? "bg-white text-ink"
              : "text-bone/60 hover:bg-white/10 hover:text-bone"
          }`}
        >
          <Icon size={16} strokeWidth={2} />
        </a>
      ))}
    </nav>
  );
}
