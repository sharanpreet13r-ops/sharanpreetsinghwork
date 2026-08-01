import { client } from "./client";
import { projectId } from "../env";

const FALLBACK_SITE = {
  logoText: "S",
  name: "Your Name",
  shortName: "Your Name",
  role: ["Graphics", "UI/UX Designer"],
  location: "City, State",
  country: "Country",
  availability: "Available for projects",
  heroImage: null,
  ctaPrimary: { label: "Get Started", href: "#contact" },
  ctaSecondary: { label: "View My Work", href: "#work" },
  email: "hello@example.com",
  socials: [],
  profiles: [],
  stats: [],
  skills: [],
  techStack: [],
  workProcess: [],
};

// Every fetch fails soft (returns fallback / empty array) instead of throwing,
// so the site still builds and renders even before Sanity is connected —
// you'll just see placeholder copy until content is added in the Studio.
async function safeFetch(query, params, fallback) {
  if (!projectId) return fallback;
  try {
    return await client.fetch(query, params, {
      next: { revalidate: 60 }, // re-check Sanity at most once a minute
    });
  } catch (err) {
    console.error("Sanity fetch failed:", err.message);
    return fallback;
  }
}

const SITE_SETTINGS_QUERY = /* groq */ `
*[_type == "siteSettings"][0]{
  logoText,
  name,
  shortName,
  role,
  location,
  country,
  availability,
  "heroImage": heroImage.asset->url,
  ctaPrimary,
  ctaSecondary,
  email,
  phone,
  socials[]{label, icon, href},
  profiles[]{label, icon, href},
  stats[]{label, value, suffix},
  skills[]{tool, focus, level},
  techStack[]{name, note, icon},
  workProcess[]{step, title, desc, icon}
}
`;

export async function getSiteSettings() {
  const data = await safeFetch(SITE_SETTINGS_QUERY, {}, null);
  return { ...FALLBACK_SITE, ...(data || {}) };
}

const PROJECTS_QUERY = /* groq */ `
*[_type == "project"] | order(order asc){
  title,
  "slug": slug.current,
  category,
  year,
  accent,
  "cover": cover.asset->url,
  summary,
  description,
  tools,
  liveUrl,
  gallery[]{"src": image.asset->url, alt}
}
`;

export async function getProjects() {
  return (await safeFetch(PROJECTS_QUERY, {}, [])) || [];
}

const PROJECT_BY_SLUG_QUERY = /* groq */ `
*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  category,
  year,
  accent,
  "cover": cover.asset->url,
  summary,
  description,
  tools,
  liveUrl,
  gallery[]{"src": image.asset->url, alt}
}
`;

export async function getProjectBySlug(slug) {
  return await safeFetch(PROJECT_BY_SLUG_QUERY, { slug }, null);
}

const PROJECT_SLUGS_QUERY = /* groq */ `*[_type == "project"]{"slug": slug.current}`;

export async function getProjectSlugs() {
  return (await safeFetch(PROJECT_SLUGS_QUERY, {}, [])) || [];
}

const POSTS_QUERY = /* groq */ `
*[_type == "post"] | order(order asc){
  title,
  "slug": slug.current,
  category,
  brand,
  "cover": cover.asset->url
}
`;

export async function getPosts() {
  return (await safeFetch(POSTS_QUERY, {}, [])) || [];
}
