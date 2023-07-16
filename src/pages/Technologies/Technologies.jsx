import React from "react";
import { Grid, Typography } from "@mui/material";
import { StyledGrid, StyledGridWrapper } from "./Technologies.styles";
import TechStack from "../TechStack/TechStack";

const Technologies = () => {
  return (
    <StyledGridWrapper item xs={12} id="technologies">
      <StyledGrid
        container
        justifyContent="center"
        alignContent="center"
        margin={"auto"}
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={700} color="text.secondary">
            Tools I Got!
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            color="secondary"
            paddingY={2}
          >
            Technologies
          </Typography>
        </Grid>
        <TechStack />
      </StyledGrid>
    </StyledGridWrapper>
  );
};

export default Technologies;
