import React from "react";
import { Typography } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import { StyledInnerBox, StyledBox } from "./MainBody.styles";
import { Outlet } from "react-router-dom";
import Design from "./Particles/Particles";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const MainBody = () => {
  return (
    <StyledBox id="main-body">
      <Design />
      <StyledInnerBox>
        <Navbar />
        <AnimatePresence mode="await">
          <Outlet key={useLocation().path} />
        </AnimatePresence>
        <div>
          <Typography variant="h7" color="common.white">
            &#9400; Copyright 2023 Hervinson Samson All Right Reserved.
          </Typography>
        </div>
      </StyledInnerBox>
    </StyledBox>
  );
};

export default MainBody;
