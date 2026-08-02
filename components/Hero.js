import Image from "next/image";
import Reveal from "./Reveal";
import { Sparkle } from "lucide-react";
import { BehanceIcon, InstagramIcon, PinterestIcon } from "./SocialIcons";

const ICONS = { behance: BehanceIcon, instagram: InstagramIcon, pinterest: PinterestIcon };

export default function Hero({ site }) {
  const [firstRole, secondRole] = site.role || [];
  const firstName = (site.name || "").split(" ")[0]?.toUpperCase() || "";

  return (
    <section id="top" className="relative flex flex-col items-center overflow-hidden px-6 pb-24 pt-16 text-center md:pt-24">
      {/* Background video — drop your file at public/hero-bg.mp4 to activate.
          If the file isn't there yet, this silently shows nothing (no error). */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />

      <Reveal>
        <div className="relative mx-auto flex h-80 w-80 items-center justify-center md:h-96 md:w-96">
          {/* Background glow behind the portrait */}
          <div className="absolute inset-[-15%] -z-10 rounded-full bg-gradient-to-br from-ember/50 via-amber/30 to-transparent blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_100px_-10px_rgba(255,90,31,0.55)]">
            {site.heroImage ? (
              <Image
                src={site.heroImage}
                alt={site.name || "Profile photo"}
                fill
                priority
                sizes="384px"
                className="object-cover"
              />
            ) : (
              <div className="grid h-full w-full place-items-center text-sm text-bone/40">
                Add a hero photo in the Studio
              </div>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-6 font-script text-6xl italic text-bone md:text-7xl">
          {site.shortName}
        </h1>
      </Reveal>

      <Reveal delay={0.18}>
        <p className="mt-4 max-w-md text-balance text-bone/70">
          Hi, I&apos;m <span className="font-semibold text-bone">{firstName}</span>,
          <br />
          Working as{" "}
          <span className="font-semibold text-bone">{firstRole}</span>
          {secondRole ? (
            <>
              {" "}and <span className="font-semibold text-bone">{secondRole}</span>
            </>
          ) : null}
        </p>
      </Reveal>

      {site.socials?.length > 0 && (
        <Reveal delay={0.24}>
          <div className="mt-6 flex items-center gap-3">
            {site.socials.map((s) => {
              const Icon = ICONS[s.icon] || Sparkle;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  data-cursor-hover
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-bone/80 transition-colors hover:bg-ember hover:text-ink"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.3}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {site.ctaPrimary?.label && (
            <a
              href={site.ctaPrimary.href || "#contact"}
              data-cursor-hover
              className="group flex items-center gap-2 rounded-full bg-white/10 py-3 pl-6 pr-2 text-sm font-semibold text-bone transition-colors hover:bg-white/15"
            >
              {site.ctaPrimary.label}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink transition-transform group-hover:rotate-45">
                ↗
              </span>
            </a>
          )}
          {site.ctaSecondary?.label && (
            <a
              href={site.ctaSecondary.href || "#work"}
              data-cursor-hover
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-bone/90 transition-colors hover:border-ember hover:text-ember"
            >
              {site.ctaSecondary.label}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
