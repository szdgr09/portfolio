import { ThermostatSharp } from "@mui/icons-material";
import { Box, styled, Paper } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  // margin: "auto",
  width: "704px",
  // height: "100%",
  // flexGrow: 1,
  // padding: theme.spacing(4, 0, 2, 0),

  [theme.breakpoints.up("xs")]: {
    // transform: "scale(0.5)",
  },

  [theme.breakpoints.up("sm")]: {
    // transform: "scale(0.5)",
  },

  [theme.breakpoints.up("md")]: {
    // transform: "scale(0.5)",
  },

  [theme.breakpoints.up("lg")]: {},

  [theme.breakpoints.up("xl")]: {},
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.appBar.primary,
  borderRadius: 0,
  position: "relative",
  padding: theme.spacing(2),
  borderRadius: "16px",
  border: `1px solid ${theme.palette.primary.main}`,
  // display: "flex",
}));
