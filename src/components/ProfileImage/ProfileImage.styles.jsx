import { styled } from "@mui/material";

//box
const ImageMainWapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: theme.spacing(50),
  height: theme.spacing(50),
  borderRadius: "50%",
  overflow: "hidden",

  "&::before": {
    content: "''",
    position: "absolute",
    inset: "4px 72px",
    background: "linear-gradient(315deg, #1677D2, #DE935E)",
    transition: "0.5s",
    animation: "animate 4s linear infinite",
    filter: `blur(${theme.spacing(2)})`,
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
    inset: "24px",
    background: "inherit",
    zIndex: 1,
  },
}));

// content
const ImageHolder = styled("div")(({ theme }) => ({
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

export { ImageHolder, ImageMainWapper };
