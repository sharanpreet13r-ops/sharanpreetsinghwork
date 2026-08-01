import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SmokeBackground from "@/components/SmokeBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getSiteSettings,
  getProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/sanity/lib/queries";

// Every project image renders inside a fixed aspect-ratio box, so no matter
// what size file you upload in the Studio, it always displays consistently.
// Recommended source sizes (keeps pages fast to load):
//   - Cover image:   1600×1000px, under 500KB
//   - Gallery image: 1200×900px,  under 500KB

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Project Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetail({ params }) {
  const [site, project, allProjects] = await Promise.all([
    getSiteSettings(),
    getProjectBySlug(params.slug),
    getProjects(),
  ]);

  if (!project) notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === params.slug);
  const next =
    allProjects.length > 1
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : null;

  return (
    <>
      <SmokeBackground />
      <Header site={site} />

      <main className="px-6 pb-24 pt-16 md:px-12">
        <Reveal>
          <Link
            href="/#work"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm font-semibold text-bone/60 transition-colors hover:text-ember"
          >
            ← Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <p className="eyebrow">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl tracking-wide text-bone md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-bone/60">{project.summary}</p>
        </Reveal>

        {/* Cover — fixed 16:9 display box regardless of source image size */}
        {project.cover && (
          <Reveal
            delay={0.1}
            className="relative mt-10 w-full overflow-hidden rounded-3xl border border-white/10"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <h2 className="font-display text-2xl tracking-wide text-bone">Overview</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-bone/70">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {project.tools?.length > 0 && (
              <>
                <h2 className="font-display text-2xl tracking-wide text-bone">Tools</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-bone/70"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {project.liveUrl ? (
              
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink"
              >
                View live site ↗
              </a>
            ) : null}
          </Reveal>
        </div>

        {/* Gallery — every tile is the same aspect ratio (4:3) so uploads of
            different dimensions still line up cleanly on the grid. Items
            without an uploaded image yet are skipped instead of crashing. */}
        {project.gallery?.filter((img) => img?.src)?.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="font-display text-2xl tracking-wide text-bone">Gallery</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery
                .filter((img) => img?.src)
                .map((img, i) => (
                  <Reveal key={img.src} delay={i * 0.06}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={img.src}
                        alt={img.alt || project.title}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        )}

        {next && (
          <Reveal className="mt-20 border-t border-white/10 pt-10">
            <p className="eyebrow">Next Project</p>
            <Link
              href={`/projects/${next.slug}`}
              data-cursor-hover
              className="mt-3 flex items-center justify-between gap-4 font-display text-3xl tracking-wide text-bone transition-colors hover:text-ember md:text-4xl"
            >
              {next.title}
              <span>↗</span>
            </Link>
          </Reveal>
        )}
      </main>

      <Footer site={site} />
    </>
  );
}
