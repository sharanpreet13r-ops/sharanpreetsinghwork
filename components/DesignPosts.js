import Image from "next/image";
import Reveal from "./Reveal";

export default function DesignPosts({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="px-6 pb-24 md:px-12">
      <Reveal>
        <p className="eyebrow">Social & Print</p>
        <h2 className="mt-3 font-display text-3xl tracking-wide text-bone md:text-4xl">
          Graphic Design Posts
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <div
              data-cursor-hover
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              {/* Fixed portrait ratio — every post crops consistently at 5:6 */}
              <div className="relative aspect-[5/6] w-full bg-white/5">
                {post.cover && (
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  {post.category}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">{post.title}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
