import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { StyledBox, StyledCardBox, StyledTypography } from "./TechStack.styles";
import {
  javascript,
  html,
  git,
  node,
  reactjs,
  muiSVG,
  expressLogo,
  dotNetCore,
  cSharpLogo,
  css,
} from "../../components/Images/Image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const CARD_CONTENT = [
  {
    header: "Javascript",
    years: new Date().getFullYear() - 2021,
    image: javascript,
  },
  {
    header: "NodeJS",
    years: new Date().getFullYear() - 2021,
    image: node,
  },
  {
    header: "HTML",
    years: new Date().getFullYear() - 2021,
    image: html,
  },
  {
    header: "Git",
    years: new Date().getFullYear() - 2021,
    image: git,
  },
  {
    header: "ReactJS",
    years: new Date().getFullYear() - 2021,
    image: reactjs,
  },
  {
    header: "Material UI",
    years: new Date().getFullYear() - 2021,
    svg: muiSVG,
  },
  {
    header: "ExpressJS",
    years: 0.5,
    svg: expressLogo,
  },
  {
    header: ".Net Core",
    years: new Date().getFullYear() - 2022,
    svg: dotNetCore,
  },
  {
    header: "C#",
    years: new Date().getFullYear() - 2022,
    svg: cSharpLogo,
  },
  {
    header: "CSS",
    years: new Date().getFullYear() - 2022,
    image: css,
  },
].sort((a, b) => a.years - b.years);

const TechStack = () => {
  return (
    <>
      <Marquee
        gradient={true}
        gradientWidth={40}
        gradientColor={[25, 25, 25]}
        pauseOnHover
        speed={40}
        autoFill
      >
        {CARD_CONTENT.map((card, index) => (
          <StyledCardBox
            key={`box-${index}`}
            component={motion.div}
            whileHover={{ y: -15, rotate: 2 }}
          >
            <StyledTypography paragraph variant="h5" textAlign="center">
              {card.header}
            </StyledTypography>
            <StyledBox>
              <Box display="flex" justifyContent="center" paddingY={3}>
                {card.image ? (
                  <Avatar src={card.image} height="100" width="100" />
                ) : (
                  <Avatar height="100" width="100">
                    {card.svg}
                  </Avatar>
                )}
              </Box>
              <Box
                sx={{
                  border: (theme) =>
                    `3px solid ${theme.palette.secondary.main}`,
                  borderRadius: 2,
                }}
                margin={1}
              ></Box>
            </StyledBox>
          </StyledCardBox>
        ))}
      </Marquee>
    </>
  );
};

export default TechStack;
