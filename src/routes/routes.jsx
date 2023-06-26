import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Container from "../layout/Content/Content";
import Skills from "../pages/Skills/Skills";
import Technologies from "../pages/Technologies/technologies";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/technologies",
    element: <Technologies />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
export default router;
