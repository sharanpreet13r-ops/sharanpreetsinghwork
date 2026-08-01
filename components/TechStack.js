import Reveal from "./Reveal";

export default function TechStack({ techStack }) {
  if (!techStack?.length) return null;

  return (
    <section id="stack" className="px-6 py-24 md:px-12">
      <Reveal>
        <h2 className="text-center font-display text-4xl tracking-wide text-bone md:text-5xl">
          Tech Stack
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
        {techStack.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.07}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-ember/50">
              <p className="font-semibold text-bone">{tool.name}</p>
              <div className="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-xl bg-white/5 font-display text-xl text-ember">
                {tool.name?.slice(0, 2)}
              </div>
              <p className="mt-4 text-xs text-bone/50">{tool.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
