import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import hizonTheme from "./theme";
import MainBody from "./layout/MainBody";
import CssBaseline from "@mui/material/CssBaseline";

const theme = responsiveFontSizes(hizonTheme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <MainBody />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
