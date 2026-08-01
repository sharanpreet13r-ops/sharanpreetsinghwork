import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor-hover
      className="group relative block overflow-hidden rounded-3xl border border-white/10"
      style={{ backgroundColor: project.accent }}
    >
      {/* Fixed aspect ratio keeps every cover image the same display size,
          regardless of the source file's original dimensions. */}
      <div className="relative aspect-[4/3] w-full bg-white/5">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-xs text-white/50">
            No cover image yet
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            {project.category}
          </p>
          <p className="mt-1 font-display text-2xl tracking-wide text-white">
            {project.title}
          </p>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform group-hover:rotate-45">
          ↗
        </span>
      </div>
    </Link>
  );
}
