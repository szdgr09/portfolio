import { Box, Toolbar, AppBar, styled } from "@mui/material";

export const StyledBox = styled(Box, {
  //   shouldForwardProp: (props) => props !== "inactive",
})(({ theme }) => ({
  // margin: "auto",

  flexGrow: 1,
  // width: "fit-content",

  [theme.breakpoints.up("xs")]: {
    // width: "900px",
  },

  [theme.breakpoints.up("sm")]: {
    // width: "900px",
  },

  [theme.breakpoints.up("md")]: {
    // width: "1032px",
  },

  [theme.breakpoints.up("lg")]: {},

  [theme.breakpoints.up("xl")]: {},
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  minHeight: "80px",
  border: `1px solid ${theme.palette.primary.main}`,

  root: {
    minHeight: "80px",
    [theme.breakpoints.up("xs")]: {},

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.appBar.secondary,

  position: "relative",

  root: {
    [theme.breakpoints.up("xs")]: {},

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  },
}));
