import { Router, Route, RootRoute } from "@tanstack/react-router";
import Root from "./App";
import Homefetching from "./components/home";
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import ProfilePage from "./components/profile";
import VenueDetail from "./components/venue";
import CreateVenueForm from "./components/ListingForm";

const rootRoute = new RootRoute({
  component: Root,
});

// NOTE: @see https://tanstack.com/router/v1/docs/guide/routes

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homefetching,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginForm,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterForm,
});


const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});

const listingRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/listing",
    component: CreateVenueForm,
  });

  const VenueRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/venue",
    component: VenueDetail,
  });

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  listingRoute,
  VenueRoute,
  profileRoute
]);

export const router = new Router({ routeTree });

export default router;