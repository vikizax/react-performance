import App from "@/App";
import { RootRoute, Route, Router } from "@tanstack/react-router";
import ChildrenAsProps from "@/pages/ChildrenAsProps/indext";
import StateLiftDown from "../pages/StateLiftDown";
import RenderPropsAndHooks from "@/pages/RenderPropsAndHooks";

const rootRoute = new RootRoute({
  component: App,
});

export const getParentRoute = () => rootRoute

export const liftingStateDownRoute = new Route({
  path: "/lift-state-down",
  component: StateLiftDown,
  getParentRoute,
});

export const childrenAsProps = new Route({
  path: "/children-as-props",
  component: ChildrenAsProps,
  getParentRoute,
});

export const renderPropsAndHooks = new Route({
  path: '/render-props-n-hooks',
  component: RenderPropsAndHooks,
  getParentRoute
})

export const routeTree = rootRoute.addChildren([
  liftingStateDownRoute,
  childrenAsProps,
  renderPropsAndHooks
]);

export const router = new Router({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
