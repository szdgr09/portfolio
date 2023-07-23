import React from "react";
import { Grid, Typography } from "@mui/material";
import { StyledGrid, StyledGridWrapper } from "./Experiences.styles";
import Skills from "../Skills/Skills";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";

const Experiences = () => {
  return (
    <StyledGridWrapper item xs={12} id="experiences">
      <StyledGrid
        container
        justifyContent="center"
        alignContent="center"
        margin={"auto"}
        spacing={2}
      >
        <Grid item xs={12}>
          <SectionSubtitle label="My Journey" />
          <SectionTitle label="Work Experiences" />
        </Grid>
        <Grid xs={12} item>
          <Skills />
        </Grid>
      </StyledGrid>
    </StyledGridWrapper>
  );
};

export default Experiences;
