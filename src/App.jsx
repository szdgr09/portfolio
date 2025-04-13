import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import hizonTheme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import IconWrapper from "./components/IconWrapper/IconWrapper";

const theme = responsiveFontSizes(hizonTheme);

const iconVariant = {
  success: <IconWrapper icon={<FavoriteBorderIcon />} />,
  error: <IconWrapper icon={<SentimentVeryDissatisfiedIcon />} />,
};
const anchorOrigin = { vertical: "bottom", horizontal: "center" };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* <MainBody /> */}
        <SnackbarProvider
          iconVariant={iconVariant}
          autoHideDuration={3000}
          dense={false}
          anchorOrigin={anchorOrigin}
        >
          <RouterProvider router={router} />
        </SnackbarProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
