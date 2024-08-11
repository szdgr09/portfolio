2;
import { Box, Grid, Typography, styled } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    flexDirection: "column",

    // margin: theme.spacing(0, 2),
  },

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    width: "90%",
    margin: "auto",
    heigh: "100vh",
  },

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    width: "70%",
    margin: "auto",
  },
}));

export const StyledGridWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    paddingTop: theme.spacing(2),
  },

  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(16),
  },
}));
