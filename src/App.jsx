import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import hizonTheme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { useState } from "react";

const theme = responsiveFontSizes(hizonTheme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
