import { styled } from "@mui/material";

//box
export const ImageMainWapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    // margin: theme.spacing(0, 2),
  },
  position: "relative",
  width: theme.spacing(40),
  height: theme.spacing(40),
  borderRadius: "50%",
  overflow: "hidden",

  "&::before": {
    content: "''",
    position: "absolute",
    inset: "10px 10px",
    background: "linear-gradient(315deg, #1677D2, #DE935E)",
    transition: "0.5s",
    animation: "animate 4s linear infinite",
    // filter: `blur(${theme.spacing(40)})`,
  },

  "@keyframes animate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  "&::after": {
    content: "''",
    position: "absolute",
    inset: "20px",
    background: "inherit",
    zIndex: 1,
  },
}));

// content
export const ImageHolder = styled("div")(({ theme }) => ({
  position: "absolute",
  inset: theme.spacing(0.5),
  zIndex: 3,
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  "& img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.5s",
    pointerEvents: "none",
    zIndex: 3,
  },
}));
