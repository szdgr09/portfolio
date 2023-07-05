import React from "react";
import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import ModuleContainer from "../../layout/ModuleContainer/ModuleContainer";
import HizonAppBar from "../../layout/HizonAppBar/HizonAppBar";
import InputField from "../../components/InputField/InputField";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
    <ModuleContainer>
      <HizonAppBar title="Contact Me" hasSubtitle={false} />
      <Box
        component="form"
        sx={{ display: "contents" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container display="flex" spacing={2} padding={2}>
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
                fullWidth={true}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="secondary.main"
                >
                  Send
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ModuleContainer>
  );
};

export default Contact;
