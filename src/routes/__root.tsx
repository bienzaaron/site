import { createRootRoute, useRouterState } from "@tanstack/react-router";

import { Shell } from "../components/Shell";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const title = useRouterState({
    select: (state) => {
      const loaderData = state.matches.at(-1)?.loaderData;

      return hasShellTitle(loaderData) ? loaderData.title : "not-found";
    },
  });

  return <Shell title={title} />;
}

function hasShellTitle(value: unknown): value is { title: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    typeof value.title === "string"
  );
}
