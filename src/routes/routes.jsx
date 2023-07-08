import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Container from "../layout/Content/Content";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import MainBody from "../layout/MainBody";
import TechStack from "../pages/TechStack/TechStack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
    children: [
      {
        index: true,
        element: <Container />,
      },
      {
        path: "skills",
        element: <TechStack />,
      },
      {
        path: "experiences",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
