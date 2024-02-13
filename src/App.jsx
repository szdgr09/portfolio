import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import hizonTheme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";

const theme = responsiveFontSizes(hizonTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* <MainBody /> */}
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
