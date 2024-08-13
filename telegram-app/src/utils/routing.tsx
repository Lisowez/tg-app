import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import Main from "../pages/Main/Main";
import { FullItem } from "../pages/FullItem/FullItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/zodiac/:id",
    element: <FullItem />,
  },
]);
