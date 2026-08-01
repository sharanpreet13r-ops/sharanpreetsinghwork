import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <section id="work" className="px-6 py-24 md:px-12">
      <Reveal>
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3">
          <span className="text-sm font-semibold text-bone/50">Projects</span>
          <span className="h-2 w-2 rounded-full bg-ember" />
          <span className="text-sm font-semibold text-bone">UI/UX Projects</span>
        </div>
      </Reveal>

      {projects?.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mx-auto mt-10 max-w-md text-center text-sm text-bone/40">
          No projects yet — add one in the Studio at /studio to see it appear here.
        </p>
      )}
    </section>
  );
}
