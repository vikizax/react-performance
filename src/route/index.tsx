import { Router, Route, RootRoute } from '@tanstack/react-router';
import FastPage from '../pages/StateLiftDown/SlowPage';
import App from '../App';
import SlowPage from '../pages/StateLiftDown/SlowPage';

const rootRoute = new RootRoute();

export const homeRoute = new Route({
  path: '/',
  component: App,
  getParentRoute: () => rootRoute,
});

export const fastPageRoute = new Route({
  path: '/fast-page',
  component: FastPage,
  getParentRoute: () => rootRoute,
});

export const slowPageRoute = new Route({
  path: '/slow-page',
  component: SlowPage,
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  slowPageRoute,
  fastPageRoute,
]);

export const router = new Router({ routeTree });
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
