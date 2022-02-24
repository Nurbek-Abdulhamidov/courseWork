import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home/Home"));
const AboutPage = lazy(() => import("../pages/About/About"));
const ContactPage = lazy(() => import("../pages/Contact/Contact"));
const FirstPlan = lazy(() => import("../pages/FirstPlan"));

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/firstPlan", element: <FirstPlan /> },
];
