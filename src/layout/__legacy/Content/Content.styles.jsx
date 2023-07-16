import { ThermostatSharp } from "@mui/icons-material";
import { Box, styled, Paper } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  // margin: "auto",
  maxWidth: "800px",
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

export const StyledContent = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.appBar.primary,
  borderRadius: 0,
  position: "relative",
  padding: theme.spacing(2),
  // borderTopLeftRadius: "240px",
  // borderBottomLeftRadius: "240px",
  borderRadius: "16px",
  // borderTopRightRadius: "16px",
  // borderBottomRightRadius: "16px",
  display: "flex",
}));
