import React from "react";
import { Typography } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import { StyledInnerBox, StyledBox } from "./MainBody.styles";
import { Outlet } from "react-router-dom";
import Skills from "../pages/Skills/Skills";
import Technologies from "../pages/Technologies/technologies";
import Container from "./Content/Content";
import Contact from "../pages/Contact/Contact";
import Design from "./Particles/Particles";

const MainBody = () => {
  return (
    <>
      <StyledBox id="main-body">
        <Design />
        <StyledInnerBox>
          <Navbar />
          <Outlet />
          <div>
            <Typography variant="h7" color="common.white">
              &#9400; Copyright 2023 Hervinson Samson All Right Reserved.
            </Typography>
          </div>
        </StyledInnerBox>
      </StyledBox>
    </>
  );
};

export default MainBody;
