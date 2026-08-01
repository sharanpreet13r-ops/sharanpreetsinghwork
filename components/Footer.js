import Image from "next/image";
import Reveal from "./Reveal";
import { BehanceIcon, InstagramIcon, PinterestIcon } from "./SocialIcons";

const ICONS = { behance: BehanceIcon, instagram: InstagramIcon, pinterest: PinterestIcon };

export default function Footer({ site }) {
  return (
    <footer className="relative px-6 pb-10 pt-24 text-center md:px-12">
      <Reveal>
        <p className="eyebrow justify-center">Get In Touch</p>

        <div className="mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full border-2 border-ember/60 bg-white/5">
          {site.heroImage && (
            <Image
              src={site.heroImage}
              alt={site.name || "Profile photo"}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <p className="mt-4 font-semibold text-bone">{site.name}</p>
        <p className="text-sm text-bone/50">{site.role?.join(" & ")}</p>

        <h2 className="mx-auto mt-6 font-script text-4xl italic text-bone md:text-5xl">
          {site.shortName}
        </h2>

        <a
          href="#contact-form"
          data-cursor-hover
          className="group mx-auto mt-6 flex w-fit items-center gap-3 overflow-hidden rounded-full bg-white/5 px-8 py-5 font-display text-2xl tracking-wide text-bone/40 transition-colors hover:text-bone md:text-3xl"
        >
          Connect <span className="text-ember">•</span> Let&apos;s Connect
        </a>

        {site.socials?.length > 0 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            {site.socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  data-cursor-hover
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-bone/70 transition-colors hover:bg-ember hover:text-ink"
                >
                  {Icon && <Icon size={14} />}
                </a>
              );
            })}
          </div>
        )}

        <p className="mt-8 text-xs text-bone/40">
          Copyright by{" "}
          <span className="font-semibold text-bone/60">
            {(site.name || "").toLowerCase()}
          </span>
        </p>
      </Reveal>
    </footer>
  );
}
