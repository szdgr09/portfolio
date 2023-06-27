import React from "react";
import { Typography } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import { StyledInnerBox, StyledBox } from "./MainBody.styles";
import { Outlet } from "react-router-dom";

const MainBody = () => {
  return (
    <StyledBox>
      <StyledInnerBox>
        <Navbar />
        <Outlet />
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
