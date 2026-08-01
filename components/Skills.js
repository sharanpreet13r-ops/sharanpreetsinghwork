"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Skills({ skills }) {
  if (!skills?.length) return null;

  return (
    <section className="px-6 py-24 md:px-12">
      <Reveal>
        <p className="eyebrow">Experiences</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight tracking-wide text-bone md:text-5xl">
          Designing impactful digital experiences that solve real business problems.
        </h2>
      </Reveal>

      <div className="mt-14 max-w-3xl divide-y divide-white/10">
        {skills.map((skill, i) => (
          <Reveal key={skill.tool} delay={i * 0.06} className="py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-bone/50">{skill.tool}</p>
                <p className="mt-1 font-semibold text-bone">{skill.focus}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-40 overflow-hidden rounded-full bg-white/10 sm:w-56">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-ember to-amber"
                  />
                </div>
                <span className="w-10 text-right text-sm font-semibold text-bone/80">
                  {skill.level}%
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
