export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    {
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 60 },
      description: "This becomes the page URL: yoursite.com/projects/this-slug",
      validation: (Rule) => Rule.required(),
    },
    { name: "category", title: "Category", type: "string", description: "e.g. Web Design, Mobile App" },
    { name: "year", title: "Year", type: "string" },
    {
      name: "accent",
      title: "Card accent color",
      type: "string",
      description: "Hex color for the project card background, e.g. #7ED957",
    },
    {
      name: "cover",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      description: "Recommended 1600×1000px, under 500KB. Displays at a fixed 16:9 ratio.",
      validation: (Rule) => Rule.required(),
    },
    { name: "summary", title: "Short summary (card + top of page)", type: "text", rows: 2 },
    { name: "description", title: "Full description", type: "text", rows: 6 },
    {
      name: "tools",
      title: "Tools used",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "liveUrl", title: "Live site link (optional)", type: "url" },
    {
      name: "gallery",
      title: "Gallery images",
      type: "array",
      description: "Recommended 1200×900px, under 500KB each. Displays at a fixed 4:3 ratio.",
      of: [
        {
          type: "object",
          name: "galleryImage",
          fields: [
            { name: "image", title: "Image", type: "image", options: { hotspot: true } },
            { name: "alt", title: "Alt text (for accessibility)", type: "string" },
          ],
        },
      ],
    },
    {
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower numbers show first in the grid.",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "cover" },
  },
};
