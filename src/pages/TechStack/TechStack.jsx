import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { StyledBox, StyledTypography } from './TechStack.styles';
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
} from '../../components/Images/Image';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const CARD_CONTENT = [
  {
    header: 'Javascript',
    years: new Date().getFullYear() - 2021,
    image: javascript,
  },
  {
    header: 'NodeJS',
    years: new Date().getFullYear() - 2021,
    image: node,
  },
  {
    header: 'HTML',
    years: new Date().getFullYear() - 2021,
    image: html,
  },
  {
    header: 'Git',
    years: new Date().getFullYear() - 2021,
    image: git,
  },
  {
    header: 'ReactJS',
    years: new Date().getFullYear() - 2021,
    image: reactjs,
  },
  {
    header: 'Material UI',
    years: new Date().getFullYear() - 2021,
    svg: muiSVG,
  },
  // {
  //   header: 'ExpressJS',
  //   years: 0.5,
  //   svg: expressLogo,
  // },
  {
    header: '.Net Core',
    years: new Date().getFullYear() - 2022,
    svg: dotNetCore,
  },
  {
    header: 'C#',
    years: new Date().getFullYear() - 2022,
    svg: cSharpLogo,
  },
  {
    header: 'CSS',
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
          <Box
            key={`box-${index}`}
            padding={1}
            paddingTop={2}
            component={motion.div}
            whileHover={{ y: -15, rotate: 2 }}
            marginY={2}
            marginBottom={1}
          >
            <StyledTypography
              paragraph
              border={2}
              variant='h5'
              textAlign='center'
              fontWeight={500}
            >
              {card.header}
            </StyledTypography>
            <StyledBox border={2}>
              <Box display='flex' justifyContent='center' paddingY={1}>
                {card.image ? (
                  <Avatar src={card.image} height='80' width='80' />
                ) : (
                  <Avatar height='80' width='80'>
                    {card.svg}
                  </Avatar>
                )}
              </Box>
              <Box border={1} margin={1} backgroundColor='common.white'>
                <Typography marginX={2} textAlign='center' color='common.black'>
                  Experience
                </Typography>
                <Typography
                  marginX={2}
                  textAlign='center'
                  color='common.black'
                  fontWeight={700}
                >
                  {card.years > 1
                    ? `${card.years} Years`
                    : `${card.years} Year`}
                </Typography>
              </Box>
            </StyledBox>
          </Box>
        ))}
      </Marquee>
    </>
  );
};

export default TechStack;
