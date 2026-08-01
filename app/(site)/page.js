import SmokeBackground from "@/components/SmokeBackground";
import Header from "@/components/Header";
import NavRail from "@/components/NavRail";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DesignPosts from "@/components/DesignPosts";
import TechStack from "@/components/TechStack";
import SocialLinks from "@/components/SocialLinks";
import WorkProcess from "@/components/WorkProcess";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { getSiteSettings, getProjects, getPosts } from "@/sanity/lib/queries";

export default async function Home() {
  const [site, projects, posts] = await Promise.all([
    getSiteSettings(),
    getProjects(),
    getPosts(),
  ]);

  return (
    <>
      <SmokeBackground />
      <NavRail />
      <Header site={site} />
      <main>
        <Hero site={site} />
        <Stats stats={site.stats} />
        <Skills skills={site.skills} />
        <Projects projects={projects} />
        <DesignPosts posts={posts} />
        <TechStack techStack={site.techStack} />
        <SocialLinks profiles={site.profiles} />
        <WorkProcess steps={site.workProcess} />
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer site={site} />
    </>
  );
}
