import { ThermostatSharp } from "@mui/icons-material";
import { Box, styled, Paper } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  // margin: "auto",
  width: "704px",
  // height: "100%",
  // flexGrow: 1,
  // padding: theme.spacing(4, 0, 2, 0),

  root: {
    [theme.breakpoints.up("xs")]: {},

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.appBar.primary,
  borderRadius: 0,
  position: "relative",
  padding: theme.spacing(2),
  borderRadius: "16px",
  // display: "flex",
}));

export { StyledBox, StyledPaper };
