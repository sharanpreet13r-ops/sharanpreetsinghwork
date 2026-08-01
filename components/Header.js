export default function Header({ site }) {
  return (
    <header className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
      <a href="#top" className="flex items-center gap-2" data-cursor-hover>
        <span className="grid h-8 w-8 place-items-center rounded-md bg-ember font-display text-lg text-ink">
          {(site.logoText || "S").charAt(0)}
        </span>
        <span className="font-display text-xl tracking-wide">{site.logoText}</span>
      </a>

      <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-bone/80 md:flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        {site.availability}
      </div>

      <div className="text-right text-[11px] font-semibold uppercase tracking-wider text-bone/70">
        <p>{site.location}</p>
        <p>{site.country}</p>
      </div>
    </header>
  );
}
