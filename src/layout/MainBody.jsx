import React from "react";
import { Typography } from "@mui/material";
// import Container from "../pages/Content/Content";
import Navbar from "./Navbar/Navbar";
import { StyledInnerBox, StyledBox } from "./MainBody.styles";
import { RouterProvider } from "react-router-dom";
import router from "../routes/routes";
import { Outlet } from "react-router-dom";

const MainBody = () => {
  return (
    <StyledBox>
      <StyledInnerBox>
        <Navbar />
        <RouterProvider router={router}>
          <Outlet />
        </RouterProvider>
        <div>
          <Typography variant="h7" color="white">
            &#9400; Copyright 2023 Hervinson Samson All Right Reserved.
          </Typography>
        </div>
      </StyledInnerBox>
    </StyledBox>
  );
};

export default MainBody;
