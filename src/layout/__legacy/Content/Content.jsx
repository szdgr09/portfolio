import { Box, Typography, Grid, Button, Avatar } from "@mui/material";
import React from "react";
import HizonAppBar from "../HizonAppBar/HizonAppBar";
import ModuleContainer from "../ModuleContainer/ModuleContainer";
import { deepOrange } from "@mui/material/colors";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

const Container = () => {
  return (
    <ModuleContainer>
      {/* <StyledContent> */}
      <Box sx={{ flex: 1 }}>
        {/* <ProfileImage /> */}
        <HizonAppBar />
        <Typography variant="subtitle1" padding={3} color="white">
          -- Hizon here (that's my nickname btw). A software engineer mainly
          focusing on frontend development using ReactJS, and I have multiple
          experiences as a software engineer in various industries, including
          manufacturing, hospitality, and banking. Currently working as Systems
          Analyst in Philippine Savings Bank (PSBANK).
        </Typography>
        <Typography
          variant="subtitle1"
          color="common.white"
          fontStyle="italic"
          sx={{ padding: (theme) => theme.spacing(0, 3, 2, 3) }}
        >
          A wise man once said, "Let's grab some coffee or beer."
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              color: deepOrange[300],
              border: `1px solid ${deepOrange[300]}`,
              "&:hover": {
                border: `1px solid ${deepOrange[300]}`,
              },
            }}
            startIcon={<SimCardDownloadIcon />}
          >
            <Typography
              sx={{
                color: deepOrange[300],
                fontWeight: 600,
              }}
            >
              Grab CV
            </Typography>
          </Button>
        </Box>
      </Box>
      {/* </StyledContent> */}
    </ModuleContainer>
  );
};

export default Container;
