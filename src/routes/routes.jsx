import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Body from "@/layout/Body.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
]);

export default router;
