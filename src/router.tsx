import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Static hosts (GitHub Pages) serve folder/index.html at /path/; "always" matches that and lets prerender render every route.
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
