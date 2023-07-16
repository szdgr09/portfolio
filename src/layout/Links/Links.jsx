import React from "react";
import { Box, Typography } from "@mui/material";
import { StyledBox } from "./Link.styles";

const Links = () => {
  return (
    <StyledBox
      component="ul"
      display="flex"
      gap={4}
      margin={0}
      sx={{ listStyle: "none" }}
    >
      <Box component="li">
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          About
        </Typography>
      </Box>
      <Box component="li">
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          Project
        </Typography>
      </Box>
      <Box component="li">
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          Skills
        </Typography>
      </Box>
      <Box component="li">
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          Contact
        </Typography>
      </Box>
    </StyledBox>
  );
};

export default Links;
