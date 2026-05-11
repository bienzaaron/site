import { createFileRoute } from "@tanstack/react-router";

import { Home } from "../pages/Home";

export const Route = createFileRoute("/")({
  loader: () => ({ title: "home" }),
  component: Home,
});
