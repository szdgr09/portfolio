// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
// import TemporaryDrawer from "../../components/Drawer/Drawer";
// import Links from "../Links/Links";
// import { StyledBox } from "./NavBar.styles";
import { Grid, Typography } from "@mui/material";
import React from "react";
import TemporaryDrawer from "@/components/Drawer/Drawer";
import Links from "@/layout/Links/Links";
import { StyledBox } from "@/layout/Navbar/Navbar.styles";

const NavBar = () => {
  return (
    <StyledBox component='div'>
      <Grid display='flex' justifyContent='space-between'>
        <Grid>
          <Typography variant='h4' fontWeight='bold'>
            HZ
          </Typography>
        </Grid>
        <Grid>
          <TemporaryDrawer />
          <Links />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default NavBar;
