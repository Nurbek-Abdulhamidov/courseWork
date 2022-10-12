import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home/Home"));
const Entering = lazy(() => import("../pages/Enter"));
const AboutPage = lazy(() => import("../pages/About/About"));
const ContactPage = lazy(() => import("../pages/Contact/Contact"));
const FirstPlanPage = lazy(() => import("../pages/FirstPlan/FirstPlan"));
const SecondPlanPage = lazy(() => import("../pages/SecondPlan/SecondPlan"));
const ThirdPlanPage = lazy(() => import("../pages/ThirdPlan/ThirdPlan"));

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/enter", element: <Entering /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/firstplan", element: <FirstPlanPage /> },
  { path: "/secondplan", element: <SecondPlanPage /> },
  { path: "/thirdplan", element: <ThirdPlanPage /> },
];
