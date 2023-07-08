import React from "react";
import ModuleContainer from "../../layout/ModuleContainer/ModuleContainer";
import HizonAppBar from "../../layout/HizonAppBar/HizonAppBar";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { StyledBox, StyledTypography } from "./TechStack.styles";
import {
  javascript,
  html,
  git,
  node,
  reactjs,
} from "../../components/Images/Image";

const CARD_CONTENT = [
  {
    header: "Javascript",
    years: "2",
    image: javascript,
  },
  {
    header: "NodeJS",
    years: "0.5",
    image: node,
  },
  {
    header: "HTML",
    years: "2",
    image: html,
  },
  {
    header: "Git",
    years: "2",
    image: git,
  },
  {
    header: "ReactJS",
    years: "2",
    image: reactjs,
  },
];

const TechStack = () => {
  console.log({ javascript });

  return (
    <ModuleContainer>
      <HizonAppBar title="Skills" hasSubtitle={false} />

      <Grid container display="flex" spacing={2} paddingY={2}>
        {CARD_CONTENT.map((card, index) => (
          <Grid item xs={3} key={`card-${index}`}>
            <Box>
              <StyledTypography
                paragraph
                border={2}
                variant="h5"
                textAlign="center"
              >
                {card.header}
              </StyledTypography>
              <StyledBox border={2}>
                <Box display="flex" justifyContent="center" paddingY={1}>
                  <Avatar src={card.image} height="40" width="40" />
                </Box>
                <Box border={1} margin={1} backgroundColor="common.white">
                  <Typography
                    marginX={2}
                    textAlign="center"
                    color="common.black"
                  >
                    Experience
                  </Typography>
                  <Typography
                    marginX={2}
                    textAlign="center"
                    color="common.black"
                    fontWeight={700}
                  >
                    {card.years} Years
                  </Typography>
                </Box>
              </StyledBox>
            </Box>
          </Grid>
        ))}
      </Grid>
    </ModuleContainer>
  );
};

export default TechStack;
``;
