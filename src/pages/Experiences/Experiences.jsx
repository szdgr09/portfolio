import React from "react";
import { Grid, Typography } from "@mui/material";
import { StyledGrid, StyledGridWrapper } from "./Experiences.styles";
import Skills from "../Skills/Skills";

const Experiences = () => {
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
            My Journey
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            color="secondary"
            paddingY={2}
          >
            Work Experiences
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Skills />
        </Grid>
      </StyledGrid>
    </StyledGridWrapper>
  );
};

export default Experiences;
