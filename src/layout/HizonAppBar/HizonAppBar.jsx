import * as React from "react";
import Typography from "@mui/material/Typography";
import { StyledBox, StyledToolBar, StyledAppBar } from "./HizonAppbar.styles";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const HizonAppBar = ({ title, hasSubtitle = true }) => {
  return (
    <StyledBox
      component={motion.div}
      initial={{ scale: 0, opacity: 0, y: -200 }}
      animate={{
        y: 0,
        scale: 1,

        opacity: 1,
        transition: { duration: 0.45 },
      }}
    >
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
                  color="text.secondary"
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
