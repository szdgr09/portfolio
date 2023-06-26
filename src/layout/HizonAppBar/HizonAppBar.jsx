import * as React from "react";
import Typography from "@mui/material/Typography";
import { StyledBox, StyledToolBar, StyledAppBar } from "./HizonAppbar.styles";
import { Grid } from "@mui/material";

function HizonAppBar() {
  return (
    <StyledBox>
      <StyledAppBar position="static">
        <StyledToolBar>
          <Grid container padding={1} spacing={1}>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h5" color="text.secondary">
                Hi! I'm Hervinson Samson
              </Typography>
              <Typography
                variant="h5"
                color="secondary.main"
                fontStyle="italic"
              >
                {"<Your friendly Technologist/>"}
              </Typography>
            </Grid>
          </Grid>
        </StyledToolBar>
      </StyledAppBar>
    </StyledBox>
  );
}
export default HizonAppBar;
