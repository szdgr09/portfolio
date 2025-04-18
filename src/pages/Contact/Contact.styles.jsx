2;
import { Button, Grid, styled } from "@mui/material";

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

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.main}`,
  "&:hover": {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export const StyledGridForm = styled(Grid)(({ theme }) => ({
  background: "rgba(39, 38, 45, 0.65)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(2px)",
  "-webkit-backdrop-filter": "blur(5px)",
  borderRadius: "8px",
  border: "1px solid white",
}));
