import Reveal from "./Reveal";

export default function Stats({ stats }) {
  if (!stats?.length) return null;
  return (
    <section className="px-6 md:px-12">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="eyebrow">{stat.label}</p>
              <p className="mt-4 font-display text-5xl tracking-wide text-bone">
                {stat.value}
                <span className="text-ember">{stat.suffix}</span>
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
