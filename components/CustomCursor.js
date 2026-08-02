"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    function onMove(e) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    }

    function onOver(e) {
      const target = e.target.closest("a, button, [data-cursor-hover]");
      setHovering(Boolean(target));
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={dotRef}
        className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-[width,height] duration-200 ease-out ${
          hovering ? "h-10 w-10 shadow-[0_0_24px_8px_rgba(255,90,31,0.65)]" : "h-6 w-6 shadow-[0_0_16px_5px_rgba(255,90,31,0.55)]"
        }`}
      />
    </div>
  );
}
