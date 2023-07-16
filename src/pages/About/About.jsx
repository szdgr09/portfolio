import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { StyledGrid } from "./About.styles";
import ProfileImage from "../../components/ProfileImage/ProfileImage";

const About = () => {
  return (
    <Grid item xs={12}>
      <StyledGrid
        container
        justifyContent="center"
        alignContent="center"
        margin={"auto"}
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={700} color="text.secondary">
            INTRODUCTION
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            color="secondary"
            paddingY={2}
          >
            Who Am I?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography paddingY={2} variant="h6" color="text.primary">
            -- Hizon here (that's my nickname btw). I specialize primarily in
            frontend development utilizing ReactJS as a software engineer.
            Throughout my career, I have gained extensive experience in software
            engineering across diverse sectors, including manufacturing,
            hospitality, and banking. Presently, I am employed as a Systems
            Analyst at a local bank in the Philippines.
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
