import React from "react";
import { Box, Grid, Typography, Paper, TextField } from "@mui/material";

const Contact = () => {
  return (
    <Paper sx={{ backgroundColor: (theme) => theme.palette.appBar.secondary }}>
      <Box>
        <Box width="100%" textAlign="center" paddingTop={2}>
          <Typography variant="h4" helperText="asdad" color="white">
            Email Me
          </Typography>
        </Box>
        <Grid container display="flex" spacing={2} padding={4}>
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
        </Grid>
      </Box>
    </Paper>
  );
};

export default Contact;
