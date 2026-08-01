import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink px-6 text-center text-bone">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-4xl tracking-wide">Project not found</h1>
      <p className="text-bone/60">That case study doesn&apos;t exist, or the slug changed.</p>
      <Link href="/#work" className="mt-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink">
        Back to projects
      </Link>
    </div>
  );
}
