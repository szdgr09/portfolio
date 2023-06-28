import * as React from "react";
import Typography from "@mui/material/Typography";
import { StyledBox, StyledToolBar, StyledAppBar } from "./HizonAppbar.styles";
import { Grid } from "@mui/material";

const HizonAppBar = ({ title, hasSubtitle = true }) => {
  return (
    <StyledBox>
      <StyledAppBar position="static">
        <StyledToolBar>
          <Grid container padding={1} spacing={1}>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h5" color="secondary">
                {title ? title : `Hi! I'm Hervinson Samson`}
              </Typography>
              {hasSubtitle ? (
                <Typography
                  variant="h5"
                  color="common.white"
                  fontStyle="italic"
                >
                  {"<Your friendly Technologist/>"}
                </Typography>
              ) : null}
            </Grid>
          </Grid>
        </StyledToolBar>
      </StyledAppBar>
    </StyledBox>
  );
};
export default HizonAppBar;
