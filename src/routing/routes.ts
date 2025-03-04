import { lazy } from "react";

export const Pages = {
  HomePage: lazy(() => import("../pages/HomePage")),
  AboutPage: lazy(() => import("../pages/AboutPage")),
  ServicesPage: lazy(() => import("../pages/ServicesPage")),
  PortfolioPage: lazy(() => import("../pages/PortfolioPage")),
  BlogPage: lazy(() => import("../pages/BlogPage")),
  PagesPage: lazy(() => import("../pages/PagesPAge")),
  ContactsPage: lazy(() => import("../pages/ContactsPage")),
};
