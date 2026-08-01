export default {
  name: "post",
  title: "Design Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    {
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 60 },
      validation: (Rule) => Rule.required(),
    },
    { name: "category", title: "Category", type: "string", description: "e.g. Post Design" },
    { name: "brand", title: "Client / brand", type: "string" },
    {
      name: "cover",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "Recommended 1000×1200px, under 400KB. Displays at a fixed 5:6 ratio.",
      validation: (Rule) => Rule.required(),
    },
    { name: "order", title: "Sort order", type: "number" },
  ],
  preview: {
    select: { title: "title", subtitle: "brand", media: "cover" },
  },
};
