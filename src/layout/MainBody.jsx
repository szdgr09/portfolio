import React from "react";
// import { Typography } from "@mui/material";
// import Navbar from "./Navbar/Navbar";
import { StyledInnerBox, StyledBox } from "./MainBody.styles";
// import { Outlet } from "react-router-dom";
import Design from "./Particles/Particles";
import NavBar from "./Navbar/NavBar";
import { Box, Grid, Typography } from "@mui/material";
import About from "../pages/About/About";
import Technologies from "../pages/Technologies/Technologies";
import Experiences from "../pages/Experiences/Experiences";
import Contact from "../pages/Contact/Contact";
import Footer from "../pages/Footer/Footer";
// import { useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

const MainBody = () => {
  return (
    <StyledBox id="main-body">
      <Design />
      <NavBar />
      <Grid
        container={true}
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <About />
        {/* next */}
        <Experiences />
        <Technologies />
        <Contact />
        <Footer />
        {/* <Grid item xs={12}>
          Contact
        </Grid> */}
      </Grid>
    </StyledBox>
  );
};

export default MainBody;
