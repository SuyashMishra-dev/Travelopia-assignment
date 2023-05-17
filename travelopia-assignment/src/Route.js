import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LandingPage from "./view/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("./view/LandingPage")),
  },
  {
    path: "/view-all-submission",
    Component: lazy(() => import("./view/ViewAllSubmission")),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
