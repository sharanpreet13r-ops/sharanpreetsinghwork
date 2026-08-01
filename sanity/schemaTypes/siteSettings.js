const ICON_OPTIONS = {
  list: [
    { title: "Behance", value: "behance" },
    { title: "Instagram", value: "instagram" },
    { title: "Pinterest", value: "pinterest" },
    { title: "Upwork", value: "upwork" },
    { title: "LinkedIn", value: "linkedin" },
  ],
};

const TECH_ICON_OPTIONS = {
  list: [
    { title: "Photoshop", value: "photoshop" },
    { title: "Illustrator", value: "illustrator" },
    { title: "Figma", value: "figma" },
    { title: "Filmora", value: "filmora" },
  ],
};

const PROCESS_ICON_OPTIONS = {
  list: [
    { title: "Pen", value: "pen" },
    { title: "Wireframe", value: "wireframe" },
    { title: "Rocket", value: "knight" },
    { title: "Check", value: "check" },
  ],
};

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // There should only ever be one of these — see structure.js, which hides
  // the "create new" option and links straight to this single document.
  fields: [
    { name: "logoText", title: "Logo text", type: "string", description: "e.g. Sharan" },
    { name: "name", title: "Full name", type: "string" },
    { name: "shortName", title: "Short / display name", type: "string" },
    {
      name: "role",
      title: "Roles",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Graphics, UI/UX Designer",
    },
    { name: "location", title: "Location (city, state)", type: "string" },
    { name: "country", title: "Country", type: "string" },
    { name: "availability", title: "Availability badge text", type: "string" },
    { name: "heroImage", title: "Hero / profile photo", type: "image", options: { hotspot: true } },
    { name: "email", title: "Contact email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    {
      name: "ctaPrimary",
      title: "Primary button",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    },
    {
      name: "ctaSecondary",
      title: "Secondary button",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    },
    {
      name: "socials",
      title: "Social icons (hero + footer)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "icon", type: "string", options: ICON_OPTIONS },
            { name: "href", type: "url" },
          ],
        },
      ],
    },
    {
      name: "profiles",
      title: "Find Me Online profiles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "icon", type: "string", options: ICON_OPTIONS },
            { name: "href", type: "url" },
          ],
        },
      ],
    },
    {
      name: "stats",
      title: "Stats (years, projects completed)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
            { name: "suffix", type: "string" },
          ],
        },
      ],
    },
    {
      name: "skills",
      title: "Skills / experience bars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "tool", type: "string" },
            { name: "focus", type: "string" },
            { name: "level", type: "number", validation: (Rule) => Rule.min(0).max(100) },
          ],
        },
      ],
    },
    {
      name: "techStack",
      title: "Tech stack cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "note", type: "string" },
            { name: "icon", type: "string", options: TECH_ICON_OPTIONS },
          ],
        },
      ],
    },
    {
      name: "workProcess",
      title: "Work process steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", type: "string", description: "e.g. Step 1" },
            { name: "title", type: "string" },
            { name: "desc", type: "string" },
            { name: "icon", type: "string", options: PROCESS_ICON_OPTIONS },
          ],
        },
      ],
    },
  ],
};
