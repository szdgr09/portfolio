// import React from "react";
// import { StyledBox } from "./MainBody.styles";
// import Design from "./Particles/Particles";
// // import NavBar from "./Navbar/NavBar";
// import Navbar from "@/layout/Navbar/Navbar";
// import { Grid } from "@mui/material";
// import About from "../pages/About/About";
// import Technologies from "../pages/Technologies/Technologies";
// import Experiences from "../pages/Experiences/Experiences";
// import Contact from "../pages/Contact/Contact";
// import Footer from "../pages/Footer/Footer";
import React from "react";
import { StyledBox } from "./MainBody.styles";
import Design from "./Particles/Particles";
// import NavBar from "./Navbar/NavBar";
import { Grid } from "@mui/material";
import About from "@/pages/About/About";
import Technologies from "@/pages/Technologies/Technologies";
import Experiences from "@/pages/Experiences/Experiences";
import Contact from "@/pages/Contact/Contact";
import Footer from "@/pages/Footer/Footer";
import Navbar from "./NavBar2/Navbar.jsx";

const MainBody = () => {
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

export default MainBody;
