// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
// import TemporaryDrawer from "../../components/Drawer/Drawer";
// import Links from "../Links/Links";
// import { StyledBox } from "./NavBar.styles";
import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import TemporaryDrawer from "@/components/Drawer/Drawer";
import Links from "@/layout/Links/Links";
import { StyledBox } from "@/layout/Navbar2/Navbar.styles";

const NavBar = () => {
  return (
    <StyledBox component='div'>
      <Grid display='flex' justifyContent='space-between'>
        <Grid>
          <Typography variant='h4' fontWeight='900' letterSpacing={4}>
            <Box component='span'>H.</Box>
            <Box component='span'>Z.</Box>
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
