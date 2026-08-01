import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { projectId, dataset, apiVersion } from "./sanity/env";

export default defineConfig({
  name: "default",
  title: "Sharan — Studio",
  projectId: projectId || "missing-project-id",
  dataset,
  basePath: "/studio",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }), // lets you run raw GROQ queries — safe to remove later
  ],
});
