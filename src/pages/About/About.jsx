import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { StyledGrid } from "./About.styles";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";

const shadow = {
  textShadow: "0 0 6px #DE935E,0 0 10px #DE935E,0 0 15px #DE935E",
};

const Highlighted = ({ l, ...props }) => (
  <Box component="span" sx={shadow} {...props}>
    {l}
  </Box>
);

const About = () => {
  return (
    <Grid item xs={12} id="about">
      <StyledGrid
        container
        justifyContent="center"
        alignContent="center"
        margin={"auto"}
        spacing={2}
      >
        <Grid item xs={12}>
          <SectionSubtitle label="Introduction" />
          <SectionTitle label="Who Am I?" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography paddingY={2} variant="h6" color="text.primary">
            -- <Highlighted l="Hizon" /> here (that's my nickname btw). I
            specialize primarily in frontend development utilizing{" "}
            <Highlighted l="ReactJS" /> as a software engineer. Throughout my
            career, I have gained extensive experience in software engineering
            across diverse sectors, including manufacturing, hospitality, and
            banking. Presently, I am employed as a{" "}
            <Highlighted l="Systems Analyst" /> at a local bank in the
            Philippines.
          </Typography>
          <Typography paddingY={2} variant="h6">
            During my downtime, I'm all about PC gaming, especially when it
            comes to playing DOTA 2 and diving into exciting RPG adventures. Oh,
            and let's not forget my love for watching epic boxing matches,
            intense MMA fights, and getting lost in the captivating world of
            anime. But that's not all! I'm also a motorcycle enthusiast,
            cruising through stunning places and hunting down the most
            mouthwatering dishes out there. Life's all about the thrills and
            flavors, right?
          </Typography>
          <Typography variant="h6" color="common.white" fontStyle="italic">
            A wise man once said, "Let's grab some coffee or beer."
          </Typography>
          {/* </Box> */}
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <ProfileImage />
          </Box>
        </Grid>
      </StyledGrid>
    </Grid>
  );
};

export default About;
