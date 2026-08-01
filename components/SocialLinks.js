import Reveal from "./Reveal";
import { BehanceIcon, UpworkIcon, LinkedInIcon } from "./SocialIcons";

const ICONS = { upwork: UpworkIcon, behance: BehanceIcon, linkedin: LinkedInIcon };

export default function SocialLinks({ profiles }) {
  if (!profiles?.length) return null;

  return (
    <section className="px-6 pb-24 md:px-12">
      <Reveal>
        <p className="eyebrow">Find Me Online</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-wide text-bone md:text-4xl">
          Browse my portfolio, explore real client work and connect with me for freelance projects.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {profiles.map((profile, i) => {
          const Icon = ICONS[profile.icon];
          return (
            <Reveal key={profile.label} delay={i * 0.08}>
              <a
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] py-10 text-center transition-colors hover:border-ember/50"
              >
                {Icon && <Icon size={26} className="text-bone/70" />}
                <span className="text-sm text-bone/60">
                  Find me on
                  <br />
                  <span className="font-semibold text-bone">{profile.label}</span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
