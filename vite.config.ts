// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro, componentTagger, env injection, @ alias — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Fully static output for GitHub Pages: every route prerendered to HTML.
    pages: [
      { path: "/" },
      { path: "/case/field-preview" },
      { path: "/case/personas" },
      { path: "/case/flexibility" },
      { path: "/case/ia" },
      { path: "/case/automation" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
