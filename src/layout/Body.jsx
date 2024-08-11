import React from "react";
import { StyledBox } from "./Body.styles";
import Design from "./Particles/Particles";
import { Grid } from "@mui/material";
import About from "@/pages/About/About";
import Technologies from "@/pages/Technologies/Technologies";
import Experiences from "@/pages/Experiences/Experiences";
import Contact from "@/pages/Contact/Contact";
import Footer from "@/pages/Footer/Footer";
import Navbar from "@/layout/NavBar2/Navbar.jsx";

const Body = () => {
  return (
    <StyledBox id='main-body'>
      <Design />
      <Navbar />
      <Grid
        container={true}
        display='flex'
        alignContent='center'
        justifyContent='center'
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

export default Body;
