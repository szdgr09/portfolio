import { ThemeProvider, createTheme } from "@mui/material/styles";

const hizonTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ADB176",
    },
    secondary: {
      main: "#DE935E",
    },
    error: {
      main: "#C00000",
    },
    warning: {
      main: "#FFAA00",
    },
    info: {
      main: "#1677D2",
    },
    success: {
      main: "#00C300",
    },
    text: {
      primary: "#8e8e8e",
      secondary: "#c3c3c3",
    },
    appBar: {
      primary: "#111",
      secondary: "#222020",
    },
    mainBody: {
      // primary: "#191919",
      primary: "hsl(252deg 9.16% 16.35%)",
    },
    divider: "rgba(43,42,42,0.12)",
  },
  typography: {
    fontFamily: ["Consolas", "Monaco"].join(","),
    allVariants: {
      color: "#8e8e8e",
    },
  },
});

export default hizonTheme;
