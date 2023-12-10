import App from "@/App";
import ChildrenAsProps from "@/pages/ChildrenAsProps/indext";
import { RootRoute, Route, Router } from "@tanstack/react-router";
import StateLiftDown from "../pages/StateLiftDown";

const rootRoute = new RootRoute({
  component: App,
});

// export const homeRoute = new Route({
//   path: "/",
//   component: Home,
//   getParentRoute: () => rootRoute,
// });

export const liftingStateDownRoute = new Route({
  path: "/lift-state-down",
  component: StateLiftDown,
  getParentRoute: () => rootRoute,
});

export const childrenAsProps = new Route({
  path: "/children-as-props",
  component: ChildrenAsProps,
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  liftingStateDownRoute,
  childrenAsProps,
  // fastPageRoute,
]);

export const router = new Router({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
