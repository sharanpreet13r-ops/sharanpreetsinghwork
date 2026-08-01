import { PenTool, Share2, Rocket, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const ICONS = { pen: PenTool, wireframe: Share2, knight: Rocket, check: CheckCircle2 };

export default function WorkProcess({ steps }) {
  if (!steps?.length) return null;

  return (
    <section id="process" className="px-6 py-24 md:px-12">
      <Reveal>
        <h2 className="text-center font-display text-4xl tracking-wide text-bone md:text-5xl">
          Work Process
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 max-w-2xl space-y-5">
        {steps.map((item, i) => {
          const Icon = ICONS[item.icon] || PenTool;
          return (
            <Reveal key={item.step} delay={i * 0.08}>
              <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div>
                  <span className="eyebrow">{item.step}</span>
                  <h3 className="mt-3 font-display text-2xl tracking-wide text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-bone/60">{item.desc}</p>
                </div>
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-ember/40 text-ember">
                  <Icon size={28} strokeWidth={1.6} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
