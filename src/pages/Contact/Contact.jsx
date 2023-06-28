import React from "react";
import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h5" color="secondary" textAlign="center">
        Contact me via email
      </Typography>
      <Grid container display="flex" spacing={2} padding={4} paddingY={2}>
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
          <Button color="primary" variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
