import { Box, Grid, Typography, styled } from '@mui/material';
import React from 'react';

const StyledGrid = styled(Grid)<PropTypes>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '100%',
    flexDirection: 'column',
    '& :nth-child(1)': {
      order: 1,
    },

    '& :nth-child(2)': {
      order: 3,
    },

    '& :nth-child(3)': {
      order: 2,
    },
    // margin: theme.spacing(0, 2),
  },

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    width: '90%',
    margin: 'auto',

    '& :nth-child(1)': {
      order: 1,
    },

    '& :nth-child(2)': {
      order: 3,
    },

    '& :nth-child(3)': {
      order: 2,
    },
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    width: '70%',
    margin: 'auto',

    '& :nth-child(1)': {
      order: 1,
    },

    '& :nth-child(2)': {
      order: 2,
    },

    '& :nth-child(3)': {
      order: 3,
    },
  },
}));

interface PropTypes {
  color?: string;
  variant?: string;
}

const TestGrid = styled('div')<PropTypes>(({ theme, color }) => ({}));

export const XX = () => {
  <TestGrid color='red'></TestGrid>;
};
