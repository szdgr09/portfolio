import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainBody from "../layout/MainBody";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
  },
]);

export default router;
