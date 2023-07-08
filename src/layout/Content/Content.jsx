import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledContainer, StyledContent } from "./Content.styles";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import HizonAppBar from "../HizonAppBar/HizonAppBar";
import { motion } from "framer-motion";
import ModuleContainer from "../ModuleContainer/ModuleContainer";

const Container = () => {
  return (
    <ModuleContainer>
      {/* <StyledContent> */}
      <Box sx={{ flex: 1 }}>
        {/* <ProfileImage /> */}
        <HizonAppBar />
        <Typography variant="h6" padding={3} color="white">
          -- Hizon here (that's my nickname btw). A software engineer mainly
          focusing on frontend development using ReactJS, and I have multiple
          experiences as a software engineer in various industries, including
          manufacturing, hospitality, and banking. Currently working as Systems
          Analyst in Philippine Savings Bank (PSBANK).
        </Typography>
        <Typography
          variant="h6"
          color="common.white"
          fontStyle="italic"
          sx={{ padding: (theme) => theme.spacing(0, 3, 3, 3) }}
        >
          A wise man once said, "Let's grab some coffee or beer."
        </Typography>
      </Box>
      {/* </StyledContent> */}
    </ModuleContainer>
  );
};

export default Container;
