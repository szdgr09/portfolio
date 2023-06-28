import React from "react";
import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import ModuleContainer from "../../layout/ModuleContainer/ModuleContainer";
import HizonAppBar from "../../layout/HizonAppBar/HizonAppBar";

const Contact = () => {
  return (
    <ModuleContainer>
      <HizonAppBar title="Contact Me" hasSubtitle={false} />
      {/* <Typography variant="h5" color="secondary" textAlign="center">
        Contact me via email
      </Typography> */}
      <Grid container display="flex" spacing={2} padding={2}>
        <Grid item xs={12}>
          <TextField label="Name" name="name" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" name="email" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Message"
            name="message"
            rows={5}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Button color="secondary" variant="outlined">
              <Typography variant="h6" fontWeight="bold" color="secondary.main">
                Send
              </Typography>
            </Button>
          </Box>
        </Grid>
        {/* <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              paddingTop: (theme) => theme.spacing(2),
              borderTop: (theme) => `1px solid ${theme.palette.common.white}`,
            }}
          >
            Linkedin
          </Box>
        </Grid> */}
      </Grid>
    </ModuleContainer>
  );
};

export default Contact;
