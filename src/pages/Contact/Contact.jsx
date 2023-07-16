import React from "react";
import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import ModuleContainer from "../../layout/ModuleContainer/ModuleContainer";
import HizonAppBar from "../../layout/HizonAppBar/HizonAppBar";
import InputField from "../../components/InputField/InputField";
import { useForm } from "react-hook-form";
// import { schema } from "../__legacy/Contact/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { StyledGridWrapper, StyledGrid } from "./Contact.styles";

const Contact = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const templateParams = {
      message: data?.message,
      user_name: data?.name,
      user_email: data?.email,
    };

    emailjs
      .send(
        "service_nd7pi6n",
        "template_fwqli7w",
        templateParams,
        "89hPPKDADuVluFqO4"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <StyledGridWrapper item xs={12} id="technologies">
      <StyledGrid
        container
        justifyContent="center"
        alignContent="center"
        margin={"auto"}
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={700} color="text.secondary">
            Want to connect?
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            color="secondary"
            paddingY={2}
          >
            Contact Me
          </Typography>
        </Grid>
        <Grid xs={12} item marginX={2}>
          <Box
            component="form"
            sx={{ display: "contents" }}
            onSubmit={handleSubmit(onSubmit)}
            margin={1}
          >
            <Grid
              container
              display="flex"
              spacing={2}
              padding={2}
              border={2}
              borderRadius={1}
            >
              <Grid item xs={12}>
                <InputField
                  label="Name"
                  name="name"
                  fullWidth
                  errors={errors}
                  control={control}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  name="email"
                  fullWidth
                  errors={errors}
                  control={control}
                />
              </Grid>

              <Grid item xs={12}>
                <InputField
                  label="Message"
                  name="message"
                  rows={5}
                  multiline
                  fullWidth
                  errors={errors}
                  control={control}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button
                    color="secondary"
                    variant="outlined"
                    type="submit"
                    sx={{
                      border: (theme) =>
                        `2px solid ${theme.palette.secondary.main}`,

                      "&:hover": {
                        border: (theme) =>
                          `2px solid ${theme.palette.secondary.main}`,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="secondary.main"
                    >
                      Send me an Email
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </StyledGrid>
    </StyledGridWrapper>
  );
};

export default Contact;
