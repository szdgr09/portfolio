import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledContainer, StyledContent } from "./Content.styles";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import HizonAppBar from "../HizonAppBar/HizonAppBar";
import { motion } from "framer-motion";

const Container = () => {
  return (
    <StyledContainer
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      ext={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <StyledContent>
        <ProfileImage />
        <Box sx={{ flex: 1 }}>
          <HizonAppBar />
          <Typography variant="subtitle1" padding={3} color="white">
            -- Hizon here (that's my nickname btw). A software engineer mainly
            focusing on frontend development using ReactJS, and I have multiple
            experiences as a software engineer in various industries, including
            manufacturing, hospitality, and banking. Currently working as
            Systems Analyst in Philippine Savings Bank (PSBANK).
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            fontStyle="italic"
            sx={{ padding: (theme) => theme.spacing(0, 3, 3, 3) }}
          >
            A wise man once said, "Let's grab some coffee or beer."
          </Typography>
        </Box>
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
