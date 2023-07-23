import React from "react";
import { Grid, Typography } from "@mui/material";
import { StyledGrid, StyledGridWrapper } from "./Technologies.styles";
import TechStack from "../TechStack/TechStack";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";

const Technologies = () => {
  return (
    <StyledGridWrapper item xs={12} id="skills">
      <StyledGrid
        container
        justifyContent="center"
        alignContent="center"
        margin={"auto"}
        spacing={2}
      >
        <Grid item xs={12}>
          <SectionSubtitle label="Tools I Got!" />
          <SectionTitle label="Technologies" />
        </Grid>
        <TechStack />
      </StyledGrid>
    </StyledGridWrapper>
  );
};

export default Technologies;
