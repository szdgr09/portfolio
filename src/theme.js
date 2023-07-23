import { createTheme } from "@mui/material/styles";
import { palette } from "@mui/system";

// console.log('test', palette)

const hizonTheme = createTheme({
  palette: {
    background: {
      default: "hsl(252deg 9.16% 16.35%)",
    },
    type: "light",
    primary: {
      main: "#2E6db4",
    },
    secondary: {
      main: "#DE935E",
    },
    error: {
      main: "#DF0024",
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
      secondary: "#c3c3c3",
      primary: "#fff",
    },
    appBar: {
      primary: "#111",
      secondary: "#222020",
    },
    mainBody: {
      primary: "hsl(252deg 9.16% 16.35%)",
    },
    divider: "rgb(142, 142, 142)",
    tertiary: {
      red: "#DF0024",
      yellow: "#F3C300",
      blueGreen: "#00AC9F",
      blue: "#2E6db4",
    },
    divider: "rgba(43,42,42,0.12)",
  },
  typography: {
    fontFamily: ["Dosis", "Monaco", "Consolas"].join(","),
    allVariants: {
      color: "#fff",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {},
    },
  },
});

export default hizonTheme;
